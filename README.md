# BGDLib — Babylonian GameDev Library

> One feed. All gamedev.

Mobile RSS aggregator for game developers — 30+ sources aggregated into one adaptive, role-filtered stream.

**Live site:** https://crazyanimalsstudio.space/bgd  
**Mirror:** https://ik4rcat.github.io/-bgdlib_site/

```
░▒▓███████▓▒░ ░▒▓██████▓▒░░▒▓███████▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓███████▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░
░▒▓███████▓▒░░▒▓█▓▒▒▓███▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░▒▓███████▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░
░▒▓███████▓▒░ ░▒▓██████▓▒░░▒▓███████▓▒░░▒▓████████▓▒░▒▓█▓▒░▒▓███████▓▒░
```

---

## What it is

BGDLib (Babylonian GameDev Library) is a mobile application for game developers that aggregates content from 30+ sources into a single, personalized feed. Instead of manually browsing Unity Blog, GDC Vault, Reddit, YouTube channels, and job boards every day, you get one stream filtered by your role, engine, and expertise level.

**Status:** In active development — currently this landing page only.  
**Target:** Android + iOS via .NET MAUI. ETA 2026.

---

## Stack

| Layer | Technology |
|---|---|
| Landing page | HTML / CSS / JS (vanilla) |
| Hosting | GitHub Pages + custom domain |
| Mobile app | .NET MAUI (planned) |
| Survey backend | Google Apps Script + Google Sheets |

---

## File structure

```
-BGD_Library_site/
├── index.html        # Landing page (single page)
├── styles.css        # All styles — CSS variables, sections, responsive
├── script.js         # Boot animation, i18n (EN/RU), retrowave canvas, survey logic
├── apps-script.gs    # Google Apps Script for survey form → Google Sheets
├── ascii-logo.md     # ASCII logo reference
├── logosс.html       # Logo prototypes
└── README.md
```

---

## Sections

| # | ID | Content |
|---|---|---|
| 001 | `#hero` | Title, CTA, retrowave background |
| 002 | `#about` | Project overview — what BGDLib is |
| 003 | `#problem` | The problem: 30+ sources, 3h/day wasted |
| 004 | `#solution` | The fix: unified feed, smart filter, mobile |
| 005 | `#audience` | Target personas |
| 006 | `#features` | 6 app modules |
| 007 | `#sources` | List of aggregated data nodes |
| 008 | `#cta` | Launch notification + survey form |

---

## Deployment

The site is deployed on **GitHub Pages** from the `main` branch root.  
A custom domain `crazyanimalsstudio.space/bgd` is configured via CNAME / GitHub Pages settings.

---

## i18n

All visible text uses `data-t="key"` attributes. Translations live in `script.js` inside the `i18n` object (keys `en` and `ru`). Switching language triggers a 150ms fade-out/in animation on all translated elements.

---

## Contact

GitHub: https://github.com/ik4rcat  
Email: altworsekitten@gmail.com OR crazy.studio.cat@gmail.com
