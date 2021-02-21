/**
 * write a function called sameFrequency. Given two positive integers, find out if the two numbers
 * have the same frequency digits
 * 
 */



function sameFrequency(num1, num2) {
  const numstr1 = num1.toString()
  const numstr2 = num2.toString()
  if(numstr1.length !== numstr2.length) {
    return false
  }
  const counterNumStr1 = {}
  const counterNumStr2 = {}
  for (let val of numstr1) {
    counterNumStr1[val] = (counterNumStr1[val] || 0) + 1
  }

  for (let val of numstr2) {
    counterNumStr2[val] = (counterNumStr2[val] || 0) + 1
  }
  for(let key in counterNumStr1) {
    if(counterNumStr1[key] !== counterNumStr2[key]) {
      return false
    }
  }

  return true
 }


 console.log(sameFrequency(182, 281))
 console.log(sameFrequency(34, 14))
 console.log(sameFrequency(3589578, 5879385))
 console.log(sameFrequency(22, 222))