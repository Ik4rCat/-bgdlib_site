const FALLBACK_FEED = [
  {
    id: "tut-001",
    category: "tutorial",
    title: "Render-пайплайн без боли: базовые принципы и чеклист",
    source: "BGD Digest",
    time: "сегодня",
    tags: ["render", "junior"],
    url: "#",
  },
  {
    id: "eng-001",
    category: "engine",
    title: "Новости движков: коротко о важном (сборка недели)",
    source: "Engine Watch",
    time: "вчера",
    tags: ["unity", "unreal", "godot"],
    url: "#",
  },
  {
    id: "jobs-001",
    category: "jobs",
    title: "Tools Programmer — pipeline/automation (remote/hybrid)",
    source: "Jobs Radar",
    time: "2 дня",
    tags: ["tools"],
    url: "#",
  },
  {
    id: "tool-001",
    category: "tools",
    title: "Список полезных инструментов: профайлеры, ассет-менеджмент, CI",
    source: "Toolbox",
    time: "3 дня",
    tags: ["tools"],
    url: "#",
  },
  {
    id: "tut-002",
    category: "tutorial",
    title: "Геймплейные системы: как не утонуть в зависимостях",
    source: "Patterns",
    time: "неделя",
    tags: ["junior"],
    url: "#",
  },
  {
    id: "jobs-002",
    category: "jobs",
    title: "Technical Artist — shaders & tools (Unity)",
    source: "Jobs Radar",
    time: "неделя",
    tags: ["unity", "tools"],
    url: "#",
  },
];

const CATEGORY_LABEL = {
  tutorial: "Туториалы",
  engine: "Движки",
  jobs: "Вакансии",
  tools: "Инструменты",
};

const qs = (sel, root = document) => root.querySelector(sel);
const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(str) {
  return escapeHtml(str).replaceAll("`", "&#96;");
}

function getActiveValues(groupName) {
  const group = qs(`[data-filter-group="${groupName}"]`);
  if (!group) return new Set();
  const active = qsa(".chip.is-active", group)
    .map((b) => b.dataset.value)
    .filter(Boolean);
  return new Set(active);
}

function renderFeed(items) {
  const list = qs("#feed-list");
  const count = qs("#feed-count");
  if (!list || !count) return;

  list.innerHTML = items
    .map((it) => {
      const tags = it.tags
        .map((t) => `<span class="pill">${escapeHtml(t)}</span>`)
        .join("");
      const cat = CATEGORY_LABEL[it.category] ?? it.category;
      const catPill = `<span class="pill pill--accent">${escapeHtml(cat)}</span>`;

      return `
        <li class="item" data-id="${escapeHtml(it.id)}">
          <div>
            <h3 class="item__title">${escapeHtml(it.title)}</h3>
            <div class="item__meta">
              ${catPill}
              <span class="pill">${escapeHtml(it.source)}</span>
              ${tags}
            </div>
          </div>
          <div class="item__right">
            <span class="time">${escapeHtml(it.time)}</span>
            <a class="link" href="${escapeAttr(it.url)}">open →</a>
          </div>
        </li>
      `;
    })
    .join("");

  count.textContent = String(items.length);
}

function setActiveInGroup(groupName, values) {
  const group = qs(`[data-filter-group="${groupName}"]`);
  if (!group) return;
  qsa(".chip", group).forEach((chip) => {
    const v = chip.dataset.value;
    chip.classList.toggle("is-active", v ? values.has(v) : false);
  });
}

function clearGroup(groupName) {
  const group = qs(`[data-filter-group="${groupName}"]`);
  if (!group) return;
  qsa(".chip.is-active", group).forEach((chip) =>
    chip.classList.remove("is-active"),
  );
}

function setApiStatus(text) {
  const el = qs("#api-status");
  if (el) el.textContent = text;
}

function setSubtitle(text) {
  const el = qs("#feed-subtitle");
  if (el) el.textContent = text;
}

async function fetchFeed() {
  const categories = Array.from(getActiveValues("category")).join(",");
  const tags = Array.from(getActiveValues("tag")).join(",");

  const url = new URL("/api/feed", window.location.origin);
  if (categories) url.searchParams.set("categories", categories);
  if (tags) url.searchParams.set("tags", tags);

  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}

async function load() {
  try {
    setApiStatus("…");
    const data = await fetchFeed();
    setApiStatus("ok");
    setSubtitle("Данные пришли с backend (`/api/feed`).");
    renderFeed(data);
  } catch {
    setApiStatus("fallback");
    setSubtitle("Backend недоступен — показываю локальную демо‑ленту.");
    renderFeed(FALLBACK_FEED);
  }
}

function initUI() {
  qsa(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("is-active");
      load();
    });
  });

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const action = t.dataset.action;
    if (!action) return;

    if (action === "clear") {
      clearGroup("tag");
      setActiveInGroup("category", new Set(["tutorial", "engine", "jobs", "tools"]));
      load();
    }

    if (action === "only-jobs") {
      setActiveInGroup("category", new Set(["jobs"]));
      clearGroup("tag");
      load();
    }

    if (action === "reload") {
      load();
    }
  });
}

initUI();
load();

