/**
 * write a function called sameFrequency. Given two positive integers, find out if the two numbers
 * have the same frequency digits
 * 
 */



function sameFrequency(num1, num2) {
  const numstr1 = num1.toString()
  const numstr2 = num2.toString()
  if (numstr1.length !== numstr2.length) {
    return false
  }

  const { counterNumStr1 } = getFrequencyOf(numstr1)
  const { counterNumStr2 } = getFrequencyOf(numstr2)

  for (let key in counterNumStr1) {
    if (counterNumStr1[key] !== counterNumStr2[key]) {
      return false
    }
  }

  return true
}

function getFrequencyOf(str) {
  const objectCounter = {}
  for (let val of str) {
    objectCounter[val] = (objectCounter[val] || 0) + 1
  }
  return objectCounter
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))