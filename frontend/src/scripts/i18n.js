const TRANSLATIONS = {
  ru: {
    nav_home: 'Главная',
    nav_about: 'О проекте',
    hero_title: 'Весь геймдев<br>в одной <em>ленте</em>',
    hero_lead: 'Туториалы, новости движков, вакансии и постмортемы — агрегированы, отфильтрованы под твой стек и доступны офлайн. Никаких лишних вкладок.',
    hero_cta: 'О проекте →',
    kpi_sources: 'источников',
    kpi_categories: 'категории',
    kpi_time: 'времени на поиск',
    s1_label: 'Зачем это нужно',
    s1_title: 'Одна лента вместо десяти вкладок',
    s1_desc: 'Геймдев-разработчик тратит до 3 часов в день на ручной мониторинг Unity Blog, GDC Vault, Reddit, Telegram-каналов и job-бордов. BGDLibrary решает это одним персонализированным фидом.',
    s1_c1_title: 'Без шума',
    s1_c1_text: 'Заголовок, источник, теги — без маркетинговых баннеров и кликбейта. Только то, что реально полезно.',
    s1_c2_title: 'Под твой стек',
    s1_c2_text: 'Фильтры по роли, движку и типу материала. Учишь Godot — видишь Godot. Ищешь работу — видишь вакансии.',
    s1_c3_title: 'Офлайн-доступ',
    s1_c3_text: 'Сохраняй материалы и читай без интернета. В метро, между парами, в дороге.',
    s2_label: 'Целевая аудитория',
    s2_title: 'Сделано для людей в геймдеве',
    s2_c1_title: 'Студенты',
    s2_c1_text: 'Изучаешь разработку игр — фид настроен под твой движок и уровень. Туториалы и постмортемы вместо хаоса в закладках.',
    s2_c2_title: 'Инди-разработчики',
    s2_c2_text: 'Соло или маленькая команда. Следишь за обновлениями движка, ищешь инструменты и смотришь вакансии — всё в одном месте.',
    s2_c3_title: 'Специалисты индустрии',
    s2_c3_text: 'Программисты, геймдизайнеры, технические художники. Актуальный контент по профессии без информационного перегруза.',
    s3_label: 'Текущий статус',
    s3_title: 'В активной разработке',
    s3_desc: 'BGDLibrary — учебный проект, который растёт в реальный продукт. Android-приложение на Kotlin + Jetpack Compose, веб-лендинг, C# backend с RSS-агрегацией.',
    s3_c1_title: 'Android-приложение',
    s3_c1_text: 'Kotlin + Jetpack Compose. Лента, фильтры, офлайн-избранное, авторизация. Статус: в разработке',
    s3_c2_title: 'Веб-версия',
    s3_c2_text: 'Лендинг и веб-лента на базе того же API. Статус: в разработке',
    footer_status: 'Проект в разработке',
    a_label: 'О проекте',
    a_title: 'Babylonian GameDev Library',
    a_desc1: 'BGDLibrary — персонализированный агрегатор контента для специалистов игровой индустрии. Туториалы, новости движков, вакансии и инструменты в одной ленте с умными фильтрами.',
    a_desc2: 'Проект решает реальную проблему: геймдев-разработчик тратит до 3 часов в день на мониторинг десятков разрозненных источников. BGDLibrary собирает всё в один персонализированный фид — с учётом роли, движка и уровня пользователя.',
    a_c1_title: 'Что в MVP',
    a_c1_text: 'Агрегация RSS-источников, лента с категориями, фильтры по движку и роли, офлайн-избранное, авторизация через Firebase.',
    a_c2_title: 'Технологии',
    a_c2_text: 'Android: Kotlin + Jetpack Compose. Backend: C# ASP.NET Core + RSS-парсинг. Web: HTML / CSS / JS.',
    a_c3_title: 'Сроки',
    a_c3_text: 'Учебный проект, сдача — июнь 2025. Разработка соло. IT TOP, Санкт-Петербург.',
    hyp_label: 'Гипотеза',
    hyp_title: 'Если убрать информационный хаос —<br>разработчик работает эффективнее',
    hyp_desc1: 'Геймдев-разработчики тратят 1.5–3 часа в день на поиск профессионального контента из-за его фрагментации по платформам.',
    hyp_desc2: 'Персонализированный агрегатор с фильтрами по роли, движку и уровню сократит это время на 50%+ и снизит когнитивную нагрузку при ежедневном мониторинге индустрии.',
    link_home: 'главная',
    link_about: 'о проекте',
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    hero_title: 'All of gamedev<br>in one <em>feed</em>',
    hero_lead: 'Tutorials, engine news, jobs, and postmortems — aggregated, filtered for your stack, and available offline. No extra tabs.',
    hero_cta: 'About →',
    kpi_sources: 'sources',
    kpi_categories: 'categories',
    kpi_time: 'less search time',
    s1_label: 'Why it matters',
    s1_title: 'One feed instead of ten tabs',
    s1_desc: 'Gamedev developers spend up to 3 hours a day manually monitoring Unity Blog, GDC Vault, Reddit, Telegram channels, and job boards. BGDLibrary solves this with one personalized feed.',
    s1_c1_title: 'No noise',
    s1_c1_text: 'Title, source, tags — no marketing banners or clickbait. Only what\'s actually useful.',
    s1_c2_title: 'For your stack',
    s1_c2_text: 'Filters by role, engine, and content type. Learning Godot — see Godot. Looking for work — see jobs.',
    s1_c3_title: 'Offline access',
    s1_c3_text: 'Save materials and read without internet. On the subway, between classes, on the road.',
    s2_label: 'Target audience',
    s2_title: 'Made for people in gamedev',
    s2_c1_title: 'Students',
    s2_c1_text: 'Learning game development — the feed is tailored to your engine and skill level. Tutorials and postmortems instead of bookmark chaos.',
    s2_c2_title: 'Indie developers',
    s2_c2_text: 'Solo or small team. Track engine updates, find tools, browse jobs — all in one place.',
    s2_c3_title: 'Industry professionals',
    s2_c3_text: 'Programmers, game designers, technical artists. Relevant professional content without information overload.',
    s3_label: 'Current status',
    s3_title: 'In active development',
    s3_desc: 'BGDLibrary is a student project growing into a real product. Android app in Kotlin + Jetpack Compose, web landing, C# backend with RSS aggregation.',
    s3_c1_title: 'Android app',
    s3_c1_text: 'Kotlin + Jetpack Compose. Feed, filters, offline favorites, auth. Status: in development',
    s3_c2_title: 'Web version',
    s3_c2_text: 'Landing and web feed powered by the same API. Status: in development',
    footer_status: 'In development',
    a_label: 'About',
    a_title: 'Babylonian GameDev Library',
    a_desc1: 'BGDLibrary is a personalized content aggregator for game industry professionals. Tutorials, engine news, jobs, and tools in one feed with smart filters.',
    a_desc2: 'The project solves a real problem: a gamedev developer spends up to 3 hours a day monitoring dozens of scattered sources. BGDLibrary brings everything into one personalized feed — tailored to the user\'s role, engine, and level.',
    a_c1_title: 'What\'s in MVP',
    a_c1_text: 'RSS source aggregation, categorized feed, engine and role filters, offline favorites, Firebase auth.',
    a_c2_title: 'Technologies',
    a_c2_text: 'Android: Kotlin + Jetpack Compose. Backend: C# ASP.NET Core + RSS parsing. Web: HTML / CSS / JS.',
    a_c3_title: 'Timeline',
    a_c3_text: 'Student project, submission — June 2025. Solo development. IT TOP, Saint Petersburg.',
    hyp_label: 'Hypothesis',
    hyp_title: 'Remove the information chaos —<br>developers work more effectively',
    hyp_desc1: 'Gamedev developers spend 1.5–3 hours a day searching for professional content due to its fragmentation across platforms.',
    hyp_desc2: 'A personalized aggregator with filters by role, engine, and level will reduce this time by 50%+ and lower cognitive load during daily industry monitoring.',
    link_home: 'home',
    link_about: 'about',
  },
  zh: {
    nav_home: '首页',
    nav_about: '关于',
    hero_title: '所有游戏开发资讯<br>尽在一个<em>频道</em>',
    hero_lead: '教程、引擎新闻、招聘信息和开发复盘——汇聚整合，按你的技术栈精准过滤，支持离线访问。告别多余的标签页。',
    hero_cta: '关于项目 →',
    kpi_sources: '个来源',
    kpi_categories: '个分类',
    kpi_time: '节省搜索时间',
    s1_label: '为什么需要它',
    s1_title: '一个频道代替十个标签页',
    s1_desc: '游戏开发者每天花费长达3小时手动浏览 Unity Blog、GDC Vault、Reddit、Telegram 频道和招聘平台。BGDLibrary 用一个个性化的信息流解决这个问题。',
    s1_c1_title: '无干扰',
    s1_c1_text: '标题、来源、标签——没有营销广告和标题党。只有真正有价值的内容。',
    s1_c2_title: '适合你的技术栈',
    s1_c2_text: '按角色、引擎和内容类型筛选。学 Godot——看 Godot。找工作——看招聘信息。',
    s1_c3_title: '离线访问',
    s1_c3_text: '保存内容，无网络也能阅读。在地铁、课间或路途中都可使用。',
    s2_label: '目标用户',
    s2_title: '为游戏开发者而生',
    s2_c1_title: '学生',
    s2_c1_text: '正在学习游戏开发——信息流按你的引擎和水平定制。教程和开发复盘，告别书签乱象。',
    s2_c2_title: '独立开发者',
    s2_c2_text: '单人或小团队。跟踪引擎更新、寻找工具、浏览招聘——一切尽在一处。',
    s2_c3_title: '行业专业人士',
    s2_c3_text: '程序员、游戏设计师、技术美术。获取专业领域的最新内容，避免信息过载。',
    s3_label: '当前状态',
    s3_title: '积极开发中',
    s3_desc: 'BGDLibrary 是一个正在成长为真实产品的项目。Android 应用基于 Kotlin + Jetpack Compose，配备网页落地页及 C# RSS 聚合后端。',
    s3_c1_title: 'Android 应用',
    s3_c1_text: 'Kotlin + Jetpack Compose。信息流、筛选器、离线收藏、登录授权。状态：开发中',
    s3_c2_title: '网页版',
    s3_c2_text: '落地页及基于同一 API 的网页信息流。状态：开发中',
    footer_status: '开发中',
    a_label: '关于项目',
    a_title: 'Babylonian GameDev Library',
    a_desc1: 'BGDLibrary 是面向游戏行业专业人士的个性化内容聚合器。在一个拥有智能筛选器的信息流中获取教程、引擎新闻、招聘信息和实用工具。',
    a_desc2: '本项目解决一个真实问题：游戏开发者每天花费长达3小时监控数十个分散的信息源。BGDLibrary 将所有内容整合到一个个性化的信息流中——根据用户的角色、引擎和水平量身定制。',
    a_c1_title: 'MVP 内容',
    a_c1_text: 'RSS 来源聚合、分类信息流、引擎与角色筛选器、离线收藏、Firebase 身份验证。',
    a_c2_title: '技术栈',
    a_c2_text: 'Android：Kotlin + Jetpack Compose。后端：C# ASP.NET Core + RSS 解析。Web：HTML / CSS / JS。',
    a_c3_title: '项目时间表',
    a_c3_text: '项目提交截止日期——2025年6月。独立开发。IT TOP，圣彼得堡。',
    hyp_label: '研究假设',
    hyp_title: '消除信息混乱——<br>开发者的效率将显著提升',
    hyp_desc1: '由于内容分散在各个平台，游戏开发者每天花费 1.5–3 小时寻找专业内容。',
    hyp_desc2: '一个按角色、引擎和水平进行筛选的个性化聚合器将把这一时间减少 50%+，并降低日常行业监控的认知负担。',
    link_home: '首页',
    link_about: '关于',
  },
};

const LANGS = ['ru', 'en', 'zh'];
const LANG_LABELS = { ru: 'RU', en: 'EN', zh: '中' };

function detectLang() {
  const stored = localStorage.getItem('bgd-lang');
  if (stored && LANGS.includes(stored)) return stored;
  const browser = (navigator.language || 'ru').toLowerCase();
  if (browser.startsWith('zh')) return 'zh';
  if (browser.startsWith('en')) return 'en';
  return 'ru';
}

function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (key in t) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (key in t) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  localStorage.setItem('bgd-lang', lang);
}

const langBtn = document.getElementById('lang-btn');
let currentLang = detectLang();
applyLang(currentLang);
if (langBtn) langBtn.textContent = LANG_LABELS[currentLang];

if (langBtn) {
  langBtn.addEventListener('click', () => {
    currentLang = LANGS[(LANGS.indexOf(currentLang) + 1) % LANGS.length];
    applyLang(currentLang);
    langBtn.textContent = LANG_LABELS[currentLang];
  });
}
