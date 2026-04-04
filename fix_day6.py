#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

with open('0번.txt', 'rb') as f:
    raw_bytes = f.read()

# Normalize: remove CRLF → LF, remove zero-width spaces
raw = raw_bytes.replace(b'\r\n', b'\n').replace(b'\xe2\x80\x8b', b'').decode('utf-8')

paragraphs = [p.strip() for p in raw.strip().split('\n\n') if p.strip()]
# Remove any remaining \r or \n within paragraphs
paragraphs = [p.replace('\r', ' ').replace('\n', ' ') for p in paragraphs]

def js_str(s):
    return s.replace('\\', '\\\\').replace("'", "\\'")

body_items = ["      '" + js_str(p) + "'" for p in paragraphs]
body = '[\n' + ',\n'.join(body_items) + '\n    ]'

day6 = (
    "  /* ═══ 토요일 — 에세이·감동 (PRIMARY: 감동) ═══ */\n"
    "  6: {\n"
    "    title: '0번',\n"
    "    category: '에세이·일상',\n"
    "    primaryType: '감동',\n"
    "    types: ['감동', '통찰'],\n"
    "    image: 'images/0번.png',\n"
    "    svgKey: null,\n"
    "    body: " + body + ",\n"
    "    closing: '1번은 1m, 2번은 2m.\\n0번은 아예 딱 달라붙은 거다.\\n그리고 0은 없는 게 아니다.\\n계속 기억되고 이어질 뿐…….',\n"
    "    analysis: {\n"
    "      insight: { icon: '\U0001F4A1', text: '선함은 가까이하고 싶은 것 — 0번은 순위 밖의 순위, 측정할 수 없는 가까움이다.',\n"
    "                 condition: '작은 것이 사실 전부였던 이야기' },\n"
    "      humor:   { icon: '\U0001F604', text: '엄마 아빠가 아무리 잘해줘도 0번은 꼼짝 안 한다 — 도무지 넘볼 수 없는 순위.',\n"
    "                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },\n"
    "      emotion: { icon: '\u2764\ufe0f', text: '서운한 마음을 먼저 지우는 쪽은 늘 할머니다 — 0번의 진짜 의미.',\n"
    "                 condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }\n"
    "    },\n"
    "    source: {\n"
    "      type: '에세이',\n"
    "      credit: 'SCJ / blog.naver.com/scjoe',\n"
    "    },\n"
    "    curatorNote: '\"0번은 아예 딱 달라붙은 거다.\" 이 문장이 오래 남습니다. 그리고 맹자의 말 — 선하다는 것은 가까이하고 싶다는 뜻이라는 것. 할머니는 숫자 이전의 자리에 있었습니다.',\n"
    "    qna: {\n"
    "      question: '당신의 0번은 누구입니까? 아무리 싸워도, 아무리 시간이 지나도 꼼짝 않는 그 자리.',\n"
    "      answer: '0을 곱하면 무엇이든 0이 됩니다. 할머니는 손주의 허물에 0을 곱합니다. 그래서 0번은 비어 있는 자리가 아닙니다. 가장 꽉 찬 자리입니다.'\n"
    "    },\n"
    "    publishedDate: '2026년 4월 4일'\n"
    "  }"
)

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the broken day 6 (from the failed edit) or the placeholder
# Try both possible markers
for start_marker in [
    "  /* ═══ 토요일 — 에세이·감동 (PRIMARY: 감동) ═══ */",
    "  /* ═══ 토요일 — (4/4 SCJ 블로그) ═══ */",
]:
    start_pos = content.find(start_marker)
    if start_pos >= 0:
        print('Found start marker')
        break

end_marker = "publishedDate: '2026년 4월 4일'\n  }"
end_pos = content.find(end_marker, start_pos) + len(end_marker)

print(f'Replacing chars {start_pos}-{end_pos}')

new_content = content[:start_pos] + day6 + content[end_pos:]

with open('js/data.tmp.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
os.replace('js/data.tmp.js', 'js/data.js')
print('Done. Length:', len(new_content))
