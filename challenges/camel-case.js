const assert = require('assert');

assert.strictEqual(solution('camelCasing'), 'camel Casing', 'Unexpected result')
assert.strictEqual(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')

function solution(string) {
  return string.replace(/[A-Z]/g, c => ' '+c)
}