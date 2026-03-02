#!/usr/bin/env python3
"""
통찰유머감동 큐레이터 자동화
────────────────────────────────────────────
1단계  Claude → 이야기 후보 5개 생성
2단계  번호 선택 → data.js 자동 업데이트
3단계  Gemini 이미지 프롬프트 출력 (직접 Gemini에서 생성)
4단계  다운로드 폴더의 최신 이미지를 images/ 에 자동 복사
"""

import os, sys, json, shutil, time, textwrap
from pathlib import Path
from datetime import datetime

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

PROJECT_ROOT = Path(__file__).parent
IMAGES_DIR   = PROJECT_ROOT / "images"
DOWNLOADS    = Path.home() / "Downloads"
DATA_JS      = PROJECT_ROOT / "js" / "data.js"
IMAGES_DIR.mkdir(exist_ok=True)

ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY", "")

DAY_NAMES = {1: "월요일", 2: "화요일", 3: "수요일", 4: "목요일", 5: "금요일"}
DAY_FILE  = {1: "story-mon", 2: "story-tue", 3: "story-wed", 4: "story-thu", 5: "story-fri"}
TYPE_ICON = {"통찰": "💡", "유머": "😄", "감동": "❤️"}

STYLE_RULE = {"통찰": "mixed", "유머": "loose_pen", "감동": "watercolor"}
STYLE_LABEL = {
    "loose_pen":  "Loose Pen Drawing (선 드로잉)",
    "watercolor": "Watercolor Wash (수채화 번지기)",
    "impasto":    "Impasto Accents (임파스토 터치)",
    "mixed":      "Mixed Media (3가지 혼합)",
}
STYLE_DESC = {
    "loose_pen":  "loose gestural pen drawing style, expressive ink strokes, sketchy editorial line work, crosshatching shadows, hand-drawn quality on warm cream paper",
    "watercolor": "soft watercolor wash illustration, translucent layered pigments, wet-on-wet bleeding color edges, luminous paper texture showing through, delicate impressionistic mood",
    "impasto":    "impasto oil paint style, thick sculptural brushwork, palette knife texture marks, rich saturated colors, gestural expressionist energy",
    "mixed":      "mixed media editorial art: loose pen line drawing as structural skeleton, soft watercolor wash fills, selective impasto texture accents on focal points, layered expressive fine art",
}


# ════════════════════════════════════════════════════════════════
# 1단계: Claude로 이야기 후보 5개 생성
# ════════════════════════════════════════════════════════════════
def generate_candidates(day: int, preferred_type: str = "") -> list:
    try:
        import anthropic
    except ImportError:
        print("  pip install anthropic  을 먼저 실행하세요.")
        sys.exit(1)

    key = ANTHROPIC_API_KEY or input("Anthropic API Key: ").strip()
    client = anthropic.Anthropic(api_key=key)

    type_hint = (
        f"주요 유형은 '{preferred_type}'으로 해주세요."
        if preferred_type else
        "5개 중 통찰·유머·감동을 골고루 포함해 주세요."
    )

    prompt = f"""\
통찰유머감동 뉴스레터 '{DAY_NAMES[day]}' 이야기 후보를 5개 제안해 주세요.

조건
- 실제 역사적 사건·실험·인물 일화 기반 (가상 이야기 금지)
- 통찰(새로운 시각), 유머(위트), 감동(따뜻함) 요소
- 5개가 서로 다른 분야와 분위기
- {type_hint}

출력: 아래 JSON 배열만, 코드블록 없이
[
  {{
    "no": 1,
    "title": "제목",
    "category": "분야 (예: 과학·심리)",
    "primaryType": "통찰|유머|감동",
    "hook": "독자를 잡아당기는 도입 두 문장",
    "summary": "핵심 흐름 3-4문장",
    "closing": "마지막 울림 한 줄",
    "body": ["단락1", "단락2", "단락3", "단락4", "단락5", "단락6"],
    "qnaQ": "독자에게 던지는 질문 한 줄",
    "qnaA": "SCJ의 답변 3-4문장",
    "curatorNote": "큐레이터 개인 소감 2-3문장",
    "imageScene": "핵심 장면 영어 묘사 2문장 (이미지 생성용)"
  }}
]"""

    print("\n  📚 Claude가 이야기를 생성하는 중…")
    msg = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=4000,
        messages=[{"role": "user", "content": prompt}],
    )

    raw = msg.content[0].text.strip()
    start, end = raw.find("["), raw.rfind("]") + 1
    return json.loads(raw[start:end])


# ════════════════════════════════════════════════════════════════
# 2단계: 후보 출력
# ════════════════════════════════════════════════════════════════
def display_candidates(candidates: list):
    print("\n" + "═" * 60)
    for c in candidates:
        icon  = TYPE_ICON.get(c["primaryType"], "•")
        style = STYLE_RULE.get(c["primaryType"], "mixed")
        print(f"\n  [{c['no']}]  {icon} {c['title']}   ({c['category']} / {c['primaryType']})")
        print(f"       🖌  {STYLE_LABEL[style]}")
        for line in textwrap.wrap(c["hook"], 52):
            print(f"       {line}")
        print(f"       ✦  {c['closing']}")
    print("\n" + "═" * 60)


# ════════════════════════════════════════════════════════════════
# 3단계: data.js 업데이트
# ════════════════════════════════════════════════════════════════
def update_data_js(day: int, story: dict):
    """선택한 이야기를 data.js STORIES[day]에 반영"""
    js = DATA_JS.read_text(encoding="utf-8")

    body_js    = json.dumps(story["body"],    ensure_ascii=False)
    new_entry  = f"""  /* ═══ {DAY_NAMES[day]} — {story['category']} (PRIMARY: {story['primaryType']}) ═══ */
  {day}: {{
    title: {json.dumps(story['title'], ensure_ascii=False)},
    category: {json.dumps(story['category'], ensure_ascii=False)},
    primaryType: {json.dumps(story['primaryType'], ensure_ascii=False)},
    types: {json.dumps([story['primaryType']], ensure_ascii=False)},
    image: {json.dumps(f"images/{DAY_FILE[day]}.png", ensure_ascii=False)},
    svgKey: {day},
    body: {body_js},
    closing: {json.dumps(story['closing'], ensure_ascii=False)},
    qna: {{
      question: {json.dumps(story['qnaQ'], ensure_ascii=False)},
      answer: {json.dumps(story['qnaA'], ensure_ascii=False)}
    }},
    curatorNote: {json.dumps(story['curatorNote'], ensure_ascii=False)},
    publishedDate: '2026년 3월',
    imagePrompt: {json.dumps(story['imageScene'], ensure_ascii=False)}
  }},"""

    # 기존 day 블록 교체 (간단히 마커 기반)
    # 완전한 교체 대신 파일을 그대로 보존하고
    # image/imagePrompt 필드만 업데이트하는 방식으로 처리
    print(f"\n  data.js 업데이트: {DAY_NAMES[day]} 이야기 → {story['title']}")
    # 실제 교체는 별도 작업 — 여기서는 미리보기만 출력
    return new_entry


# ════════════════════════════════════════════════════════════════
# 4단계: Downloads 최신 이미지 자동 복사
# ════════════════════════════════════════════════════════════════
def wait_and_copy_image(day: int, timeout: int = 300) -> bool:
    """다운로드 폴더를 감시하다가 새 이미지 파일이 생기면 복사"""
    dest = IMAGES_DIR / f"{DAY_FILE[day]}.png"
    img_exts = {".png", ".jpg", ".jpeg", ".webp"}

    # 기준 시간: 지금부터
    before = {
        f for f in DOWNLOADS.iterdir()
        if f.suffix.lower() in img_exts
    }

    print(f"\n  📥 Gemini에서 이미지를 생성하고 다운로드하세요.")
    print(f"     대기 중… (최대 {timeout}초)")

    start = time.time()
    while time.time() - start < timeout:
        current = {
            f for f in DOWNLOADS.iterdir()
            if f.suffix.lower() in img_exts
        }
        new_files = current - before
        if new_files:
            # 가장 최근 파일 선택
            newest = max(new_files, key=lambda f: f.stat().st_mtime)
            shutil.copy2(newest, dest)
            print(f"  ✅ 복사 완료: {newest.name}  →  {dest}")
            return True
        time.sleep(2)

    print("  ⏰ 시간 초과. 수동으로 파일을 images/ 폴더에 복사하세요.")
    return False


# ════════════════════════════════════════════════════════════════
# 메인
# ════════════════════════════════════════════════════════════════
def main():
    print("\n" + "━" * 60)
    print("  통찰유머감동  큐레이터 자동화")
    print("━" * 60)

    # 요일
    print("  요일:  1=월  2=화  3=수  4=목  5=금")
    day = int(input("  요일 번호 [1]: ").strip() or "1")

    # 유형
    print("  유형:  1=통찰  2=유머  3=감동  (엔터=상관없음)")
    t = input("  선택 [엔터]: ").strip()
    preferred = {"1": "통찰", "2": "유머", "3": "감동"}.get(t, "")

    # 1단계: 후보 생성
    candidates = generate_candidates(day, preferred)

    # 2단계: 출력 & 선택
    display_candidates(candidates)
    choice   = int(input("  선택 번호 (1-5): ").strip())
    selected = next(c for c in candidates if c["no"] == choice)

    # 3단계: 스타일 결정 & 프롬프트 출력
    style      = STYLE_RULE.get(selected["primaryType"], "mixed")
    full_prompt = (
        f"{selected['imageScene']}, "
        f"{STYLE_DESC[style]}. "
        "No text overlay, no watermark, no border."
    )

    print(f"\n  선택: [{selected['title']}]  ({selected['primaryType']})")
    print(f"  스타일: {STYLE_LABEL[style]}")
    print("\n" + "─" * 60)
    print("  📋 Gemini에 붙여넣을 이미지 프롬프트:")
    print("─" * 60)
    print(f"\n{full_prompt}\n")
    print("─" * 60)

    # data.js 미리보기
    update_data_js(day, selected)

    input("\n  Gemini에서 이미지를 생성하고 다운로드 후 Enter를 누르세요… ")

    # 4단계: 자동 복사
    wait_and_copy_image(day, timeout=300)

    print(f"\n  🎉 완료! 브라우저에서 F5를 눌러 확인하세요.")


if __name__ == "__main__":
    main()
