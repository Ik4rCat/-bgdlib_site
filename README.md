# -BGD_Library_site
BabylonianGameDevLibrary - A personalized content aggregator for gaming industry professionals-tutorials, engine news, job openings, and tools all in one feed with smart filters.

## Что уже есть

Минималистичный прототип лендинга/структуры интерфейса:

- `frontend/index.html` — главная страница (презентация проекта)
- `frontend/app.html` — лента с фильтрами (вдохновение: `https://cyberspace.online/feed`)
- `frontend/about.html` — подробнее о проекте + заглушки ссылок Android
- `frontend/src/styles/main.css` — базовые стили + зернистость + тема “Cyberspace (C64)”
- `frontend/src/styles/app.css` — стили “terminal/cyber feed” для `frontend/app.html`
- `frontend/src/styles/about.css` — стили блока загрузок для `frontend/about.html`
- `frontend/src/scripts/app.js` — фильтры + загрузка ленты с backend (`/api/feed`) или fallback
- `frontend/src/img/` — папка под изображения (если понадобится)

## Локальный запуск

### Frontend

Любым статическим сервером из корня репозитория:

```bash
python -m http.server 8000
```

Откройте `http://localhost:8000/frontend/`.

### Backend (C#)

Мини‑API на ASP.NET Core: `backend/BgdLibrary.Api`.

```bash
cd backend/BgdLibrary.Api
DOTNET_CLI_HOME="$PWD/../../.dotnet_home" dotnet run
```

Эндпоинты:
- `GET /health`
- `GET /api/feed?categories=tutorial,jobs&tags=unity,tools`
