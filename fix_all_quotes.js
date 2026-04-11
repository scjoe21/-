const fs = require('fs');
let content = fs.readFileSync('D:/수창/통찰유머감동/js/data.js', 'utf8');

const lq = '\u2018';
const rq = '\u2019';
const q = '\u0027'; // ASCII single quote

// Find all places in the file where an ASCII single quote appears INSIDE
// what should be a Korean-language content string (not as a string delimiter)
//
// Key insight: In this JS file, string delimiters are always ASCII '
// and the content sometimes has 'quoted phrase' patterns where the inner
// quotes should be curly quotes.
//
// The problematic pattern: inside a string that starts with q, there's another q
// followed by Korean/English text, followed by another q.
//
// We can find these by looking for: text_char + q + text_chars + q + text_char
// where text_char is non-ASCII (i.e., Korean character)

let fixCount = 0;
let pos = 0;

while (pos < content.length) {
  const qPos = content.indexOf(q, pos);
  if (qPos === -1) break;

  // Check if this is an embedded quote (not a string delimiter)
  // Criterion: char before this q is Korean (> U+0100), OR is a space preceded by Korean
  const charBefore = qPos > 0 ? content.charCodeAt(qPos - 1) : 0;
  const charBefore2 = qPos > 1 ? content.charCodeAt(qPos - 2) : 0;

  // Korean chars are > 0x1000 approximately
  const isKoreanBefore = charBefore > 0x1000;
  const isSpaceBeforeKorean = (charBefore === 0x20 && charBefore2 > 0x1000);

  if (isKoreanBefore || isSpaceBeforeKorean) {
    // This q might be an embedded opening quote
    // Find the matching closing q
    const closePos = content.indexOf(q, qPos + 1);
    if (closePos !== -1 && closePos - qPos < 40) {
      const phrase = content.slice(qPos + 1, closePos);
      // The closing q should be followed by a Korean char or space+Korean or comma
      const charAfterClose = content.charCodeAt(closePos + 1);
      const isKoreanAfter = charAfterClose > 0x1000;
      const isSpaceAfterKorean = (charAfterClose === 0x20 && content.charCodeAt(closePos + 2) > 0x1000);
      const isCommaAfter = charAfterClose === 0x2C; // ','
      const isDotAfter = charAfterClose === 0x2E; // '.'

      if ((isKoreanAfter || isSpaceAfterKorean) && !phrase.includes('\n') && phrase.length > 1) {
        // This looks like an embedded quote
        const from = q + phrase + q;
        const to = lq + phrase + rq;
        content = content.slice(0, qPos) + to + content.slice(closePos + 1);
        fixCount++;
        console.log('Fixed: ' + JSON.stringify(phrase));
        // Don't advance pos (might be more at same location after replacement)
        continue;
      }
    }
  }

  pos = qPos + 1;
}

console.log('Total fixes: ' + fixCount);
fs.writeFileSync('D:/수창/통찰유머감동/js/data.js', content, 'utf8');

// Verify
try {
  new Function(content);
  console.log('SYNTAX OK!');
} catch(e) {
  console.log('ERROR: ' + e.message);
}
