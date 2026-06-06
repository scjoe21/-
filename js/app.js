/* ============================================================
   통찰·유머·감동 — Application Logic
   Day detection · Navigation · Weekly balance · Rating system
   ============================================================ */

(function () {
  'use strict';

  /* ── Constants ── */
  const DAY_NAMES   = { 1: '월요일', 2: '화요일', 3: '수요일', 4: '목요일', 5: '금요일' };
  const DAY_SHORT   = { 1: '월', 2: '화', 3: '수', 4: '목', 5: '금' };
  const TYPE_CLASS  = { '통찰': 'insight', '유머': 'humor', '감동': 'emotion' };
  const TYPE_ICON   = { '통찰': '💡', '유머': '😄', '감동': '❤️' };

  /* JS 요일 → 1(월)~5(금), 토·일요일은 금요일로 fallback */
  const jsDay   = new Date().getDay();
  const todayKey = (jsDay >= 1 && jsDay <= 5) ? jsDay : 5;

  /* 순차 게재 — 실제로 STORIES에 들어 있는 요일만 활성화
     (아직 채워지지 않은 요일은 자동으로 제외되어 화면이 깨지지 않음) */
  const ACTIVE_DAYS = [1, 2, 3, 4, 5].filter(d => STORIES[d]);

  /* 오늘 요일이 게재 중이면 오늘, 아니면 가장 최근 게재 요일 */
  const _defaultDay = ACTIVE_DAYS.includes(todayKey)
    ? todayKey
    : Math.max(...ACTIVE_DAYS.filter(d => d <= todayKey), ACTIVE_DAYS[0]);

  const _hashDay = parseInt((location.hash.match(/^#day-([1-5])$/) || [])[1], 10);
  let activeDay = (ACTIVE_DAYS.includes(_hashDay)) ? _hashDay : _defaultDay;
  let activeSubmission = null; /* 현재 표시 중인 독자 제출글 */
  let activeArchive    = null; /* { weekIdx, day } or null — 아카이브 보기 상태 */

  /* 표시할 이야기 — 아카이브 보기면 해당 주차, 아니면 이번 주 data.js */
  function getDisplayStory(day) {
    if (activeArchive) return STORY_ARCHIVE[activeArchive.weekIdx].stories[activeArchive.day];
    return STORIES[day];
  }

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

  /* ── 월별 풍경 사진 — 로컬 파일 (images/month-MM.jpg) ── */
  const MONTH_PHOTOS = {
     1: 'images/month-01.jpg',  /* 1월 — 눈 덮인 설경 */
     2: 'images/month-02.jpg',  /* 2월 — 겨울 끝 침엽수 숲 */
     3: 'images/month-03.jpg',  /* 3월 — 황금빛 새벽 안개 산 능선 */
     4: 'images/month-04.jpg',  /* 4월 — 역광 속 봄꽃 군락 */
     5: 'images/month-05.jpg',  /* 5월 — 황금 새벽빛 초록 목초지 */
     6: 'images/month-06.jpg',  /* 6월 — 대나무 숲 여름 녹음 */
     7: 'images/month-07.jpg',  /* 7월 — 이끼 바위 폭포 */
     8: 'images/month-08.jpg',  /* 8월 — 고산 호수와 나무 부두 */
     9: 'images/month-09.jpg',  /* 9월 — 초가을 산악 호수 */
    10: 'images/month-10.jpg',  /* 10월 — 붉은 단풍 숲길 */
    11: 'images/month-11.jpg',  /* 11월 — 안개 침엽수 숲 빛줄기 */
    12: 'images/month-12.jpg',  /* 12월 — 서리 낀 침엽수 호수 반영 */
  };

  /* ── RENDER: 하단 계절 띠 ── */
  /* 이달의 오브제 — 월별 기본값 */
  function getCurrentObject() {
    const now = new Date();
    return MONTHLY_OBJECTS[now.getMonth()];
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
    if (img.parentElement) img.parentElement.style.display = '';
    const month = new Date().getMonth() + 1;
    const monthStr = String(month).padStart(2, '0');
    const primarySrc  = `images/sidebar-bottom-${monthStr}.webp`;
    const fallbackSrc = 'images/train-sidebar.webp';

    /* 이미 동일 src 표시 중이면 건너뜀 (깜박임 방지) */
    if (img.dataset.loadedSrc === primarySrc || img.dataset.loadedSrc === fallbackSrc) return;

    /* 선로드(preload) 후 한 번에 교체 — 공백 구간 없이 표시 */
    const probe1 = new Image();
    probe1.onload = () => {
      img.src = primarySrc;
      img.dataset.loadedSrc = primarySrc;
    };
    probe1.onerror = () => {
      const probe2 = new Image();
      probe2.onload = () => {
        img.src = fallbackSrc;
        img.dataset.loadedSrc = fallbackSrc;
      };
      probe2.onerror = () => { img.parentElement.style.display = 'none'; };
      probe2.src = fallbackSrc;
    };
    probe1.src = primarySrc;
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
    const objSvg = obj ? (OBJECT_SVGS[obj.name] || '') : '';

    const photoSrc = MONTH_PHOTOS[month] || MONTH_PHOTOS[1];
    const fallback = SEASON_GRADIENTS[season] || SEASON_GRADIENTS.spring;

    /* CSS background-image로 즉시 렌더 — 비동기 없이 깜박임 제거 */
    /* 사진 URL이 깨지면 두 번째 레이어(gradient)가 보임 */
    el.style.backgroundImage    = `url('${photoSrc}'), ${fallback}`;
    el.style.backgroundSize     = 'cover, 100% 100%';
    el.style.backgroundPosition = 'center 60%, center';
    el.style.backgroundRepeat   = 'no-repeat, no-repeat';

    el.innerHTML = objSvg
      ? `<svg class="season-strip-obj" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200">${objSvg}</svg>`
      : '';
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
        /* 토요일 0시 게재: 토·일에는 '다가오는 주'(월~금)가 게재 중.
           토요일은 다음 주를 가리켜야 하므로 +7 보정, 일요일은 day(=day-0)로 충분. */
        const diff = todayDow === 6 ? day - todayDow + 7   // 토 → 다가오는 월~금(+2 … +6)
                   : day - todayDow;                       // 일=다가오는 주, 평일=이번 주
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

  const WEEK_DAY_KO  = ['', '월', '화', '수', '목', '금'];
  const WEEK_TOPIC   = { 1: '사랑', 2: '역사·문학', 3: '철학·심리', 4: '과학·문화', 5: '경제·정치' };

  function renderWeekStrip(activeDay) {
    const el = document.getElementById('storyWeekStrip');
    if (!el) return;

    const days = [1, 2, 3, 4, 5];
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

  /* ── RENDER: Q&A ── */
  function renderCuratorNote(day) {
    const el    = document.getElementById('curatorNoteSection');
    if (!el) return;
    const story = getDisplayStory(day);
    const qna   = story.qna || {};

    const ornament = document.getElementById('storyOrnament');
    if (!qna.question) {
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

  /* 사이드바: 날짜 색인 방식 */
  function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    if (!nav) return;

    const now       = new Date();
    const DAY_KR    = ['일','월','화','수','목','금','토'];
    const WEEKDAY_LABEL = { 1:'월', 2:'화', 3:'수', 4:'목', 5:'금' };

    /* 이번 주 이야기 목록 구성
       publishedDate가 있으면 사용, 없으면 "이번 주" */
    const thisWeekItems = ACTIVE_DAYS.map(d => {
      /* activeArchive 상태와 무관하게 항상 이번 주 STORIES를 사용 */
      const story = STORIES[d];
      if (!story) return null;  /* 해당 요일 글이 없으면 건너뜀 */
      /* publishedDate가 'YYYY년 M월 D일' 형식이면 그대로 사용 (메인 화면과 동일) */
      const pdMatch = (story.publishedDate || '').match(/^(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일$/);
      let dt;
      if (pdMatch) {
        dt = new Date(parseInt(pdMatch[1]), parseInt(pdMatch[2]) - 1, parseInt(pdMatch[3]));
      } else {
        const todayDow  = now.getDay();
        const targetDow = d;
        const diff = todayDow === 6 ? targetDow - todayDow + 7
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
    }).filter(Boolean);

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
      const WEEKDAY_LABEL = { 1:'월', 2:'화', 3:'수', 4:'목', 5:'금' };
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

    renderBadges(day);
    renderAnalysis(day);
    renderSitesSub(day);
    renderSearchGuide(day);
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

  }

  function showSubError(msg) {
    const el = document.getElementById('subError');
    if (el) { el.textContent = msg; el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
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

  function escHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function escAttr(s) { return String(s).replace(/"/g,'&quot;'); }



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
    initSidebar();

    /* Reader submission form */
    initSubmissionForm();

    /* Hash-based navigation (back/forward, direct link) */
    window.addEventListener('hashchange', () => {
      const m = location.hash.match(/^#day-([1-5])$/);
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

    /* ── 날짜 기준 초기 글 선택 ──────────────────────────────
       STORIES[activeDay].publishedDate가 오늘 이후(미래)이면
       STORY_ARCHIVE에서 오늘 이전의 가장 최근 이야기를 찾아 표시한다.
    ────────────────────────────────────────────────────── */
    (function selectInitialStory() {
      /* 'YYYY년 M월 D일' → Date (자정 기준) */
      function parsePD(str) {
        if (!str) return null;
        const m = str.match(/^(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일$/);
        if (!m) return null;
        return new Date(parseInt(m[1]), parseInt(m[2]) - 1, parseInt(m[3]));
      }

      const today = new Date(); today.setHours(0, 0, 0, 0);

      /* 현재 activeDay 글의 publishedDate 확인 */
      const curStory = STORIES[activeDay];
      const curDate = parsePD(curStory && curStory.publishedDate);

      /* publishedDate가 없거나 오늘 이전이면 그냥 현재 day 표시 */
      if (!curDate || curDate <= today) { setActiveDay(activeDay); return; }

      /* publishedDate가 미래 → STORY_ARCHIVE에서 최근 글 탐색 */
      let bestWeekIdx = -1, bestDay = -1, bestDate = null;
      (STORY_ARCHIVE || []).forEach((week, weekIdx) => {
        Object.keys(week.stories || {}).forEach(d => {
          const dt = parsePD(week.stories[d].publishedDate);
          if (dt && dt <= today) {
            if (!bestDate || dt > bestDate) {
              bestDate = dt; bestWeekIdx = weekIdx; bestDay = Number(d);
            }
          }
        });
      });

      if (bestWeekIdx >= 0) {
        setActiveArchiveStory(bestWeekIdx, bestDay);
      } else {
        setActiveDay(activeDay);
      }
    })();
  }

  document.addEventListener('DOMContentLoaded', init);

})();
