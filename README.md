# -BGD_Library_site
BabylonianGameDevLibrary - A personalized content aggregator for gaming industry professionals-tutorials, engine news, job openings, and tools all in one feed with smart filters.

## Структура

- `public/` — входная точка статического сайта
- `src/pages/` — страницы (заготовки)
- `src/styles/` — стили
- `src/scripts/` — скрипты
- `src/components/` — компоненты (пока пусто)
- `assets/` — изображения/иконки/прочие ресурсы

## Локальный запуск

Любым статическим сервером, например:

```bash
python -m http.server --directory public 8000
```

Затем откройте `http://localhost:8000`.
