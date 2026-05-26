/* ═══════════════════════════════════════════════════
   BGDLib — script.js
   ═══════════════════════════════════════════════════ */

/* ── ASCII LOGOS ── */
const ASCII_LOGOS = [
  /* 0 — ░▒▓ gradient blocks */
  `░▒▓███████▓▒░ ░▒▓██████▓▒░░▒▓███████▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓███████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓███████▓▒░░▒▓█▓▒▒▓███▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░▒▓███████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓███████▓▒░ ░▒▓██████▓▒░░▒▓███████▓▒░░▒▓████████▓▒░▒▓█▓▒░▒▓███████▓▒░  
                                                                         
                                                                         `,

  /* 1 — /==/ angular HUD */
  `
                  _,---.                         .=-.-.            
    _..---.   _.='.'-,  \\  _,..---._    _.-.    /==/_ /  _..---.   
  .' .'.-. \\ /==.'-     //==/,   -  \\ .-,.'|   |==|, | .' .'.-. \\  
 /==/- '=' //==/ -   .-' |==|   _   _\\==|, |   |==|  |/==/- '=' /  
 |==|-,   ' |==|_   /_,-.|==|  .=.   |==|- |   |==|- ||==|-,   '   
 |==|  .=. \\|==|  , \\_.' )==|,|   | -|==|, |   |==| ,||==|  .=. \\  
 /==/- '=' ,\\==\\-  ,    (|==|  '='   /==|- \`-._|==|- |/==/- '=' ,| 
|==|   -   / /==/ _  ,  /|==|-,   _\`//==/ - , ,/==/. /==|   -   /  
\`-._\`.___,'  \`--\`------' \`-.\`.____.' \`--\`-----'\`--\`-\`\`-._\`.___,'   
`,

  /* 2 — U-letter oscilloscope */
  `   ____     ____   ____     _                   ____   
U | __")uU /"___|u|  _"\\   |"|        ___    U | __")u 
 \\|  _ \\/\\| |  _ /| | | |U | | u     |_"_|    \\|  _ \\/ 
  | |_) | | |_| |U| |_| |\\\\| |/__     | |      | |_) | 
  |____/   \\____| |____/ u |_____|  U/| |\\u    |____/  
 _|| \\\\_   _)(|_   |||_    //  \\\\.-,_|___|_,-._|| \\\\_  
(__) (__) (__)__) (__)_)  (_")("_)\\_)-' '-(_/(__) (__) 
`,

  /* 3 — calligraphic dots */
  `      ..                   ..             ..    .          ..    
. uW8"                   dF         x .d88"    @88>  . uW8"      
\`t888                   '88bu.       5888R     %8P   \`t888       
 8888   .        uL     '*88888bu    '888R      .     8888   .   
 9888.z88N   .ue888Nc..   ^"*8888N    888R    .@88u   9888.z88N  
 9888  888E d88E\`"888E\`  beWE "888L   888R   ''888E\`  9888  888E 
 9888  888E 888E  888E   888E  888E   888R     888E   9888  888E 
 9888  888E 888E  888E   888E  888E   888R     888E   9888  888E 
 9888  888E 888E  888E   888E  888F   888R     888E   9888  888E 
.8888  888" 888& .888E  .888N..888   .888B .   888&  .8888  888" 
 \`%888*%"   *888" 888&   \`"888*""    ^*888%    R888"  \`%888*%"   
    "\`       \`"   "888E     ""         "%       ""       "\`      
            .dWi   \`88E                                          
            4888~  J8%                                           
             ^"===*"\`                                            `,

  /* 4 — calligraphic dots wide */
  `     ...     ..            ....        .          ....                ..    .          ..    
  .=*8888x <"?88h.      .x88" \`^x~  xH(\`      .xH888888Hx.      x .d88"    @88>  . uW8"      
 X>  '8888H> '8888     X888   x8 \` 8888h    .H8888888888888:     5888R     %8P   \`t888       
'88h. \`8888   8888    88888  888.  %8888    888*"""?""*88888X    '888R      .     8888   .   
'8888 '8888    "88>  <8888X X8888   X8?    'f     d8x.   ^%88k    888R    .@88u   9888.z88N  
 \`888 '8888.xH888x.  X8888> 488888>"8888x  '>    <88888X   '?8    888R   ''888E\`  9888  888E 
   X" :88*~  \`*8888> X8888>  888888 '8888L  \`:..:\`888888>    8>   888R     888E   9888  888E 
 ~"   !"\`      "888> ?8888X   ?8888>'8888X         \`"*88     X    888R     888E   9888  888E 
  .H8888h.      ?88   8888X h  8888 '8888~    .xHHhx.."      !    888R     888E   9888  888E 
 :"^"88888h.    '!     ?888  -:8*"  <888"    X88888888hx. ..!    .888B .   888&  .8888  888" 
 ^    "88888hx.+"       \`*88.      :88%     !   "*888888888"     ^*888%    R888"  \`%888*%"   
        ^"**""             ^"~====""\`              ^"***"\`         "%       ""       "\`      
                                                                                             
                                                                                             
                                                                                             `,

  /* 5 — /\\\  heavy slashes */
  `__/\\\\\\\\\\\\\\\\\\\\\\\\\\_______/\\\\\\\\\\\\\\\\\\\\\\\\__/\\\\\\\\\\\\\\\\\\\\\\\\_____/\\\\\\\\\\\\___________/\\\\\\________        
 _\\/\\\\\\/////////\\\\\\___/\\\\\\//////////__\\/\\\\\\////////\\\\\\__\\////\\\\\\__________\\/\\\\\\________       
  _\\/\\\\\\_______\\/\\\\\\__/\\\\\\_____________\\/\\\\\\______\\//\\\\\\____\\/\\\\\\_____/\\\\\\_\\/\\\\\\________      
   _\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\__\\/\\\\\\____/\\\\\\\\\\\\\\_\\/\\\\\\_______\\/\\\\\\____\\/\\\\\\____\\///__\\/\\\\\\________     
    _\\/\\\\\\/////////\\\\\\_\\/\\\\\\___\\/////\\\\\\_\\/\\\\\\_______\\/\\\\\\____\\/\\\\\\_____/\\\\\\_\\/\\\\\\\\\\\\\\\\\\__    
     _\\/\\\\\\_______\\/\\\\\\_\\/\\\\\\_______\\/\\\\\\_\\/\\\\\\_______\\/\\\\\\____\\/\\\\\\____\\/\\\\\\_\\/\\\\\\////\\\\\\_   
      _\\/\\\\\\_______\\/\\\\\\_\\/\\\\\\_______\\/\\\\\\_\\/\\\\\\_______/\\\\\\_____\\/\\\\\\____\\/\\\\\\_\\/\\\\\\__\\/\\\\\\_  
       _\\/\\\\\\\\\\\\\\\\\\\\\\\\\\/__\\//\\\\\\\\\\\\\\\\\\\\\\\\/__\\/\\\\\\\\\\\\\\\\\\\\\\\\/____/\\\\\\\\\\\\\\\\\\_\\/\\\\\\_\\/\\\\\\\\\\\\\\\\\\__ 
        _\\/////////////_____\\////////////____\\////////////_____\\/////////__\\///__\\/////////___`,

  /* 6 — mixed style */
  `:::::::.    .,-:::::/ :::::::-.   :::     ::::::::::.  
 ;;;'';;' ,;;-'\`\`\`\`'   ;;,   \`';, ;;;     ;;; ;;;'';;' 
 [[[__[[\\.[[[   [[[[[[/\`[[     [[ [[[     [[[ [[[__[[\\.
 $$""""Y$$"$$c.    "$$  $$,    $$ $$'     $$$ $$""""Y$$
_88o,,od8P \`Y8bo,,,o88o 888_,o8P'o88oo,.__888_88o,,od8P
""YUMMMP"    \`'YMUP"YMM MMMMP"\`  """"YUMMMMMM""YUMMMP" 
`,

];

/* ── PALETTES ── */
const palettes = [
  {
    name: 'dark-magenta',
    '--bg': '#090909', '--bg2': '#0f0f0f', '--bg3': '#161618',
    '--accent': '#ea027e', '--accent2': '#ff2d9b', '--lime': '#c0fc04',
    '--text': '#f5f5f0', '--text2': '#888880', '--text3': '#333330',
    '--border': 'rgba(255,255,255,0.06)', '--border2': 'rgba(255,255,255,0.12)',
    '--grid-color': 'rgba(255,255,255,0.025)', '--scan-opacity': '0.22',
    '--nav-bg': 'rgba(9,9,9,0.84)',
    '--hero-glow': 'rgba(234,2,126,0.05)', '--cta-glow': 'rgba(234,2,126,0.05)',
    '--ghost-stroke': 'rgba(234,2,126,0.07)', '--accent-bg': 'rgba(234,2,126,0.05)',
  },
  {
    name: 'dark-cyan',
    '--bg': '#07090d', '--bg2': '#0c1016', '--bg3': '#12181f',
    '--accent': '#00c8ff', '--accent2': '#33d8ff', '--lime': '#00ff88',
    '--text': '#e8f4f8', '--text2': '#6080a0', '--text3': '#1a3040',
    '--border': 'rgba(0,200,255,0.07)', '--border2': 'rgba(0,200,255,0.15)',
    '--grid-color': 'rgba(0,200,255,0.018)', '--scan-opacity': '0.28',
    '--nav-bg': 'rgba(7,9,13,0.85)',
    '--hero-glow': 'rgba(0,200,255,0.04)', '--cta-glow': 'rgba(0,200,255,0.04)',
    '--ghost-stroke': 'rgba(0,200,255,0.08)', '--accent-bg': 'rgba(0,200,255,0.05)',
  },
  {
    name: 'dark-amber',
    '--bg': '#0e0c06', '--bg2': '#151108', '--bg3': '#1d160c',
    '--accent': '#ff8800', '--accent2': '#ffaa33', '--lime': '#e0e000',
    '--text': '#f8f0d8', '--text2': '#a09080', '--text3': '#3e3018',
    '--border': 'rgba(255,140,0,0.08)', '--border2': 'rgba(255,140,0,0.16)',
    '--grid-color': 'rgba(255,140,0,0.02)', '--scan-opacity': '0.18',
    '--nav-bg': 'rgba(14,12,6,0.85)',
    '--hero-glow': 'rgba(255,136,0,0.04)', '--cta-glow': 'rgba(255,136,0,0.04)',
    '--ghost-stroke': 'rgba(255,136,0,0.08)', '--accent-bg': 'rgba(255,136,0,0.05)',
  },
  {
    name: 'dark-purple',
    '--bg': '#0b0810', '--bg2': '#110e17', '--bg3': '#18141f',
    '--accent': '#bb44ff', '--accent2': '#dd66ff', '--lime': '#44ff80',
    '--text': '#f0eaf8', '--text2': '#9080b8', '--text3': '#3a2850',
    '--border': 'rgba(187,68,255,0.08)', '--border2': 'rgba(187,68,255,0.18)',
    '--grid-color': 'rgba(187,68,255,0.025)', '--scan-opacity': '0.28',
    '--nav-bg': 'rgba(11,8,16,0.85)',
    '--hero-glow': 'rgba(187,68,255,0.05)', '--cta-glow': 'rgba(187,68,255,0.05)',
    '--ghost-stroke': 'rgba(187,68,255,0.09)', '--accent-bg': 'rgba(187,68,255,0.05)',
  },
  {
    name: 'acid-toxic',
    '--bg': '#040a02', '--bg2': '#080f04', '--bg3': '#0e1608',
    '--accent': '#39ff14', '--accent2': '#7fff00', '--lime': '#ff0080',
    '--text': '#e8fce0', '--text2': '#60a050', '--text3': '#1a3010',
    '--border': 'rgba(57,255,20,0.07)', '--border2': 'rgba(57,255,20,0.16)',
    '--grid-color': 'rgba(57,255,20,0.018)', '--scan-opacity': '0.32',
    '--nav-bg': 'rgba(4,10,2,0.88)',
    '--hero-glow': 'rgba(57,255,20,0.05)', '--cta-glow': 'rgba(57,255,20,0.05)',
    '--ghost-stroke': 'rgba(57,255,20,0.08)', '--accent-bg': 'rgba(57,255,20,0.05)',
  },
  {
    name: 'acid-magenta',
    '--bg': '#0d0009', '--bg2': '#130010', '--bg3': '#1a0018',
    '--accent': '#ff00ff', '--accent2': '#ff44ff', '--lime': '#00ffcc',
    '--text': '#fce8fc', '--text2': '#c060c0', '--text3': '#4a004a',
    '--border': 'rgba(255,0,255,0.07)', '--border2': 'rgba(255,0,255,0.16)',
    '--grid-color': 'rgba(255,0,255,0.02)', '--scan-opacity': '0.30',
    '--nav-bg': 'rgba(13,0,9,0.88)',
    '--hero-glow': 'rgba(255,0,255,0.05)', '--cta-glow': 'rgba(255,0,255,0.05)',
    '--ghost-stroke': 'rgba(255,0,255,0.09)', '--accent-bg': 'rgba(255,0,255,0.05)',
  },
  {
    name: 'acid-yellow',
    '--bg': '#0b0a00', '--bg2': '#111000', '--bg3': '#181600',
    '--accent': '#ffe600', '--accent2': '#fff033', '--lime': '#6600ff',
    '--text': '#fffce0', '--text2': '#a0a030', '--text3': '#3a3800',
    '--border': 'rgba(255,230,0,0.07)', '--border2': 'rgba(255,230,0,0.16)',
    '--grid-color': 'rgba(255,230,0,0.018)', '--scan-opacity': '0.20',
    '--nav-bg': 'rgba(11,10,0,0.88)',
    '--hero-glow': 'rgba(255,230,0,0.05)', '--cta-glow': 'rgba(255,230,0,0.05)',
    '--ghost-stroke': 'rgba(255,230,0,0.09)', '--accent-bg': 'rgba(255,230,0,0.05)',
  },
  {
    name: 'acid-red',
    '--bg': '#0d0004', '--bg2': '#130006', '--bg3': '#1a000a',
    '--accent': '#ff0033', '--accent2': '#ff3355', '--lime': '#aaff00',
    '--text': '#fce8ec', '--text2': '#c05060', '--text3': '#4a001a',
    '--border': 'rgba(255,0,51,0.07)', '--border2': 'rgba(255,0,51,0.16)',
    '--grid-color': 'rgba(255,0,51,0.02)', '--scan-opacity': '0.28',
    '--nav-bg': 'rgba(13,0,4,0.88)',
    '--hero-glow': 'rgba(255,0,51,0.05)', '--cta-glow': 'rgba(255,0,51,0.05)',
    '--ghost-stroke': 'rgba(255,0,51,0.09)', '--accent-bg': 'rgba(255,0,51,0.05)',
  },
];

/* ── INIT: apply palette + logo synchronously ── */
(function initPage() {
  const pal = palettes[Math.floor(Math.random() * palettes.length)];
  Object.entries(pal).forEach(([k, v]) => {
    if (k !== 'name') document.documentElement.style.setProperty(k, v);
  });
  const palTag = document.getElementById('palTag');
  if (palTag) palTag.textContent = '// palette: ' + pal.name.toUpperCase();

  const logo = ASCII_LOGOS[Math.floor(Math.random() * ASCII_LOGOS.length)];
  const bootLogo  = document.getElementById('boot-logo');
  const heroLogo  = document.getElementById('ascii-logo');
  if (bootLogo) bootLogo.textContent = logo;
  if (heroLogo) heroLogo.textContent = logo;
})();

/* ── BOOT OVERLAY ── */
(function initBoot() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const overlay = document.getElementById('boot-overlay');
  if (!overlay) return;

  if (prefersReduced) {
    overlay.style.display = 'none';
    return;
  }

  const leftLines = [
    { text: 'BGD FEEDSTREAM BOOT [v1.0] ALPHA', head: true },
    { text: '© 2026 INIT — BGDLIB SYSTEM', head: true },
    { text: '────────────────────────────────', sep: true },
    { text: '' },
    { text: 'Unity.Blog.rss          [DONE]' },
    { text: 'GDC.Vault.rss           [DONE]' },
    { text: 'Gamasutra.rss           [DONE]' },
    { text: 'r/gamedev.rss           [DONE]' },
    { text: 'Godot.Blog.rss          [DONE]' },
    { text: '80lv.rss                [DONE]' },
    { text: 'IndieDB.rss             [DONE]' },
    { text: '' },
    { text: 'MODULE CHAIN: SYSTEM-FEED-DECK-V1' },
    { text: '[01] LINKING  :: /core/aggregator.base' },
    { text: '[02] LINKING  :: /rss/filter.route' },
    { text: '[03] INIT     :: ProfileModule.a64r' },
    { text: '[04] MAP      :: role_sync.grid         OK', hi: true },
    { text: '[05] ATTACH   :: NotifyCore.s           COMPLETE', hi: true },
    { text: '[06] PROBE    :: 44.100 Hz / 12.55V / 147ms' },
    { text: '' },
    { text: 'FEED REGISTER' },
    { text: 'ADDR    SIZE    FLAG      TYPE          OWNER' },
    { text: '0x0032  24.1MB  LOCKED    AGGREGATOR    /rootfeed' },
    { text: '0xD079   6.8MB  DYNAMIC   FILTER        /then?' },
    { text: '0x2120  17.8MB  IDLE      PROFILE       /shape' },
    { text: '0x1089   0.0MB  NULL      DISCARDED     <free>' },
    { text: '0xB00C   8.1MB  READY     MODULATION', hi: true },
  ];

  const rightLines = [
    { text: 'PRODUCTION HISTORY [v1.0]', head: true },
    { text: '' },
    { text: '  - 7 VERSIONS OF DESIGN' },
    { text: '  - 1 BUILD IN PROGRESS' },
    { text: '  - 1 YEAR OF GAMEDEV' },
    { text: '' },
    { text: '  ***' },
    { text: '' },
    { text: 'SYSTEM FLAGS' },
    { text: '  - MAIN SCRIPT  [edited]: READY', hi: true },
    { text: '  - RSS PERFORM:           DONE', hi: true },
    { text: '  - FILTER and PROFILE:    DONE', hi: true },
    { text: '  - "self-build: NICE"' },
    { text: '  - TIME: .......' },
    { text: '' },
    { text: 'TIMELINE HOOK' },
    { text: '  [0000:0001] - attach_module "unity:blog"' },
    { text: '  [0000:0002] - spawn_thread "filter/?"' },
    { text: '  [0000:0003] - resolve_sync: false' },
    { text: '  [0000:0004] - stream.inject: nullseq' },
    { text: '  [0000:0005] - ok', hi: true },
    { text: '' },
    { text: '/3 - awaiting input_' },
  ];

  const leftEl  = document.getElementById('boot-left');
  const rightEl = document.getElementById('boot-right');
  const bootLogo = document.getElementById('boot-logo');
  const bootTimeouts = [];
  let done = false;


  function highlightLine(text) {
    return text.replace(
      /(\[DONE\]|\[COMPLETE\]|\[READY\]|\bOK\b|\bCOMPLETE\b|\bDONE\b|\bREADY\b)/g,
      '<span class="boot-hi">$1</span>'
    );
  }

  function appendLine(container, item) {
    const d = document.createElement('div');
    if (item.head) d.className = 'boot-line boot-head-line';
    else if (item.sep) d.className = 'boot-line boot-sep-line';
    else if (item.hi) d.className = 'boot-line boot-hi-line';
    else d.className = 'boot-line';
    d.innerHTML = highlightLine(item.text || ' ');
    container.appendChild(d);
  }

  function fadeOverlay() {
    if (done) return;
    done = true;
    if (bootLogo) bootLogo.style.animationPlayState = 'paused';
    overlay.classList.add('fading');
    const t = setTimeout(() => { overlay.style.display = 'none'; }, 420);
    bootTimeouts.push(t);
  }

  function skipBoot() {
    bootTimeouts.forEach(clearTimeout);
    if (done) return;
    done = true;
    if (bootLogo) bootLogo.style.animationPlayState = 'paused';
    overlay.style.transition = 'opacity 0.2s linear';
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.style.display = 'none'; }, 220);
    document.removeEventListener('keydown', skipBoot);
  }

  overlay.addEventListener('click', skipBoot, { once: true });
  document.addEventListener('keydown', skipBoot, { once: true });

  const maxLen = Math.max(leftLines.length, rightLines.length);
  let i = 0;

  function tick() {
    if (done) return;
    if (i < leftLines.length)  appendLine(leftEl,  leftLines[i]);
    if (i < rightLines.length) appendLine(rightEl, rightLines[i]);
    i++;

    if (i >= maxLen) {
      const t = setTimeout(fadeOverlay, 600);
      bootTimeouts.push(t);
      return;
    }
    const delay = 40 + Math.random() * 40;
    const t = setTimeout(tick, delay);
    bootTimeouts.push(t);
  }

  const t0 = setTimeout(tick, 180);
  bootTimeouts.push(t0);
})();

/* ── GOOGLE APPS SCRIPT ENDPOINT ──
   1. Открой https://script.google.com → New project
   2. Вставь содержимое apps-script.gs из этого репо
   3. Deploy → New deployment → Web App → Execute as: Me → Who has access: Anyone
   4. Скопируй URL деплоя и вставь сюда
   ──────────────────────────────────────────────────────────────── */
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwm32gyooNGbH7b10ojEeqtn9SzLpwladXQdxT32Q6WjWjdOysei6Gj3aiobysuSZoa/exec';

/* ── I18N ── */
const i18n = {
  en: {
    'hero.eyebrow':   'SYS_001 // BGDLIB.FEED',
    'hero.title':     'One feed.<br><em>All gamedev.</em>',
    'hero.sub':       '30+ sources. One adaptive feed. Filtered by role, engine and expertise level. Signal, not noise.',
    'hero.cta':       'Notify on launch →',
    'hero.scroll':    'Scroll',
    'about.label':    '[ 002 ] // OVERVIEW',
    'about.title':    'One app.<br>All gamedev.',
    'about.body':     'BGDLib is a mobile RSS aggregator for game developers. Available on Android &amp; iOS, built with .NET MAUI. Aggregates 30+ sources — blogs, forums, YouTube channels, job boards — into one personalized feed filtered by your role, engine, and skill level.',
    'problem.label':  '[ 003 ] // DIAGNOSTIC',
    'problem.title':  'Data overflow.<br>Zero filtering.',
    'problem.body':   'Developers lose 3h/day scanning 30+ tabs manually — Unity Blog, GDC Vault, Reddit, YouTube, Telegram, job boards. No tool aggregates and filters all of it at once.',
    'problem.stat1':  '<strong>Data nodes to monitor daily</strong> — Unity, Godot, GDC Vault, Gamasutra, r/gamedev, job boards, Telegram.',
    'problem.stat2':  '<strong>Hours of resource lost per day</strong> to manual scanning. Reallocate to shipping.',
    'problem.stat3':  '<strong>NULL: tools that filter</strong> by role, engine, and expertise level simultaneously.',
    'problem.stat4':  '<strong>Signal/noise ratio: critical.</strong> A Unity engineer receives Houdini tutorials. System has no operator context.',
    'solution.label': '[ 004 ] // RESPONSE',
    'solution.title': 'Engineered<br>to cut noise.',
    'sol1.name': 'UNIFIED FEED',
    'sol1.text': 'All sources in one place. No tab switching, no manual RSS readers.',
    'sol2.name': 'SMART FILTER',
    'sol2.text': 'Filter by role, engine, and expertise level. Only relevant content reaches you.',
    'sol3.name': 'MOBILE FIRST',
    'sol3.text': 'Read on transit, offline mode, push notifications for critical updates.',
    'audience.label': '[ 005 ] // TARGET OPERATORS',
    'audience.title': 'Who reads.',
    'aud1.name': 'ALEXEY',   'aud1.meta': '19 // IT STUDENT',
    'aud1.pain': '<strong>Pain:</strong> Wastes an hour browsing sites daily.',
    'aud1.goal': '<strong>Goal:</strong> One source for everything.',
    'aud2.name': 'DMITRY',   'aud2.meta': '24 // INDIE SOLO DEV',
    'aud2.pain': '<strong>Pain:</strong> Finds out about news too late.',
    'aud2.goal': '<strong>Goal:</strong> Never miss what matters.',
    'aud3.name': 'MARIA',    'aud3.meta': '22 // SELF-TAUGHT',
    'aud3.pain': '<strong>Pain:</strong> Doesn\'t know what to read.',
    'aud3.goal': '<strong>Goal:</strong> Enter the professional stream.',
    'features.label': '[ 006 ] // MODULES',
    'features.title': 'Configured<br>for your stack.',
    'features.body':  'Six modules. Zero bloat. Precision output filtered to your workflow.',
    'feat1.title': 'FEED.CORE',       'feat1.badge': '// PRIMARY',
    'feat1.desc': 'RSS aggregation from 30+ nodes: Unity, Godot, GDC, Gamasutra, r/gamedev. Single adaptive stream. One scroll.',
    'feat2.title': 'ROLE FILTER',
    'feat2.desc': 'Matrix filter by role (programmer / artist / designer), engine (Unity, Unreal, Godot), and content type (tutorial, news, postmortem, job). Stack-aware output.',
    'feat3.title': 'LOCAL CACHE',
    'feat3.desc': 'Articles written to local storage on save. Offline reads, zero re-fetches. Queue persists across sessions.',
    'feat4.title': 'AUTO TRANSLATE',
    'feat4.desc': 'One-tap translation. Result cached server-side — no redundant API calls on repeated content.',
    'feat5.title': 'PUSH PROTOCOL',
    'feat5.desc': 'Notifications fire only on matching subscription events. No noise. Selective delivery, not broadcast.',
    'feat6.title': 'OPERATOR CONFIG',
    'feat6.desc': 'Set role, engine, skill tier. Feed recalibrates. Config persists across sessions.',
    'sources.label':  '[ 007 ] // DATA NODES',
    'sources.title':  'All nodes.<br>One endpoint.',
    'sources.body':   'BGDLib aggregates 30+ active data nodes — every major channel where gamedev knowledge is published.',
    'sources.more':   '+ nodes pending',
    'cta.label':      '[ 008 ] // STATUS: PENDING',
    'cta.title':      'Zero noise.<br><em>Full signal.</em>',
    'cta.sub':        'BGDLib is in active development. Target deployment: Android + iOS. ETA 2026.',
    'cta.android': 'Android', 'cta.ios': 'iOS',
    'survey.q1': 'Are you a game developer?',
    'survey.q1.yes': 'Yes', 'survey.q1.no': 'No', 'survey.q1.learning': 'Still learning',
    'survey.q2': 'Which engine do you use?',
    'survey.q3': 'Time spent searching for materials daily?',
    'survey.q3.lt30': '< 30 min', 'survey.q3.30to60': '30–60 min', 'survey.q3.gt60': '> 1 hour',
    'survey.q4': 'Which sources do you follow?',
    'survey.q5': 'Would a unified feed be useful?',
    'survey.q5.yes': 'Yes', 'survey.q5.no': 'No', 'survey.q5.maybe': 'Maybe',
    'survey.q6': 'Preferred content format?',
    'survey.q6.articles': 'Articles', 'survey.q6.video': 'Video', 'survey.q6.both': 'Both',
    'survey.q7': 'Do you need offline mode?',
    'survey.q7.yes': 'Yes', 'survey.q7.no': 'No',
    'survey.q8': 'Email for launch notification',
    'survey.other': 'Other',
    'survey.submit': 'Submit →',
    'survey.success': 'Signal received. ✓',
    'survey.error': 'Transmission failed. Try again.',
    'footer.copy': '© 2026 BGDLib — Babylonian GameDev Library',
  },
  ru: {
    'hero.eyebrow':   'SYS_001 // BGDLIB.FEED',
    'hero.title':     'Один фид.<br><em>Весь геймдев.</em>',
    'hero.sub':       '30+ источников. Один адаптивный фид. Фильтрация по роли, движку и уровню. Сигнал без шума.',
    'hero.cta':       'Уведомить о запуске →',
    'hero.scroll':    'Вниз',
    'about.label':    '[ 002 ] // ОБЗОР',
    'about.title':    'Одно приложение.<br>Весь геймдев.',
    'about.body':     'BGDLib — мобильный RSS-агрегатор для разработчиков игр. Android и iOS, стек .NET MAUI. 30+ источников — блоги, форумы, YouTube-каналы, вакансии — в одной персонализированной ленте с фильтрацией по роли, движку и уровню.',
    'problem.label':  '[ 003 ] // ДИАГНОСТИКА',
    'problem.title':  'Переполнение данных.<br>Фильтров нет.',
    'problem.body':   'Разработчики теряют 3ч/день на ручной скан 30+ вкладок — Unity Blog, GDC Vault, Reddit, YouTube, Telegram, вакансии. Ни один инструмент не агрегирует и не фильтрует всё сразу.',
    'problem.stat1':  '<strong>Узлов данных для ежедневного мониторинга</strong> — Unity, Godot, GDC Vault, Gamasutra, r/gamedev, вакансии, Telegram.',
    'problem.stat2':  '<strong>Часов ресурса теряется ежедневно</strong> на ручной скан. Перераспредели на разработку.',
    'problem.stat3':  '<strong>NULL: инструментов</strong>, фильтрующих по роли, движку и уровню одновременно.',
    'problem.stat4':  '<strong>Соотношение сигнал/шум: критическое.</strong> Unity-разработчик получает туториалы по Houdini. Система не имеет контекста оператора.',
    'solution.label': '[ 004 ] // РЕШЕНИЕ',
    'solution.title': 'Разработан<br>для фильтрации.',
    'sol1.name': 'ЕДИНАЯ ЛЕНТА',
    'sol1.text': 'Все источники в одном месте. Никаких вкладок, никаких ручных RSS-ридеров.',
    'sol2.name': 'УМНЫЙ ФИЛЬТР',
    'sol2.text': 'Фильтрация по роли, движку и уровню. До тебя доходит только релевантный контент.',
    'sol3.name': 'МОБИЛЬНЫЙ',
    'sol3.text': 'Читай в транспорте, офлайн-режим, пуш-уведомления о важных обновлениях.',
    'audience.label': '[ 005 ] // ЦЕЛЕВАЯ АУДИТОРИЯ',
    'audience.title': 'Кто читает.',
    'aud1.name': 'АЛЕКСЕЙ',  'aud1.meta': '19 // СТУДЕНТ IT',
    'aud1.pain': '<strong>Боль:</strong> тратит час на обход сайтов ежедневно.',
    'aud1.goal': '<strong>Цель:</strong> один источник для всего.',
    'aud2.name': 'ДМИТРИЙ',  'aud2.meta': '24 // INDIE СОЛО',
    'aud2.pain': '<strong>Боль:</strong> узнаёт новости с опозданием.',
    'aud2.goal': '<strong>Цель:</strong> не пропускать важное.',
    'aud3.name': 'МАРИЯ',    'aud3.meta': '22 // САМОУЧКА',
    'aud3.pain': '<strong>Боль:</strong> не знает, что читать.',
    'aud3.goal': '<strong>Цель:</strong> попасть в профессиональный поток.',
    'features.label': '[ 006 ] // МОДУЛИ',
    'features.title': 'Настроен<br>под твой стек.',
    'features.body':  'Шесть модулей. Ноль лишнего. Точечный вывод под твой рабочий процесс.',
    'feat1.title': 'FEED.CORE', 'feat1.badge': '// ЯДРО',
    'feat1.desc': 'RSS-агрегация из 30+ узлов: Unity, Godot, GDC, Gamasutra, r/gamedev. Единый адаптивный поток. Один скролл.',
    'feat2.title': 'МАТРИЦА ФИЛЬТРОВ',
    'feat2.desc': 'Фильтрация по роли (программист / художник / дизайнер), движку (Unity, Unreal, Godot) и типу контента (туториал, новость, постмортем, вакансия). Стек-зависимый вывод.',
    'feat3.title': 'ЛОКАЛЬНЫЙ КЭШ',
    'feat3.desc': 'Статьи записываются в локальное хранилище. Чтение офлайн, без повторных запросов. Очередь сохраняется между сессиями.',
    'feat4.title': 'АВТОПЕРЕВОД',
    'feat4.desc': 'Перевод по одному тапу. Результат кэшируется на сервере — повторные API-вызовы исключены.',
    'feat5.title': 'PUSH-ПРОТОКОЛ',
    'feat5.desc': 'Уведомления срабатывают только при совпадении с подпиской. Без шума. Адресная доставка, не широковещание.',
    'feat6.title': 'ПРОФИЛЬ ОПЕРАТОРА',
    'feat6.desc': 'Задай роль, движок, уровень. Фид перекалибруется. Конфигурация сохраняется между сессиями.',
    'sources.label':  '[ 007 ] // УЗЛЫ ДАННЫХ',
    'sources.title':  'Все узлы.<br>Один эндпоинт.',
    'sources.body':   'BGDLib агрегирует 30+ активных узлов данных — все ключевые каналы публикации геймдев-знаний.',
    'sources.more':   '+ узлы добавляются',
    'cta.label':      '[ 008 ] // СТАТУС: ОЖИДАНИЕ',
    'cta.title':      'Ноль шума.<br><em>Чистый сигнал.</em>',
    'cta.sub':        'BGDLib в активной разработке. Платформы: Android + iOS. Запуск: 2026.',
    'cta.android': 'Android', 'cta.ios': 'iOS',
    'survey.q1': 'Ты разработчик игр?',
    'survey.q1.yes': 'Да', 'survey.q1.no': 'Нет', 'survey.q1.learning': 'Только учусь',
    'survey.q2': 'Какой движок используешь?',
    'survey.q3': 'Сколько времени тратишь на поиск материалов в день?',
    'survey.q3.lt30': '< 30 мин', 'survey.q3.30to60': '30–60 мин', 'survey.q3.gt60': '> 1 часа',
    'survey.q4': 'Какие источники читаешь?',
    'survey.q5': 'Была бы полезна единая лента?',
    'survey.q5.yes': 'Да', 'survey.q5.no': 'Нет', 'survey.q5.maybe': 'Возможно',
    'survey.q6': 'Какой формат предпочитаешь?',
    'survey.q6.articles': 'Статьи', 'survey.q6.video': 'Видео', 'survey.q6.both': 'Оба',
    'survey.q7': 'Нужен офлайн-режим?',
    'survey.q7.yes': 'Да', 'survey.q7.no': 'Нет',
    'survey.q8': 'Email для уведомления о запуске',
    'survey.other': 'Другое',
    'survey.submit': 'Отправить →',
    'survey.success': 'Сигнал принят. ✓',
    'survey.error': 'Сбой передачи. Попробуй снова.',
    'footer.copy': '© 2026 BGDLib — Babylonian GameDev Library',
  },
};

let currentLang = 'en';
let langInitialized = false;

function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const translatables = langInitialized
    ? [...document.querySelectorAll('[data-t]')].filter(el => !el.classList.contains('lang-btn'))
    : [];

  function updateText() {
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.getAttribute('data-t');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    const t = document.querySelector('.hero-title');
    const c = document.querySelector('.hero-title-clone');
    if (c && t) c.innerHTML = t.innerHTML;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    document.documentElement.lang = lang;
    langInitialized = true;
  }

  if (!translatables.length || reduced) {
    updateText();
    return;
  }

  translatables.forEach(el => {
    el.style.transition = 'opacity 0.15s ease';
    el.style.opacity = '0';
  });
  setTimeout(() => {
    updateText();
    translatables.forEach(el => { el.style.opacity = '1'; });
    setTimeout(() => translatables.forEach(el => {
      el.style.transition = '';
      el.style.opacity = '';
    }), 160);
  }, 150);
}

document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => applyLang(btn.dataset.lang))
);
applyLang(currentLang);

/* ── SCROLL PROGRESS BAR ── */
const pb = document.getElementById('pb');
let rafPb = null;
window.addEventListener('scroll', () => {
  if (!rafPb) {
    rafPb = requestAnimationFrame(() => {
      const p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      pb.style.width = Math.min(p * 100, 100) + '%';
      rafPb = null;
    });
  }
}, { passive: true });

/* ── HERO PARALLAX ── */
const heroInner = document.querySelector('.hero-inner');
let rafPx = null, lastY = 0;
window.addEventListener('scroll', () => {
  lastY = window.scrollY;
  if (!rafPx) {
    rafPx = requestAnimationFrame(() => {
      if (heroInner && lastY < window.innerHeight * 1.5 && window.innerWidth > 768) {
        heroInner.style.transform = `translateY(${lastY * 0.13}px)`;
      }
      rafPx = null;
    });
  }
}, { passive: true });

/* ── COUNTER ANIMATION ── */
function animateNum(el) {
  const raw = el.dataset.raw;
  const suffix = el.dataset.suffix || '';
  if (raw === 'inf') {
    let n = 0;
    const seq = ['∞','8','∞','∞','∞'];
    const id = setInterval(() => {
      el.textContent = seq[n % seq.length];
      if (++n > 14) { clearInterval(id); el.textContent = '∞'; }
    }, 55);
    return;
  }
  const num = parseInt(raw, 10);
  if (isNaN(num)) return;
  if (num === 0) {
    let n = 0;
    const id = setInterval(() => {
      el.textContent = (n < 10 ? Math.floor(Math.random() * 9 + 1) : 0) + suffix;
      if (++n > 12) { clearInterval(id); el.textContent = '0' + suffix; }
    }, 48);
    return;
  }
  const dur = 900, t0 = performance.now();
  (function step(now) {
    const p = Math.min((now - t0) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(e * num) + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}

/* ── SOURCE TAGS STAGGER ── */
const srcCloud = document.getElementById('srcCloud');
if (srcCloud) {
  const srcTags = [...srcCloud.querySelectorAll('.src-tag')];
  srcTags.forEach(t => { t.style.opacity = '0'; t.style.transform = 'translateY(10px)'; });
  const srcIO = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      srcTags.forEach((tag, i) => {
        setTimeout(() => {
          tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease, border-color 0.12s linear, color 0.12s linear, background 0.12s linear';
          tag.style.opacity = '1';
          tag.style.transform = '';
        }, 80 + i * 50);
      });
      srcIO.disconnect();
    }
  }, { threshold: 0.2 });
  srcIO.observe(srcCloud);
}

/* ── INTERSECTION OBSERVER ── */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    setTimeout(() => {
      el.classList.add('in');
      const label = el.querySelector ? el.querySelector('.s-label') : null;
      if (label) label.classList.add('in');
      const num = el.querySelector ? el.querySelector('.p-num[data-raw]') : null;
      if (num) animateNum(num);
    }, i * 50);
    io.unobserve(el);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.querySelectorAll('.s-label').forEach(el => {
  const labelIO = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { el.classList.add('in'); labelIO.disconnect(); }
  }, { threshold: 0.5 });
  labelIO.observe(el);
});

/* ── RETROWAVE BACKGROUND ── */
(function initRetrowave() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, {
    position: 'fixed', inset: '0', zIndex: '0',
    pointerEvents: 'none', opacity: '0.62',
  });
  document.body.insertBefore(canvas, document.body.firstChild);
  const ctx = canvas.getContext('2d');

  let W, H, vpX, vpY;
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    vpX = W * 0.5;
    vpY = H * 0.46;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  function hexToRgb(hex) {
    const h = hex.replace(/[^0-9a-f]/gi, '').slice(0, 6);
    return {
      r: parseInt(h.slice(0, 2), 16) || 234,
      g: parseInt(h.slice(2, 4), 16) || 2,
      b: parseInt(h.slice(4, 6), 16) || 126,
    };
  }

  const accentRaw = getComputedStyle(document.documentElement)
    .getPropertyValue('--accent').trim();
  const rgb = hexToRgb(accentRaw);

  function col(a) {
    return `rgba(${rgb.r},${rgb.g},${rgb.b},${Math.min(Math.max(a, 0), 1)})`;
  }

  /* ── STARS ── */
  const STARS = Array.from({ length: 90 }, () => ({
    x: Math.random(),
    y: Math.random() * 0.44,
    r: Math.random() * 1.1 + 0.25,
    a: Math.random() * 0.55 + 0.15,
    ph: Math.random() * Math.PI * 2,
    spd: 0.0008 + Math.random() * 0.0012,
  }));

  /* ── MOUNTAIN MESH ── */
  const M_COLS = 24;
  const M_ROWS = 10;
  const mPeakDefs = [
    { cx: 0.40, amp: 1.00, w: 3.0, driftX: 0.07, driftA: 0.18, driftW: 0.0004, ph: 0.00 },
    { cx: 0.62, amp: 0.60, w: 3.5, driftX: 0.05, driftA: 0.22, driftW: 0.0003, ph: 1.57 },
    { cx: 0.28, amp: 0.50, w: 4.0, driftX: 0.08, driftA: 0.25, driftW: 0.0005, ph: 3.14 },
    { cx: 0.78, amp: 0.45, w: 4.5, driftX: 0.06, driftA: 0.20, driftW: 0.0006, ph: 4.71 },
    { cx: 0.15, amp: 0.35, w: 5.0, driftX: 0.09, driftA: 0.30, driftW: 0.0004, ph: 2.40 },
    { cx: 0.88, amp: 0.30, w: 5.5, driftX: 0.07, driftA: 0.28, driftW: 0.0003, ph: 0.80 },
  ];
  function mShapeH(tc, t) {
    let h = 0;
    for (const p of mPeakDefs) {
      const cx  = p.cx  + Math.sin(t * p.driftW + p.ph) * p.driftX;
      const amp = p.amp + Math.sin(t * p.driftW * 1.3 + p.ph + 0.7) * p.driftA;
      h = Math.max(h, amp * Math.exp(-Math.pow((tc - cx) * p.w, 2)));
    }
    return h * Math.min(tc * 5, (1 - tc) * 5, 1);
  }
  function calcMVerts(t) {
    const rows = [];
    for (let r = 0; r <= M_ROWS; r++) {
      const row = [];
      for (let c = 0; c <= M_COLS; c++) {
        const tc = c / M_COLS;
        const tr = r / M_ROWS;
        const base = mShapeH(tc, t);
        const ripple = Math.sin(t * 0.0006 + c * 0.55 + r * 0.9) * 0.025
                     + Math.sin(t * 0.0009 + c * 1.1  + r * 1.6) * 0.015;
        const osc = ripple * Math.sqrt(tr);
        const h = (base + osc) * tr * 0.36;
        row.push({ x: tc * W, y: vpY - Math.max(0, h) * H });
      }
      rows.push(row);
    }
    return rows;
  }

  /* ── FLOOR GRID ── */
  const FOCAL = 0.30;
  const V_COUNT = 11;
  let cameraZ = 0;

  function drawStars(t) {
    for (const s of STARS) {
      const twinkle = 0.65 + Math.sin(t * s.spd + s.ph) * 0.35;
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = col(s.a * twinkle * 0.55);
      ctx.fill();
    }
  }

  function drawMountains(t) {
    const verts = calcMVerts(t);

    /* interior mesh — batched per row, dim at base → bright at top */
    for (let r = 0; r < M_ROWS; r++) {
      const rf    = r / M_ROWS;
      const alpha = 0.07 + rf * 0.32;
      const lw    = 0.35 + rf * 0.45;

      /* horizontals */
      ctx.beginPath();
      for (let c = 0; c < M_COLS; c++) {
        ctx.moveTo(verts[r][c].x,   verts[r][c].y);
        ctx.lineTo(verts[r][c+1].x, verts[r][c+1].y);
      }
      ctx.strokeStyle = col(alpha);
      ctx.lineWidth = lw;
      ctx.stroke();

      /* verticals */
      ctx.beginPath();
      for (let c = 0; c <= M_COLS; c++) {
        ctx.moveTo(verts[r][c].x,   verts[r][c].y);
        ctx.lineTo(verts[r+1][c].x, verts[r+1][c].y);
      }
      ctx.strokeStyle = col(alpha);
      ctx.lineWidth = lw;
      ctx.stroke();

      /* diagonals */
      ctx.beginPath();
      for (let c = 0; c < M_COLS; c++) {
        ctx.moveTo(verts[r][c+1].x, verts[r][c+1].y);
        ctx.lineTo(verts[r+1][c].x, verts[r+1][c].y);
      }
      ctx.strokeStyle = col(alpha * 0.45);
      ctx.lineWidth = lw * 0.55;
      ctx.stroke();
    }

    /* silhouette — wide glow pass then crisp line */
    ctx.beginPath();
    for (let c = 0; c <= M_COLS; c++) {
      const v = verts[M_ROWS][c];
      c === 0 ? ctx.moveTo(v.x, v.y) : ctx.lineTo(v.x, v.y);
    }
    ctx.strokeStyle = col(0.28);
    ctx.lineWidth = 4.5;
    ctx.stroke();

    ctx.beginPath();
    for (let c = 0; c <= M_COLS; c++) {
      const v = verts[M_ROWS][c];
      c === 0 ? ctx.moveTo(v.x, v.y) : ctx.lineTo(v.x, v.y);
    }
    ctx.strokeStyle = col(0.82);
    ctx.lineWidth = 1.0;
    ctx.stroke();
  }

  function drawHorizonGlow() {
    const g = ctx.createLinearGradient(0, vpY - 5, 0, vpY + 6);
    g.addColorStop(0, col(0));
    g.addColorStop(0.5, col(0.75));
    g.addColorStop(1, col(0));
    ctx.fillStyle = g;
    ctx.fillRect(0, vpY - 5, W, 11);
  }

  function drawFloor(dt) {
    cameraZ += dt * 0.00115;

    const floorH = H - vpY;
    const Z_NEAR = 0.16, Z_FAR = 16;

    /* horizontal lines — true perspective scroll */
    const first = Math.floor(cameraZ + Z_NEAR);
    const last  = Math.ceil(cameraZ + Z_FAR);
    for (let iz = first; iz <= last; iz++) {
      const zr = iz - cameraZ;
      if (zr < 0.01) continue;
      const y = vpY + FOCAL * floorH / zr;
      if (y > H + 2 || y < vpY) continue;
      const pf = (y - vpY) / floorH;
      ctx.beginPath();
      ctx.moveTo(vpX - pf * W * 0.52, y);
      ctx.lineTo(vpX + pf * W * 0.52, y);
      ctx.strokeStyle = col(pf * 0.52);
      ctx.lineWidth = pf * 1.1 + 0.2;
      ctx.stroke();
    }

    /* vertical fan lines */
    for (let i = 0; i <= V_COUNT; i++) {
      const t = i / V_COUNT;
      const distFromCenter = Math.abs(t - 0.5) * 2;
      const alpha = (1 - distFromCenter * 0.6) * 0.3;
      ctx.beginPath();
      ctx.moveTo(vpX, vpY);
      ctx.lineTo(t * W, H);
      ctx.strokeStyle = col(alpha);
      ctx.lineWidth = 0.7;
      ctx.stroke();
    }
  }

  let lastT = 0;
  function frame(t) {
    const dt = Math.min(t - lastT, 50);
    lastT = t;
    ctx.clearRect(0, 0, W, H);
    drawStars(t);
    drawMountains(t);
    drawHorizonGlow();
    drawFloor(dt);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(t => { lastT = t; requestAnimationFrame(frame); });
})();

/* ── TEXT SCRAMBLE ── */
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!/<>[]|_\\';
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scrambleEl(el) {
  if (prefersReduced) return;
  const STEPS = 26, DURATION = 750;
  const nodes = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
  let n;
  while ((n = walker.nextNode())) {
    if (n.textContent.trim()) nodes.push({ n, orig: n.textContent });
  }
  if (!nodes.length) return;
  let step = 0;
  const id = setInterval(() => {
    step++;
    const p = step / STEPS;
    nodes.forEach(({ n, orig }) => {
      let out = '';
      for (let i = 0; i < orig.length; i++) {
        const ch = orig[i];
        if (ch === ' ' || ch === '\n') { out += ch; continue; }
        out += Math.random() < p * 1.5
          ? ch
          : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
      n.textContent = out;
    });
    if (step >= STEPS) {
      nodes.forEach(({ n, orig }) => { n.textContent = orig; });
      clearInterval(id);
    }
  }, DURATION / STEPS);
}

const scrambleIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    setTimeout(() => scrambleEl(e.target), 120);
    scrambleIO.unobserve(e.target);
  });
}, { threshold: 0.3 });

document.querySelectorAll('.s-title').forEach(el => scrambleIO.observe(el));

/* ── SURVEY FORM ── */
(function initSurvey() {
  const form    = document.getElementById('survey-form');
  const success = document.getElementById('survey-success');
  const error   = document.getElementById('survey-error');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn      = form.querySelector('.survey-submit');
    const origText = btn.innerHTML;
    btn.disabled   = true;
    btn.innerHTML  = '[ TRANSMITTING... ]';
    success.hidden = true;
    error.hidden   = true;

    /* Собираем данные — чекбоксы объединяем через запятую */
    const fd   = new FormData(form);
    const data = { timestamp: new Date().toISOString() };
    for (const [key, val] of fd.entries()) {
      if (data[key]) {
        data[key] = Array.isArray(data[key]) ? [...data[key], val] : [data[key], val];
      } else {
        data[key] = val;
      }
    }
    for (const key in data) {
      if (Array.isArray(data[key])) data[key] = data[key].join(', ');
    }

    /* Пока URL не вставлен — dev-режим, показываем success локально */
    if (!APPS_SCRIPT_URL) {
      setTimeout(() => { form.hidden = true; success.hidden = false; }, 600);
      return;
    }

    try {
      /* Apps Script требует text/plain из-за CORS preflight */
      await fetch(APPS_SCRIPT_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'text/plain' },
        body:    JSON.stringify(data),
      });
      form.hidden    = true;
      success.hidden = false;
    } catch {
      btn.disabled  = false;
      btn.innerHTML = origText;
      error.hidden  = false;
    }
  });
})();
