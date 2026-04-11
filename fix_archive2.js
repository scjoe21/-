// -*- coding: utf-8 -*-
const fs = require('fs');
let content = fs.readFileSync('D:/수창/통찰유머감동/js/data.js', 'utf8');

// Find all problematic embedded ASCII single-quoted words inside JS strings
// in the Jolie Laide body text (archive and any other location)
// Strategy: find strings of the form 'word' where word contains no ASCII quotes
// and is surrounded by ASCII single quotes, but is INSIDE a larger JS string

// The problematic patterns are specific known phrases from the Jolie Laide essay
// Replace ASCII 'phrase' -> U+2018phrase+U+2019 (curly quotes)

const lq = '\u2018';
const rq = '\u2019';

// All the embedded quoted phrases in the Jolie Laide essay
const phrases = [
  'Jolie Laide',
  '\uC544\uB984\uB2E4\uC6B4 \uBABB\uB09C\uC774',   // 아름다운 못난이
  '\uCE5C\uBC00\uD55C \uAC70\uB9AC\uAC10',           // 친밀한 거리감
  '\uB2F9\uB2F9\uD55C \uC218\uC904\uC74C',           // 당당한 수줍음
  '\uACE0\uC815\uB41C \uD758\uB4E4\uB9BC',           // 고정된 흔들림
  '\uB3C5\uBC1C\uC801 \uACBD\uACC4\uC120',           // 도발적 경계선
  '\uC624\uB798\uB41C \uBBF8\uB798',                 // 오래된 미래
  '\uC774\uBBF8\uC640 \uC544\uC9C1 \uC0AC\uC774',   // 이미와 아직 사이
];

phrases.forEach(phrase => {
  const from = "'" + phrase + "'";
  const to = lq + phrase + rq;
  const before = content.length;
  content = content.split(from).join(to);
  const count = (before - content.length) / (from.length - to.length);
  if (content.length !== before) console.log('Replaced:', JSON.stringify(phrase));
});

fs.writeFileSync('D:/수창/통찰유머감동/js/data.js', content, 'utf8');
console.log('Done.');
