/**
 * write a function called, areThereDuplicates which accepts a variable number o arguments
 * and checks wheter there are any duplicates among the arguments passed in
 */



function areThereDuplicates() {
  // get all arguments puting into an array
  const args = Array.prototype.slice.call(arguments)

  return isThereDuplicateIn(getFrequencyOf(args))
}

function getFrequencyOf(args) {
  const counter = {}

  for(let value of args) {
    counter[value] = (counter[value] || 0) + 1
  }

  return counter
}

function isThereDuplicateIn(counter) {

  for(let key in counter) {
    if(counter[key] > 1) {
      return true
    }
  }

  return false
}


console.log(areThereDuplicates(1,2,2,4)) // true 
console.log(areThereDuplicates(1,2,3,4)) // false
console.log(areThereDuplicates('a','b','b','d')) // true
console.log(areThereDuplicates('a','b','c','d')) // false 
console.log(areThereDuplicates('ab','bd','cd','cd', 'cd')) // true 