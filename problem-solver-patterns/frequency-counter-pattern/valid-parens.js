

// write a function that validates if parens are opened-closed correcty
// the function return a bollean
// ex
// validParens('') // true
// validParens('()') // true
// validParens('(') // false 
// validParens('((') // false 
// validParens('[]') // false, its only parens being validated , not brackets


function validParens(parens) {
  if(parens.length === 0) return true
  if(parens.length === 1 || parens[0] === '[') return false
  const { opened, closed } = getTotalMatchedParens(parens)
  return opened === closed
}

function getTotalMatchedParens(parens) {
  const counter = { opened: 0, closed: 0} 
  for(let i = 0; i < parens.length; i++) {
    if(parens[i] === '(') {
      counter.opened++
    } else {
      counter.closed++
    } 
  }
  return { opened: counter.opened, closed: counter.closed }
}

console.log(validParens(''))
console.log(validParens('()'))
console.log(validParens('(())'))
console.log(validParens('((()))'))
console.log(validParens('((([)))'))
console.log(validParens('[]'))
console.log(validParens('['))
console.log(validParens('('))
console.log(validParens('(('))