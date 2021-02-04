const Test = require('assert')

Test.strictEqual(solve("code"),"code");
Test.strictEqual(solve("CODe"),"CODE");
Test.strictEqual(solve("COde"),"code");
Test.strictEqual(solve("Code"),"code");
Test.strictEqual(solve("CoDe"),"code");
Test.strictEqual(solve("CoDE"),"CODE");
Test.strictEqual(solve("cODE"),"CODE");

function solve(s) {
  const upperCaseCount = (s.match(/[A-Z]/g) || []).length
  const lowerCaseCount = (s.match(/[a-z]/g) || []).length
  return upperCaseCount > lowerCaseCount ? s.toUpperCase() : s.toLowerCase()
}