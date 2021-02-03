
// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).
const assert = require('assert');

function solution(str, ending) {
  return str.endsWith(ending)
}

function check(str, ending, expected) {
  const result = solution(str, ending)
  assert.strictEqual(result, expected, `Expected solution '(${str})', '${ending}' to return ${expected}`)
}


check("samurai", "ai", true)
check("sumo", "omo", false)
check("ninja", "ja", true)
check("sensei", "i", true)
check("samurai", "ra", false)
check("abc", "abcd", false)
check("abc", "abc", true)
check("abcabc", "bc", true)
check('ails', 'fails', false)
check('fails', 'ails', true)
check('this', 'fails', false)
check("abc", "", true)
check(":-)", ":-(", false)
check("!@#$%^&*() :-)", ":-)", true)