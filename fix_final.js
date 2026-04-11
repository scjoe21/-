const fs = require('fs');
let content = fs.readFileSync('D:/수창/통찰유머감동/js/data.js', 'utf8');

const lq = '\u2018';
const rq = '\u2019';
const q = '\u0027'; // ASCII single quote

// Automatically find and fix all embedded single-quoted words/phrases
// that are INSIDE JS strings (causing parse errors)
// Strategy: repeatedly find syntax errors, extract the problem word,
// look back in the file for the surrounding 'phrase' pattern and fix it

let maxIterations = 20;
let iteration = 0;

while (iteration < maxIterations) {
  iteration++;

  // Test syntax
  let errorLine = null;
  let errorWord = null;
  try {
    new Function(content);
    console.log('Syntax OK after ' + iteration + ' iterations!');
    break;
  } catch(e) {
    // Extract word from error message like "Unexpected identifier '단어'"
    const wordMatch = e.message.match(/Unexpected identifier '(.+)'/);
    if (!wordMatch) {
      console.log('Unrecognized error: ' + e.message);
      break;
    }
    errorWord = wordMatch[1];

    // Find the line number from stack
    const lineMatch = e.stack.match(/<anonymous>:(\d+)/);
    if (!lineMatch) { console.log('No line number'); break; }
    errorLine = parseInt(lineMatch[1]);
  }

  console.log('Iteration ' + iteration + ': error word="' + errorWord + '" at line ' + errorLine);

  // Find all occurrences of ASCII_QUOTE + errorWord in the file
  // and look backward to find the start of the quoted phrase
  let searchPos = 0;
  let fixed = false;

  while (true) {
    // Find q + errorWord in content
    const pattern = q + errorWord;
    const pos = content.indexOf(pattern, searchPos);
    if (pos === -1) break;

    // Check if the char before q is a space, comma, or other non-quote
    // and the character before is NOT another quote (to avoid matching closing quotes)
    const charBefore = pos > 0 ? content.charCodeAt(pos-1) : 0;

    // Look forward from pos to find the closing ASCII quote
    // The phrase is from q to next q
    const closePos = content.indexOf(q, pos + 1);
    if (closePos === -1) { searchPos = pos + 1; continue; }

    const phrase = content.slice(pos + 1, closePos);

    // Sanity: phrase should not contain newlines or be very long
    if (phrase.includes('\n') || phrase.length > 50) { searchPos = pos + 1; continue; }

    // Check that this looks like a Korean quote (not a string delimiter)
    // A string delimiter would be at start of a value assignment
    // Look at context: if char before q is space/comma/other-letter, it's content
    if (charBefore === 0x20 || charBefore > 0x7F) { // space or non-ASCII
      const from = q + phrase + q;
      const to = lq + phrase + rq;
      console.log('  Fixing: ' + JSON.stringify(from) + ' -> curly quotes');
      content = content.slice(0, pos) + to + content.slice(closePos + 1);
      fixed = true;
      break;
    }

    searchPos = pos + 1;
  }

  if (!fixed) {
    console.log('Could not auto-fix. Error word: ' + errorWord);
    break;
  }
}

fs.writeFileSync('D:/수창/통찰유머감동/js/data.js', content, 'utf8');
console.log('Written to file.');

// Final check
try {
  new Function(content);
  console.log('FINAL: syntax OK');
} catch(e) {
  console.log('FINAL ERROR: ' + e.message);
}
