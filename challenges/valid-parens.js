const Test = require('assert')



Test.strictEqual(isValidParens('()'), true)
Test.strictEqual(isValidParens('())'), false)
Test.strictEqual(isValidParens('[]'), false)


function isValidParens(parens) {
  const stack = []
  const oppenend = '('
  const parensObj = {
    '(':')'
  }
  for(let i = 0; i < parens.length; i++) {
    if(parens[i] === oppenend) {
      stack.push(parens[i])
    } else if(!(parensObj[stack.pop()] === parens[i])) {
      return false
    } 
  }
  return stack.length === 0
}




