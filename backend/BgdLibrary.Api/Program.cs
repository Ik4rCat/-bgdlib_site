using System.Xml.Linq;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
    options.AddDefaultPolicy(p => p.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));

builder.Services.AddHttpClient("rss", c =>
{
    c.DefaultRequestHeaders.Add("User-Agent",
        "BGDLibrary/0.1 (+https://github.com/Ik4rCat/-BGD_Library_site)");
    c.Timeout = TimeSpan.FromSeconds(10);
});

var app = builder.Build();
app.UseCors();

var feedCache = new FeedCache();

// ── Health ──────────────────────────────────────────────────────
app.MapGet("/health", () => Results.Ok(new { ok = true }));

// ── Feed (live RSS) ─────────────────────────────────────────────
app.MapGet("/api/feed", async (HttpRequest req, IHttpClientFactory factory) =>
{
    var categories = Helpers.ParseCsv(req.Query["categories"]);
    var tags       = Helpers.ParseCsv(req.Query["tags"]);

    var items = await feedCache.GetAsync(factory);

    var filtered = items.Where(item =>
    {
        if (categories.Count > 0 && !categories.Contains(item.Category)) return false;
        if (tags.Count == 0) return true;
        return item.Tags.Any(t => tags.Contains(t));
    });

    return Results.Ok(filtered);
});

// ── Tutorials (static curated content) ─────────────────────────
app.MapGet("/api/tutorials", (HttpRequest req) =>
{
    var difficulties = Helpers.ParseCsv(req.Query["difficulty"]);
    var tags         = Helpers.ParseCsv(req.Query["tags"]);

    var filtered = TutorialData.All.Where(t =>
    {
        if (difficulties.Count > 0 && !difficulties.Contains(t.Difficulty)) return false;
        if (tags.Count == 0) return true;
        return t.Tags.Any(tag => tags.Contains(tag));
    });

    return Results.Ok(filtered);
});

app.Run();


// ════════════════════════════════════════════════════════════════
//  Helpers
// ════════════════════════════════════════════════════════════════

static class Helpers
{
    public static HashSet<string> ParseCsv(string? value)
    {
        if (string.IsNullOrWhiteSpace(value))
            return new HashSet<string>(StringComparer.OrdinalIgnoreCase);

        return new HashSet<string>(
            value.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries),
            StringComparer.OrdinalIgnoreCase);
    }

    public static string FormatAge(DateTimeOffset? dt)
    {
        if (dt is null) return "—";
        var age = DateTimeOffset.UtcNow - dt.Value;
        if (age.TotalHours  <  3) return "только что";
        if (age.TotalHours  < 24) return $"{(int)age.TotalHours}ч назад";
        if (age.TotalDays   <  2) return "вчера";
        if (age.TotalDays   <  7) return $"{(int)age.TotalDays} дн.";
        if (age.TotalDays   < 30) return $"{(int)(age.TotalDays / 7)} нед.";
        return dt.Value.ToString("MMM yyyy");
    }

    /// <summary>Get first child element by local name (ignores XML namespace).</summary>
    public static string? GetElem(XElement? parent, string localName) =>
        parent?.Elements().FirstOrDefault(e => e.Name.LocalName == localName)?.Value;

    /// <summary>Get all child elements by local name (ignores XML namespace).</summary>
    public static IEnumerable<XElement> GetElems(XElement? parent, string localName) =>
        parent?.Elements().Where(e => e.Name.LocalName == localName)
        ?? Enumerable.Empty<XElement>();
}


// ════════════════════════════════════════════════════════════════
//  RSS Feed cache
// ════════════════════════════════════════════════════════════════

sealed class FeedCache
{
    static readonly RssSource[] Sources =
    [
        new("https://blog.unity.com/feed",           "engine",   ["unity"],            "Unity Blog"),
        new("https://godotengine.org/blog/feed.xml", "engine",   ["godot"],            "Godot Blog"),
        new("https://www.gamedeveloper.com/rss.xml", "tutorial", ["gamedev"],          "Game Developer"),
        new("https://gamefromscratch.com/feed/",     "tools",    ["tools"],            "GameFromScratch"),
        new("https://www.reddit.com/r/gamedev.rss",  "engine",   ["community"],        "r/gamedev"),
    ];

    List<FeedItem>? _cache;
    DateTime _fetchedAt = DateTime.MinValue;
    readonly TimeSpan _ttl = TimeSpan.FromMinutes(15);
    readonly SemaphoreSlim _lock = new(1, 1);

    public async Task<List<FeedItem>> GetAsync(IHttpClientFactory factory)
    {
        if (_cache is not null && DateTime.UtcNow - _fetchedAt < _ttl)
            return _cache;

        await _lock.WaitAsync();
        try
        {
            if (_cache is not null && DateTime.UtcNow - _fetchedAt < _ttl)
                return _cache;

            var client = factory.CreateClient("rss");
            var tasks  = Sources.Select(s => FetchSource(client, s));
            var batches = await Task.WhenAll(tasks);

            var all = batches
                .SelectMany(b => b)
                .Where(i => !string.IsNullOrWhiteSpace(i.Title))
                .DistinctBy(i => i.Url)
                .OrderByDescending(i => i.SortKey)
                .Take(100)
                .ToList();

            _cache = all;
            _fetchedAt = DateTime.UtcNow;
            return all;
        }
        finally { _lock.Release(); }
    }

    static async Task<IEnumerable<FeedItem>> FetchSource(HttpClient client, RssSource src)
    {
        try
        {
            var xml = await client.GetStringAsync(src.Url);
            return ParseFeed(xml, src);
        }
        catch { return []; }
    }

    static IEnumerable<FeedItem> ParseFeed(string xml, RssSource src)
    {
        XDocument doc;
        try { doc = XDocument.Parse(xml); }
        catch { yield break; }

        var root = doc.Root;
        if (root is null) yield break;

        bool isAtom = root.Name.LocalName == "feed";

        if (isAtom)
        {
            // ── Atom ──
            var feedTitle = Helpers.GetElem(root, "title")?.Trim() ?? src.FallbackName;
            foreach (var entry in Helpers.GetElems(root, "entry").Take(20))
            {
                var title = Helpers.GetElem(entry, "title") ?? "";
                var link  = entry.Elements()
                    .FirstOrDefault(e => e.Name.LocalName == "link")
                    ?.Attribute("href")?.Value ?? "#";
                var updated = Helpers.GetElem(entry, "updated")
                           ?? Helpers.GetElem(entry, "published");
                DateTimeOffset? dt = DateTimeOffset.TryParse(updated, out var p) ? p : null;
                yield return Make(src, feedTitle, title, link, dt);
            }
        }
        else
        {
            // ── RSS 2.0 ──
            var channel = Helpers.GetElems(root, "channel").FirstOrDefault() ?? root;
            var feedTitle = Helpers.GetElem(channel, "title")?.Trim() ?? src.FallbackName;
            foreach (var item in Helpers.GetElems(channel, "item").Take(20))
            {
                var title   = Helpers.GetElem(item, "title") ?? "";
                var link    = Helpers.GetElem(item, "link")
                           ?? Helpers.GetElem(item, "guid")
                           ?? "#";
                var pubDate = Helpers.GetElem(item, "pubDate");
                DateTimeOffset? dt = DateTimeOffset.TryParse(pubDate, out var p) ? p : null;
                yield return Make(src, feedTitle, title, link, dt);
            }
        }
    }

    static FeedItem Make(RssSource src, string sourceName,
                         string title, string url, DateTimeOffset? dt) =>
        new(
            Id:       $"{src.Category}-{(uint)url.GetHashCode()}",
            Category: src.Category,
            Title:    title.Trim(),
            Source:   sourceName,
            Time:     Helpers.FormatAge(dt),
            SortKey:  dt?.ToUnixTimeSeconds() ?? 0,
            Tags:     src.DefaultTags,
            Url:      url);
}


// ════════════════════════════════════════════════════════════════
//  Records
// ════════════════════════════════════════════════════════════════

internal record RssSource(
    string Url, string Category, string[] DefaultTags, string FallbackName);

internal sealed record FeedItem(
    string Id, string Category, string Title,
    string Source, string Time, long SortKey,
    string[] Tags, string Url);

internal sealed record TutorialItem(
    string Id, string Title, string Description,
    string Category, string[] Tags,
    string Difficulty, int EstimatedMinutes, string Url);


// ════════════════════════════════════════════════════════════════
//  Tutorials — curated gamedev content
// ════════════════════════════════════════════════════════════════

static class TutorialData
{
    public static readonly TutorialItem[] All =
    [
        new(
            Id: "tut-render-01",
            Title: "Рендер-пайплайн: от вершин до пикселей",
            Description: "Разбираем полный путь: вершинный буфер → vertex shader → растеризация → fragment shader → фреймбуфер. Без магии — только то, что реально происходит на GPU.",
            Category: "tutorial",
            Tags: ["rendering", "gpu"],
            Difficulty: "beginner",
            EstimatedMinutes: 25,
            Url: "https://learnopengl.com/Getting-started/Hello-Triangle"),

        new(
            Id: "tut-ecs-01",
            Title: "Entity Component System: архитектура без боли",
            Description: "Почему классическое ООП-дерево объектов ломается при масштабе, и как ECS решает проблемы производительности через data-oriented design. Примеры на Unity DOTS и Flecs.",
            Category: "tutorial",
            Tags: ["architecture", "ecs", "optimization"],
            Difficulty: "intermediate",
            EstimatedMinutes: 30,
            Url: "#"),

        new(
            Id: "tut-shader-01",
            Title: "Шейдеры с нуля: HLSL и GLSL",
            Description: "Пишем первый шейдер: uniforms, varying, sampler2D. Разбираем PBR-модель освещения — diffuse, specular, normal map. Рабочие примеры для Unity URP и Godot.",
            Category: "tutorial",
            Tags: ["rendering", "shaders", "unity", "godot"],
            Difficulty: "intermediate",
            EstimatedMinutes: 40,
            Url: "https://thebookofshaders.com"),

        new(
            Id: "tut-opt-01",
            Title: "Оптимизация: CPU и GPU profiling",
            Description: "Как читать данные профайлера, находить bottleneck между CPU и GPU, устранять draw call overhead. Батчинг, LOD, culling — системный подход без угадайки.",
            Category: "tutorial",
            Tags: ["optimization", "profiling", "unity", "unreal"],
            Difficulty: "intermediate",
            EstimatedMinutes: 35,
            Url: "#"),

        new(
            Id: "tut-patterns-01",
            Title: "Паттерны в геймплее: State Machine, Observer, Command",
            Description: "Три самых нужных паттерна для игровой логики. Конечный автомат для состояний персонажа, Observer для событий, Command для undo/redo и записи реплея.",
            Category: "tutorial",
            Tags: ["architecture", "patterns", "gameplay"],
            Difficulty: "beginner",
            EstimatedMinutes: 20,
            Url: "https://gameprogrammingpatterns.com"),

        new(
            Id: "tut-engine-01",
            Title: "Unity vs Unreal vs Godot: как выбрать движок",
            Description: "Честное сравнение трёх движков для инди-команд: лицензирование, экосистема, производительность, кривая обучения. Без религиозных войн, только конкретные критерии.",
            Category: "tutorial",
            Tags: ["unity", "unreal", "godot"],
            Difficulty: "beginner",
            EstimatedMinutes: 15,
            Url: "#"),

        new(
            Id: "tut-ai-01",
            Title: "Навигация и AI: A* и NavMesh изнутри",
            Description: "Реализуем A* с нуля, потом смотрим как NavMesh упрощает задачу в реальных играх. Разбираем steering behaviors: seek, flee, wander, obstacle avoidance.",
            Category: "tutorial",
            Tags: ["gameplay", "ai", "pathfinding"],
            Difficulty: "intermediate",
            EstimatedMinutes: 30,
            Url: "#"),

        new(
            Id: "tut-physics-01",
            Title: "Физика в играх: Rigidbody, коллизии, joints",
            Description: "Как работает дискретная и непрерывная детекция коллизий, почему объекты проваливаются сквозь пол, и как настроить joints чтобы не взорвалось при любом fps.",
            Category: "tutorial",
            Tags: ["gameplay", "physics", "unity"],
            Difficulty: "beginner",
            EstimatedMinutes: 20,
            Url: "#"),

        new(
            Id: "tut-memory-01",
            Title: "Управление памятью: object pools и GC",
            Description: "GC spikes убивают frame rate. Object pooling, struct vs class, NativeArray в Unity, SpawnManager без аллокаций в hot path — и как измерить реальный эффект.",
            Category: "tutorial",
            Tags: ["optimization", "memory", "unity"],
            Difficulty: "advanced",
            EstimatedMinutes: 35,
            Url: "#"),

        new(
            Id: "tut-netcode-01",
            Title: "Сетевой код: Prediction, Rollback, Authority",
            Description: "Почему наивный lock-step не работает при ping 100ms. Клиентский prediction, серверная авторитетность, reconciliation и rollback — на примере Godot Multiplayer и концептах Valve.",
            Category: "tutorial",
            Tags: ["networking", "gameplay"],
            Difficulty: "advanced",
            EstimatedMinutes: 45,
            Url: "#"),
    ];
}
