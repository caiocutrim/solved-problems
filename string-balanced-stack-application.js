// Write a function that returns true if the brackets in a given string are balanced. 
// The function must handle parens (), square brackets [], and curly braces {}.

// ### Notes

// * Solve for the problem.
// * Add any additional tests/conditions that you feel are missing from the list of tests.

// (a[0]+b[2c[6]]) {24 + 53} -> true
// f(e(d)) -> true
// [()]{}([]) -> true
// ((b) -> false
// (c] -> false
// {(a[]) -> false
// ([)] -> false
// )( -> false
// -> true
function checkIfIsBalancedString(str) {
  const len = str.length
  const stack = []
  const opennings = ['{', '[', '(']
  const closings = ['}', ']', ')']

  for(let i = 0; i < len; i++) {
    if(opennings.includes(str[i])) {

      stack.push(str[i])

    } else if (
        closings.includes(str[i])  && 
        validatePair(stack, str[i])
      ) {
      return false
    }
  }

  return stack.length === 0
}

function validatePair(stack, str) {
  return stack.length === 0 || isNotMatchingPair(stack, str)
}

function isNotMatchingPair(stack, str) { 
  let top = stack.pop()
  const pairs = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  return !(pairs[top] === str)
}
console.log(checkIfIsBalancedString('')) // true
console.log(checkIfIsBalancedString('{}')) // true
console.log(checkIfIsBalancedString('()')) // true
console.log(checkIfIsBalancedString('({)')) // false
console.log(checkIfIsBalancedString('({{}})')) // true 
console.log(checkIfIsBalancedString('({{})')) // false 
console.log(checkIfIsBalancedString('(){}'))// true
console.log(checkIfIsBalancedString('[(){}]')) // true
console.log(checkIfIsBalancedString('(a[0]+b[2c[6]]) {24 + 53}')) // true
console.log(checkIfIsBalancedString('f(e(d))')) // true
console.log(checkIfIsBalancedString('((b)')) // false
console.log(checkIfIsBalancedString('(c]')) // false
console.log(checkIfIsBalancedString('(8]')) // false
console.log(checkIfIsBalancedString('(]')) // false
console.log(checkIfIsBalancedString('([')) // false
console.log(checkIfIsBalancedString('({')) // false
console.log(checkIfIsBalancedString('[(){}[')) // false
console.log(checkIfIsBalancedString('()')) // true 