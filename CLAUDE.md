# BGDLibrary — Claude Code Context

> Читай этот файл перед любой работой над проектом BGDLibrary.

---

## Что это за проект

**Babylonian GameDev Library (BGDLibrary)** — учебный проект студента IT TOP СПб, сдача конец июня 2025.

Персонализированный агрегатор контента для геймдев-разработчиков: туториалы, новости движков, вакансии, инструменты — в одной ленте с фильтрами по роли/движку/категории.

**Две части:**
1. **Android-приложение** (Kotlin + Jetpack Compose) — основной MVP-продукт
2. **Веб-сайт** (HTML/CSS/JS + C# ASP.NET Core backend) — лендинг + веб-версия ленты

---

## Структура репозитория

```
/
├── CLAUDE.md                        ← этот файл
├── frontend/
│   ├── index.html                   ← главная / лендинг
│   ├── app.html                     ← веб-версия ленты с фильтрами
│   ├── about.html                   ← о проекте + ссылки на APK
│   └── src/
│       ├── styles/
│       │   ├── main.css             ← токены, layout, все компоненты
│       │   ├── app.css              ← rail, appgrid, sidebar (только для app.html)
│       │   └── about.css            ← dl-сетка загрузок (только для about.html)
│       └── scripts/
│           └── app.js               ← фильтры, fetch /api/feed, fallback-лента
└── backend/
    └── BgdLibrary.Api/
        └── Program.cs               ← ASP.NET Core Minimal API
```

---

## Дизайн-система

### Стиль
**Mirror's Edge Catalyst** — чистый, геометричный, без лишнего.
- Белый/светло-серый фон как база
- Красный `#E8002A` — единственный акцент, используется скупо
- `border-radius: 0` везде — это фирменная черта стиля, не менять
- Жирная condensed-типографика (Barlow Condensed)
- Шрифты через Google Fonts: Barlow, Barlow Condensed, JetBrains Mono

### Темы
- **Light** (по умолчанию) и **Dark**
- Переключаются через `data-theme="dark"` / `data-theme="light"` на теге `<html>`
- НЕ через класс на body
- Кнопка `.theme-toggle` есть в хедере каждой страницы
- Сохраняется в `localStorage('bgd-theme')`
- Скрипт переключения одинаковый во всех трёх HTML-файлах:

```js
const btn = document.getElementById('theme-btn');
const html = document.documentElement;
const stored = localStorage.getItem('bgd-theme');
if (stored) { html.dataset.theme = stored; btn.textContent = stored === 'dark' ? '☀' : '☾'; }
btn.addEventListener('click', () => {
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = next;
  localStorage.setItem('bgd-theme', next);
  btn.textContent = next === 'dark' ? '☀' : '☾';
});
```

### CSS-токены (main.css)

```css
/* Light */
--bg:            #f5f4f0;
--surface:       #ffffff;
--surface-2:     #efefed;
--text:          #0d0d0d;
--muted:         #666660;
--border:        rgba(0,0,0,0.12);
--accent:        #E8002A;
--accent-dim:    rgba(232,0,42,0.1);
--accent-border: rgba(232,0,42,0.35);
--ring:          rgba(232,0,42,0.5);
--radius:        0px;
--sans:          'Barlow', system-ui, sans-serif;
--cond:          'Barlow Condensed', 'Barlow', sans-serif;
--mono:          'JetBrains Mono', ui-monospace, monospace;

/* Dark — через [data-theme="dark"] на <html> */
--bg:        #0e0e0e;
--surface:   #161616;
--surface-2: #1e1e1e;
--text:      #f0efeb;
--muted:     #888882;
--border:    rgba(255,255,255,0.1);
```

---

## Ключевые компоненты (main.css)

| Класс | Где | Описание |
|---|---|---|
| `.topbar` | все страницы | Sticky-хедер 56px, `border-bottom: 2px solid var(--text)` |
| `.brand__mark` | все страницы | Красный квадрат 56×56 с "BGD" |
| `.hero` | index.html | Большой заголовок, косая красная полоса фоном (`::before`) |
| `.hero__title em` | index.html | Красный акцент в заголовке |
| `.kpi` | index.html | Три цифры внизу hero-секции |
| `.section` | index.html, about.html | Секция с `section__label` + `section__title` |
| `.grid` | все страницы | 3 колонки через `gap:1px; background:var(--border)` |
| `.card` | все страницы | Ячейка грида, `.card__accent` — красная полоска 32×3px сверху |
| `.panel` | app.html | Рамка для ленты и блоков |
| `.chip` | app.html | Фильтр-тег; `.is-active` → красная обводка/фон |
| `.rail` | app.css | Левая вертикальная навигация 48px (только app.html) |
| `.appgrid` | app.css | `280px sidebar + 1fr mainpane` |
| `.dl` | about.css | Сетка загрузок APK (3 колонки через gap:1px) |

---

## Backend (C# / ASP.NET Core Minimal API)

Файл: `backend/BgdLibrary.Api/Program.cs`

**Эндпоинты:**
- `GET /health` → `{ ok: true }`
- `GET /api/feed?categories=tutorial,engine&tags=unity,godot` → `FeedItem[]`

**Модель:**
```csharp
record FeedItem(string Id, string Category, string Title,
                string Source, string Time, string[] Tags, string Url);
```

Данные сейчас хардкодены. Следующий шаг — RSS-парсинг реальных источников (Unity Blog, Godot Blog, Gamasutra RSS, r/gamedev).

CORS настроен на AllowAnyOrigin для разработки.

---

## Frontend логика (app.js)

- При загрузке: `fetch('/api/feed?categories=...&tags=...')` с текущими фильтрами
- Если backend недоступен → показывает `FALLBACK_FEED` (6 демо-записей)
- `#api-status` обновляется: `"probing…"` → `"ok"` или `"fallback"`
- `#feed-count` — количество отображаемых записей
- `#feed-subtitle` — текстовая подсказка об источнике данных
- Фильтры: `data-filter-group="category"` и `data-filter-group="tag"`
- Кнопки: `data-action="clear"` / `data-action="only-jobs"` / `data-action="reload"`

---

## Правила при работе над кодом

1. **Стили только через CSS-токены** из main.css — без inline-стилей и хардкода цветов
2. **`border-radius: 0` везде** — не добавлять скругления, это часть дизайна
3. **Тёмная тема через `[data-theme="dark"]` на `<html>`** — не через класс на body
4. **Заголовки:** `font-family: var(--cond); font-weight: 900; text-transform: uppercase`
5. **Акцент `--accent` — скупо**, только для реально важных элементов
6. **Скрипт темы одинаковый** во всех HTML-файлах (см. выше)
7. **Не создавать новые CSS-файлы** без необходимости — расширяй main.css

---

## Текущий статус

- [x] Структура файлов и репозиторий
- [x] Рабочий C# backend (хардкод данных, CORS)
- [x] Рабочий frontend с фильтрами и fallback-лентой
- [x] Дизайн-система Mirror's Edge (main.css полностью переработан)
- [x] Light/dark тема с переключателем и сохранением
- [ ] Подключение реальных RSS-источников в backend
- [ ] Android-приложение (Kotlin + Jetpack Compose) — основной MVP
- [ ] Deploy сайта

---

## Целевая аудитория

- Инди-разработчики (команды 1–5 человек)
- Студенты геймдев-курсов и вузов
- Программисты, геймдизайнеры, технические художники
- Гео: СНГ + глобально, языки: RU / EN
