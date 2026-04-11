const fs = require('fs');
let content = fs.readFileSync('D:/수창/통찰유머감동/js/data.js', 'utf8');

// Fix: in Jolie Laide body strings, replace ASCII ' used as Korean quotes with curly quotes
// Pattern: single-quoted strings that contain 'Jolie Laide' or other 'keyword' embedded patterns
// Strategy: find the Jolie Laide body array in archive and fix embedded single quotes

// The archive body strings use ASCII ' as both delimiter and content quote
// We need to replace content-level ASCII ' with Unicode curly quotes \u2018 \u2019
// Specifically: replace 'word' patterns that are INSIDE a JS string (between comma and comma/bracket)

// Find all archive Jolie Laide body paragraphs and fix them
// The problematic pattern is: 'text 'quoted' text'
// where inner 'quoted' should be \u2018quoted\u2019

function fixJolieBody(str) {
  // Replace patterns like 'Jolie Laide' -> \u2018Jolie Laide\u2019
  // and '한국어' -> \u2018한국어\u2019 when they appear INSIDE a string
  const replacements = [
    ["'Jolie Laide'", '\u2018Jolie Laide\u2019'],
    ["'\uc544\ub984\ub2e4\uc6b4 \ubabb\ub09c\uc774'", '\u2018\uc544\ub984\ub2e4\uc6b4 \ubabb\ub09c\uc774\u2019'],
    ["'\uce5c\ubc00\ud55c \uac70\ub9ac\uac10'", '\u2018\uce5c\ubc00\ud55c \uac70\ub9ac\uac10\u2019'],
    ["'\ub2f9\ub2f9\ud55c \uc218\uc904\uc74c'", '\u2018\ub2f9\ub2f9\ud55c \uc218\uc904\uc74c\u2019'],
    ["'\uace0\uc815\ub41c \ud758\ub4e4\ub9bc'", '\u2018\uace0\uc815\ub41c \ud758\ub4e4\ub9bc\u2019'],
    ["'\ub3c4\ubc1c\uc801 \uacbd\uacc4\uc120'", '\u2018\ub3c5\ubc1c\uc801 \uacbd\uacc4\uc120\u2019'],
    ["'\uc624\ub798\ub41c \ubbf8\ub798'", '\u2018\uc624\ub798\ub41c \ubbf8\ub798\u2019'],
    ["'\uc774\ubbf8\uc640 \uc544\uc9c1 \uc0ac\uc774'", '\u2018\uc774\ubbf8\uc640 \uc544\uc9c1 \uc0ac\uc774\u2019'],
  ];
  replacements.forEach(([from, to]) => {
    str = str.split(from).join(to);
  });
  return str;
}

content = fixJolieBody(content);

fs.writeFileSync('D:/수창/통찰유머감동/js/data.js', content, 'utf8');
console.log('Archive fix done.');
