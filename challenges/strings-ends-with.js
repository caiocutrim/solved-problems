
// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).
const assert = require('assert');


assert.strictEqual(solution('abc', 'bc'), true) // returns true
assert.strictEqual(solution('abc', ''), true) // returns true
assert.strictEqual(solution('abc', 'd'), false) // returns false
assert.strictEqual(solution('cai', 'i'), true)
assert.strictEqual(solution('ninja', 'ja'), true)

function solution(str, ending) {
  let str1 = str.substr(str.length - ending.length)
  return str1 === ending
}