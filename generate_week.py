# -*- coding: utf-8 -*-
"""
통찰·유머·감동 — 주간 글 자동 생성기
────────────────────────────────────────────────────────────
매주 1회 실행. 월~금 5편(실화 인물 일화)을 Claude로 자동 생성해
js/data.js 의 NEXT_WEEK_STORIES(마커 @AUTO-WEEK)를 통째로 교체한다.
직전에 채워져 있던 주는 PAST_WEEKS(@AUTO-PAST:HEAD) 맨 앞으로 옮긴다.
표시 시점은 data.js 의 _isLive() 가 처리 → 직전 일요일 자동 게재.

선택(번호 고르기) 단계 없음. 토요일(6) 없음 — 월~금만.

환경변수:
  ANTHROPIC_API_KEY  (필수)
  GEN_MODEL          (선택, 기본 claude-sonnet-4-6)
"""

import os, re, sys, json, subprocess, tempfile
from pathlib import Path
from datetime import date, timedelta

# 콘솔 인코딩(예: Windows cp949)과 무관하게 출력이 깨지거나 죽지 않도록
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

ROOT     = Path(__file__).parent
DATA_JS  = ROOT / "js" / "data.js"
MODEL    = os.environ.get("GEN_MODEL", "claude-sonnet-4-6")

BEGIN = "/* @AUTO-WEEK:BEGIN"
END   = "/* @AUTO-WEEK:END */"
HEAD  = "/* @AUTO-PAST:HEAD"

DAY_NAME = {1: "월요일", 2: "화요일", 3: "수요일", 4: "목요일", 5: "금요일"}
ICON     = {"통찰": "💡", "유머": "😄", "감동": "❤️"}
# 한 주 유형 배분 — 감동2·유머1·통찰2 (모두 '용기와 힘'을 주는 결로)
PRIMARY_BY_DAY   = {1: "감동", 2: "유머", 3: "통찰", 4: "감동", 5: "통찰"}
SECONDARY_BY_TYPE = {"감동": "통찰", "유머": "통찰", "통찰": "감동"}
CONDITION = {
    "통찰": "작은 것이 사실 전부였음이 드러날 때",
    "유머": "위엄 없는 순간이 오히려 가장 인간적이었을 때",
    "감동": "오래 버텨온 것 자체가 감동이 되는 이야기",
}


# ──────────────────────────────────────────────────────────
# 날짜/라벨 계산
# ──────────────────────────────────────────────────────────
def upcoming_monday(today: date) -> date:
    """오늘 이후의 '다가오는' 월요일 (오늘이 월요일이면 다음 주 월요일)."""
    ahead = (0 - today.weekday()) % 7
    if ahead == 0:
        ahead = 7
    return today + timedelta(days=ahead)


def week_label(mon: date) -> str:
    fri = mon + timedelta(days=4)
    wom = ((mon.day - 1) // 7) + 1
    return f"{mon.year}년 {mon.month}월 {wom}주 ({mon.month}/{mon.day}–{fri.month}/{fri.day})"


def published_date(mon: date, day: int) -> str:
    d = mon + timedelta(days=day - 1)
    return f"{d.year}년 {d.month}월 {d.day}일"


# ──────────────────────────────────────────────────────────
# data.js 파싱 (중복 회피용 제목, 현재 NEXT 블록)
# ──────────────────────────────────────────────────────────
def used_titles(content: str) -> list:
    # 모든 이야기의 title: '...' / "..." 수집 (SOURCES 는 name: 이라 안 걸림)
    return re.findall(r"title:\s*['\"](.+?)['\"]", content)


def next_block_bounds(content: str):
    b = content.index(BEGIN)
    e = content.index(END) + len(END)
    return b, e


def parse_current_next(region: str):
    ws = re.search(r"weekStart:\s*['\"]([0-9\-]+)['\"]", region)
    weekstart = ws.group(1) if ws else None
    day_count = len(re.findall(r"\n\s+[1-5]:\s*\{", region))
    return weekstart, day_count


# ──────────────────────────────────────────────────────────
# Claude 호출 — 하루치 1편 (풀 스키마)
# ──────────────────────────────────────────────────────────
def generate_story(client, day: int, primary: str, avoid: list) -> dict:
    avoid_str = ", ".join(avoid[-220:])  # 너무 길면 최근 것 위주
    prompt = f"""당신은 한국어 뉴스레터 '통찰·유머·감동'의 큐레이터입니다.
'{DAY_NAME[day]}'에 실을 역사·인물 실화 1편을 작성하세요. 주(主) 유형은 '{primary}'입니다.

[지켜야 할 기존 기준]
- 실제 역사적 사건·실험·인물 일화에 기반(가상·창작 금지).
- 통찰(새로운 시각)·유머(위트)·감동(따뜻함) 중 '{primary}'를 중심으로.
- 사실과 출처가 검증 가능해야 함. 확실치 않으면 다른 소재를 고르세요(날짜·수치·인용은 실제와 다르면 안 됨).

[추가 기준 — 반드시 함께 충족]
- '아주 유명한' 이야기(예: 누구나 아는 위인전 단골 일화)는 피하세요. 덜 알려졌지만 단단한 실화로.
- 기괴하거나 엽기적·잔혹한 소재는 피하세요.
- 읽는 사람에게 '용기와 힘'을 주는 이야기여야 합니다. 따뜻함·위트가 살아 있으면서 결국 일어설 힘을 주는 결.

[중복 금지] 아래 인물/이야기는 이미 사용했으니 절대 겹치지 마세요(같은 인물의 다른 일화도 금지):
{avoid_str}

[형식] 아래 JSON 객체 하나만 출력. 코드블록·설명 금지.
{{
  "title": "인물의 ~ 형식의 짧은 제목",
  "category": "역사·{primary}",
  "body": ["단락1", "...", "단락9~11"],   // 9~11개. 날짜·장소로 시작하는 내러티브 논픽션. 한 단락 2~5문장.
  "closing": "4줄. 각 줄은 \\n 으로 구분. 짧고 울림 있게.",
  "insight": "통찰 한 줄(이 이야기의 깨달음).",
  "humor": "유머 한 줄(가벼운 아이러니/위트).",
  "emotion": "감동 한 줄(가슴을 울리는 지점).",
  "credit": "인물(영문명, 생몰연도) / 실제 출처(저자 《책》(연도) 또는 기록)를 바탕으로 재서술했습니다.",
  "curatorNote": "큐레이터 소감 2~4문장. 용기와 힘을 주는 결.",
  "qnaQ": "독자에게 던지는 질문 한 줄.",
  "qnaA": "그 질문에 대한 답 3~4문장."
}}"""

    msg = client.messages.create(
        model=MODEL,
        max_tokens=6000,
        messages=[{"role": "user", "content": prompt}],
    )
    raw = msg.content[0].text.strip()
    s, e = raw.find("{"), raw.rfind("}") + 1
    obj = json.loads(raw[s:e])
    obj["primaryType"] = primary
    return obj


# ──────────────────────────────────────────────────────────
# JS 직렬화
# ──────────────────────────────────────────────────────────
def j(v):
    return json.dumps(v, ensure_ascii=False)


def story_to_js(day: int, mon: date, o: dict) -> str:
    primary = o["primaryType"]
    types = [primary, SECONDARY_BY_TYPE[primary]]
    return f"""  /* ═══ {DAY_NAME[day]} — 역사·{primary} (PRIMARY: {primary}) ═══ */
  {day}: {{
    title: {j(o['title'])},
    category: {j(o.get('category', '역사·' + primary))},
    primaryType: {j(primary)},
    types: {j(types)},
    image: null,
    svgKey: null,
    body: {j(o['body'])},
    closing: {j(o['closing'])},
    analysis: {{
      insight: {{ icon: {j(ICON['통찰'])}, text: {j(o['insight'])}, condition: {j(CONDITION['통찰'])} }},
      humor:   {{ icon: {j(ICON['유머'])}, text: {j(o['humor'])}, condition: {j(CONDITION['유머'])} }},
      emotion: {{ icon: {j(ICON['감동'])}, text: {j(o['emotion'])}, condition: {j(CONDITION['감동'])} }}
    }},
    source: {{
      type: '실화',
      credit: {j(o['credit'])},
    }},
    curatorNote: {j(o['curatorNote'])},
    qna: {{
      question: {j(o['qnaQ'])},
      answer: {j(o['qnaA'])}
    }},
    publishedDate: {j(published_date(mon, day))},
  }},"""


def build_next_block(mon: date, stories_js: str) -> str:
    return (
        f"{BEGIN} — generate_week.py 가 이 블록 전체를 매주 자동 교체. 수동 편집 시 마커 유지. */\n"
        "/* ──────────────────────────────────────────────────────────\n"
        "   NEXT_WEEK_STORIES  ·  다음 주(게재 전) 한 주치. 직전 일요일에 자동 게재됨.\n"
        "   ────────────────────────────────────────────────────────── */\n"
        "const NEXT_WEEK_STORIES = {\n"
        f"  weekLabel: {j(week_label(mon))},\n"
        f"  weekStart: {j(mon.isoformat())},\n"
        "  stories: {\n\n"
        f"{stories_js}\n\n"
        "  }\n"
        "};\n"
        f"{END}"
    )


def reindent(block: str, spaces: int = 2) -> str:
    pad = " " * spaces
    return "\n".join((pad + ln) if ln.strip() else ln for ln in block.split("\n"))


# ──────────────────────────────────────────────────────────
# 메인
# ──────────────────────────────────────────────────────────
def main():
    key = os.environ.get("ANTHROPIC_API_KEY", "").strip()
    if not key:
        print("ERROR: ANTHROPIC_API_KEY 가 설정되지 않았습니다.", file=sys.stderr)
        sys.exit(1)

    # 키 검증 전용 모드 — 파일 변경 없이 최소 API 호출로 키 유효성만 확인
    if "--verify-key" in sys.argv:
        try:
            import anthropic
        except ImportError:
            print("ERROR: pip install anthropic", file=sys.stderr)
            sys.exit(1)
        client = anthropic.Anthropic(api_key=key)
        msg = client.messages.create(
            model=MODEL, max_tokens=8,
            messages=[{"role": "user", "content": "Reply with exactly: OK"}],
        )
        print(f"API 키 정상 (model={MODEL}, 응답='{msg.content[0].text.strip()}')")
        return

    content = DATA_JS.read_text(encoding="utf-8")
    b, e = next_block_bounds(content)
    old_region = content[b:e]
    old_ws, old_days = parse_current_next(old_region)

    mon = upcoming_monday(date.today())
    target = mon.isoformat()

    # 이미 이번 타깃 주가 채워져 있으면 아무것도 하지 않음(중복 실행 방지)
    if old_ws == target and old_days >= 5:
        print(f"이미 {target} 주가 채워져 있습니다. 종료.")
        return

    # ── 직전 NEXT(있고, 타깃과 다르고, 아직 PAST에 없으면) → PAST_WEEKS 맨 앞으로 이동
    after_head = content[content.index(HEAD):]
    already_archived = bool(old_ws) and (f"weekStart: '{old_ws}'" in after_head
                                         or f'weekStart: "{old_ws}"' in after_head)
    roll = (old_days > 0 and old_ws and old_ws != target and not already_archived)

    # ── 5편 생성
    try:
        import anthropic
    except ImportError:
        print("ERROR: pip install anthropic", file=sys.stderr)
        sys.exit(1)
    client = anthropic.Anthropic(api_key=key)

    avoid = used_titles(content)
    parts = []
    for day in range(1, 6):
        primary = PRIMARY_BY_DAY[day]
        print(f"  · {DAY_NAME[day]} ({primary}) 생성 중…", flush=True)
        o = generate_story(client, day, primary, avoid)
        avoid.append(o["title"])  # 이번 주 안에서도 중복 방지
        parts.append(story_to_js(day, mon, o))
    new_block = build_next_block(mon, "\n\n".join(parts))

    # ── 새 content 구성
    new_content = content[:b] + new_block + content[e:]

    if roll:
        # old 객체 리터럴 추출: 'const NEXT_WEEK_STORIES = {' ~ 마지막 '};'
        m = old_region.index("const NEXT_WEEK_STORIES")
        obj_start = old_region.index("{", m)
        obj_end = old_region.rindex("};") + 1   # '}' 포함
        obj_text = old_region[obj_start:obj_end]
        entry = reindent(obj_text, 2).rstrip() + ",\n"
        # 라벨이 있으면 그대로 유지됨(obj_text 안에 weekLabel/weekStart/stories 포함)
        idx = new_content.index(HEAD)
        line_end = new_content.index("\n", idx) + 1
        new_content = new_content[:line_end] + entry + new_content[line_end:]
        print(f"  · 직전 주({old_ws})를 PAST_WEEKS 로 이동")

    # ── node --check 로 검증 후에만 저장
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as tf:
        tf.write(new_content)
        tmp = tf.name
    try:
        r = subprocess.run(["node", "--check", tmp], capture_output=True, text=True)
        if r.returncode != 0:
            print("ERROR: 생성 결과가 유효한 JS 가 아닙니다. 저장하지 않음.\n" + r.stderr,
                  file=sys.stderr)
            sys.exit(2)
    except FileNotFoundError:
        print("  (node 없음 — 구문 검증 건너뜀)")
    finally:
        try: os.unlink(tmp)
        except OSError: pass

    DATA_JS.write_text(new_content, encoding="utf-8")
    print(f"\n완료: {week_label(mon)} 5편을 NEXT_WEEK_STORIES 에 기록 → 직전 일요일 자동 게재")


if __name__ == "__main__":
    main()
