const assert = require('assert');

assert.strictEqual(solution('camelCasing'), 'camel Casing')
assert.strictEqual(solution('camelCasingTest'), 'camel Casing Test')

function solution(string) {
  return addSpaceBeforeUpperCased(string)
}

function addSpaceBeforeUpperCased(string) {
  return string.replace(/[A-Z]/g, c => ` ${c}`)
}