/* ============================================================
   통찰·유머·감동 — Application Logic
   Day detection · Navigation · Weekly balance · Rating system
   ============================================================ */

(function () {
  'use strict';

  /* ── Constants ── */
  const DAY_NAMES   = { 1: '월요일', 2: '화요일', 3: '수요일', 4: '목요일', 5: '금요일', 6: '토요일' };
  const DAY_SHORT   = { 1: '월', 2: '화', 3: '수', 4: '목', 5: '금', 6: '토' };
  /* ── Gemini Imagen 3 스타일 프롬프트 ── */
  const IMG_STYLE = {
    loose_pen: 'Rendered as a loose gestural pen drawing: confident expressive ink strokes, sketchy editorial line work, crosshatching for shadow, spontaneous hand-drawn quality on warm cream paper.',
    watercolor: 'Rendered as a soft watercolor wash illustration: translucent layered pigments, wet-on-wet bleeding color edges, luminous paper texture showing through, organic gentle color pools, delicate impressionistic mood.',
    impasto:    'Rendered with impasto oil paint accents: thick sculptural brushwork, palette knife texture marks, visible paint body with tactile relief surface, rich saturated colors, gestural expressionist energy.',
    mixed:      'Rendered as mixed media editorial art: loose confident pen line drawing as structural skeleton, soft watercolor wash fills for color and atmosphere, selective impasto texture accents on focal points. Layered expressive fine art style.'
  };
  const IMG_TONE = {
    '통찰': 'contemplative, quiet, thought-provoking visual metaphor',
    '유머': 'playful, light, witty visual irony',
    '감동': 'warm, tender, emotionally resonant, soft light'
  };
  const TYPE_CLASS  = { '통찰': 'insight', '유머': 'humor', '감동': 'emotion' };
  const TYPE_ICON   = { '통찰': '💡', '유머': '😄', '감동': '❤️' };

  /* JS 요일 → 1(월)~6(토), 일요일은 토요일로 fallback */
  const jsDay   = new Date().getDay();
  const todayKey = (jsDay >= 1 && jsDay <= 6) ? jsDay : 6;

  /* 순차 게재 — 새 요일 추가 시 여기에만 추가하면 됨 */
  const ACTIVE_DAYS = [1, 2, 3, 4, 5, 6];

  /* 오늘 요일이 게재 중이면 오늘, 아니면 가장 최근 게재 요일 */
  const _defaultDay = ACTIVE_DAYS.includes(todayKey)
    ? todayKey
    : Math.max(...ACTIVE_DAYS.filter(d => d <= todayKey), ACTIVE_DAYS[0]);

  const _hashDay = parseInt((location.hash.match(/^#day-([1-6])$/) || [])[1], 10);
  let activeDay = (ACTIVE_DAYS.includes(_hashDay)) ? _hashDay : _defaultDay;
  let activeSubmission = null; /* 현재 표시 중인 독자 제출글 */
  let activeArchive    = null; /* { weekIdx, day } or null — 아카이브 보기 상태 */

  /* ──────────────────────────────────────────────
     STORY STAGING  — 큐레이터 이야기 편집 & 확정
     localStorage에 저장, data.js보다 우선 표시
  ────────────────────────────────────────────── */
  const STAGING_KEY    = 'story-staging-v2';
  const HISTORY_KEY    = 'story-published-history-v1';

  /* ── 게재 이력 관리 ── */
  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; } catch { return []; }
  }

  function addToHistory(day, storyData) {
    const all = loadHistory();
    const title = (storyData.title || '').trim().toLowerCase();
    const url   = storyData.source && storyData.source.url
      ? storyData.source.url.trim().toLowerCase() : null;
    /* 이미 동일 항목이 있으면 타임스탬프만 갱신 */
    const idx = all.findIndex(h =>
      h.title === title || (url && h.sourceUrl && h.sourceUrl === url)
    );
    const entry = {
      title:       storyData.title || '',
      sourceUrl:   url,
      day,
      category:    storyData.category || '',
      publishedAt: new Date().toISOString().slice(0, 10)
    };
    if (idx >= 0) { all[idx] = entry; } else { all.unshift(entry); }
    localStorage.setItem(HISTORY_KEY, JSON.stringify(all));
  }

  /* 중복 여부 확인 — 매칭된 이력 항목 반환, 없으면 null */
  function checkDuplicate(title, sourceUrl) {
    const all = loadHistory();
    const t   = (title || '').trim().toLowerCase();
    const u   = (sourceUrl || '').trim().toLowerCase();
    if (!t) return null;
    return all.find(h =>
      h.title === t ||
      (u && h.sourceUrl && h.sourceUrl === u)
    ) || null;
  }

  /* 페이지 최초 로드 시 data.js 내 기존 이야기들을 이력에 등록
     (localStorage가 비어있을 때만 실행) */
  function initHistoryFromStories() {
    if (loadHistory().length > 0) return;
    Object.keys(STORIES).forEach(day => {
      const s = STORIES[day];
      if (s && s.title) addToHistory(Number(day), s);
    });
  }

  /* 1주차→2주차 전환 시 staging image 경로 자동 마이그레이션 */
  (function migrateStagingImagePaths() {
    const MIG_KEY = 'story-staging-image-mig-v1';
    if (localStorage.getItem(MIG_KEY)) return;
    const MAP = {
      'images/story-mon.png': 'images/story-semmelweis.png',
      'images/story-tue.png': 'images/story-dostoevsky.png',
      'images/story-wed.png': 'images/story-epictetus.png',
      'images/story-thu.png': 'images/story-pale-blue-dot.png',
      'images/story-fri.png': 'images/story-feynman.png',
    };
    try {
      const all = JSON.parse(localStorage.getItem(STAGING_KEY)) || {};
      let changed = false;
      Object.keys(all).forEach(day => {
        const s = all[day];
        if (!s || !s.story) return;
        const archiveWeek = STORY_ARCHIVE[0];
        if (!archiveWeek) return;
        const archiveStory = archiveWeek.stories[day];
        if (archiveStory && s.story.title === archiveStory.title && MAP.hasOwnProperty(s.story.image)) {
          s.story.image = MAP[s.story.image];
          changed = true;
        }
      });
      if (changed) localStorage.setItem(STAGING_KEY, JSON.stringify(all));
    } catch (e) { /* ignore */ }
    localStorage.setItem(MIG_KEY, '1');
  })();

  /* 주차 전환 시 스테이징 자동 만료
     STORIES[day].title이 staging[day].story.title과 다르면 → 이전 주 스테이징 → 삭제 */
  (function clearStaleStaging() {
    try {
      const all = JSON.parse(localStorage.getItem(STAGING_KEY)) || {};
      let changed = false;
      Object.keys(all).forEach(day => {
        const s = all[day];
        if (!s || !s.story || !s.story.title) return;
        const current = STORIES[day];
        if (current && s.story.title !== current.title) {
          delete all[day];
          changed = true;
        }
      });
      if (changed) localStorage.setItem(STAGING_KEY, JSON.stringify(all));
    } catch (e) { /* ignore */ }
  })();

  function loadAllStaging() {
    try { return JSON.parse(localStorage.getItem(STAGING_KEY)) || {}; } catch { return {}; }
  }
  function loadStaging(day) { return loadAllStaging()[day] || null; }
  function saveStaging(day, data) {
    const all = loadAllStaging();
    all[day] = { ...data, updatedAt: new Date().toISOString().slice(0, 10) };
    localStorage.setItem(STAGING_KEY, JSON.stringify(all));
  }
  function clearStaging(day) {
    const all = loadAllStaging();
    delete all[day];
    localStorage.setItem(STAGING_KEY, JSON.stringify(all));
  }

  /* Merge staged story over base data.js story */
  function getDisplayStory(day) {
    if (activeArchive) return STORY_ARCHIVE[activeArchive.weekIdx].stories[activeArchive.day];
    const staged = loadStaging(day);
    if (staged && staged.story) return { ...STORIES[day], ...staged.story };
    return STORIES[day];
  }

  /* ── LocalStorage: Source ratings ── */
  const RATING_KEY  = 'curator-ratings-v2';
  function loadAllRatings()           { try { return JSON.parse(localStorage.getItem(RATING_KEY)) || {}; } catch { return {}; } }
  function saveSourceRating(id, data) {
    const all = loadAllRatings();
    all[id] = { ...(all[id] || {}), ...data, updated: new Date().toISOString().slice(0,10) };
    localStorage.setItem(RATING_KEY, JSON.stringify(all));
  }
  function getSourceRating(id) { const all = loadAllRatings(); return all[id] || {}; }

  /* Source type icons */
  const SRC_TYPE = {
    website:    { icon: '🌐', label: '웹사이트' },
    youtube:    { icon: '▶️', label: 'YouTube' },
    podcast:    { icon: '🎙️', label: '팟캐스트' },
    newsletter: { icon: '📧', label: '뉴스레터' },
    reddit:     { icon: '💬', label: '커뮤니티' }
  };

  /* ── Week progress ── */
  function calcWeek() {
    const diff  = Math.max(0, new Date() - EXPLORE_START);
    const weeks = Math.ceil(diff / (7 * 24 * 60 * 60 * 1000));
    return Math.min(EXPLORE_WEEKS, Math.max(1, weeks));
  }

  /* ──────────────────────────────────────────────
     RENDER: Weekly Balance Bar
     규칙: 매주 5일 중 통찰·유머·감동 각 최소 1회
  ────────────────────────────────────────────── */
  function renderWeeklyBar() {
    const el = document.getElementById('weeklyBar');
    if (!el) return;

    /* Day pills */
    const daysHtml = ACTIVE_DAYS.map(d => {
      const pt  = STORIES[d].primaryType;
      const cls = TYPE_CLASS[pt] || '';
      const ico = TYPE_ICON[pt]  || '';
      const isActive = d === activeDay;
      return `
        <button class="wday-item${isActive ? ' wday-active' : ''}" data-day="${d}"
                aria-label="${DAY_NAMES[d]} — ${pt}">
          <span class="wday-dot dot-${cls}"></span>
          ${DAY_SHORT[d]}&thinsp;${ico}${pt}
        </button>`;
    }).join('');

    el.innerHTML = `
      <div class="container">
        <div class="weekly-bar-inner">
          <span class="weekly-bar-label">이번 주</span>
          <div class="weekly-bar-days">${daysHtml}</div>
        </div>
      </div>`;

    /* Attach click on wday-item */
    el.querySelectorAll('.wday-item[data-day]').forEach(btn => {
      btn.addEventListener('click', () => setActiveDay(parseInt(btn.dataset.day, 10)));
    });
  }

  /* ── RENDER: Current day label ── */
  function renderDayLabel(day) {
    const el = document.getElementById('currentDayLabel');
    if (!el) return;
    const isToday = day === todayKey;
    const story   = getDisplayStory(day);
    const staged  = loadStaging(day);
    const stageMark = staged ? (staged.status === 'confirmed' ? ' ✅' : ' ⏺') : '';
    el.textContent = '';
  }

  /* ── RENDER: Illustration ── */
  function renderIllustration(day) {
    const area = document.getElementById('illustrationArea');
    if (!area) return;
    const story = getDisplayStory(day);
    if (!story.image) {
      area.innerHTML = ILLUSTRATIONS[story.svgKey] || '';
      return;
    }
    const img   = document.createElement('img');
    img.alt     = story.title + ' 일러스트';
    img.src     = story.image;
    img.loading = 'lazy';
    img.onerror = () => { area.innerHTML = ILLUSTRATIONS[story.svgKey] || ''; };
    area.innerHTML = '';
    area.appendChild(img);
  }

  /* ── RENDER: Story badges ── */
  function renderBadges(day) {
    const el = document.getElementById('storyBadges');
    if (!el) return;
    const story = getDisplayStory(day);
    const pt    = story.primaryType;

    /* Primary type badge (큰 것, 먼저) */
    let html = '';
    if (pt) {
      const cls = TYPE_CLASS[pt] || '';
      html += `<span class="badge badge-primary-${cls}">${TYPE_ICON[pt]} ${pt}</span>`;
    }
    /* Day/category badge */
    html += `<span class="badge badge-day">${story.category}</span>`;
    /* Additional type badges (secondary) */
    story.types.filter(t => t !== pt).forEach(t => {
      const cls = TYPE_CLASS[t] || '';
      if (cls) html += `<span class="badge badge-${cls}">${t}</span>`;
    });
    el.innerHTML = html;
  }

  /* ── RENDER: Story content ── */
  function renderStory(day) {
    const titleEl = document.getElementById('storyTitle');
    const bodyEl  = document.getElementById('storyBody');
    if (!titleEl || !bodyEl) return;
    const story = getDisplayStory(day);
    titleEl.textContent = story.title;
    let html = story.body.map(p => `<p>${p}</p>`).join('');
    if (story.closing) {
      html += `<p class="story-closing">${story.closing.replace(/\n/g, '<br/>')}</p>`;
    }
    if (story.source && story.source.credit) {
      const src = story.source;
      const linkHtml = src.url
        ? ` <a href="${src.url}" target="_blank" rel="noopener noreferrer" class="source-link">원문 →</a>`
        : '';
      html += `<div class="story-source">${src.credit}${linkHtml}</div>`;
    }
    bodyEl.innerHTML = html;
  }

  /* ── RENDER: Date line (날짜만, 계절은 배경으로 표현) ── */
  function getSeason(month) {
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';
    if (month >= 9 && month <= 11) return 'autumn';
    return 'winter';
  }

  function applySeasonBackground() {
    const month  = new Date().getMonth() + 1;
    const season = getSeason(month);
    ['season-spring', 'season-summer', 'season-autumn', 'season-winter']
      .forEach(c => document.body.classList.remove(c));
    document.body.classList.add(`season-${season}`);
  }

  /* ── 월별 풍경 사진 URL (1월~12월) — picsum.photos ID 고정 (hotlink 허용, 무료)
     ID가 고정이므로 항상 같은 사진이 표시됩니다.
  ── */
  const MONTH_PHOTOS = {
     1: 'https://picsum.photos/id/558/1400/400',  /* 1월 — 눈 덮인 설경, 파란 하늘 */
     2: 'https://picsum.photos/id/571/1400/400',  /* 2월 — 겨울 끝 침엽수 숲, 안개 빛 */
     3: 'https://picsum.photos/id/544/1400/400',  /* 3월 — 황금빛 새벽 안개 산 능선 */
     4: 'https://picsum.photos/id/976/1400/400',  /* 4월 — 역광 속 봄꽃 군락 */
     5: 'https://picsum.photos/id/110/1400/400',  /* 5월 — 황금 새벽빛 초록 목초지 */
     6: 'https://picsum.photos/id/666/1400/400',  /* 6월 — 대나무 숲 여름 녹음 */
     7: 'https://picsum.photos/id/15/1400/400',   /* 7월 — 이끼 바위 폭포, 울창한 계곡 */
     8: 'https://picsum.photos/id/1051/1400/400', /* 8월 — 고산 호수와 나무 부두 */
     9: 'https://picsum.photos/id/482/1400/400',  /* 9월 — 초가을 산악 호수 */
    10: 'https://picsum.photos/id/923/1400/400',  /* 10월 — 붉은 단풍 숲길 */
    11: 'https://picsum.photos/id/877/1400/400',  /* 11월 — 안개 침엽수 숲 빛줄기 */
    12: 'https://picsum.photos/id/412/1400/400',  /* 12월 — 서리 낀 침엽수 호수 반영 */
  };

  /* ── RENDER: 하단 계절 띠 ── */
  /* 이달 오브제 조회 (큐레이터가 선택했으면 그걸, 아니면 기본값) */
  const OBJ_KEY = 'ihe_monthly_object';
  function getCurrentObject() {
    const now   = new Date();
    const key   = `${now.getFullYear()}-${now.getMonth() + 1}`;
    const saved = (() => { try { return JSON.parse(localStorage.getItem(OBJ_KEY) || '{}'); } catch(e) { return {}; } })();
    const idx   = saved[key] !== undefined ? saved[key] : now.getMonth(); // 0-based
    return MONTHLY_OBJECTS[idx] || MONTHLY_OBJECTS[now.getMonth()];
  }
  function saveObjectChoice(monthKey, idx) {
    const saved = (() => { try { return JSON.parse(localStorage.getItem(OBJ_KEY) || '{}'); } catch(e) { return {}; } })();
    saved[monthKey] = idx;
    localStorage.setItem(OBJ_KEY, JSON.stringify(saved));
  }

  /* 오브제 SVG 조각 — 씬 안에 추가될 소품 */
  const OBJECT_SVGS = {
    '손으로 감는 필름 카메라': `<g opacity="0.72" transform="translate(38,148)">
      <rect x="0" y="0" width="32" height="20" rx="3" fill="#c8b090" stroke="#8a7050" stroke-width="1.2"/>
      <circle cx="22" cy="10" r="7" fill="none" stroke="#8a7050" stroke-width="1.2"/>
      <circle cx="22" cy="10" r="4" fill="#8a7050" opacity="0.5"/>
      <rect x="3" y="3" width="10" height="6" rx="1" fill="#8a7050" opacity="0.4"/>
      <circle cx="7"  cy="16" r="1.5" fill="#8a7050" opacity="0.5"/>
    </g>`,
    '연탄 집게와 연탄': `<g opacity="0.72" transform="translate(28,150)">
      <circle cx="12" cy="10" r="10" fill="#2a2a2a"/>
      <circle cx="12" cy="10" r="6"  fill="#1a1a1a"/>
      <circle cx="12" cy="10" r="1.5" fill="#3a3a3a"/>
      <line x1="6"  y1="10" x2="18" y2="10" stroke="#3a3a3a" stroke-width="1.2"/>
      <line x1="12" y1="4"  x2="12" y2="16" stroke="#3a3a3a" stroke-width="1.2"/>
      <line x1="36" y1="0"  x2="40" y2="20" stroke="#8a7060" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="44" y1="0"  x2="40" y2="20" stroke="#8a7060" stroke-width="2.5" stroke-linecap="round"/>
    </g>`,
    '교실 칠판 분필과 지우개': `<g opacity="0.7" transform="translate(30,150)">
      <rect x="0" y="6" width="36" height="14" rx="2" fill="#3a6a4a"/>
      <rect x="3" y="9" width="20" height="2" rx="1" fill="white" opacity="0.6"/>
      <rect x="3" y="13" width="14" height="2" rx="1" fill="white" opacity="0.4"/>
      <rect x="40" y="10" width="14" height="8" rx="1" fill="#c8b090" stroke="#8a7050" stroke-width="1"/>
    </g>`,
    '빨간 공중전화 박스': `<g opacity="0.75" transform="translate(32,138)">
      <rect x="0" y="0" width="22" height="30" rx="2" fill="#cc2020"/>
      <rect x="3" y="4" width="16" height="18" rx="1" fill="#88c8e8" opacity="0.5" stroke="#aa1818" stroke-width="0.8"/>
      <rect x="7" y="22" width="8" height="4" rx="1" fill="#aa1818"/>
      <rect x="9" y="14" width="4" height="6" rx="1" fill="#1a4a6a" opacity="0.6"/>
    </g>`,
    '운동회 달리기 결승선 테이프': `<g opacity="0.7" transform="translate(20,148)">
      <line x1="0" y1="12" x2="50" y2="12" stroke="white" stroke-width="2.5" stroke-dasharray="4,3"/>
      <rect x="0"  y="6" width="3" height="18" rx="1" fill="#c0c0c0"/>
      <rect x="47" y="6" width="3" height="18" rx="1" fill="#c0c0c0"/>
    </g>`,
    '모기향 코일': `<g opacity="0.65" transform="translate(30,148)">
      <path d="M20,15 Q20,5 10,5 Q0,5 0,15 Q0,25 10,25 Q18,25 18,17 Q18,11 12,11 Q8,11 8,15" fill="none" stroke="#6a8a4a" stroke-width="2" stroke-linecap="round"/>
      <line x1="8" y1="5" x2="18" y2="0" stroke="#8a7050" stroke-width="1.5" stroke-linecap="round"/>
      <ellipse cx="18" cy="0" rx="3" ry="5" fill="#e8c070" opacity="0.5"/>
    </g>`,
    '팥빙수 기계': `<g opacity="0.7" transform="translate(28,142)">
      <rect x="4" y="10" width="24" height="18" rx="2" fill="#c0d0e8"/>
      <rect x="0" y="8"  width="32" height="6"  rx="2" fill="#a0b8d0"/>
      <path d="M8,8 Q16,0 24,8" fill="white" opacity="0.7"/>
      <rect x="12" y="22" width="8" height="6" rx="1" fill="#a0b8d0"/>
      <circle cx="28" cy="14" r="3" fill="#e87878" opacity="0.6"/>
    </g>`,
    '삐삐(무선호출기)': `<g opacity="0.72" transform="translate(34,150)">
      <rect x="0" y="0" width="28" height="18" rx="3" fill="#c8c090" stroke="#9a9070" stroke-width="1.2"/>
      <rect x="3" y="3" width="16" height="7"  rx="1" fill="#1a3a1a" opacity="0.7"/>
      <rect x="3" y="12" width="4" height="3" rx="0.5" fill="#9a9070" opacity="0.7"/>
      <rect x="9" y="12" width="4" height="3" rx="0.5" fill="#9a9070" opacity="0.7"/>
      <rect x="15" y="12" width="4" height="3" rx="0.5" fill="#9a9070" opacity="0.7"/>
      <rect x="21" y="12" width="4" height="3" rx="0.5" fill="#9a9070" opacity="0.7"/>
    </g>`,
    '드럼통 군고구마': `<g opacity="0.72" transform="translate(26,138)">
      <rect x="4" y="10" width="28" height="22" rx="2" fill="#5a4030" stroke="#3a2818" stroke-width="1.2"/>
      <ellipse cx="18" cy="10" rx="14" ry="4" fill="#6a5040"/>
      <path d="M12,12 Q18,6 24,12" fill="none" stroke="#e8a050" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
      <path d="M10,8 Q14,2 16,4 Q12,8 18,5 Q15,10 20,8" fill="#e8a050" opacity="0.5" transform="translate(2,-4)"/>
    </g>`,
    '다이얼 라디오': `<g opacity="0.70" transform="translate(26,146)">
      <rect x="0" y="4" width="40" height="22" rx="3" fill="#c8b890" stroke="#9a8a6a" stroke-width="1.2"/>
      <rect x="3" y="7" width="18" height="12" rx="1" fill="#1a1a1a" opacity="0.6"/>
      <circle cx="30" cy="13" r="6" fill="#9a8a6a" stroke="#7a6a4a" stroke-width="1"/>
      <circle cx="30" cy="13" r="2" fill="#6a5a3a"/>
      <line x1="30" y1="9" x2="30" y2="11" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      <rect x="4" y="21" width="32" height="2" rx="1" fill="#9a8a6a" opacity="0.5"/>
    </g>`,
    '브라운관 TV (토끼귀 안테나)': `<g opacity="0.70" transform="translate(24,136)">
      <rect x="0" y="8" width="44" height="30" rx="3" fill="#4a4030" stroke="#3a3020" stroke-width="1.2"/>
      <rect x="4" y="12" width="36" height="22" rx="1" fill="#1a2a3a" opacity="0.8"/>
      <line x1="18" y1="8" x2="12" y2="0" stroke="#6a6050" stroke-width="2" stroke-linecap="round"/>
      <line x1="26" y1="8" x2="32" y2="0" stroke="#6a6050" stroke-width="2" stroke-linecap="round"/>
      <rect x="16" y="36" width="12" height="4" rx="1" fill="#3a3020"/>
    </g>`,
    '손 편지와 우표': `<g opacity="0.72" transform="translate(28,148)">
      <rect x="0" y="0" width="36" height="24" rx="2" fill="#f8f0d8" stroke="#c8b890" stroke-width="1.2"/>
      <path d="M0,0 L18,14 L36,0" fill="none" stroke="#c8b890" stroke-width="1.2"/>
      <rect x="27" y="2" width="7" height="9" rx="1" fill="#e87878" stroke="#c85858" stroke-width="0.8" opacity="0.8"/>
    </g>`
  };

  /* ── RENDER: 사이드바 하단 월별 이미지 ── */
  function renderSidebarBottomImg() {
    const img = document.getElementById('sidebarBottomImg');
    if (!img) return;
    /* 이전 오류로 숨겨진 경우 복원 */
    if (img.parentElement) img.parentElement.style.display = '';
    const month = new Date().getMonth() + 1;
    const monthStr = String(month).padStart(2, '0');
    /* onerror를 src 설정 전에 먼저 등록 (경합 방지) */
    img.onerror = () => {
      /* 2순위: 기차 그림 (train-sidebar.webp) */
      img.onerror = () => { img.parentElement.style.display = 'none'; };
      img.src = 'images/train-sidebar.webp';
    };
    /* 1순위: 로컬 월별 파일 (images/sidebar-bottom-MM.webp) */
    img.src = `images/sidebar-bottom-${monthStr}.webp`;
  }

  /* 계절별 그라디언트 — Unsplash 사진 로드 실패 시 폴백 */
  const SEASON_GRADIENTS = {
    spring: 'linear-gradient(135deg, #f9e4ec 0%, #d4edda 100%)',
    summer: 'linear-gradient(135deg, #b3e0f7 0%, #a8d8a8 100%)',
    autumn: 'linear-gradient(135deg, #ffe0b2 0%, #f4a261 100%)',
    winter: 'linear-gradient(135deg, #e8f0f7 0%, #b0c4d8 100%)',
  };

  function renderSeasonStrip() {
    const el = document.getElementById('seasonStrip');
    if (!el) return;
    const month  = new Date().getMonth() + 1;
    const season = getSeason(month);
    const obj    = getCurrentObject();

    /* 오브제 SVG 소품 — 사진 위에 반투명 오버레이로 표시 */
    const objSvg = obj ? (OBJECT_SVGS[obj.name] || '') : '';
    const overlaySvg = objSvg
      ? `<svg class="season-strip-obj" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200">${objSvg}</svg>`
      : '';

    /* 초기화: 이전 폴백 그라디언트 제거 */
    el.innerHTML = '';
    el.style.display = '';
    el.style.background = '';

    const photoImg = new Image();
    photoImg.className = 'season-strip-photo';
    photoImg.alt = `${month}월 풍경`;
    photoImg.onerror = () => {
      /* 사진 로드 실패 시 숨기지 않고 계절 그라디언트로 대체 */
      photoImg.remove();
      el.style.background = SEASON_GRADIENTS[season] || SEASON_GRADIENTS.spring;
    };
    photoImg.src = MONTH_PHOTOS[month] || MONTH_PHOTOS[1];
    el.appendChild(photoImg);
    if (overlaySvg) el.insertAdjacentHTML('beforeend', overlaySvg);
  }

  function renderDateSeason(day) {
    const dateEl = document.getElementById('storyDateLine');
    if (!dateEl) return;

    const story = getDisplayStory(day);
    let year, month, date, dayOfWeek;
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

    /* publishedDate가 'YYYY년 M월 D일' 형식이면 그대로 사용 */
    const pdMatch = (story.publishedDate || '').match(/^(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일$/);
    if (!activeArchive && pdMatch) {
      const dt = new Date(parseInt(pdMatch[1]), parseInt(pdMatch[2]) - 1, parseInt(pdMatch[3]));
      year = dt.getFullYear(); month = dt.getMonth() + 1; date = dt.getDate();
      dayOfWeek = dayNames[dt.getDay()];
    } else {
      let dt;
      if (activeArchive) {
        const weekData = STORY_ARCHIVE[activeArchive.weekIdx];
        dt = new Date(weekData.weekStart);
        dt.setDate(dt.getDate() + (activeArchive.day - 1));
      } else {
        const now = new Date();
        const todayDow = now.getDay(); // 0=일~6=토
        const diff = todayDow === 0 ? day
                   : todayDow === 6 ? day - 6   // 토 → 오늘(=0), 월~금 = 이번 주 지난 날들(음수)
                   : day - todayDow;
        dt = new Date(now);
        dt.setDate(now.getDate() + diff);
      }
      year = dt.getFullYear(); month = dt.getMonth() + 1; date = dt.getDate();
      dayOfWeek = dayNames[dt.getDay()];
    }

    dateEl.textContent = `${year}년 ${month}월 ${date}일 · ${dayOfWeek}요일`;

    /* 섹션 구분 오너먼트: 큐레이터 노트 또는 Q&A가 있을 때만 표시 */
    const ornament = document.getElementById('storyOrnament');
    if (ornament) ornament.style.display = (story.curatorNote || (story.qna && story.qna.question)) ? 'block' : 'none';

    /* 요일 위치 스트립 렌더링 */
    renderWeekStrip(day);
  }

  const WEEK_DAY_KO  = ['', '월', '화', '수', '목', '금', '토'];
  const WEEK_TOPIC   = { 1: '사랑', 2: '역사·문학', 3: '철학·심리', 4: '과학·문화', 5: '경제·정치', 6: '에세이·일상' };

  function renderWeekStrip(activeDay) {
    const el = document.getElementById('storyWeekStrip');
    if (!el) return;

    const days = [1, 2, 3, 4, 5, 6];
    const daysHtml = days.map(d => {
      const cls = d === activeDay ? 'active' : (d < activeDay ? 'past' : '');
      const isActive = ACTIVE_DAYS.includes(d);
      return `<div class="swk-day ${cls}${isActive ? ' swk-clickable' : ''}" title="${WEEK_DAY_KO[d]}요일 · ${WEEK_TOPIC[d]}"${isActive ? ` data-day="${d}" tabindex="0" role="button"` : ''}>
        <div class="swk-dot"></div>
        <span class="swk-label">${WEEK_DAY_KO[d]}</span>
      </div>`;
    }).join('');

    el.innerHTML = `
      <div class="swk-days">${daysHtml}</div>
      <div class="swk-sep"></div>
      <span class="swk-badge">하루 한 편</span>`;

    el.querySelectorAll('.swk-day[data-day]').forEach(item => {
      const go = () => setActiveDay(parseInt(item.dataset.day, 10));
      item.addEventListener('click', go);
      item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
  }

  /* ── RENDER: Curator Note + Q&A ── */
  function renderCuratorNote(day) {
    const el    = document.getElementById('curatorNoteSection');
    if (!el) return;
    const story = getDisplayStory(day);
    const note  = (story.curatorNote || '').trim();
    const qna   = story.qna || {};

    const ornament = document.getElementById('storyOrnament');
    if (!qna.question || day === 6) {
      el.innerHTML = '';
      if (ornament) ornament.style.display = 'none';
      return;
    }
    if (ornament) ornament.style.display = 'block';

    let html = '';

    /* Q&A만 표시 (큐레이터 노트 비표시) */
    if (qna.question) {
      html += `
      <div class="qna-section">
        <div class="qna-question-wrap">
          <span class="qna-icon">💭</span>
          <p class="qna-question">${escHtml(qna.question)}</p>
        </div>
        ${qna.answer ? `
        <div class="qna-reader-wrap">
          <button class="qna-reader-label" id="qnaAnswerToggle" type="button">SCJ의 답변 ▾</button>
          <div class="qna-answer-ghost" id="qnaAnswerGhost">${escHtml(qna.answer)}</div>
        </div>` : ''}
      </div>`;
    }

    el.innerHTML = html;

    /* SCJ 답변 토글 */
    const toggle = el.querySelector('#qnaAnswerToggle');
    const ghost  = el.querySelector('#qnaAnswerGhost');
    if (toggle && ghost) {
      toggle.addEventListener('click', () => {
        const open = ghost.classList.toggle('is-visible');
        toggle.textContent = `SCJ의 답변 ${open ? '▴' : '▾'}`;
      });
    }
  }

  function renderQnA(day) { renderCuratorNote(day); }

  /* ── RENDER: Analysis (통찰/유머/감동) + 발생 조건 태그 ── */
  function renderAnalysis(day) {
    const el = document.getElementById('analysisRow');
    if (!el) return;
    const { analysis, primaryType } = STORIES[day];
    const items = [
      { key: 'insight', label: '통찰', cls: 'insight-lbl' },
      { key: 'humor',   label: '유머', cls: 'humor-lbl'   },
      { key: 'emotion', label: '감동', cls: 'emotion-lbl' }
    ];
    el.innerHTML = items.map(({ key, label, cls }) => {
      const a          = analysis[key];
      const isPrimary  = (
        (key === 'insight' && primaryType === '통찰') ||
        (key === 'humor'   && primaryType === '유머') ||
        (key === 'emotion' && primaryType === '감동')
      );
      const condHtml = a.condition
        ? `<span class="condition-tag">↳ ${a.condition}</span>`
        : '';
      return `
        <div class="analysis-item${isPrimary ? ' analysis-primary' : ''}">
          <span class="analysis-icon">${a.icon}</span>
          <span class="analysis-label ${cls}">${label}${isPrimary ? ' <span class="primary-mark">●</span>' : ''}</span>
          <p class="analysis-text">${a.text}</p>
          ${condHtml}
        </div>`;
    }).join('');
  }

  /* ── RENDER: Search Guide (탐색 렌즈) ── */
  function renderSearchGuide(day) {
    const el = document.getElementById('searchGuide');
    if (!el || typeof SEARCH_GUIDE === 'undefined') return;

    const pt    = STORIES[day].primaryType;
    const guide = SEARCH_GUIDE[pt];
    if (!guide) { el.innerHTML = ''; return; }

    const icon  = TYPE_ICON[pt]  || '';
    const cls   = TYPE_CLASS[pt] || '';

    el.className = `search-guide sg-${cls}`;
    el.innerHTML = `
      <div class="sg-header">
        <span class="sg-eyebrow">${icon} ${pt} 탐색 렌즈</span>
        <p class="sg-title">${guide.intro}</p>
      </div>
      <ol class="sg-questions">
        ${guide.questions.map((item, i) => `
          <li class="sg-item">
            <span class="sg-num">${i + 1}</span>
            <div class="sg-body">
              <p class="sg-q">${item.q}</p>
              <p class="sg-hint">${item.hint}</p>
            </div>
          </li>`).join('')}
      </ol>`;
  }

  /* ── RENDER: Week progress bar (탐색 진행도) ── */
  function renderWeekProgress() {
    const el = document.getElementById('weekProgress');
    if (!el) return;
    const week = calcWeek();
    const pct  = Math.round((week / EXPLORE_WEEKS) * 100);
    el.innerHTML = `
      <span class="week-label">${week}주차 탐색 중</span>
      <div class="week-bar-wrap"><div class="week-bar" style="width:${pct}%"></div></div>
      <span class="week-text">${week} / ${EXPLORE_WEEKS}주</span>`;
  }

  /* ── RENDER: Sources (새 소스 시스템) ── */
  function renderSitesSub(day) {
    const el = document.getElementById('sitesSub');
    const story = STORIES[day];
    const dayList = SOURCES.filter(s => s.days.includes(day));
    if (el) el.innerHTML =
      `<strong>${story.category}</strong>에 관한 통찰·유머·감동 탐색 소스 — ` +
      `총 <strong>${dayList.length}개</strong>`;
  }

  function renderSources(day) {
    const el = document.getElementById('sitesList');
    if (!el) return;
    const dayList = SOURCES.filter(s => s.days.includes(day));

    el.innerHTML = dayList.map((src, idx) => {
      const r       = getSourceRating(src.id);
      const stars   = r.stars || 0;
      const catsHtml = src.cats.map(c =>
        `<span class="src-cat-tag src-cat-${TYPE_CLASS[c] || ''}">${TYPE_ICON[c]} ${c}</span>`
      ).join('');
      const typeInfo = SRC_TYPE[src.type] || { icon: '📄', label: src.type };
      const domain   = src.url.replace(/https?:\/\//, '').split('/')[0];

      return `
        <li class="site-item" data-src-id="${src.id}">
          <span class="site-num">${idx + 1}</span>
          <div class="site-info">
            <div class="src-name-row">
              <a class="site-name" href="${src.url}" target="_blank" rel="noopener noreferrer">${src.name}</a>
              <span class="src-type-pill" title="${typeInfo.label}">${typeInfo.icon} ${typeInfo.label}</span>
            </div>
            <span class="site-url">${domain}</span>
            <p class="site-desc">${src.desc}</p>
            <div class="src-cats">${catsHtml}</div>
          </div>
          <div class="site-rating">
            <div class="stars" data-src-id="${src.id}">
              ${[1,2,3,4,5].map(n =>
                `<span class="star${n <= stars ? ' filled' : ''}" data-val="${n}"
                       role="button" aria-label="${n}점" tabindex="0">★</span>`
              ).join('')}
            </div>
            <span class="rating-count">${stars > 0 ? stars + '점' : '미평가'}</span>
          </div>
        </li>`;
    }).join('');

    attachStarListeners(el);

    /* curator mode: inject extended controls */
    if (curatorActive) injectCuratorControls(el);
  }

  /* ── Star rating listeners ── */
  function attachStarListeners(container) {
    container.querySelectorAll('.stars').forEach(starsEl => {
      const srcId = starsEl.dataset.srcId;
      const stars = [...starsEl.querySelectorAll('.star')];

      stars.forEach(star => {
        star.addEventListener('mouseenter', () => {
          const val = +star.dataset.val;
          stars.forEach(s => s.classList.toggle('hover', +s.dataset.val <= val));
        });
        starsEl.addEventListener('mouseleave', () => stars.forEach(s => s.classList.remove('hover')));

        const doRate = () => {
          const val = +star.dataset.val;
          saveSourceRating(srcId, { stars: val });
          stars.forEach(s => s.classList.toggle('filled', +s.dataset.val <= val));
          const countEl = starsEl.closest('.site-rating').querySelector('.rating-count');
          if (countEl) countEl.textContent = val + '점';
        };
        star.addEventListener('click', doRate);
        star.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doRate(); } });
      });
    });
  }

  /* ─────────────────────────────────────────────────────────
     CURATOR MODE
     활성화: URL 파라미터 ?curator 또는 'c' 키를 3초 안에 3번
     목적: 소스별 카테고리 적합도 + IHE 조건 기록 → 조건 발전
  ───────────────────────────────────────────────────────── */
  let curatorActive = location.search.includes('curator');
  let cKeyCount = 0, cKeyTimer = null;
  const PIN_KEY = 'ihe_curator_pin';

  /* ── PIN 유틸 ── */
  function getStoredPin() { return localStorage.getItem(PIN_KEY) || ''; }
  function savePin(pin)    { localStorage.setItem(PIN_KEY, pin); }

  /* PIN 다이얼로그 — 설정 또는 확인 */
  function showPinDialog(onSuccess) {
    const stored = getStoredPin();
    const isNew  = !stored;

    const overlay = document.createElement('div');
    overlay.id = 'pinOverlay';
    overlay.innerHTML = `
      <div class="pin-dialog">
        <p class="pin-dialog-title">${isNew ? '🔑 큐레이터 PIN 설정' : '🔒 큐레이터 PIN 입력'}</p>
        <p class="pin-dialog-sub">${isNew ? '처음 사용합니다. 4–8자리 PIN을 설정해 주세요.' : 'PIN을 입력하세요.'}</p>
        <input type="password" id="pinInput" class="pin-input" maxlength="8" placeholder="••••" inputmode="numeric" autocomplete="off"/>
        ${isNew ? '<input type="password" id="pinConfirm" class="pin-input" maxlength="8" placeholder="••••  확인" inputmode="numeric" autocomplete="off"/>' : ''}
        <p class="pin-error" id="pinError"></p>
        <div class="pin-btns">
          <button id="pinCancel" class="pin-btn pin-btn--cancel">취소</button>
          <button id="pinOk"     class="pin-btn pin-btn--ok">${isNew ? '설정' : '확인'}</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    const input   = overlay.querySelector('#pinInput');
    const confirm = overlay.querySelector('#pinConfirm');
    const errEl   = overlay.querySelector('#pinError');
    setTimeout(() => input.focus(), 50);

    function close() { overlay.remove(); }

    function attempt() {
      const val = input.value.trim();
      if (!val || val.length < 4) { errEl.textContent = '4자리 이상 입력해 주세요.'; return; }
      if (isNew) {
        const val2 = confirm ? confirm.value.trim() : val;
        if (val !== val2) { errEl.textContent = '두 PIN이 일치하지 않습니다.'; return; }
        savePin(val);
        close();
        onSuccess();
      } else {
        if (val !== stored) { errEl.textContent = 'PIN이 틀렸습니다.'; input.value = ''; input.focus(); return; }
        close();
        onSuccess();
      }
    }

    overlay.querySelector('#pinOk').addEventListener('click', attempt);
    overlay.querySelector('#pinCancel').addEventListener('click', close);
    [input, confirm].forEach(el => el && el.addEventListener('keydown', e => { if (e.key === 'Enter') attempt(); }));
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  }

  /* ── PIN 변경 (큐레이터 모드 내부) ── */
  function changePinFlow() {
    localStorage.removeItem(PIN_KEY);
    showPinDialog(() => {
      alert('PIN이 변경되었습니다.');
    });
  }

  /* ── 큐레이터 모드 토글 (PIN 확인 후) ── */
  function toggleCurator() {
    if (curatorActive) {
      curatorActive = false;
      updateCuratorBadge();
      return;
    }
    showPinDialog(() => {
      curatorActive = true;
      updateCuratorBadge();
    });
  }

  function initCuratorMode() {
    document.addEventListener('keydown', e => {
      if (e.key !== 'c' && e.key !== 'C') return;
      cKeyCount++;
      clearTimeout(cKeyTimer);
      cKeyTimer = setTimeout(() => { cKeyCount = 0; }, 3000);
      if (cKeyCount >= 3) {
        cKeyCount = 0;
        toggleCurator();
      }
    });

    /* mobile: 사이드바 로고 5번 연속 탭 */
    let tapCount = 0, tapTimer = null;
    const logo = document.getElementById('sidebarLogo');
    if (logo) {
      logo.addEventListener('click', () => {
        tapCount++;
        clearTimeout(tapTimer);
        tapTimer = setTimeout(() => { tapCount = 0; }, 2000);
        if (tapCount >= 5) { tapCount = 0; toggleCurator(); }
      });
    }
  }

  function updateCuratorBadge() {
    const badge = document.getElementById('curatorBadge');
    const fab   = document.getElementById('curatorFab');

    if (badge) {
      badge.style.display = curatorActive ? 'flex' : 'none';
      if (curatorActive) {
        badge.innerHTML = `✏️ 큐레이터 모드&nbsp;&nbsp;<button id="changePinBtn" class="pin-change-btn" title="PIN 변경">🔑 PIN 변경</button>`;
        const btn = badge.querySelector('#changePinBtn');
        if (btn) btn.addEventListener('click', e => { e.stopPropagation(); changePinFlow(); });
      } else {
        badge.innerHTML = '';
      }
    }
    if (fab) fab.style.display = curatorActive ? 'flex' : 'none';

    renderQnA(activeDay);
  }

  /* ── 이달 오브제 선택 패널 렌더링 ── */
  function renderObjectPicker() {
    const el = document.getElementById('objectPickerPanel');
    if (!el) return;

    const now  = new Date();
    const key  = `${now.getFullYear()}-${now.getMonth() + 1}`;
    const saved = (() => { try { return JSON.parse(localStorage.getItem(OBJ_KEY) || '{}'); } catch(e) { return {}; } })();
    const selIdx = saved[key] !== undefined ? saved[key] : now.getMonth();

    el.innerHTML = `
      <div class="obj-picker-header">
        <span class="obj-picker-title">🗝️ 이달의 그리운 오브제 선택</span>
        <span class="obj-picker-sub">${now.getFullYear()}년 ${now.getMonth() + 1}월 · 띠 이미지 + 이야기 소재에 반영됩니다</span>
      </div>
      <div class="obj-picker-grid">
        ${MONTHLY_OBJECTS.map((obj, i) => `
          <label class="obj-card${i === selIdx ? ' obj-card--sel' : ''}" title="${obj.desc}">
            <input type="radio" name="objPicker" value="${i}" ${i === selIdx ? 'checked' : ''}/>
            <span class="obj-card-ihe ihe-${obj.ihe}">${TYPE_ICON[obj.ihe] || ''} ${obj.ihe}</span>
            <span class="obj-card-name">${obj.name}</span>
            <span class="obj-card-desc">${obj.desc}</span>
          </label>`).join('')}
      </div>
      <div class="obj-picker-hints" id="objPickerHints">
        ${renderObjectHints(selIdx)}
      </div>`;

    el.querySelectorAll('input[name="objPicker"]').forEach(radio => {
      radio.addEventListener('change', () => {
        const idx = parseInt(radio.value, 10);
        saveObjectChoice(key, idx);
        renderSeasonStrip();
        el.querySelectorAll('.obj-card').forEach((c, i) => c.classList.toggle('obj-card--sel', i === idx));
        const hintsEl = document.getElementById('objPickerHints');
        if (hintsEl) hintsEl.innerHTML = renderObjectHints(idx);
      });
    });
  }

  function renderObjectHints(idx) {
    const obj = MONTHLY_OBJECTS[idx];
    if (!obj) return '';
    return `<div class="obj-hint-wrap">
      <p class="obj-hint-label">이야기 연결 힌트</p>
      <ul class="obj-hint-list">${obj.storyHints.map(h => `<li>${h}</li>`).join('')}</ul>
    </div>`;
  }

  /* ── Inject curator controls into each source card ── */
  function injectCuratorControls(container) {
    container.querySelectorAll('.site-item[data-src-id]').forEach(li => {
      const srcId = li.dataset.srcId;
      if (li.querySelector('.curator-ctrl')) return;

      const r = getSourceRating(srcId);

      /* Category fit toggles */
      const catBtns = ['통찰','유머','감동'].map(c => {
        const sel = (r.cats || []).includes(c);
        const cls = TYPE_CLASS[c] || '';
        return `<button class="curator-cat-btn${sel ? ' selected-'+cls : ''}" data-cat="${c}" data-id="${srcId}">${TYPE_ICON[c]} ${c}</button>`;
      }).join('');

      /* Story-found toggle */
      const found = r.found || 0;

      /* Condition selector (shown when found > 0) */
      const allConds = [
        ...IHE_CONDITIONS['통찰'].map(c => `<option value="${c}" ${(r.conditions||[]).includes(c)?'selected':''}>${c}</option>`),
        ...IHE_CONDITIONS['유머'].map(c  => `<option value="${c}" ${(r.conditions||[]).includes(c)?'selected':''}>${c}</option>`),
        ...IHE_CONDITIONS['감동'].map(c  => `<option value="${c}" ${(r.conditions||[]).includes(c)?'selected':''}>${c}</option>`)
      ].join('');

      const note = r.note || '';

      const ctrl = document.createElement('div');
      ctrl.className = 'curator-ctrl';
      ctrl.innerHTML = `
        <div class="curator-row curator-cat-row">
          <span class="curator-label">카테고리 적합도</span>
          <div class="curator-cats">${catBtns}</div>
        </div>
        <div class="curator-row curator-found-row">
          <span class="curator-label">스토리 발견 횟수</span>
          <div class="curator-found-ctrl">
            <button class="found-btn found-minus" data-id="${srcId}">−</button>
            <span class="found-count" id="fc-${srcId}">${found}</span>
            <button class="found-btn found-plus" data-id="${srcId}">+</button>
          </div>
        </div>
        <div class="curator-row" id="cond-row-${srcId}" ${found === 0 ? 'style="display:none"' : ''}>
          <span class="curator-label">관찰된 IHE 조건</span>
          <select class="curator-cond-sel" data-id="${srcId}" multiple size="3">
            ${allConds}
          </select>
        </div>
        <div class="curator-row">
          <textarea class="curator-note" data-id="${srcId}"
            placeholder="메모 (소스 특성, 발견 팁…)" maxlength="120">${note}</textarea>
        </div>`;

      li.appendChild(ctrl);

      /* Category button listeners */
      ctrl.querySelectorAll('.curator-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const r2   = getSourceRating(srcId);
          const cats = new Set(r2.cats || []);
          const cat  = btn.dataset.cat;
          cats.has(cat) ? cats.delete(cat) : cats.add(cat);
          const cls = TYPE_CLASS[cat] || '';
          btn.classList.toggle('selected-' + cls, cats.has(cat));
          saveSourceRating(srcId, { cats: [...cats] });
        });
      });

      /* Found +/− */
      ctrl.querySelector('.found-plus').addEventListener('click', () => {
        const r2 = getSourceRating(srcId);
        const n  = (r2.found || 0) + 1;
        saveSourceRating(srcId, { found: n });
        document.getElementById('fc-' + srcId).textContent = n;
        document.getElementById('cond-row-' + srcId).style.display = n > 0 ? '' : 'none';
      });
      ctrl.querySelector('.found-minus').addEventListener('click', () => {
        const r2 = getSourceRating(srcId);
        const n  = Math.max(0, (r2.found || 0) - 1);
        saveSourceRating(srcId, { found: n });
        document.getElementById('fc-' + srcId).textContent = n;
        document.getElementById('cond-row-' + srcId).style.display = n > 0 ? '' : 'none';
      });

      /* Condition multiselect */
      ctrl.querySelector('.curator-cond-sel').addEventListener('change', function () {
        const conds = [...this.selectedOptions].map(o => o.value);
        saveSourceRating(srcId, { conditions: conds });
      });

      /* Note textarea */
      ctrl.querySelector('.curator-note').addEventListener('input', function () {
        saveSourceRating(srcId, { note: this.value });
      });
    });
  }

  /* ─────────────────────────────────────────────────────────
     STORY GENERATOR  ·  AI 이야기 생성 도우미
     큐레이터 전용: 요일 파라미터 자동 입력 → 사용자 추가 요청
     → 완성된 프롬프트 + data.js 스니펫 생성
  ───────────────────────────────────────────────────────── */
  const IMG_KEYS = { 1:'mon', 2:'tue', 3:'wed', 4:'thu', 5:'fri' };

  function openStoryGenerator() {
    const drawer = document.getElementById('storyGenDrawer');
    const panel  = document.getElementById('storyGenPanel');
    if (!drawer || !panel) return;
    drawer.classList.add('open');
    renderGenPanel(panel, drawer, 'multi'); /* 기본: 5편 후보 모드 */
  }

  /* 모드 전환 포함 생성기 패널 렌더링 */
  function renderGenPanel(panel, drawer, mode) {
    const schedule = getPublicationSchedule();
    const urgentCount = schedule.filter(s => s.urgent && !s.hasStaged).length;

    /* ── 게재 일정 행 HTML ── */
    const scheduleRows = schedule.slice(0, 5).map(s => {
      const urgentBadge = s.urgent && !s.hasStaged
        ? `<span class="sched-urgent">D-${s.daysUntil} 준비!</span>` : '';
      const stagedBadge = s.hasStaged
        ? `<span class="sched-staged">준비됨</span>` : '';
      return `<div class="sched-row ${s.urgent && !s.hasStaged ? 'sched-row--urgent' : ''}" data-daykey="${s.dayKey}">
        <span class="sched-date">${s.dateStr}</span>
        <span class="sched-name">${s.dayName}</span>
        <span class="sched-cat">${s.category}</span>
        ${urgentBadge}${stagedBadge}
      </div>`;
    }).join('');

    panel.innerHTML = `
      <div class="gen-header">
        <span class="gen-title">📝 이야기 생성 도우미</span>
        <button class="gen-close" id="storyGenClose">✕</button>
      </div>
      <div class="gen-body">

        <!-- 게재 일정 -->
        <div class="sched-block">
          <div class="sched-title">📅 게재 일정${urgentCount > 0 ? ` <span class="sched-urgent-count">${urgentCount}개 준비 필요</span>` : ''}</div>
          ${scheduleRows}
        </div>

        <!-- 모드 토글 -->
        <div class="gen-mode-row">
          <button class="gen-mode-btn ${mode === 'multi' ? 'active' : ''}" id="modeMulti">📋 5편 후보 추천</button>
          <button class="gen-mode-btn ${mode === 'single' ? 'active' : ''}" id="modeSingle">✍️ 단편 생성</button>
        </div>

        <!-- 5편 후보 모드 -->
        <div id="modeMultiPanel" style="display:${mode === 'multi' ? '' : 'none'}">
          ${renderMultiModeHTML(schedule)}
        </div>

        <!-- 단편 생성 모드 -->
        <div id="modeSinglePanel" style="display:${mode === 'single' ? '' : 'none'}">
          ${renderSingleModeHTML()}
        </div>

      </div>`;

    /* ── 이벤트: 닫기 ── */
    panel.querySelector('#storyGenClose').addEventListener('click', () => drawer.classList.remove('open'));
    drawer.addEventListener('click', e => { if (e.target === drawer) drawer.classList.remove('open'); });

    /* ── 이벤트: 모드 전환 ── */
    panel.querySelector('#modeMulti').addEventListener('click', () => renderGenPanel(panel, drawer, 'multi'));
    panel.querySelector('#modeSingle').addEventListener('click', () => renderGenPanel(panel, drawer, 'single'));

    /* ── 5편 모드 이벤트 ── */
    if (mode === 'multi') bindMultiModeEvents(panel, schedule);

    /* ── 단편 모드 이벤트 ── */
    if (mode === 'single') bindSingleModeEvents(panel);
  }

  /* 5편 후보 모드 HTML */
  function renderMultiModeHTML(schedule) {
    const dayOpts = schedule.slice(0, 5).map(s =>
      `<option value="${s.dayKey}">${s.dayName} ${s.dateStr} — ${s.category}${s.urgent && !s.hasStaged ? ' ⚡' : ''}</option>`
    ).join('');

    return `
      <div class="gen-step-label">① 게재일 선택</div>
      <select id="multiDaySelect" class="gen-select">${dayOpts}</select>

      <button id="multiGenBtn" class="gen-build-btn" style="margin-top:0.5rem">📋 5편 후보 프롬프트 생성</button>

      <div id="multiPromptOut" style="display:none">
        <div class="gen-output-section" style="margin-top:0.75rem">
          <div class="gen-output-header">
            <span>Claude / ChatGPT에 붙여넣기</span>
            <button id="multiCopyBtn" class="gen-copy-btn">📋 복사</button>
          </div>
          <pre id="multiPromptPre" class="gen-pre gen-pre-prompt"></pre>
        </div>
      </div>

      <div id="multiPasteBlock" style="display:none">
        <div class="gen-step-label" style="margin-top:1rem">② AI 답변 붙여넣기 → 5개 후보 카드</div>
        <textarea id="multiPasteArea" class="gen-textarea" rows="8"
          placeholder="AI(Claude / ChatGPT)의 답변을 여기에 붙여넣으세요.&#10;【후보 1】... 【후보 2】... 형식이면 자동으로 카드로 분리됩니다."></textarea>
        <button id="multiParseBtn" class="gen-build-btn" style="margin-top:0.4rem">→ 후보 카드로 분리하기</button>
      </div>

      <div id="multiCardsOut"></div>`;
  }

  /* 단편 모드 HTML */
  function renderSingleModeHTML() {
    const day   = activeDay;
    const story = STORIES[day];
    const dayList = SOURCES.filter(s => s.days.includes(day));
    const srcOpts = dayList.map(s => {
      const ti = SRC_TYPE[s.type] || {};
      return `<option value="${s.id}">${ti.icon || ''} ${s.name}</option>`;
    }).join('');
    const condOpts = Object.entries(IHE_CONDITIONS).map(([type, conds]) =>
      `<optgroup label="${TYPE_ICON[type]} ${type}">${
        conds.map(c => `<option value="${c}">${c}</option>`).join('')
      }</optgroup>`
    ).join('');

    return `
      <div class="gen-step-label">① 기본 파라미터</div>
      <div class="gen-params-row">
        <div class="gen-param-chip"><span class="gen-param-key">요일</span><span class="gen-param-val">${DAY_NAMES[day]}</span></div>
        <div class="gen-param-chip"><span class="gen-param-key">주제</span><span class="gen-param-val">${story.category}</span></div>
      </div>
      <div class="gen-field">
        <label class="gen-label" for="genType">주요 IHE</label>
        <select id="genType" class="gen-select">
          ${['통찰','유머','감동'].map(t =>
            `<option value="${t}" ${t === story.primaryType ? 'selected' : ''}>${TYPE_ICON[t]} ${t}</option>`
          ).join('')}
        </select>
      </div>
      <div class="gen-field">
        <label class="gen-label" for="genCondition">IHE 발생 조건</label>
        <select id="genCondition" class="gen-select">
          <option value="">── 선택사항 ──</option>${condOpts}
        </select>
      </div>
      <div class="gen-field">
        <label class="gen-label" for="genSource">참고 소스</label>
        <select id="genSource" class="gen-select">
          <option value="">── AI 자율 ──</option>${srcOpts}
        </select>
      </div>
      <div class="gen-divider"></div>
      <div class="gen-step-label">② 추가 요청사항</div>
      <div class="gen-field">
        <textarea id="genUserReqs" class="gen-textarea"
          placeholder="예시:&#10;• 일본 작가 나쓰메 소세키의 일화를 소재로&#10;• 3인칭 관찰자 시점, 건조한 문체&#10;• 마지막에 반전 있으면 좋겠습니다"
          rows="5"></textarea>
      </div>
      <button id="genBuildBtn" class="gen-build-btn">📋 AI 프롬프트 생성</button>
      <div id="genOutput" class="gen-output" style="display:none">
        <div class="gen-output-section">
          <div class="gen-output-header"><span>Claude / ChatGPT에 붙여넣기</span><button id="genCopyPrompt" class="gen-copy-btn">📋 복사</button></div>
          <pre id="genPromptPre" class="gen-pre gen-pre-prompt"></pre>
        </div>
        <div class="gen-output-section">
          <div class="gen-output-header"><span>data.js 스니펫 템플릿</span><button id="genCopySnippet" class="gen-copy-btn">📋 복사</button></div>
          <pre id="genSnippetPre" class="gen-pre gen-pre-snippet"></pre>
        </div>
        <div class="gen-note">💡 위 프롬프트 → AI 생성 → 스니펫 채우기 → data.js 교체</div>
      </div>`;
  }

  /* 5편 모드 이벤트 바인딩 */
  function bindMultiModeEvents(panel, schedule) {
    const genBtn   = panel.querySelector('#multiGenBtn');
    const copyBtn  = panel.querySelector('#multiCopyBtn');
    const parseBtn = panel.querySelector('#multiParseBtn');

    genBtn && genBtn.addEventListener('click', () => {
      const dayKey = parseInt(panel.querySelector('#multiDaySelect').value, 10);
      const prompt = buildCandidatesPrompt(dayKey);
      panel.querySelector('#multiPromptPre').textContent = prompt;
      panel.querySelector('#multiPromptOut').style.display = '';
      panel.querySelector('#multiPasteBlock').style.display = '';
      setTimeout(() => panel.querySelector('#multiPromptOut').scrollIntoView({ behavior:'smooth', block:'start' }), 80);
    });

    copyBtn && copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(panel.querySelector('#multiPromptPre').textContent)
        .then(() => { this.textContent = '✓ 복사됨'; setTimeout(() => { this.textContent = '📋 복사'; }, 2000); });
    });

    parseBtn && parseBtn.addEventListener('click', () => {
      const dayKey = parseInt(panel.querySelector('#multiDaySelect').value, 10);
      const text   = panel.querySelector('#multiPasteArea').value.trim();
      if (!text) { alert('AI 답변을 먼저 붙여넣어 주세요.'); return; }
      const candidates = parseCandidates(text);
      if (!candidates.length) { alert('후보를 파싱하지 못했습니다. 형식을 확인해 주세요.'); return; }
      saveCandidates(dayKey, candidates);
      renderCandidateCards(panel, dayKey, candidates, schedule);
    });

    /* 저장된 후보 자동 복원 */
    const dayKey = parseInt(panel.querySelector('#multiDaySelect')?.value || '1', 10);
    const saved  = loadCandidates(dayKey);
    if (saved && saved.length) {
      renderCandidateCards(panel, dayKey, saved, schedule);
    }
  }

  /* 간단한 토스트 메시지 */
  function showToast(msg) {
    let el = document.getElementById('appToast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'appToast';
      el.style.cssText = 'position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);background:#333;color:#fff;padding:0.5rem 1.2rem;border-radius:2rem;font-size:0.85rem;z-index:9999;opacity:0;transition:opacity 0.25s;pointer-events:none;white-space:nowrap';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = '1';
    clearTimeout(el._timer);
    el._timer = setTimeout(() => { el.style.opacity = '0'; }, 2400);
  }

  /* DOM에서 현재 rank 상태 수집 */
  function collectCurrentRanks(out, candidates) {
    return candidates.map((c, i) => {
      const row  = out.querySelector(`.rank-row[data-idx="${i}"]`);
      const sel  = row && row.querySelector('.rank-btn.selected');
      const rank = sel ? parseInt(sel.dataset.rank, 10) : 0;
      return { rank, title: c.title, ihe: c.ihe, source: c.source, iheWhy: c.iheWhy, takeaway: c.takeaway };
    });
  }

  /* 5편 후보 카드 렌더링 */
  function renderCandidateCards(panel, dayKey, candidates, schedule) {
    const out = panel.querySelector('#multiCardsOut');
    if (!out) return;
    const iheColors = { '통찰': 'insight', '유머': 'humor', '감동': 'emotion' };

    out.innerHTML = `
      <div class="cand-header">
        <span class="cand-title">후보 ${candidates.length}편 — ${DAY_NAMES[dayKey]} ${
          (schedule.find(s => s.dayKey === dayKey) || {}).dateStr || ''
        }</span>
        <span class="cand-sub">하나를 선택해 완성 프롬프트를 받으세요</span>
      </div>
      ${candidates.map((c, i) => {
        const iheKey = (c.ihe || '').trim();
        const iheCls = iheColors[iheKey] || 'insight';
        return `<div class="cand-card" data-idx="${i}">
          <div class="cand-card-top">
            <span class="cand-num">${i + 1}</span>
            <span class="badge badge-primary-${iheCls}" style="font-size:0.7rem">${iheKey || 'IHE'}</span>
            <span class="cand-card-title">${c.title}</span>
          </div>
          ${c.source ? `<div class="cand-meta">출처: ${c.source}</div>` : ''}
          ${c.iheWhy ? `<div class="cand-why">${c.iheWhy}</div>` : ''}
          ${c.outline ? `<div class="cand-outline">${c.outline}</div>` : ''}
          ${c.takeaway ? `<div class="cand-takeaway">💬 ${c.takeaway}</div>` : ''}
          <div class="rank-row" data-idx="${i}">
            <span class="rank-label">순위</span>
            ${[1,2,3,4,5].map(n => `<button class="rank-btn" data-rank="${n}">${n}위</button>`).join('')}
          </div>
          <button class="cand-select-btn" data-idx="${i}">이걸로 완성 프롬프트 받기 →</button>
        </div>`;
      }).join('')}
      <div class="rank-save-row">
        <button id="saveRankingsBtn" class="rank-save-btn" disabled>📊 순위 저장</button>
        <span class="rank-save-hint">3개 이상 순위를 매기면 저장할 수 있어요</span>
      </div>`;

    /* 순위 버튼 이벤트 — toggle + 중복 방지 */
    out.querySelectorAll('.rank-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const rank    = parseInt(btn.dataset.rank, 10);
        const thisRow = btn.closest('.rank-row');
        const isSelected = btn.classList.contains('selected');

        /* 같은 번호가 다른 카드에 있으면 해제 */
        out.querySelectorAll(`.rank-btn[data-rank="${rank}"]`).forEach(b => b.classList.remove('selected'));

        /* 현재 카드의 같은 번호를 다시 눌렀으면 toggle off, 아니면 on */
        if (!isSelected) {
          /* 같은 카드 내 다른 번호 해제 */
          thisRow.querySelectorAll('.rank-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
        }

        /* 저장 버튼 활성화 조건 */
        const filled = collectCurrentRanks(out, candidates).filter(r => r.rank > 0).length;
        document.getElementById('saveRankingsBtn').disabled = filled < 3;
      });
    });

    /* 순위 저장 버튼 이벤트 */
    out.querySelector('#saveRankingsBtn')?.addEventListener('click', () => {
      const ranked = collectCurrentRanks(out, candidates);
      if (ranked.filter(r => r.rank > 0).length < 3) {
        alert('최소 3개에 순위를 매겨주세요'); return;
      }
      saveRankingHistory(dayKey, ranked);
      showToast('순위 저장됨. 다음 후보 생성에 반영됩니다.');
    });

    /* 선택 이벤트 */
    out.querySelectorAll('.cand-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        const c   = candidates[idx];
        /* 단편 모드로 전환하고 해당 후보 내용을 추가 요청에 채움 */
        panel.querySelector('#modeSingle').click();
        setTimeout(() => {
          const ta = panel.querySelector('#genUserReqs');
          if (ta) ta.value = `선택한 후보 개요:\n제목: ${c.title}\n출처: ${c.source}\n개요: ${c.outline}\n\n위 개요를 바탕으로 완성된 이야기를 작성해 주세요.`;
          panel.querySelector('#genBuildBtn')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      });
    });

    setTimeout(() => out.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }

  /* 단편 모드 이벤트 바인딩 */
  function bindSingleModeEvents(panel) {
    const day   = activeDay;
    const story = STORIES[day];

    panel.querySelector('#genBuildBtn')?.addEventListener('click', () => {
      const type     = panel.querySelector('#genType').value;
      const cond     = panel.querySelector('#genCondition').value;
      const srcId    = panel.querySelector('#genSource').value;
      const userReqs = panel.querySelector('#genUserReqs').value.trim();
      const srcSel   = SOURCES.find(s => s.id === srcId) || null;

      const prompt  = buildStoryPrompt({ day, story, type, cond, srcSel, userReqs });
      const snippet = buildDataSnippet({ day, story, type, cond, srcSel });

      panel.querySelector('#genPromptPre').textContent  = prompt;
      panel.querySelector('#genSnippetPre').textContent = snippet;
      panel.querySelector('#genOutput').style.display   = '';
      setTimeout(() => panel.querySelector('#genOutput').scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    });

    panel.querySelector('#genCopyPrompt')?.addEventListener('click', function () {
      navigator.clipboard.writeText(panel.querySelector('#genPromptPre').textContent)
        .then(() => { this.textContent = '✓ 복사됨'; setTimeout(() => { this.textContent = '📋 복사'; }, 2000); });
    });
    panel.querySelector('#genCopySnippet')?.addEventListener('click', function () {
      navigator.clipboard.writeText(panel.querySelector('#genSnippetPre').textContent)
        .then(() => { this.textContent = '✓ 복사됨'; setTimeout(() => { this.textContent = '📋 복사'; }, 2000); });
    });
  }

  /* ══════════════════════════════════════════════════
     5편 후보 시스템 — 사전 준비 워크플로우
  ══════════════════════════════════════════════════ */
  const CANDIDATES_KEY    = 'story-candidates-v1';
  const RANKING_HISTORY_KEY = 'candidate-ranking-v1';

  /* ── 후보 랭킹 히스토리 저장/로드 ── */
  function loadRankingHistory() {
    try { return JSON.parse(localStorage.getItem(RANKING_HISTORY_KEY)) || {}; }
    catch { return {}; }
  }

  /* rankedList: [{rank, title, ihe, source, iheWhy, takeaway}, ...] */
  function saveRankingHistory(day, rankedList) {
    const all = loadRankingHistory();
    if (!all[day]) all[day] = [];
    all[day].unshift({ date: new Date().toISOString().slice(0, 10), ranked: rankedList });
    if (all[day].length > 12) all[day] = all[day].slice(0, 12);
    localStorage.setItem(RANKING_HISTORY_KEY, JSON.stringify(all));
  }

  /* 향후 10일간 월–금 게재 일정 계산 */
  function getPublicationSchedule() {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const staged = loadStaging();
    const result = [];
    for (let i = 1; i <= 14 && result.length < 7; i++) {
      const d = new Date(today); d.setDate(today.getDate() + i);
      const jd = d.getDay();
      if (jd < 1 || jd > 5) continue;
      const dayKey = jd;
      const hasStaged = staged && staged[dayKey] &&
        (staged[dayKey].status === 'draft' || staged[dayKey].status === 'confirmed');
      result.push({
        dayKey, date: d, daysUntil: i, hasStaged,
        dateStr: `${d.getMonth() + 1}/${d.getDate()}`,
        dayName: DAY_NAMES[dayKey],
        category: STORIES[dayKey] ? STORIES[dayKey].category : '',
        urgent: i <= 3
      });
    }
    return result;
  }

  /* ── 과거 순위 데이터로 선호 패턴 요약 ── */
  function buildPreferenceSummary(day) {
    const sessions = (loadRankingHistory()[day] || []).slice(0, 8);
    if (sessions.length < 5) return '';

    const freq = arr => {
      const m = {};
      arr.forEach(v => v && (m[v] = (m[v] || 0) + 1));
      return Object.entries(m).sort((a, b) => b[1] - a[1]);
    };

    const topItems = sessions.flatMap(s => s.ranked.filter(r => r.rank <= 2));
    const lowItems = sessions.flatMap(s => s.ranked.filter(r => r.rank >= 4));

    const topIHE  = freq(topItems.map(i => i.ihe)).slice(0, 3);
    const lowIHE  = freq(lowItems.map(i => i.ihe)).slice(0, 2);
    const topSrc  = freq(topItems.map(i => i.source)).slice(0, 2);
    const topWhys = freq(topItems.map(i => i.iheWhy).filter(w => w && w.length > 10)).slice(0, 3);

    const fmt = arr => arr.map(([v, n]) => `${v}(${n}회)`).join(', ') || '—';

    return `[과거 큐레이션 선호 패턴 — 최근 ${sessions.length}회 누적]
• 높이 평가된 IHE: ${fmt(topIHE)}
• 낮게 평가된 IHE: ${fmt(lowIHE)}
• 선호 출처 유형: ${fmt(topSrc)}
• 자주 선택된 이유: ${topWhys.map(([v]) => `"${v}"`).join(' / ') || '—'}
→ 위 패턴을 참고해 구성하되, 낮게 평가된 유형도 1편 이상 포함해 다양성을 유지하세요.`;
  }

  /* ── SCJ 블로그 사용 주기 추적 (6개월 1회) ── */
  const SCJ_BLOG_KEY = 'scj-blog-last-used';

  function monthsSinceSCJBlog() {
    const saved = localStorage.getItem(SCJ_BLOG_KEY);
    if (!saved) return 99; // 한 번도 안 씀
    const last = new Date(saved + '-01');
    const now  = new Date();
    return (now.getFullYear() - last.getFullYear()) * 12
         + (now.getMonth()    - last.getMonth());
  }

  /* 큐레이터가 SCJ 블로그 글을 게재했을 때 호출 */
  function markSCJBlogUsed() {
    const ym = new Date().toISOString().slice(0, 7); // "YYYY-MM"
    localStorage.setItem(SCJ_BLOG_KEY, ym);
    showToast('SCJ 블로그 사용 날짜가 기록되었습니다.');
  }
  /* 전역 노출 — 브라우저 콘솔에서 markSCJBlogUsed() 호출 가능 */
  window.markSCJBlogUsed = markSCJBlogUsed;

  /* 5편 후보 프롬프트 생성 */
  function buildCandidatesPrompt(day) {
    const story   = STORIES[day];
    const obj     = getCurrentObject();
    const objHint = obj
      ? `\n• 이달의 오브제 "${obj.name}" 정서 반영 가능 (선택사항)` : '';
    const prefCtx = buildPreferenceSummary(day);

    /* SCJ 블로그 힌트: 6개월 이상 경과 시 후보에 포함 요청 */
    const months  = monthsSinceSCJBlog();
    const scjHint = months >= 6
      ? `\n• ⭐ 큐레이터 본인 블로그(blog.naver.com/scjoe)에서 ${story.category} 주제에 맞는 글을 후보 1편으로 포함해 주세요. 출처 표기: "SCJ의 블로그". (마지막 사용: ${months === 99 ? '없음' : months + '개월 전'})`
      : '';

    return `당신은 "통찰·유머·감동" 사이트의 AI 콘텐츠 파트너입니다.
【${DAY_NAMES[day]} — ${story.category}】 주제에 맞는 이야기 후보 5개를 제안해 주세요.
${prefCtx ? '\n' + prefCtx + '\n' : ''}
${'═'.repeat(46)}
게재 조건
${'═'.repeat(46)}
• 요일·주제: ${DAY_NAMES[day]} — ${story.category}
• IHE 구성: 통찰 2편 / 유머 1편 / 감동 2편 권장 (다양하게)${objHint}${scjHint}
• 소재: 실화·역사·문학·영화·과학 등 다양한 출처 활용
• 한국 소재 1편 필수 포함: 한국의 전통·역사·인물·음식·예술·문화 중 하나와 관련된 이야기를 후보 5개 중 반드시 1편 포함해 주세요.
• 한국어 서술, 전 세계 독자 대상

${'═'.repeat(46)}
각 후보 형식 — ${DAY_NAMES[day]} · ${story.category} (반드시 아래 형식 그대로)
${'═'.repeat(46)}

【후보 1】
[제목] 짧고 기억에 남는 구절 (구체적 이름·숫자 포함 권장)
[소재·출처] 실존 인물/사건/작품명 또는 창작
[주요 IHE] 통찰 또는 유머 또는 감동
[IHE 이유] 이 이야기가 왜 그 감각을 일으키는지 1문장
[개요] 이야기 흐름을 4–6문장으로 스케치 (인물·사건·반전·결말 포함)
[독자에게] 읽고 나서 한 줄로 기억될 것

【후보 2】
... (같은 형식)

【후보 3】
... (같은 형식)

【후보 4】
... (같은 형식)

【후보 5】
... (같은 형식)

${'─'.repeat(46)}
다섯 후보는 서로 다른 소재, 다른 IHE 성격으로 구성해 주세요.
큐레이터가 이 중 하나를 선택해 완성본을 별도로 요청할 예정입니다.`;
  }

  /* AI 답변 파싱 → 후보 배열 */
  function parseCandidates(text) {
    const blocks = text.split(/【후보\s*\d+】/).filter(b => b.trim().length > 20);
    if (blocks.length >= 2) return blocks.slice(0, 5).map(extractCandidate);
    /* fallback: 번호 구분자 */
    const alt = text.split(/(?:^|\n)\s*(?:\d+[\.\)、]|\[후보\s*\d+\])/m)
      .filter(b => b.trim().length > 30);
    return alt.slice(0, 5).map(extractCandidate);
  }

  function extractCandidate(block) {
    const get = (key) => {
      const m = block.match(new RegExp(`\\[${key}\\]\\s*([^\\n\\[]+)`));
      return m ? m[1].trim() : '';
    };
    const title = get('제목') || block.split('\n').find(l => l.trim())?.slice(0, 50) || '(제목 없음)';
    return {
      title,
      source:   get('소재·출처') || get('소재') || get('출처') || '',
      ihe:      get('주요 IHE') || get('IHE') || '',
      iheWhy:   get('IHE 이유') || '',
      outline:  get('개요') || '',
      takeaway: get('독자에게') || '',
      raw:      block.trim()
    };
  }

  /* 후보 저장/불러오기 */
  function saveCandidates(day, list) {
    const all = (() => { try { return JSON.parse(localStorage.getItem(CANDIDATES_KEY)) || {}; } catch { return {}; } })();
    all[day] = { list, savedAt: new Date().toISOString() };
    localStorage.setItem(CANDIDATES_KEY, JSON.stringify(all));
  }
  function loadCandidates(day) {
    try {
      const all = JSON.parse(localStorage.getItem(CANDIDATES_KEY)) || {};
      return all[day] ? all[day].list : null;
    } catch { return null; }
  }

  /* ── Build the AI prompt ── */
  function buildStoryPrompt({ day, story, type, cond, srcSel, userReqs }) {
    const condLine = cond  ? `\n• IHE 발생 조건 목표: "${cond}"` : '';
    const srcLine  = srcSel
      ? `\n• 참고 소스: [${srcSel.cat === 'film' ? '영화' : srcSel.cat === 'drama' ? '드라마' : '글·웹'}] ${srcSel.name} — ${srcSel.note}` : '';
    const userBlock = userReqs
      ? `\n\n${'─'.repeat(50)}\n큐레이터 추가 요청사항 (반드시 반영해 주세요)\n${'─'.repeat(50)}\n${userReqs}` : '';

    /* 이달 오브제 참조 블록 */
    const obj = getCurrentObject();
    const objBlock = obj ? `
${'═'.repeat(50)}
이달의 그리운 오브제 (소재 참조 — 선택 사항)
${'═'.repeat(50)}
• 오브제: ${obj.name}
• 성격: ${obj.desc}
• IHE 친화도: ${obj.ihe}
• 이야기 연결 힌트 (아래 중 하나를 참조하거나 자유롭게 활용):
${obj.storyHints.map((h, i) => `  ${i + 1}. ${h}`).join('\n')}
※ 오브제를 직접 등장시키지 않더라도 그 정서·분위기를 이야기 안에 녹여주세요.` : '';

    /* 영상 소스 추천 블록 (IHE 타입 기준) */
    const filmSources = (typeof FILM_SOURCES !== 'undefined' ? FILM_SOURCES : []).filter(s =>
      (s.cat === 'film' || s.cat === 'drama') && s.ihe.includes(type)
    ).slice(0, 3);
    const filmBlock = filmSources.length ? `
${'═'.repeat(50)}
영화·드라마 소스 참조 (${type} 톤 기준 추천)
${'═'.repeat(50)}
${filmSources.map(s => `• [${s.cat === 'film' ? '영화' : '드라마'}] ${s.name}\n  → ${s.note}`).join('\n')}
※ 장면이나 대사를 직접 인용하지 말고, 그 장면이 촉발하는 감정과 구조를 이야기에 반영해 주세요.` : '';

    return `당신은 "통찰·유머·감동" 이야기 사이트의 AI 콘텐츠 파트너입니다.
아래 조건으로 이야기를 작성해 주세요.

${'═'.repeat(50)}
기본 파라미터
${'═'.repeat(50)}
• 요일·주제: ${DAY_NAMES[day]} — ${story.category}
• 주요 IHE 카테고리: ${type}${condLine}${srcLine}
${objBlock}${filmBlock}

${'═'.repeat(50)}
형식 요구사항
${'═'.repeat(50)}
[제목]
짧고 기억에 남는 구절 (구체적 이름·숫자·사건 포함 권장)

[본문]
• 감동 이야기: 컴퓨터 화면 1페이지 이상, 모바일 2–3스크롤 이상
• 통찰·유머 이야기: 원본의 자연스러운 길이 유지 (압축·요약 금지)
• 단락 나누기, 짧은 문장 중심, 현재 또는 과거 시제 자유롭게
• 마지막 1–2단락: 핵심 통찰·교훈을 담은 여운 있는 마무리

[분석] ← 이야기 아래에 이 형식 그대로 작성
💡 통찰: (1–2문장으로 이 이야기에서 통찰이 생기는 이유)
   발생 조건: "…할 때" 형식 한 문장
😄 유머: (1–2문장으로 유머가 생기는 이유)
   발생 조건: "…할 때" 형식 한 문장
❤️ 감동: (1–2문장으로 감동이 생기는 이유)
   발생 조건: "…할 때" 형식 한 문장

[주요 IHE]: ${type}

[출처]
실존 역사·인물 기반이면 원제·저자·연도 명시
영화·드라마 참조 시 "○○○ (연도)에서 영감 받아 재구성한 이야기"
창작이면 "창작 이야기"
퍼블릭 도메인이면 원작명·연도·링크${userBlock}`;
  }

  /* ── Build the data.js snippet template ── */
  function buildDataSnippet({ day, story, type, cond, srcSel }) {
    const srcTypeGuess = srcSel ? '재서술' : '창작';
    const srcUrl = srcSel ? `'${srcSel.url}'` : 'null';
    const condPlaceholder = cond || '[AI가 제안한 발생 조건]';

    return `  /* ═══ ${DAY_NAMES[day]} — ${story.category} (PRIMARY: ${type}) ═══ */
  ${day}: {
    title: '[AI 생성 제목]',
    category: '${story.category}',
    primaryType: '${type}',
    types: ['${type}', '통찰', '유머', '감동'].filter((v,i,a)=>a.indexOf(v)===i).slice(0,3),
    image: 'images/story-${IMG_KEYS[day]}.png',
    svgKey: ${day},
    body: [
      '[본문 단락 1]',
      '[본문 단락 2]',
      '[본문 단락 3]',
      '[본문 단락 4]',
      '[본문 단락 5]',
      '[본문 단락 6 — 마무리]'
    ],
    closing: '[핵심 통찰 마무리 문장 1]\\n[마무리 문장 2]',
    analysis: {
      insight: { icon: '💡', text: '[통찰 분석 텍스트]',
                 condition: '${condPlaceholder}' },
      humor:   { icon: '😄', text: '[유머 분석 텍스트]',
                 condition: '[AI가 제안한 발생 조건]' },
      emotion: { icon: '❤️', text: '[감동 분석 텍스트]',
                 condition: '[AI가 제안한 발생 조건]' }
    },
    source: {
      type: '${srcTypeGuess}',
      credit: '[출처 설명 — AI 답변에서 복사]',
      url: ${srcUrl}
    }
  },`;
  }

  /* ── Rankings Drawer ── */
  function openRankings() {
    const drawer = document.getElementById('rankingsDrawer');
    if (!drawer) return;
    drawer.classList.add('open');

    const all = loadAllRatings();

    /* Build top-5 per category */
    const buildTop = (cat) => {
      return SOURCES
        .filter(s => {
          const r = all[s.id] || {};
          return (r.cats || []).includes(cat) && (r.stars || 0) > 0;
        })
        .sort((a, b) => {
          const ra = all[a.id] || {}, rb = all[b.id] || {};
          const fa = ra.found || 0,  fb = rb.found || 0;
          const sa = ra.stars || 0,  sb = rb.stars || 0;
          return (sb * 2 + fb) - (sa * 2 + fa);
        })
        .slice(0, 5);
    };

    /* Condition frequency */
    const condFreq = {};
    Object.values(all).forEach(r => {
      (r.conditions || []).forEach(c => { condFreq[c] = (condFreq[c] || 0) + 1; });
    });
    const topConds = Object.entries(condFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);

    const totalRated  = Object.values(all).filter(r => (r.stars || 0) > 0).length;
    const totalFound  = Object.values(all).reduce((s, r) => s + (r.found || 0), 0);

    ['통찰','유머','감동'].forEach(cat => {
      const el = document.getElementById(`rank-${TYPE_CLASS[cat]}`);
      if (!el) return;
      const top = buildTop(cat);
      if (top.length === 0) {
        el.innerHTML = '<li class="rank-empty">아직 데이터가 없습니다</li>';
        return;
      }
      el.innerHTML = top.map((src, i) => {
        const r = all[src.id] || {};
        const stars = '★'.repeat(r.stars || 0);
        return `<li class="rank-item">
          <span class="rank-num">${i+1}</span>
          <div class="rank-info">
            <a class="rank-name" href="${src.url}" target="_blank" rel="noopener">${src.name}</a>
            <span class="rank-meta">${stars} · 발견 ${r.found || 0}회</span>
          </div>
        </li>`;
      }).join('');
    });

    /* Condition frequency */
    const condEl = document.getElementById('rankConditions');
    if (condEl) {
      if (topConds.length === 0) {
        condEl.innerHTML = '<p class="rank-empty">아직 기록된 조건이 없습니다</p>';
      } else {
        condEl.innerHTML = topConds.map(([cond, cnt]) =>
          `<div class="cond-freq-item">
             <span class="cond-freq-text">${cond}</span>
             <span class="cond-freq-count">${cnt}회</span>
           </div>`
        ).join('');
      }
    }

    /* Summary */
    const sumEl = document.getElementById('rankSummary');
    if (sumEl) sumEl.innerHTML =
      `<span>평가된 소스: <strong>${totalRated}</strong> / ${SOURCES.length}개</span>
       <span>총 스토리 발견: <strong>${totalFound}</strong>회</span>`;

    /* 후보 선호 패턴 섹션 */
    const DAY_NAMES_SHORT = { 1:'월', 2:'화', 3:'수', 4:'목', 5:'금' };
    const prefHtml = [1,2,3,4,5].map(d => {
      const sessions = (loadRankingHistory()[d] || []);
      if (!sessions.length) return '';
      const summary = buildPreferenceSummary(d);
      const sessionCount = sessions.length;
      const summaryHtml = summary
        ? `<pre class="pref-text">${summary}</pre>`
        : `<p class="pref-pending">${sessionCount}회 누적 (5회 이상이면 패턴 분석 시작)</p>`;
      return `<div class="pref-day">
        <strong>${DAY_NAMES_SHORT[d]}요일</strong> <span class="pref-count">(${sessionCount}회 누적)</span>
        ${summaryHtml}
      </div>`;
    }).filter(Boolean).join('') || '<p class="rank-empty">아직 순위 데이터가 없습니다</p>';

    let prefSection = document.getElementById('rankPrefSection');
    if (!prefSection) {
      prefSection = document.createElement('div');
      prefSection.id = 'rankPrefSection';
      const panel = drawer.querySelector('.rankings-panel');
      if (panel) panel.appendChild(prefSection);
    }
    prefSection.innerHTML = `
      <p class="rankings-conds-title">📈 후보 선호 패턴 (AI 피드백 루프)</p>
      <div class="pref-days-list">${prefHtml}</div>`;

    /* Close on backdrop */
    drawer.addEventListener('click', e => { if (e.target === drawer) drawer.classList.remove('open'); }, { once: true });
  }

  /* ──────────────────────────────────────────────
     SIDEBAR — 이야기 목록 (왼쪽 패널)
  ────────────────────────────────────────────── */
  /* 사이드바: 날짜 색인 방식 */
  function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    if (!nav) return;

    const now       = new Date();
    const DAY_KR    = ['일','월','화','수','목','금','토'];
    const WEEKDAY_LABEL = { 1:'월', 2:'화', 3:'수', 4:'목', 5:'금', 6:'토' };

    /* 이번 주 이야기 목록 구성
       publishedDate가 있으면 사용, 없으면 "이번 주" */
    const thisWeekItems = [1, 2, 3, 4, 5, 6].map(d => {
      /* activeArchive 상태와 무관하게 항상 이번 주 STORIES를 사용 */
      const staged = loadStaging(d);
      const story  = (staged && staged.story) ? { ...STORIES[d], ...staged.story } : STORIES[d];
      /* publishedDate가 'YYYY년 M월 D일' 형식이면 그대로 사용 (메인 화면과 동일) */
      const pdMatch = (story.publishedDate || '').match(/^(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일$/);
      let dt;
      if (pdMatch) {
        dt = new Date(parseInt(pdMatch[1]), parseInt(pdMatch[2]) - 1, parseInt(pdMatch[3]));
      } else {
        const todayDow  = now.getDay();
        const targetDow = d;
        const diff = todayDow === 0 ? targetDow
                   : todayDow === 6 ? targetDow - 6
                   : targetDow - todayDow;
        dt = new Date(now);
        dt.setDate(now.getDate() + diff);
      }
      return {
        day: d,
        title: story.title,
        dateObj: dt,
        dateStr: `${dt.getMonth()+1}월 ${dt.getDate()}일`,
        dowKr: WEEKDAY_LABEL[d],
        published: story.publishedDate || null
      };
    });

    /* 히스토리에서 과거 이야기 수집 */
    const history = loadHistory ? loadHistory() : {};
    const pastItems = [];
    Object.values(history).forEach(entry => {
      if (!entry || !entry.title) return;
      const ts = entry.publishedAt || entry.confirmedAt || entry.addedAt;
      if (!ts) return;
      const dt = new Date(ts);
      /* 이번 주와 겹치면 제외 */
      const dtMon = new Date(dt); dtMon.setHours(0,0,0,0);
      const thisMonday = new Date(now);
      const dow = now.getDay() === 0 ? 7 : now.getDay();
      thisMonday.setDate(now.getDate() - (dow - 1));
      thisMonday.setHours(0,0,0,0);
      const thisFriday = new Date(thisMonday);
      thisFriday.setDate(thisMonday.getDate() + 4);
      if (dtMon >= thisMonday && dtMon <= thisFriday) return;
      pastItems.push({ title: entry.title, dateObj: dt,
        dateStr: `${dt.getMonth()+1}월 ${dt.getDate()}일`, day: null });
    });
    pastItems.sort((a,b) => b.dateObj - a.dateObj);

    /* 월별 그룹화 헬퍼 */
    function groupByMonth(items) {
      const map = {};
      items.forEach(it => {
        const key = `${it.dateObj.getFullYear()}년 ${it.dateObj.getMonth()+1}월`;
        if (!map[key]) map[key] = [];
        map[key].push(it);
      });
      return map;
    }

    /* 이번 주 섹션 */
    const thisWeekYear  = now.getFullYear();
    const thisWeekMonth = now.getMonth() + 1;
    const thisWeekLabel = `${thisWeekYear}년 ${thisWeekMonth}월`;

    let html = `<div class="sb-month-group">
      <div class="sb-month-label">${thisWeekLabel} · 이번 주</div>
      <ul class="sb-date-list">`;
    thisWeekItems.forEach(it => {
      const isActive = it.day === activeDay;
      const isFuture = it.dateObj > now && it.dateObj.toDateString() !== now.toDateString();
      html += `<li class="sb-date-item${isActive ? ' active' : ''}${isFuture ? ' future' : ''}"
        data-day="${it.day}" role="button" tabindex="0">
        <span class="sb-date-num">${it.dateStr}</span>
        <span class="sb-date-title">${it.title}</span>
      </li>`;
    });
    html += `</ul></div>`;

    /* 독자 이야기 섹션 (이번 달 featured) */
    const featuredSubs = getFeaturedThisMonth();
    if (featuredSubs.length > 0) {
      const mn = now.getMonth() + 1;
      html += `<div class="sb-month-group">
        <div class="sb-month-label sb-reader-label">✍️ 독자 이야기 ${mn}월 (${featuredSubs.length}/3)</div>
        <ul class="sb-date-list">`;
      featuredSubs.forEach(s => {
        const isActive = activeSubmission && activeSubmission.id === s.id;
        html += `<li class="sb-date-item sb-reader-item${isActive ? ' active' : ''}" data-subid="${s.id}" role="button" tabindex="0">
          <span class="sb-date-num">${TYPE_ICON[s.cat] || ''} ${s.cat}</span>
          <span class="sb-date-title">${escHtml(s.title)}</span>
        </li>`;
      });
      html += `</ul></div>`;
    }

    /* 지난 이야기 섹션 (STORY_ARCHIVE 기반 — 클릭하면 본문 보기 가능) */
    if (STORY_ARCHIVE.length) {
      const WEEKDAY_LABEL = { 1:'월', 2:'화', 3:'수', 4:'목', 5:'금', 6:'토' };
      html += `<div class="sb-month-group sb-archive-group">
        <div class="sb-month-label">지난 이야기</div>`;
      STORY_ARCHIVE.forEach((week, weekIdx) => {
        /* weekStart(YYYY-MM-DD) 파싱 — 로컬타임 기준으로 파싱해 시간대 오차 방지 */
        const [wy, wm, wd] = week.weekStart.split('-').map(Number);
        html += `<div class="sb-archive-week">
          <div class="sb-archive-week-label">${week.weekLabel}</div>
          <ul class="sb-date-list">`;
        Object.keys(week.stories).forEach(d => {
          const story = week.stories[d];
          const isActive = activeArchive && activeArchive.weekIdx === weekIdx && activeArchive.day === Number(d);
          /* 날짜: story.publishedDate 우선, 없으면 weekStart + (day-1) 계산 */
          let dateStr;
          const pdMatch = (story.publishedDate || '').match(/^(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일$/);
          if (pdMatch) {
            dateStr = `${pdMatch[2]}월 ${pdMatch[3]}일`;
          } else {
            const dt = new Date(wy, wm - 1, wd + (Number(d) - 1));
            dateStr = `${dt.getMonth()+1}월 ${dt.getDate()}일`;
          }
          html += `<li class="sb-date-item sb-archive-item${isActive ? ' active' : ''}" data-week="${weekIdx}" data-day="${d}" role="button" tabindex="0">
            <span class="sb-date-num">${dateStr}</span>
            <span class="sb-date-title">${story.title}</span>
          </li>`;
        });
        html += `</ul></div>`;
      });
      html += `</div>`;
    }

    nav.innerHTML = html;

    nav.querySelectorAll('.sb-date-item[data-day]').forEach(item => {
      if (item.classList.contains('sb-archive-item')) return;
      const day = parseInt(item.dataset.day, 10);
      if (!day) return;
      const go = () => { setActiveDay(day); closeSidebar(); };
      item.addEventListener('click', go);
      item.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); go(); } });
    });

    nav.querySelectorAll('.sb-archive-item').forEach(item => {
      const weekIdx = parseInt(item.dataset.week, 10);
      const day     = parseInt(item.dataset.day,  10);
      const go = () => { setActiveArchiveStory(weekIdx, day); closeSidebar(); };
      item.addEventListener('click', go);
      item.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); go(); } });
    });

    nav.querySelectorAll('.sb-reader-item[data-subid]').forEach(item => {
      const sub = loadSubmissions().find(s => s.id === item.dataset.subid);
      if (!sub) return;
      const go = () => { showSubmissionStory(sub); closeSidebar(); };
      item.addEventListener('click', go);
      item.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); go(); } });
    });
  }

  /* Sidebar open/close */
  function openSidebar() {
    document.getElementById('storySidebar').classList.add('open');
    document.getElementById('sidebarOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    document.getElementById('storySidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  function initSidebar() {
    const toggle   = document.getElementById('sidebarToggle');
    const closeBtn = document.getElementById('sidebarClose');
    const overlay  = document.getElementById('sidebarOverlay');
    const logo     = document.getElementById('sidebarLogo');

    if (toggle)   toggle.addEventListener('click', openSidebar);
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
    if (overlay)  overlay.addEventListener('click', closeSidebar);

    /* Logo click → go to today's story */
    if (logo) {
      logo.addEventListener('click', e => {
        e.preventDefault();
        setActiveDay(todayKey);
        closeSidebar();
      });

      /* Mobile curator activation: long-press logo 2 seconds */
      let lpTimer = null;
      logo.addEventListener('touchstart', () => {
        lpTimer = setTimeout(() => {
          toggleCurator();
          renderSidebar();
          if (curatorActive) {
            logo.style.outline = '3px solid #e05a77';
            setTimeout(() => { logo.style.outline = ''; }, 800);
          }
        }, 2000);
      }, { passive: true });
      logo.addEventListener('touchend',  () => clearTimeout(lpTimer));
      logo.addEventListener('touchmove', () => clearTimeout(lpTimer));
    }

    renderSidebar();
  }

  /* ── Topbar day label ── */
  function renderTopbarDay(day) {
    const el = document.getElementById('topbarDay');
    if (!el) return;
    const story = STORIES[day];
    el.textContent = DAY_SHORT[day];
  }

  /* ──────────────────────────────────────────────
     DAY NAVIGATION  — setActiveDay
  ────────────────────────────────────────────── */
  function setActiveArchiveStory(weekIdx, day) {
    activeSubmission = null;
    activeArchive    = { weekIdx, day };
    activeDay        = day;
    history.replaceState(null, '', '#archive-' + weekIdx + '-' + day);
    const seasonCls = [...document.body.classList].find(c => c.startsWith('season-'));
    document.body.className = `day-${day}${seasonCls ? ' ' + seasonCls : ''}`;
    renderDayLabel(day);
    renderDateSeason(day);
    renderIllustration(day);
    renderStory(day);
    renderQnA(day);
    renderTopbarDay(day);
    renderBadges(day);
    renderAnalysis(day);
    renderSitesSub(day);
    renderSearchGuide(day);
    renderSources(day);
    renderWeekProgress();
    renderWeeklyBar();
    document.querySelectorAll('.sb-date-item[data-day]').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sb-archive-item').forEach(el => el.classList.remove('active'));
    const target = document.querySelector(`.sb-archive-item[data-week="${weekIdx}"][data-day="${day}"]`);
    if (target) target.classList.add('active');
    const wrapper = document.getElementById('mainWrapper');
    if (wrapper) wrapper.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setActiveDay(day) {
    activeSubmission = null;
    activeArchive    = null;
    activeDay = day;
    history.replaceState(null, '', '#day-' + day);

    /* Body class for day color theme — preserve season class */
    const seasonCls = [...document.body.classList].find(c => c.startsWith('season-'));
    document.body.className = `day-${day}${seasonCls ? ' ' + seasonCls : ''}`;

    /* ── Reader-facing renders ── */
    renderDayLabel(day);
    renderDateSeason(day);
    renderIllustration(day);
    renderStory(day);
    renderQnA(day);
    renderTopbarDay(day);

    /* ── Curator-facing renders (always run; hidden elements just don't show) ── */
    renderBadges(day);
    renderAnalysis(day);
    renderSitesSub(day);
    renderSearchGuide(day);
    renderSources(day);
    renderWeekProgress();
    renderWeeklyBar();

    /* ── Sidebar active state ── */
    document.querySelectorAll('.sb-date-item[data-day]').forEach(item => {
      item.classList.toggle('active', parseInt(item.dataset.day, 10) === day);
    });

    /* Scroll main wrapper to top */
    const wrapper = document.getElementById('mainWrapper');
    if (wrapper) wrapper.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ──────────────────────────────────────────────
     READER STORY SUBMISSION
  ────────────────────────────────────────────── */

  /* 큐레이터 이메일 — 여기에 본인 이메일을 입력하세요 */
  const CURATOR_EMAIL = 'scjoe21@gmail.com';

  const SUB_KEY = 'reader-submissions-v1';
  const DAY_TOPIC = { 1: '사랑', 2: '역사·문학', 3: '철학·심리', 4: '과학·문화', 5: '경제·정치' };
  const IHE_LABEL = { '통찰': '통찰이 생기는 순간', '유머': '유머가 생기는 순간', '감동': '감동이 생기는 순간' };

  function loadSubmissions() {
    try { return JSON.parse(localStorage.getItem(SUB_KEY)) || []; } catch { return []; }
  }
  function saveSubmission(entry) {
    const all = loadSubmissions();
    all.unshift(entry);
    localStorage.setItem(SUB_KEY, JSON.stringify(all));
    updateSubReviewBadge();
  }
  function updateSubReviewBadge() {
    const badge  = document.getElementById('subReviewBadge');
    const subs   = loadSubmissions();
    const pending = subs.filter(s => !s.status || s.status === 'pending').length;
    if (!badge) return;
    if (pending > 0) { badge.textContent = pending; badge.hidden = false; }
    else               { badge.hidden = true; }
  }

  function initSubmissionForm() {
    const form     = document.getElementById('submissionForm');
    const success  = document.getElementById('subSuccess');
    const againBtn = document.getElementById('subAgainBtn');
    const errorEl  = document.getElementById('subError');
    const bodyTA   = document.getElementById('subBody');
    const countEl  = document.getElementById('subBodyCount');
    const iheLabel = document.getElementById('subIheLabel');
    if (!form) return;

    /* ── 토글 버튼 ── */
    const toggleBtn  = document.getElementById('subBarToggle');
    const expandArea = document.getElementById('subExpandArea');
    if (toggleBtn && expandArea) {
      toggleBtn.addEventListener('click', () => {
        const opening = expandArea.hidden;
        expandArea.hidden = !opening;
        toggleBtn.textContent = opening ? '닫기 ↑' : '보내기 ↓';
      });
    }

    let selectedCat = '';
    let selectedDay = '';

    /* Character counter */
    if (bodyTA && countEl) {
      bodyTA.addEventListener('input', () => {
        const len = bodyTA.value.length;
        countEl.textContent = `${len.toLocaleString()} / 1,000`;
        countEl.classList.toggle('sub-charcount--warn', len > 900);
      });
    }

    /* Category selection */
    document.querySelectorAll('.sub-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sub-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedCat = btn.dataset.cat;
        /* Update IHE label */
        if (iheLabel) iheLabel.textContent = `이 이야기에서 ${IHE_LABEL[selectedCat]}은?`;
        /* Update section theme */
        const section = document.getElementById('submissionSection');
        if (section) section.dataset.cat = TYPE_CLASS[selectedCat] || '';
        if (errorEl) errorEl.textContent = '';
      });
    });

    /* Day selection */
    document.querySelectorAll('.sub-day-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const already = btn.classList.contains('active');
        document.querySelectorAll('.sub-day-btn').forEach(b => b.classList.remove('active'));
        if (!already) { btn.classList.add('active'); selectedDay = btn.dataset.day; }
        else           { selectedDay = ''; }
      });
    });

    /* Form submit */
    form.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('subTitle').value.trim();
      const body  = document.getElementById('subBody').value.trim();
      const ihe   = document.getElementById('subIhe').value.trim();
      const name  = document.getElementById('subName').value.trim();
      const email = document.getElementById('subEmail').value.trim();

      /* Validation */
      if (!selectedCat) { showSubError('카테고리를 선택해 주세요.'); return; }
      if (!title)        { showSubError('이야기 제목을 입력해 주세요.'); return; }
      if (body.length < 50) { showSubError('이야기 본문을 50자 이상 입력해 주세요.'); return; }
      if (!name)         { showSubError('닉네임 또는 이름을 입력해 주세요.'); return; }

      errorEl.textContent = '';

      const dayLabel = selectedDay ? DAY_TOPIC[selectedDay] : '(미지정)';
      const dateStr  = new Date().toLocaleString('ko-KR');

      /* Build email body */
      const mailBody = [
        `[독자 이야기 제출] ${dateStr}`,
        ``,
        `카테고리 : ${selectedCat}`,
        `요일 주제: ${dayLabel}`,
        `제목     : ${title}`,
        `작성자   : ${name}`,
        `이메일   : ${email || '(미제공)'}`,
        ``,
        `────────────── 이야기 ──────────────`,
        body,
        ``,
        `──── ${selectedCat}이 생기는 순간 ────`,
        ihe,
        `────────────────────────────────────`,
      ].join('\n');

      const subject = encodeURIComponent(`[HumanZest] 독자 이야기 제출: ${title} — ${selectedCat}`);
      const bodyEnc = encodeURIComponent(mailBody);
      const mailto  = `mailto:${CURATOR_EMAIL}?subject=${subject}&body=${bodyEnc}`;

      /* Open email client */
      window.location.href = mailto;

      /* Also save locally */
      const entry = {
        id: Date.now().toString(36),
        cat: selectedCat,
        day: selectedDay || null,
        title,
        body,
        ihe,
        name,
        email: email || null,
        date: new Date().toISOString(),
        status: 'pending'   /* pending | featured | declined */
      };
      saveSubmission(entry);

      /* Show success */
      form.hidden   = true;
      success.hidden = false;
    });

    /* Again button */
    if (againBtn) {
      againBtn.addEventListener('click', () => {
        form.hidden    = false;
        success.hidden = true;
        form.reset();
        selectedCat = ''; selectedDay = '';
        document.querySelectorAll('.sub-cat-btn, .sub-day-btn').forEach(b => b.classList.remove('active'));
        const section = document.getElementById('submissionSection');
        if (section) delete section.dataset.cat;
        if (iheLabel) iheLabel.textContent = '이 이야기에서 통찰·유머·감동이 생기는 순간은?';
        if (countEl)  countEl.textContent = '0 / 1,000';
      });
    }

    updateSubReviewBadge();
  }

  function showSubError(msg) {
    const el = document.getElementById('subError');
    if (el) { el.textContent = msg; el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
  }

  /* ──────────────────────────────────────────────
     CURATOR: SUBMISSION REVIEW (전면 재설계)
     — 필터 · 정렬 · AI점수 · Top-10 · 보류 · 메모
  ────────────────────────────────────────────── */

  const STATUS_LABEL = { pending: '검토 중', featured: '게재 예정', hold: '보류', declined: '반려' };
  const STATUS_CLS   = { pending: '', featured: 'sub-rv-featured', hold: 'sub-rv-hold', declined: 'sub-rv-declined' };

  /* Review UI state — persists across re-renders */
  const rvState = { cat: 'all', status: 'all', sort: 'rating', showForm: false };

  function openSubReview() {
    const drawer = document.getElementById('subReviewDrawer');
    if (!drawer) return;
    drawer.classList.add('open');
    renderSubReviewBody();
    drawer.addEventListener('click', e => { if (e.target === drawer) drawer.classList.remove('open'); }, { once: true });
  }

  function renderSubReviewBody() {
    const body = document.getElementById('subReviewBody');
    if (!body) return;

    const allSubs      = loadSubmissions();
    const featuredNow  = getFeaturedThisMonth();
    const pending      = allSubs.filter(s => !s.status || s.status === 'pending').length;
    const mn           = new Date().getMonth() + 1;

    /* Filter */
    let items = allSubs.filter(s => {
      if (rvState.cat    !== 'all' && s.cat !== rvState.cat) return false;
      if (rvState.status !== 'all' && (s.status || 'pending') !== rvState.status) return false;
      return true;
    });

    /* Sort */
    if (rvState.sort === 'rating') {
      items.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else {
      items.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    const quotaFull = featuredNow.length >= 3;

    body.innerHTML = `
      <!-- 월 쿼터 바 -->
      <div class="sub-rv-quota-bar">
        <span class="sub-rv-quota-label">
          ${mn}월 독자 이야기
          <strong class="${quotaFull ? 'quota-full' : ''}">${featuredNow.length} / 3</strong>
          ${quotaFull ? '<span class="quota-badge">마감</span>' : ''}
        </span>
        <button class="sub-rv-add-btn" id="rvAddToggle">${rvState.showForm ? '✕ 닫기' : '➕ 이메일로 받은 글 등록'}</button>
      </div>

      <!-- 수동 등록 폼 -->
      ${rvState.showForm ? `
      <div class="sub-rv-form-wrap">
        <div class="sub-rv-form-row">
          <div class="sub-cat-inline" id="rvFormCatBtns">
            <button type="button" class="sub-cat-btn" data-cat="통찰">💡 통찰</button>
            <button type="button" class="sub-cat-btn" data-cat="유머">😄 유머</button>
            <button type="button" class="sub-cat-btn" data-cat="감동">❤️ 감동</button>
          </div>
          <input type="text" id="rvFormName" class="sub-input sub-input--flex" placeholder="닉네임 *" maxlength="20" />
        </div>
        <input type="text" id="rvFormTitle" class="sub-input" placeholder="제목 *" maxlength="60" />
        <textarea id="rvFormBody" class="sub-textarea" rows="5" placeholder="본문 *" maxlength="1000"></textarea>
        <input type="text" id="rvFormIhe" class="sub-input" placeholder="통찰·유머·감동 포인트 (선택)" maxlength="100" />
        <div class="sub-rv-form-actions">
          <p class="sub-rv-form-err" id="rvFormErr"></p>
          <button class="sub-rv-panel-btn" id="rvFormSubmit">등록하기</button>
        </div>
      </div>` : ''}

      <!-- 필터 툴바 -->
      <div class="sub-rv-toolbar">
        <div class="sub-rv-toolbar-row">
          <select class="sub-rv-sel" id="rvCatFilter">
            <option value="all"${rvState.cat==='all'?' selected':''}>전체 카테고리</option>
            <option value="통찰"${rvState.cat==='통찰'?' selected':''}>💡 통찰</option>
            <option value="유머"${rvState.cat==='유머'?' selected':''}>😄 유머</option>
            <option value="감동"${rvState.cat==='감동'?' selected':''}>❤️ 감동</option>
          </select>
          <select class="sub-rv-sel" id="rvStatusFilter">
            <option value="all"${rvState.status==='all'?' selected':''}>전체 상태</option>
            <option value="pending"${rvState.status==='pending'?' selected':''}>검토 중</option>
            <option value="featured"${rvState.status==='featured'?' selected':''}>게재</option>
            <option value="hold"${rvState.status==='hold'?' selected':''}>보류</option>
            <option value="declined"${rvState.status==='declined'?' selected':''}>반려</option>
          </select>
          <select class="sub-rv-sel" id="rvSort">
            <option value="rating"${rvState.sort==='rating'?' selected':''}>별점순</option>
            <option value="date"${rvState.sort==='date'?' selected':''}>최신순</option>
          </select>
        </div>
        <span class="sub-rv-count">총 ${allSubs.length}건 · 미검토 ${pending}</span>
      </div>

      <!-- 이야기 목록 -->
      <div class="sub-rv-list">
        ${items.length === 0
          ? `<div class="sub-rv-empty"><p>해당하는 제출 이야기가 없습니다.</p></div>`
          : items.map(s => buildSubItemHtml(s)).join('')}
      </div>`;

    /* 수동 등록 토글 */
    body.querySelector('#rvAddToggle').addEventListener('click', () => {
      rvState.showForm = !rvState.showForm;
      renderSubReviewBody();
    });

    /* 수동 등록 폼 처리 */
    if (rvState.showForm) {
      let formCat = '';
      body.querySelectorAll('#rvFormCatBtns .sub-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          body.querySelectorAll('#rvFormCatBtns .sub-cat-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          formCat = btn.dataset.cat;
        });
      });
      body.querySelector('#rvFormSubmit').addEventListener('click', () => {
        const name  = body.querySelector('#rvFormName').value.trim();
        const title = body.querySelector('#rvFormTitle').value.trim();
        const bText = body.querySelector('#rvFormBody').value.trim();
        const ihe   = body.querySelector('#rvFormIhe').value.trim();
        const err   = body.querySelector('#rvFormErr');
        if (!formCat) { err.textContent = '카테고리를 선택하세요.'; return; }
        if (!name)    { err.textContent = '닉네임을 입력하세요.'; return; }
        if (!title)   { err.textContent = '제목을 입력하세요.'; return; }
        if (!bText)   { err.textContent = '본문을 입력하세요.'; return; }
        saveSubmission({
          id: Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
          cat: formCat, name, title, body: bText, ihe,
          email: null, date: new Date().toISOString(), status: 'pending'
        });
        rvState.showForm = false;
        renderSubReviewBody();
      });
    }

    /* 필터 리스너 */
    body.querySelector('#rvCatFilter').addEventListener('change',    e => { rvState.cat    = e.target.value; renderSubReviewBody(); });
    body.querySelector('#rvStatusFilter').addEventListener('change', e => { rvState.status = e.target.value; renderSubReviewBody(); });
    body.querySelector('#rvSort').addEventListener('change',         e => { rvState.sort   = e.target.value; renderSubReviewBody(); });

    /* 아이템 액션 버튼 */
    body.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const { action, id } = btn.dataset;
        if (action === 'rate') {
          saveSubRating(id, parseInt(btn.dataset.rating, 10));
          renderSubReviewBody();
        }
        if (action === 'feature') {
          if (quotaFull && !featuredNow.find(f => f.id === id)) {
            if (!confirm('이번 달 3개 한도에 도달했습니다. 그래도 게재하겠습니까?')) return;
          }
          updateSubStatus(id, 'featured');
          renderSubReviewBody();
          renderSidebar();
        }
        if (action === 'hold')    { updateSubStatus(id, 'hold');     renderSubReviewBody(); }
        if (action === 'decline') { updateSubStatus(id, 'declined'); renderSubReviewBody(); }
        if (action === 'delete')  { if (confirm('삭제할까요?')) { deleteSubmission(id); renderSubReviewBody(); renderSidebar(); } }
        if (action === 'memo') {
          const input = btn.closest('.sub-rv-item').querySelector('.sub-rv-memo-input');
          if (input) saveSubMemo(id, input.value);
          btn.textContent = '✅';
          setTimeout(() => { btn.textContent = '저장'; }, 1500);
        }
      });
    });
  }

  /* Build one story card HTML */
  function buildSubItemHtml(s) {
    const dateTxt  = new Date(s.date).toLocaleDateString('ko-KR');
    const ico      = TYPE_ICON[s.cat] || '·';
    const cls      = STATUS_CLS[s.status || 'pending'] || '';
    const rating   = s.rating || 0;
    const starsHtml = [1,2,3,4,5].map(n =>
      `<button class="sub-rv-star${rating >= n ? ' on' : ''}" data-action="rate" data-id="${s.id}" data-rating="${n}" title="${n}점">★</button>`
    ).join('');

    return `
    <div class="sub-rv-item ${cls}" data-id="${s.id}">
      <div class="sub-rv-top">
        <span class="sub-rv-cat">${ico} ${s.cat}</span>
        <span class="sub-rv-date">${dateTxt}</span>
      </div>
      <div class="sub-rv-stars">${starsHtml}</div>
      <p class="sub-rv-title">${escHtml(s.title)}</p>
      <p class="sub-rv-author">by ${escHtml(s.name)}</p>
      <div class="sub-rv-body">${escHtml(s.body)}</div>
      ${s.ihe ? `<p class="sub-rv-ihe"><strong>포인트:</strong> ${escHtml(s.ihe)}</p>` : ''}
      <div class="sub-rv-memo-row">
        <input type="text" class="sub-rv-memo-input" placeholder="내부 메모" value="${escAttr(s.memo || '')}">
        <button class="sub-rv-memo-save" data-action="memo" data-id="${s.id}">저장</button>
      </div>
      <div class="sub-rv-actions">
        <button class="sub-rv-btn sub-rv-btn--feature" data-action="feature" data-id="${s.id}">✅ 게재</button>
        <button class="sub-rv-btn sub-rv-btn--hold"    data-action="hold"    data-id="${s.id}">⏸ 보류</button>
        <button class="sub-rv-btn sub-rv-btn--decline" data-action="decline" data-id="${s.id}">❌ 반려</button>
        <button class="sub-rv-btn sub-rv-btn--delete"  data-action="delete"  data-id="${s.id}">🗑</button>
      </div>
      <div class="sub-rv-status">${STATUS_LABEL[s.status || 'pending']}</div>
    </div>`;
  }

  /* Build and display the AI evaluation prompt */
  function buildAndShowPrompt() {
    const unscored = loadSubmissions().filter(s => !s.aiScore);
    const pre      = document.getElementById('rvPromptPre');
    const copyBtn  = document.getElementById('rvCopyPrompt');
    if (!pre) return;

    if (unscored.length === 0) {
      pre.textContent = '(모든 이야기가 이미 AI 평가되었습니다)';
      if (copyBtn) copyBtn.hidden = true;
      return;
    }

    const storiesText = unscored.map(s =>
      `[ID: ${s.id}]\n카테고리: ${s.cat}\n제목: ${s.title}\n이야기: ${s.body}\n${s.cat} 포인트: ${s.ihe}`
    ).join('\n\n---\n\n');

    const prompt =
`아래 독자 제출 이야기들을 IHE 기준으로 평가해 주세요.

평가 기준:
- 통찰(insight 0–10): 예상 밖 반전, 관점 전환, 역설, 주체-객체 전도
- 유머(humor 0–10): 기대 위반, 긴장-이완 구조, 진지한 것의 희화화
- 감동(emotion 0–10): 취약함 노출, 보편적 공감, 시간의 무게, 말하지 않은 것의 울림

응답은 반드시 아래 JSON 배열 형식으로만 해 주세요 (설명 없이):
[
  {
    "id": "이야기ID",
    "insight": 0~10,
    "humor": 0~10,
    "emotion": 0~10,
    "total": 세 점수의 합(0~30),
    "summary": "가장 강한 IHE 순간 한 문장"
  }
]

===== 평가할 이야기 (${unscored.length}건) =====

${storiesText}`;

    pre.textContent = prompt;
    if (copyBtn) {
      copyBtn.textContent = `📋 복사 (${unscored.length}건)`;
      copyBtn.hidden = false;
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(prompt).then(() => {
          copyBtn.textContent = '✅ 복사됨!';
          setTimeout(() => { copyBtn.textContent = `📋 복사 (${unscored.length}건)`; }, 2000);
        });
      };
    }
  }

  /* Parse AI JSON response and store scores */
  function importAIScores(jsonStr) {
    if (!jsonStr) return;
    try {
      const scores = JSON.parse(jsonStr);
      if (!Array.isArray(scores)) throw new Error('JSON 배열이어야 합니다');
      const all = loadSubmissions();
      let count = 0;
      scores.forEach(sc => {
        const idx = all.findIndex(s => s.id === sc.id);
        if (idx >= 0) {
          const ins = Math.round(+sc.insight || 0);
          const hum = Math.round(+sc.humor   || 0);
          const emo = Math.round(+sc.emotion || 0);
          all[idx].aiScore = { insight: ins, humor: hum, emotion: emo, total: ins + hum + emo, summary: sc.summary || '' };
          count++;
        }
      });
      localStorage.setItem(SUB_KEY, JSON.stringify(all));
      updateSubReviewBadge();
      rvState.sort       = 'ai';
      rvState.showImport = false;
      renderSubReviewBody();
      /* Brief notice */
      const bar = document.querySelector('.sub-rv-ai-bar');
      if (bar) {
        const notice = document.createElement('p');
        notice.className = 'sub-rv-notice';
        notice.textContent = `✅ ${count}건 AI 점수 반영 완료 — AI 점수순으로 정렬됩니다`;
        bar.insertAdjacentElement('afterend', notice);
        setTimeout(() => notice.remove(), 4000);
      }
    } catch (e) {
      alert('JSON 형식이 올바르지 않습니다. AI 응답을 그대로 붙여넣어 주세요.\n\n오류: ' + e.message);
    }
  }

  /* Status update — only localStorage, re-render handles DOM */
  function updateSubStatus(id, status) {
    const all = loadSubmissions();
    const idx = all.findIndex(s => s.id === id);
    if (idx < 0) return;
    all[idx].status = status;
    if (status === 'featured') all[idx].featuredAt = new Date().toISOString();
    localStorage.setItem(SUB_KEY, JSON.stringify(all));
    updateSubReviewBadge();
  }

  function deleteSubmission(id) {
    const all = loadSubmissions().filter(s => s.id !== id);
    localStorage.setItem(SUB_KEY, JSON.stringify(all));
    updateSubReviewBadge();
  }

  function saveSubMemo(id, memo) {
    const all = loadSubmissions();
    const idx = all.findIndex(s => s.id === id);
    if (idx < 0) return;
    all[idx].memo = memo;
    localStorage.setItem(SUB_KEY, JSON.stringify(all));
  }

  function saveSubRating(id, rating) {
    const all = loadSubmissions();
    const idx = all.findIndex(s => s.id === id);
    if (idx < 0) return;
    all[idx].rating = rating;
    localStorage.setItem(SUB_KEY, JSON.stringify(all));
  }

  /* 이번 달 featured 제출글 목록 */
  function getFeaturedThisMonth() {
    const now = new Date();
    return loadSubmissions().filter(s => {
      if (s.status !== 'featured') return false;
      const d = new Date(s.featuredAt || s.date);
      return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
    });
  }

  /* 독자 제출글을 메인 스토리 영역에 표시 */
  function showSubmissionStory(sub) {
    activeSubmission = sub;

    const seasonCls = [...document.body.classList].find(c => c.startsWith('season-'));
    document.body.className = `day-reader${seasonCls ? ' ' + seasonCls : ''}`;

    const dateEl = document.getElementById('storyDateLine');
    if (dateEl) dateEl.textContent = `독자 이야기 · ${TYPE_ICON[sub.cat] || ''} ${sub.cat}`;

    const titleEl = document.getElementById('storyTitle');
    if (titleEl) titleEl.textContent = sub.title;

    const bodyEl = document.getElementById('storyBody');
    if (bodyEl) {
      const paras = sub.body.split(/\n+/).filter(Boolean).map(p => `<p>${escHtml(p)}</p>`).join('');
      bodyEl.innerHTML = paras + `<div class="story-source">by ${escHtml(sub.name)}</div>`;
    }

    const illustEl = document.getElementById('illustrationArea');
    if (illustEl) illustEl.innerHTML = '';

    const ornament = document.getElementById('storyOrnament');
    if (ornament) ornament.style.display = 'none';

    const noteSection = document.getElementById('curatorNoteSection');
    if (noteSection) noteSection.innerHTML = '';

    const strip = document.getElementById('storyWeekStrip');
    if (strip) strip.innerHTML = '';

    /* 사이드바 활성 상태 갱신 */
    document.querySelectorAll('.sb-date-item[data-day]').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sb-reader-item').forEach(el => {
      el.classList.toggle('active', el.dataset.subid === sub.id);
    });

    const wrapper = document.getElementById('mainWrapper');
    if (wrapper) wrapper.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showSubSnippet(id) {
    const s = loadSubmissions().find(x => x.id === id);
    if (!s) return;
    const dayNum = s.day || activeDay;
    const aiNote = s.aiScore
      ? `  // AI 점수: 통찰${s.aiScore.insight} 유머${s.aiScore.humor} 감동${s.aiScore.emotion} = ${s.aiScore.total}/30\n  // "${s.aiScore.summary}"\n`
      : '';
    const snippet =
`/* ─── 독자 이야기: ${s.title} (${s.cat}) ─── */
${aiNote}STORIES[${dayNum}] = {
  title: "${s.title}",
  primaryType: "${s.cat}",
  body: \`${s.body.replace(/`/g, "'")}\`,
  analysis: [
    { type: "${s.cat}", text: "${s.ihe}", condition: "" }
  ],
  source: { type: "reader", credit: "${s.name}", url: "" }
};`;
    const el = document.getElementById(`snippet-${id}`);
    if (!el) return;
    el.hidden  = false;
    el.innerHTML = `<pre class="sub-rv-pre">${escHtml(snippet)}</pre>
      <button class="sub-rv-copy" data-copy="${escAttr(snippet)}">📋 복사</button>`;
    el.querySelector('.sub-rv-copy').addEventListener('click', function () {
      navigator.clipboard.writeText(this.dataset.copy).then(() => { this.textContent = '✅ 복사됨'; });
    });
  }

  function escHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function escAttr(s) { return String(s).replace(/"/g,'&quot;'); }

  /* ──────────────────────────────────────────────
     CURATOR: STORY EDITOR
     이야기 편집 + 마지막 요청사항 + 게재 확정
  ────────────────────────────────────────────── */

  let editorDay = activeDay; /* which day is open in editor */

  function openStoryEditor(day) {
    editorDay = day || activeDay;
    const drawer = document.getElementById('storyEditorDrawer');
    if (!drawer) return;
    drawer.classList.add('open');
    renderStoryEditor(editorDay);
    drawer.addEventListener('click', e => {
      if (e.target === drawer) drawer.classList.remove('open');
    }, { once: true });
  }

  function renderStoryEditor(day) {
    editorDay = day;
    const body = document.getElementById('storyEditorBody');
    if (!body) return;

    const staged = loadStaging(day);
    const base   = STORIES[day];
    const story  = staged ? { ...base, ...staged.story } : { ...base };
    const note   = staged ? (staged.note || '') : '';
    const status = staged ? (staged.status || 'draft') : 'original';

    const STATUS_INFO = {
      original:  { label: 'data.js 원본', cls: 'ed-st--orig'  },
      draft:     { label: '임시저장 중',  cls: 'ed-st--draft' },
      confirmed: { label: '게재 확정 ✅', cls: 'ed-st--confirmed' }
    };
    const si = STATUS_INFO[status] || STATUS_INFO.original;
    const bodyText = (story.body || []).join('\n\n');

    body.innerHTML = `
      <!-- Day selector -->
      <div class="ed-day-tabs">
        ${[1,2,3,4,5].map(d => {
          const st  = loadStaging(d);
          const dot = st ? (st.status === 'confirmed' ? '✅' : '⏺') : '';
          return `<button class="ed-day-btn${d === day ? ' active' : ''}" data-day="${d}">
            ${DAY_SHORT[d]}<span class="ed-day-dot">${dot}</span>
          </button>`;
        }).join('')}
      </div>

      <!-- ── STEP 1: 글 선택 ── -->
      <div class="ed-step">
        <div class="ed-step-label"><span class="ed-step-num">1</span> 글 선택</div>
        <div class="ed-meta-row">
          <span class="ed-day-label">${DAY_NAMES[day]} · ${story.category}</span>
          <span class="ed-status ${si.cls}">${si.label}</span>
        </div>

        <div class="ed-field">
          <label class="ed-label" for="ed-title">제목</label>
          <input type="text" id="ed-title" class="ed-input" value="${escAttr(story.title || '')}" maxlength="80" />
          <div class="ed-dup-warning" id="edDupWarning" hidden></div>
        </div>

        <div class="ed-field">
          <label class="ed-label">카테고리</label>
          <div class="ed-type-row" id="edTypeRow">
            ${['통찰','유머','감동'].map(t =>
              `<button type="button" class="ed-type-btn${story.primaryType === t ? ' active' : ''}" data-type="${t}">
                ${TYPE_ICON[t]} ${t}
              </button>`).join('')}
          </div>
        </div>

        <div class="ed-field">
          <label class="ed-label" for="ed-body">본문 <span class="ed-hint">단락은 빈 줄로 구분</span></label>
          <textarea id="ed-body" class="ed-textarea" rows="12">${escHtml(bodyText)}</textarea>
        </div>

        <div class="ed-field">
          <label class="ed-label" for="ed-closing">맺음말 <span class="ed-hint">(선택)</span></label>
          <textarea id="ed-closing" class="ed-textarea ed-textarea--sm" rows="3">${escHtml(story.closing || '')}</textarea>
        </div>

        <div class="ed-step-actions">
          <button class="ed-btn ed-btn--draft" id="edSaveDraft">💾 임시저장</button>
          ${staged ? `<button class="ed-btn ed-btn--revert" id="edRevert">↩ 원본 복원</button>` : ''}
        </div>
      </div>

      <!-- ── STEP 2: 수정 요청 ── -->
      <div class="ed-step">
        <div class="ed-step-label"><span class="ed-step-num">2</span> 수정 요청</div>
        <div class="ed-revision-row">
          <button class="ed-btn ed-btn--polish" id="edPolish">🪄 글 다듬기 프롬프트</button>
          <button class="ed-btn ed-btn--illust" id="edIllust">🎨 일러스트 프롬프트</button>
        </div>

        <div class="ed-polish-area" id="edPolishArea" hidden>
          <p class="ed-export-label">아래 프롬프트를 <strong>Claude</strong>에 붙여넣고, 답변을 본문에 반영하세요.</p>
          <pre class="ed-export-pre" id="edPolishPre"></pre>
          <button class="ed-copy-btn" id="edCopyPolish">📋 복사</button>
        </div>

        <div class="ed-illust-area" id="edIllustArea" hidden>
          <p class="ed-export-label">아래 프롬프트를 <strong>Claude</strong>에 붙여넣고, SVG 결과를 <code>data.js</code> ILLUSTRATIONS에 반영하세요.</p>
          <pre class="ed-export-pre" id="edIllustPre"></pre>
          <button class="ed-copy-btn" id="edCopyIllust">📋 복사</button>
        </div>
      </div>

      <!-- ── STEP 3: 질문과 답변 ── -->
      <div class="ed-step ed-step--last">
        <div class="ed-step-label"><span class="ed-step-num">3</span> 질문과 답변</div>
        <div class="ed-revision-row">
          <button class="ed-btn ed-btn--qna" id="edQnA">💭 질문·답변 프롬프트</button>
        </div>
        <div class="ed-qna-area" id="edQnAArea" hidden>
          <p class="ed-export-label">프롬프트를 Claude에 붙여넣고, 결과를 아래에 입력하세요.</p>
          <pre class="ed-export-pre" id="edQnAPre"></pre>
          <button class="ed-copy-btn" id="edCopyQnA">📋 복사</button>
        </div>
        <div class="ed-field">
          <label class="ed-label" for="ed-qna-q">질문</label>
          <textarea id="ed-qna-q" class="ed-textarea ed-textarea--sm" rows="2"
            placeholder="독자 스스로 생각해볼 열린 질문…">${escHtml((story.qna && story.qna.question) || '')}</textarea>
        </div>
        <div class="ed-field">
          <label class="ed-label" for="ed-qna-a">답변 <span class="ed-hint">(독자가 클릭 후 공개)</span></label>
          <textarea id="ed-qna-a" class="ed-textarea ed-textarea--sm" rows="3"
            placeholder="큐레이터의 관점 — 정답이 아닌 하나의 시선…">${escHtml((story.qna && story.qna.answer) || '')}</textarea>
        </div>
        <div class="ed-step-actions">
          <button class="ed-btn ed-btn--confirm" id="edConfirm">✅ 게재 확정</button>
        </div>
      </div>`;

    /* Day tabs */
    body.querySelectorAll('.ed-day-btn').forEach(btn => {
      btn.addEventListener('click', () => renderStoryEditor(parseInt(btn.dataset.day, 10)));
    });

    /* Track selected type */
    let selectedType = story.primaryType || '감동';
    body.querySelectorAll('.ed-type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        body.querySelectorAll('.ed-type-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedType = btn.dataset.type;
      });
    });

    const collectData = () => {
      const paragraphs = body.querySelector('#ed-body').value.trim().split(/\n\n+/).filter(Boolean);
      const closing    = body.querySelector('#ed-closing').value.trim();
      const qnaQ       = body.querySelector('#ed-qna-q').value.trim();
      const qnaA       = body.querySelector('#ed-qna-a').value.trim();
      return {
        title:       body.querySelector('#ed-title').value.trim(),
        primaryType: selectedType,
        body:        paragraphs,
        closing:     closing || undefined,
        qna:         (qnaQ || qnaA) ? { question: qnaQ, answer: qnaA } : undefined
      };
    };

    /* ── 중복 감지: 제목 입력 시 실시간 확인 ── */
    const dupWarn  = body.querySelector('#edDupWarning');
    const titleInp = body.querySelector('#ed-title');
    const showDupWarning = (title) => {
      if (!dupWarn) return;
      const dup = checkDuplicate(title, '');
      /* 현재 이야기 자체와 일치하면 중복 경고 무시 */
      const sameAsBase = (base.title || '').trim().toLowerCase() === (title || '').trim().toLowerCase();
      if (dup && !sameAsBase) {
        dupWarn.innerHTML =
          `⚠️ 이미 게재된 이야기와 제목이 같습니다.<br>` +
          `<span class="ed-dup-detail">"${dup.title}" — ${dup.category} · ${dup.publishedAt}</span>`;
        dupWarn.hidden = false;
      } else {
        dupWarn.hidden = true;
      }
    };
    titleInp.addEventListener('input', () => showDupWarning(titleInp.value));
    showDupWarning(titleInp.value);

    /* Draft save */
    body.querySelector('#edSaveDraft').addEventListener('click', function () {
      saveStaging(day, { status: 'draft', story: collectData() });
      renderStoryEditor(day);
      renderSidebar();
      if (day === activeDay) { renderDayLabel(day); renderStory(day); renderQnA(day); renderDateSeason(day); }
      this.textContent = '✅ 저장됨';
      setTimeout(() => { this.textContent = '💾 임시저장'; }, 1600);
    });

    /* Confirm — 중복 최종 확인 후 이력 등록 */
    body.querySelector('#edConfirm').addEventListener('click', () => {
      const data       = collectData();
      const sameAsBase = (base.title || '').trim().toLowerCase() === (data.title || '').trim().toLowerCase();
      const dup        = !sameAsBase ? checkDuplicate(data.title, '') : null;
      if (dup) {
        if (!confirm(
          `"${dup.title}" 이야기가 ${dup.publishedAt}에 이미 게재된 이력이 있습니다.\n\n그래도 게재 확정하겠습니까?`
        )) return;
      }
      saveStaging(day, { status: 'confirmed', story: data });
      addToHistory(day, data);
      renderStoryEditor(day);
      renderSidebar();
      if (day === activeDay) setActiveDay(day);
    });

    /* QnA prompt */
    body.querySelector('#edQnA').addEventListener('click', function () {
      const data   = collectData();
      const prompt = buildQAPrompt(day, data);
      const area   = body.querySelector('#edQnAArea');
      body.querySelector('#edQnAPre').textContent = prompt;
      area.hidden = false;
    });
    body.querySelector('#edCopyQnA').addEventListener('click', function () {
      const pre = body.querySelector('#edQnAPre');
      navigator.clipboard.writeText(pre.textContent).then(() => {
        this.textContent = '✅ 복사됨';
        setTimeout(() => { this.textContent = '📋 복사'; }, 1600);
      });
    });

    /* Polish prompt */
    body.querySelector('#edPolish').addEventListener('click', function () {
      const data        = collectData();
      const prompt      = buildPolishPrompt(day, data);
      const area        = body.querySelector('#edPolishArea');
      const pre         = body.querySelector('#edPolishPre');
      pre.textContent   = prompt;
      area.hidden       = false;
      area.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    const copyPolishBtn = body.querySelector('#edCopyPolish');
    if (copyPolishBtn) copyPolishBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(body.querySelector('#edPolishPre').textContent).then(() => {
        this.textContent = '✅ 복사됨';
        setTimeout(() => { this.textContent = '📋 복사'; }, 2000);
      });
    });

    /* Illust prompt */
    body.querySelector('#edIllust').addEventListener('click', function () {
      const data       = collectData();
      const prompt     = buildIllustPrompt(day, data);
      const area       = body.querySelector('#edIllustArea');
      const pre        = body.querySelector('#edIllustPre');
      pre.textContent  = prompt;
      area.hidden      = false;
      area.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    const copyIllustBtn = body.querySelector('#edCopyIllust');
    if (copyIllustBtn) copyIllustBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(body.querySelector('#edIllustPre').textContent).then(() => {
        this.textContent = '✅ 복사됨';
        setTimeout(() => { this.textContent = '📋 복사'; }, 2000);
      });
    });

    /* Revert */
    const revertBtn = body.querySelector('#edRevert');
    if (revertBtn) revertBtn.addEventListener('click', () => {
      if (confirm(`${DAY_NAMES[day]} 이야기를 data.js 원본으로 복원할까요?`)) {
        clearStaging(day);
        renderStoryEditor(day);
        renderSidebar();
        if (day === activeDay) setActiveDay(day);
      }
    });
  }

  function buildPolishPrompt(day, storyData) {
    const base   = STORIES[day];
    const src    = base.source || {};
    const srcLine = src.credit
      ? `출처 유형: ${src.type || ''}\n출처 정보: ${src.credit}${src.url ? '\n원문 URL: ' + src.url : ''}`
      : '출처: 창작';
    const bodyText    = (storyData.body || []).join('\n\n');
    const closingText = storyData.closing || '';

    return `다음 글을 문체와 번역 두 가지 측면에서 다듬어 주세요.

## 다듬기 원칙

### 1. 한국어 문체
- 문장 리듬감을 살리되 군더더기를 제거하세요.
- 단문과 장문을 적절히 섞어 호흡을 조절하세요.
- 같은 의미가 반복되는 부분은 한 번으로 정리하세요.
- 한자어보다 고유어를 우선하되, 뉘앙스가 달라지면 그대로 두세요.
- 원래의 감동·통찰·유머의 무게는 반드시 유지하세요.

### 2. 외국 원전 인용
- 원문의 의미를 훼손하지 않으면서 자연스러운 한국어로 다듬으세요.
- 공인된 한국어 번역본이 있다면 그에 준하는 수준으로 맞추세요.
- 직역의 어색함보다 의역의 자연스러움을 선호하세요.
- 인용 부분과 서술 부분의 문체 온도가 자연스럽게 이어지도록 하세요.

## 출처 정보 (참고용)
${srcLine}

## 원본 글

### 제목
${storyData.title || base.title || ''}

### 본문
${bodyText}
${closingText ? '\n### 맺음말\n' + closingText : ''}

## 출력 형식
설명 없이 아래 구분자 형식을 정확히 지켜 결과만 출력하세요.

===제목===
(다듬은 제목)

===본문===
(단락마다 빈 줄 하나로 구분)
${closingText ? '\n===맺음말===\n(다듬은 맺음말)' : ''}`;
  }

  function buildQAPrompt(day, storyData) {
    const base     = STORIES[day];
    const category = storyData.primaryType || base.primaryType || '';
    const bodyText = (storyData.body || []).join(' ').slice(0, 400);
    const closing  = storyData.closing || base.closing || '';

    return `다음 이야기에 대한 질문과 답변 1쌍을 작성해 주세요.

## 이야기 정보
- 제목: ${storyData.title || base.title || ''}
- 카테고리: ${category}
- 핵심 내용: ${bodyText}…
${closing ? '- 맺음말: ' + closing.slice(0, 100) : ''}

## 질문 조건
- 정답이 없는 개방형 질문 (독자 자신의 삶과 연결)
- 이야기의 핵심 통찰·감동과 직결
- 1문장, 의문형으로 끝내기

## 답변 조건
- 2–4문장
- 이야기에서 출발해 독자의 일상으로 연결
- 정답이 아닌 하나의 관점 제시

## 출력 형식 (그대로 복사 가능하게)
[질문]
(질문 내용)

[답변]
(답변 내용)`;
  }

  function buildIllustPrompt(day, storyData) {
    const base       = STORIES[day];
    const svgKey     = base.svgKey || day;
    const category   = storyData.primaryType || base.primaryType || '';
    const dayNames   = { 1:'월요일', 2:'화요일', 3:'수요일', 4:'목요일', 5:'금요일' };
    const styleGuide = {
      '감동': '선 드로잉 — 크림 흰 배경(#f8f7f4), 모든 요소를 stroke 선으로만. 빛은 방사형 선으로 표현.',
      '유머': '선 드로잉 팝아트 — 흰 배경, 굵은 검정 stroke 선화 인물·사물, 선만으로 된 말풍선.',
      '통찰': '선 드로잉 미니멀 — 흰 배경, 핵심 사물 선화 1~2개, fill 전혀 없음.'
    };
    const bodyText   = (storyData.body || []).slice(0, 3).join(' ').slice(0, 200);
    const src        = base.source || {};
    const srcLine    = src.credit ? `출처: ${src.credit}` : '창작 이야기';

    return `다음 이야기를 위한 SVG 일러스트레이션을 제작해 주세요.

## 기술 사양
- viewBox: "0 0 600 280"
- 언어: translate="no" 속성 추가 (번역 방지)
- 외부 이미지/폰트 참조 없이 순수 SVG만 사용
- 텍스트는 최소화하거나 핵심 한두 단어만 (영어 또는 한국어 모두 가능)

## 이야기 정보
- 요일: ${dayNames[day]}
- 카테고리: ${category}
- 제목: ${storyData.title || base.title || ''}
- 핵심 내용 (요약): ${bodyText}…
- ${srcLine}

## 시각 스타일 지침
${styleGuide[category] || '이야기의 감정과 주제를 가장 잘 전달하는 스타일로 자유롭게.'}

## 핵심 원칙: 선 드로잉 (fill 없음)
배경·환경·사물·인물 모두 **stroke 선만** 사용합니다. fill은 배경 rect 단 1개만 허용.

**배경**: \`<rect width="600" height="280" fill="#f8f7f4"/>\` (크림 흰색, 이것만 fill 허용)

**wc1 필터** — 모든 구조적 요소에 적용:
\`\`\`svg
<filter id="wc1" x="-5%" y="-5%" width="110%" height="110%">
  <feTurbulence type="fractalNoise" baseFrequency="0.04 0.08" numOctaves="3" seed="11" result="n"/>
  <feDisplacementMap in="SourceGraphic" in2="n" scale="8" xChannelSelector="R" yChannelSelector="G"/>
</filter>
\`\`\`

| 요소 | 선 드로잉 방법 |
|------|------|
| 배경/하늘 | 단색 rect 1개 fill="#f8f7f4" (fill 허용 유일한 예외) |
| 별/작은 점 | × 표시 (line 2개씩) |
| 빛/방사 | 방사형 line 8~12개, opacity 변화로 강약 |
| 수평선/지면 | line 1개 + 수평 해칭 line 4~5개 (wc1) |
| 사물 | stroke 선 5~10개로 형태, fill 없음 (wc1) |
| 환경/구조물 | stroke 선, fill 없음 (wc1) |
| 인물 | 원(머리)+선(몸/팔/다리)+줄무늬 등 디테일, fill 없음 (wc1) |

## 🚫 절대 금지
- fill 사용 (배경 rect 제외) — radialGradient, linearGradient, 색 채우기 일체 금지
- feGaussianBlur (blur 필터) 금지 — 선 흔들림 wc1만 허용
- 이목구비 정밀 묘사 (눈 3겹, 피부 레이어 등)

## ✅ 인물 표현
- 선 드로잉: wc1 필터 + 원(머리)+선(몸/팔/다리) + 디테일 선, fill 없음
- 인물 1명: 15~25 엘리먼트 (수감복 줄무늬, 손가락, 신발 등 구체적으로)
- 원경 인물: 머리 원 + 몸통/다리 선 4~5개씩

## 엘리먼트 예산 (목표 80~110개)
- defs (wc1 필터): ~5
- 배경 rect: 1
- 별: ~16 (× 8개)
- 환경/구조물 (wc1): ~25
- 원경 인물들: ~30
- 주인공 인물 (wc1): ~20
- 기타: ~5

## 장면 구성 제안
이야기의 핵심 장면 또는 핵심 개념을 시각화하세요.
- 인물: 스케치 선화 또는 실루엣 (이목구비 없음)
- 배경: 단색 rect + 빛 번짐 blur ellipse (분위기만)
- 사물·환경: stroke 선 5~10개, wc1 필터 그룹으로 묶어 손그림 느낌
- 핵심 오브제: 이야기의 핵심 소재 (예: 연탄 집게, 총, 우주의 점 등)

## 출력 형식
아래 형식으로 완성된 SVG 코드만 출력하세요 (설명 없이):

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" translate="no">
  <!-- 여기에 SVG 내용 -->
</svg>
\`\`\`

완성 후 data.js의 ILLUSTRATIONS[${svgKey}] 에 backtick 템플릿 리터럴로 붙여넣으면 됩니다.`;
  }

  function buildEditorExport(day, storyData, note) {
    const base   = STORIES[day];
    const merged = { ...base, ...storyData };
    const noteComment = note ? `// [큐레이터 메모] ${note}\n` : '';
    return `${noteComment}STORIES[${day}] = ${JSON.stringify(merged, null, 2)};`;
  }

  /* ── 월 변경 자동 감지: 매월 1일 자정에 배경 갱신 ── */
  function scheduleMonthRefresh() {
    const now   = new Date();
    const next  = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 5); /* 다음달 1일 00:00:05 */
    const msUntilNext = next - now;
    setTimeout(() => {
      applySeasonBackground();
      renderSeasonStrip();
      renderSidebarBottomImg();
      scheduleMonthRefresh(); /* 다음 달을 위해 재등록 */
    }, msUntilNext);
  }

  /* ── Init ── */
  function init() {
    applySeasonBackground();
    renderSeasonStrip();
    renderSidebarBottomImg();
    scheduleMonthRefresh();
    initHistoryFromStories();
    initSidebar();
    initCuratorMode();
    updateCuratorBadge();

    /* 큐레이터란 편집 FAB */
    (function initCuratorNoteDrawer() {
      const drawer   = document.getElementById('curatorNoteEditDrawer');
      const area     = document.getElementById('curatorNoteEditArea');
      const saveBtn  = document.getElementById('curatorNoteEditSave');
      const closeBtn = document.getElementById('curatorNoteEditClose');
      const fabBtn   = document.getElementById('openCuratorNoteEdit');
      if (!drawer || !area || !saveBtn || !closeBtn || !fabBtn) return;

      function openDrawer() {
        const story = getDisplayStory(activeDay);
        area.value = story.curatorNote || '';
        drawer.classList.add('open');
        area.focus();
      }
      function closeDrawer() { drawer.classList.remove('open'); }

      fabBtn.addEventListener('click', openDrawer);
      closeBtn.addEventListener('click', closeDrawer);
      drawer.addEventListener('click', e => { if (e.target === drawer) closeDrawer(); });

      saveBtn.addEventListener('click', () => {
        const val = area.value.trim();
        const staged = loadStaging(activeDay) || {};
        const story  = { ...(staged.story || {}), curatorNote: val };
        saveStaging(activeDay, { ...staged, story });
        renderCuratorNote(activeDay);
        /* ornament 갱신 */
        const s = getDisplayStory(activeDay);
        const ornament = document.getElementById('storyOrnament');
        if (ornament) ornament.style.display = (s.curatorNote || (s.qna && s.qna.question)) ? 'block' : 'none';
        saveBtn.textContent = '✅ 저장됨';
        setTimeout(() => { saveBtn.textContent = '저장'; closeDrawer(); }, 1200);
      });
    })();

    /* 이미지 생성 드로어 */
    (function initImageGenDrawer() {
      const drawer      = document.getElementById('imageGenDrawer');
      const closeBtn    = document.getElementById('imageGenClose');
      const fabBtn      = document.getElementById('openImageGen');
      const apiKeyInput = document.getElementById('imageGenApiKey');
      const promptArea  = document.getElementById('imageGenPrompt');
      const styleSelect = document.getElementById('imageGenStyle');
      const genBtn      = document.getElementById('imageGenGenerate');
      const applyBtn    = document.getElementById('imageGenApply');
      const preview     = document.getElementById('imageGenPreview');
      const previewImg  = document.getElementById('imageGenPreviewImg');
      const statusEl    = document.getElementById('imageGenStatus');
      if (!drawer || !fabBtn) return;

      const API_KEY_STORE = 'gemini-api-key';
      let generatedDataUrl = null;

      function buildAutoPrompt(day) {
        const story = getDisplayStory(day);
        /* 이야기에 imagePrompt 필드가 있으면 우선 사용 */
        if (story.imagePrompt) return story.imagePrompt;
        /* 없으면 제목 + 첫 단락 앞부분으로 자동 생성 */
        const snippet = (story.body[0] || '').slice(0, 120).replace(/\n/g, ' ');
        return `${story.title}. ${snippet}`;
      }

      function openDrawer() {
        /* API 키: localStorage에 있으면 placeholder만 표시 */
        const saved = localStorage.getItem(API_KEY_STORE) || '';
        if (apiKeyInput) {
          apiKeyInput.value = '';
          apiKeyInput.placeholder = saved ? '저장된 키 사용 중 (변경하려면 입력)' : 'Gemini API Key를 입력하세요';
        }
        promptArea.value = buildAutoPrompt(activeDay);
        generatedDataUrl = null;
        preview.style.display  = 'none';
        applyBtn.style.display = 'none';
        statusEl.textContent   = '';
        drawer.classList.add('open');
      }
      function closeDrawer() { drawer.classList.remove('open'); }

      fabBtn.addEventListener('click', openDrawer);
      closeBtn.addEventListener('click', closeDrawer);
      drawer.addEventListener('click', e => { if (e.target === drawer) closeDrawer(); });

      genBtn.addEventListener('click', async () => {
        /* API 키 확인 */
        const inputKey = apiKeyInput?.value.trim();
        if (inputKey) localStorage.setItem(API_KEY_STORE, inputKey);
        const apiKey = localStorage.getItem(API_KEY_STORE);
        if (!apiKey) { statusEl.textContent = 'Gemini API Key를 입력해 주세요.'; return; }

        const subjectPrompt = promptArea.value.trim();
        if (!subjectPrompt) { statusEl.textContent = '프롬프트를 입력하세요.'; return; }

        const story    = getDisplayStory(activeDay);
        const style    = styleSelect.value;
        const tone     = story.primaryType || null;

        /* 스타일을 프롬프트에 직접 임베드 (서버 방식과 동일 패턴) */
        const tonePart   = tone ? `, ${IMG_TONE[tone]} mood` : '';
        const fullPrompt = `${subjectPrompt}, ${IMG_STYLE[style] || IMG_STYLE.mixed}${tonePart}. No text overlay, no watermark, no border.`;

        genBtn.disabled      = true;
        genBtn.textContent   = '⏳ 생성 중…';
        statusEl.textContent = 'Gemini Flash에 요청 중…';
        preview.style.display  = 'none';
        applyBtn.style.display = 'none';

        try {
          /* Gemini 이미지 생성 모델 직접 호출 */
          const model    = 'gemini-2.5-flash-image';
          const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
          const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: fullPrompt }] }],
              generationConfig: { responseModalities: ['image', 'text'] }
            })
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error?.message || `HTTP ${res.status}`);

          /* 응답에서 인라인 이미지 데이터 추출 */
          const parts = data.candidates?.[0]?.content?.parts || [];
          const imgPart = parts.find(p => p.inlineData);
          if (!imgPart) throw new Error('이미지 데이터가 없습니다. 프롬프트를 수정해 보세요.');

          const { data: b64, mimeType } = imgPart.inlineData;
          generatedDataUrl = `data:${mimeType};base64,${b64}`;
          previewImg.src          = generatedDataUrl;
          preview.style.display   = 'block';
          applyBtn.style.display  = 'inline-block';
          statusEl.textContent    = '✅ 생성 완료 — 적용 버튼을 눌러주세요';
        } catch (e) {
          statusEl.textContent = `오류: ${e.message}`;
        } finally {
          genBtn.disabled    = false;
          genBtn.textContent = '✨ 생성';
        }
      });

      applyBtn.addEventListener('click', () => {
        if (!generatedDataUrl) return;
        const staged = loadStaging(activeDay) || {};
        const story  = { ...(staged.story || {}), image: generatedDataUrl };
        saveStaging(activeDay, { ...staged, story });
        renderIllustration(activeDay);
        statusEl.textContent = '✅ 적용됨';
        setTimeout(closeDrawer, 900);
      });
    })();

    /* Reader submission form */
    initSubmissionForm();

    /* Hash-based navigation (back/forward, direct link) */
    window.addEventListener('hashchange', () => {
      const m = location.hash.match(/^#day-([1-6])$/);
      if (m) setActiveDay(parseInt(m[1], 10));
    });

    /* 모바일 스와이프: 좌우 스와이프로 이전/다음 날 이야기 전환 */
    (function initSwipeNav() {
      const el = document.getElementById('mainWrapper');
      if (!el || !('ontouchstart' in window)) return;

      let startX = 0, startY = 0;
      const SWIPE_THRESHOLD = 50;
      const SWIPE_RATIO = 1.5; /* 가로 이동이 세로보다 이 배수 이상일 때만 스와이프로 인식 */

      el.addEventListener('touchstart', function (e) {
        if (e.touches.length !== 1) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }, { passive: true });

      el.addEventListener('touchend', function (e) {
        if (e.changedTouches.length !== 1) return;
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const deltaX = endX - startX;
        const deltaY = endY - startY;

        if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
        if (Math.abs(deltaY) * SWIPE_RATIO > Math.abs(deltaX)) return; /* 세로 스크롤로 판단 */

        const idx = ACTIVE_DAYS.indexOf(activeDay);
        if (deltaX < 0 && idx < ACTIVE_DAYS.length - 1) {
          setActiveDay(ACTIVE_DAYS[idx + 1]);
        } else if (deltaX > 0 && idx > 0) {
          setActiveDay(ACTIVE_DAYS[idx - 1]);
        }
      }, { passive: true });
    })();

    /* 언어 전환 (한 ↔ EN) */
    (function initLangToggle() {
      const btn = document.getElementById('langToggle');
      if (!btn) return;
      const html = document.documentElement;
      const TITLE_KO = 'HumanZest — 통찰·유머·감동';
      const TITLE_EN = 'HumanZest — Insight·Humor·Emotion';
      function applyLang(lang) {
        html.lang = lang;
        document.title = lang === 'en' ? TITLE_EN : TITLE_KO;
        btn.textContent = lang === 'en' ? '한' : 'EN';
        try { localStorage.setItem('site-lang', lang); } catch (e) {}
      }
      const saved = (() => { try { return localStorage.getItem('site-lang'); } catch (e) { return null; } })();
      if (saved === 'en') applyLang('en');
      btn.addEventListener('click', () => {
        const next = html.lang === 'en' ? 'ko' : 'en';
        applyLang(next);
      });
    })();

    /* 다크 모드 전환 (시스템 설정 + 수동 토글) */
    (function initThemeToggle() {
      const btn = document.getElementById('themeToggle');
      if (!btn) return;
      const html = document.documentElement;
      const STORAGE_KEY = 'site-theme';
      function setDark(isDark, save) {
        if (isDark) {
          html.classList.add('dark');
          btn.textContent = '☀️';
          btn.setAttribute('aria-label', '라이트 모드로 전환');
        } else {
          html.classList.remove('dark');
          btn.textContent = '🌙';
          btn.setAttribute('aria-label', '다크 모드로 전환');
        }
        if (save) { try { localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light'); } catch (e) {} }
      }
      const saved = (() => { try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; } })();
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (saved === 'dark') setDark(true, false);
      else if (saved === 'light') setDark(false, false);
      else setDark(prefersDark, false);
      btn.addEventListener('click', () => {
        setDark(!html.classList.contains('dark'), true);
      });
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          if (!localStorage.getItem(STORAGE_KEY)) setDark(e.matches, false);
        });
      }
    })();

    setActiveDay(activeDay);
  }

  document.addEventListener('DOMContentLoaded', init);

})();
