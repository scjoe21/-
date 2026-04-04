const fs = require('fs');
let code = fs.readFileSync('D:/수창/통찰유머감동/js/data.js', 'utf8');
const crlf = code.includes('\r\n');
const nl = crlf ? '\r\n' : '\n';

const startMarker = '/* ═══ 토요일 — 에세이·일상 (준비 중) ═══ */';
const endMarker = "publishedDate: '2026년 4월 11일'";

const startIdx = code.indexOf(startMarker);
const endIdx   = code.indexOf(endMarker, startIdx);
if (startIdx < 0 || endIdx < 0) {
  console.log('markers not found', startIdx, endIdx); process.exit(1);
}
// end position: end of the closing brace block "  }\n};"
const closeSeq = '  }' + nl + '};';
const closeIdx = code.indexOf(closeSeq, endIdx);
const endPos = closeIdx + closeSeq.length;

console.log('Replacing chars', startIdx, '-', endPos);

const q1 = '\u2018', q2 = '\u2019';  // ' '

const body = [
  `서로 모순되는 두 단어가 만나 또 다른 멋진 말이 되기도 하는데, 프랑스어 ${q1}Jolie Laide${q2}가 그렇다. 이 말을 직역하면 ${q1}아름다운 못난이${q2}로 말이 안 되는 것 같지만, 자신만의 개성으로 더 아름답게 보이는 사람을 가리키는 말이다.`,
  `이 단어와 같은 방식으로 ${q1}Jolie Laide${q2}들만이 갖는 특징을 들여다보자.`,
  `${q1}Jolie Laide${q2}들의 매력은 다른 세계에 사는 듯한 이질감으로 멀게만 느껴지는 아이돌스타와 다르다. 언뜻 보면 평범하기 그지없지만 자세히 보면 아주 매력적이다. 가장 좋은 것을 먼저 보여준 다음에 실망을 안겨주는 게 아니라 알아갈수록 점점 더 빛나는 모습을 선사한다. 한마디로 이들의 매력은 ${q1}친밀한 거리감${q2}이다.`,
  `또 이들은 못난이 취급받던 시절을 딛고 지금의 성공을 일구었기 때문에 내면이 수줍어하는 듯하면서도 자신감이 넘쳐난다. 스스로 삶을 꾸려갈 수 있을 만큼 자존감이 높고, 때로는 다른 사람들을 앞세우는 수줍음도 있다. 이들의 내면을 ${q1}당당한 수줍음${q2}으로 불러도 좋겠다.`,
  `그리고 ${q1}Jolie Laide${q2}들은 자신의 약점과 한계를 극복하는 과정을 거쳤기 때문에 모순과 갈등 속에서만 발견되는 삶의 진실에 가까이 있다. 나침반의 바늘이 떨리면서도 항상 북쪽을 가리키듯, 이들의 삶은 흔들릴 때도 있지만 어느새 진실을 가리키고 있는 ${q1}고정된 흔들림${q2}이다.`,
  `끝으로 이들은 자신의 부족함을 강점으로 바꿀 수 있는 독창성을 갖고 있다. 줄이 그어진 종이가 주어져도 대각선으로 글을 쓸 수 있고, 틀 속에 가두려고 하면 어느새 빠져나가 버린다. 주어진 한계를 자유롭게 넘나들고, 더 멋진 뭔가를 향해 뛰어들고 넘어지고 다시 일어선다. 세상이 볼 때 이들은 언제 뚫릴지 모르는 ${q1}도발적 경계선${q2}과 같다.`,
  `${q1}Jolie Laide${q2}들만이 갖는 나름의 매력, 성숙한 내면, 고집스러운 진실됨 그리고 남다른 독창성은 내 안에 그리고 우리 가운데 ${q1}Jolie Laide${q2}를 찾아 나서라고 초청한다. 최고의 외모와 스펙으로 똑같은 성공을 찾아 질주하는 현 시대가 진정 필요로 하는 것은 또 한 명의 스타가 아니다. 나와 다르지 않고 우리도 얼마든지 될 수 있는 ${q1}Jolie Laide${q2}인 것이다.`,
  `나만 두드러지게 하는 외모나 돈이 아니라 내면과 인성 같은 보이지 않으나 분명한 것들에 다시 눈을 돌려야 한다. 나만 잘 되면 그만인 출세나 명예가 아니라 사랑과 공동체처럼 누린 적 있지만 기억할 수 없는 것들을 거듭 붙잡아야 한다.`,
  `이럴 때 나와 우리는 ${q1}오래된 미래${q2}처럼 ${q1}Jolie Laide${q2}로 가득 찬 세상을 만나게 될 것이다. 그렇다면 ${q1}Jolie Laide${q2} 세상은 ${q1}이미와 아직 사이${q2}에 있다.`
];

// Escape single quotes in body strings for JS (they're inside single-quoted strings)
// Actually these strings only have U+2018/U+2019 (curly quotes), no ASCII single quotes,
// so no escaping needed inside single-quoted JS strings.
const bodyJS = body.map(s => `      '${s}'`).join(',' + nl);

const newDay6 = `  /* ═══ 토요일 — 에세이·일상 (PRIMARY: 통찰) ═══ */
  6: {
    title: 'Jolie Laide를 찾아서',
    category: '에세이·일상',
    primaryType: '통찰',
    types: ['통찰', '감동'],
    image: 'images/jolie laide.webp',
    svgKey: null,
    body: [
${bodyJS}
    ],
    closing: '${q1}아름다운 못난이.${q2}\\n알아갈수록 점점 더 빛나는 사람.\\n${q1}Jolie Laide${q2} 세상은\\n${q1}이미와 아직 사이${q2}에 있다.',
    analysis: {
      insight: { icon: '💡', text: '약점이 개성이 되는 순간 — 부족함을 강점으로 바꾼 사람이 가장 오래 빛난다.',
                 condition: '주체와 객체가 뒤바뀌는 순간' },
      humor:   { icon: '😄', text: '${q1}아름다운 못난이${q2} — 말이 안 되는 것 같지만 가장 정확한 표현이다.',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      emotion: { icon: '❤️', text: '알아갈수록 점점 더 빛나는 사람 — 처음에는 평범해 보였지만 가까워질수록 아름다운.',
                 condition: '아주 작은 순간이 사실 전부였던 이야기' }
    },
    source: {
      type: '에세이',
      credit: 'SCJ / blog.naver.com/scjoe',
    },
    curatorNote: '${q1}고정된 흔들림.${q2} 이 표현이 오래 남습니다. 나침반 바늘처럼 떨리면서도 북쪽을 가리키는 사람. 흔들리는 것이 약점이 아니라, 흔들리면서도 방향을 잃지 않는 것이 그 사람의 본질이라는 것.',
    qna: {
      question: '당신 주변의 Jolie Laide는 누구입니까? 처음에는 평범해 보였지만, 알아갈수록 빛났던 사람.',
      answer: 'Jolie Laide는 완벽한 스펙이 아니라 자신만의 결을 가진 사람입니다. 못난이 시절을 딛고 왔기 때문에 내면이 더 깊습니다. 줄 그어진 종이에 대각선으로 글을 쓰는 사람 — 그런 사람이 우리 안에 있습니다.'
    },
    publishedDate: '2026년 4월 11일'
  }
};`;

const result = code.substring(0, startIdx) + newDay6 + code.substring(endPos);
fs.writeFileSync('D:/수창/통찰유머감동/js/data.js', result, 'utf8');
console.log('Done. File length:', result.length);
