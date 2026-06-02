/* 렌더 스모크 테스트
 * data.js + app.js 를 최소 DOM 셰임에서 실제 실행해 init()이 예외 없이
 * 끝나는지 검증한다. "문법은 맞지만 화면이 깨지는" 회귀를 배포 전에 잡는다.
 *
 * 사용:  node tools/smoke_test.js [dataPath] [isoDate]
 *   dataPath : 검사할 data.js 경로 (기본 js/data.js)
 *   isoDate  : 'YYYY-MM-DD' — 그 날짜를 '오늘'로 가정(특정 주가 게재 중인 상태 검증용)
 * 종료코드 0 = 정상, 비0 = 렌더 실패(배포 금지).
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataPath = process.argv[2] || path.join('js', 'data.js');
const isoDate  = process.argv[3] || null;
const appPath  = path.join(path.dirname(path.resolve(dataPath)).endsWith('js')
  ? path.dirname(path.resolve(dataPath)) : path.join(process.cwd(), 'js'), 'app.js');
const APP = fs.existsSync(appPath) ? appPath : path.join('js', 'app.js');

function clsList() {
  const a = [];
  return { add(){}, remove(){}, toggle(){}, contains(){return false;}, [Symbol.iterator](){ return a[Symbol.iterator](); } };
}
function U() {
  const fn = function(){ return u; };
  const sty = new Proxy({}, { get:()=>'', set:()=>true });
  const u = new Proxy(fn, {
    get(t, p) {
      if (p === 'style') return sty;
      if (p === 'classList') return clsList();
      if (p === 'dataset') return {};
      if (p === 'parentElement' || p === 'parentNode' || p === 'firstChild' || p === 'nextSibling') return u;
      if (p === 'children' || p === 'childNodes') return [];
      if (p === 'length') return 0;
      if (p === Symbol.iterator) return [][Symbol.iterator].bind([]);
      if (p === 'innerHTML' || p === 'textContent' || p === 'value' || p === 'className' || p === 'src' || p === 'id') return '';
      if (p === 'querySelectorAll' || p === 'getElementsByClassName' || p === 'getElementsByTagName') return () => [];
      if (p === 'getAttribute') return () => null;
      return u;
    },
    set(){ return true; }, apply(){ return u; }, has(){ return true; }
  });
  return u;
}

// Date 고정(옵션) — 특정 주가 '게재 중'인 상태를 재현
let DateCls = Date;
if (isoDate) {
  const fixed = new Date(isoDate + 'T12:00:00');
  DateCls = class extends Date {
    constructor(...a){ if (!a.length) super(fixed.getTime()); else super(...a); }
    static now(){ return fixed.getTime(); }
  };
}

const events = {};
const bodyEl = U();
const document = {
  addEventListener(t, cb){ events[t] = cb; }, removeEventListener(){},
  getElementById(){ return U(); }, querySelector(){ return U(); }, querySelectorAll(){ return []; },
  getElementsByClassName(){ return []; }, createElement(){ return U(); }, createDocumentFragment(){ return U(); },
  documentElement: U(), head: U(),
  body: new Proxy(bodyEl, { get(t, p){ if (p === 'classList') return clsList(); return t[p]; } }),
};
const localStorage = { _d:{}, getItem(k){ return k in this._d ? this._d[k] : null; }, setItem(k,v){ this._d[k] = String(v); }, removeItem(k){ delete this._d[k]; } };
class ImageShim { set src(v){} set onload(f){} set onerror(f){} }

const sandbox = {
  document, localStorage, console,
  navigator: { userAgent: 'node', language: 'ko' },
  location: { hash: '', href: 'http://localhost/', search: '' },
  addEventListener(){}, removeEventListener(){}, dispatchEvent(){},
  setTimeout: (f)=>{ try{ f && f(); }catch(e){} return 0; }, clearTimeout(){}, setInterval(){ return 0; }, clearInterval(){},
  requestAnimationFrame: (f)=>{ try{ f && f(0); }catch(e){} return 0; },
  matchMedia: () => ({ matches:false, addEventListener(){}, addListener(){} }),
  Image: ImageShim, Date: DateCls, Math, JSON, Object, Array, String, Number, Boolean, RegExp,
  parseInt, parseFloat, isNaN, encodeURIComponent, decodeURIComponent,
  alert(){}, history: { replaceState(){}, pushState(){} },
  IntersectionObserver: class { observe(){} disconnect(){} unobserve(){} },
  scrollTo(){}, getComputedStyle(){ return {}; },
};
sandbox.window = sandbox; sandbox.globalThis = sandbox;
vm.createContext(sandbox);

function fail(msg, e) {
  console.error('SMOKE FAIL: ' + msg);
  if (e) console.error(e.stack || e);
  process.exit(1);
}

try {
  vm.runInContext(fs.readFileSync(dataPath, 'utf8') +
    ';globalThis.__S = (typeof STORIES!=="undefined")?STORIES:null;' +
    ' globalThis.__A = (typeof STORY_ARCHIVE!=="undefined")?STORY_ARCHIVE:null;',
    sandbox, { filename: dataPath });
} catch (e) { fail('data.js 평가 실패', e); }

if (!sandbox.__S || typeof sandbox.__S !== 'object' || Object.keys(sandbox.__S).length === 0)
  fail('STORIES 가 비었거나 정의되지 않음');
if (!Array.isArray(sandbox.__A))
  fail('STORY_ARCHIVE 가 배열이 아님');

try { vm.runInContext(fs.readFileSync(APP, 'utf8'), sandbox, { filename: APP }); }
catch (e) { fail('app.js IIFE 예외', e); }

try {
  if (events['DOMContentLoaded']) events['DOMContentLoaded']();
} catch (e) { fail('init()/렌더 예외', e); }

const days = Object.keys(sandbox.__S).join(',');
console.log(`SMOKE OK${isoDate ? ' @' + isoDate : ''} — STORIES days=[${days}], archive=${sandbox.__A.length}주, 렌더 예외 없음`);
process.exit(0);
