const Test = require('assert')

Test.strictEqual(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
Test.strictEqual(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");


function alphabetPosition(text) {
  return text.toLowerCase().split('')
    .filter(l => /[a-z]/.test(l))
    .map(l => l.charCodeAt() - 96)
    .join(' ')
}

// o(n2)