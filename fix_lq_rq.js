const fs = require('fs');
let c = fs.readFileSync('D:/수창/통찰유머감동/js/data.js', 'utf8');
const Q = '\u0027', LQ = '\u2018', RQ = '\u2019';
const BSLASH = '\\';

let count = 0;
let i = 0;

while (i < c.length) {
  const lqPos = c.indexOf(LQ, i);
  if (lqPos === -1) break;

  // Find the next ASCII Q after LQ
  const qPos = c.indexOf(Q, lqPos + 1);
  if (qPos === -1) { i = lqPos + 1; continue; }

  const between = c.slice(lqPos + 1, qPos);

  // Only fix short phrases (no actual newlines, length 1-60)
  if (between.indexOf('\n') === -1 && between.length >= 1 && between.length < 60) {
    // Check char after Q
    const charAfterQ = c.charCodeAt(qPos + 1);
    const isEscapedNewline = (c[qPos + 1] === BSLASH && c[qPos + 2] === 'n');
    const isKorean = charAfterQ > 0x1000;
    const isSpace = charAfterQ === 0x20;
    const isComma = charAfterQ === 0x2C;

    if (isEscapedNewline || isKorean || isSpace) {
      c = c.slice(0, qPos) + RQ + c.slice(qPos + 1);
      count++;
      console.log('Fixed: ' + JSON.stringify(between));
      // i stays at lqPos + 1 to scan again from same region
      i = lqPos + 1;
      continue;
    }
  }

  i = lqPos + 1;
}

console.log('Total LQ->RQ fixes: ' + count);
fs.writeFileSync('D:/수창/통찰유머감동/js/data.js', c, 'utf8');

try {
  new Function(c);
  console.log('SYNTAX OK!');
} catch(e) {
  console.log('ERROR: ' + e.message);
}
