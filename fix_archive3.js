const fs = require('fs');
let content = fs.readFileSync('D:/수창/통찰유머감동/js/data.js', 'utf8');

const lq = '\u2018';
const rq = '\u2019';

// Find ASCII-quoted phrases inside strings and wrap with curly quotes
// Pattern: 0x27 + phrase + 0x27 where phrase contains Korean text or English
function replace(phrase) {
  const from = String.fromCharCode(0x27) + phrase + String.fromCharCode(0x27);
  const to = lq + phrase + rq;
  if (content.includes(from)) {
    content = content.split(from).join(to);
    console.log('Replaced: ' + phrase);
  } else {
    console.log('NOT found: ' + phrase);
  }
}

// Read phrases from actual characters found in file
const idx = content.indexOf('\uB2F9\uB2F9\uD55C');
if (idx !== -1) {
  // Extract the phrase from the file itself to avoid encoding issues
  const seg = content.slice(idx, idx+6);
  console.log('Found phrase chars:', seg.split('').map(c => c.charCodeAt(0).toString(16)).join(' '));
}

// Use split to find the exact phrase dynamically
// Find pattern: ASCII_QUOTE + text_without_ASCII_quote + ASCII_QUOTE  inside known Jolie Laide body
// Just scan the archive/story for any 'word' patterns in strings and fix them

// Simple approach: find all lines containing both start-of-string-delimiter '
// and embedded ' inside, and fix specific known patterns

// Known phrases that need curly quotes (extracted from file directly)
// 당당한 수줍음 = \uB2F9\uB2F9\uD55C \uC218\uC90D\uC74C
replace('\uB2F9\uB2F9\uD55C \uC218\uC90D\uC74C');

// Get remaining error location and extract phrase
fs.writeFileSync('D:/수창/통찰유머감동/js/data.js', content, 'utf8');

// Check syntax
try {
  new Function(content);
  console.log('syntax OK!');
} catch(e) {
  console.log('Still error: ' + e.message);
  // Find location of error
  const m = e.stack.match(/<anonymous>:(\d+)/);
  if (m) {
    const lineNum = parseInt(m[1]);
    const lines = content.split('\n');
    console.log('Line ' + lineNum + ':', lines[lineNum-1].slice(0,200));
  }
}
