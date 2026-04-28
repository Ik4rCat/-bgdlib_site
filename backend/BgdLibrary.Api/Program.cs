var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowAnyOrigin()
    );
});

var app = builder.Build();

app.UseCors();

app.MapGet("/health", () => Results.Ok(new { ok = true }));

var feed = new[]
{
    new FeedItem(
        Id: "tut-001",
        Category: "tutorial",
        Title: "Render-пайплайн без боли: базовые принципы и чеклист",
        Source: "BGD Digest",
        Time: "сегодня",
        Tags: new[] { "render", "junior" },
        Url: "#"
    ),
    new FeedItem(
        Id: "eng-001",
        Category: "engine",
        Title: "Новости движков: коротко о важном (сборка недели)",
        Source: "Engine Watch",
        Time: "вчера",
        Tags: new[] { "unity", "unreal", "godot" },
        Url: "#"
    ),
    new FeedItem(
        Id: "jobs-001",
        Category: "jobs",
        Title: "Tools Programmer — pipeline/automation (remote/hybrid)",
        Source: "Jobs Radar",
        Time: "2 дня",
        Tags: new[] { "tools" },
        Url: "#"
    ),
    new FeedItem(
        Id: "tool-001",
        Category: "tools",
        Title: "Список полезных инструментов: профайлеры, ассет-менеджмент, CI",
        Source: "Toolbox",
        Time: "3 дня",
        Tags: new[] { "tools" },
        Url: "#"
    ),
    new FeedItem(
        Id: "tut-002",
        Category: "tutorial",
        Title: "Геймплейные системы: как не утонуть в зависимостях",
        Source: "Patterns",
        Time: "неделя",
        Tags: new[] { "junior" },
        Url: "#"
    ),
    new FeedItem(
        Id: "jobs-002",
        Category: "jobs",
        Title: "Technical Artist — shaders & tools (Unity)",
        Source: "Jobs Radar",
        Time: "неделя",
        Tags: new[] { "unity", "tools" },
        Url: "#"
    ),
};

app.MapGet("/api/feed", (HttpRequest req) =>
{
    var categories = ParseCsv(req.Query["categories"]);
    var tags = ParseCsv(req.Query["tags"]);

    var filtered = feed.Where(item =>
    {
        if (categories.Count > 0 && !categories.Contains(item.Category)) return false;
        if (tags.Count == 0) return true;
        return item.Tags.Any(t => tags.Contains(t));
    });

    return Results.Ok(filtered);
});

app.Run();

static HashSet<string> ParseCsv(string? value)
{
    if (string.IsNullOrWhiteSpace(value)) return new HashSet<string>(StringComparer.OrdinalIgnoreCase);

    var parts = value
        .Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
        .Where(p => p.Length > 0);

    return new HashSet<string>(parts, StringComparer.OrdinalIgnoreCase);
}

internal sealed record FeedItem(
    string Id,
    string Category,
    string Title,
    string Source,
    string Time,
    string[] Tags,
    string Url
);
