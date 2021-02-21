// write a function called same, which accepts two arrays.
// the function should return true if every vale in the array has it's corresponding value
// squared in the second array. The frequency of values must be the same
// --------------------------------
// ex 
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false 
// same([1,2,1], [4,4,1]) // false (must be same frequency)

function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }

  const frequencyCounterForArr1 = {}
  const frequencyCounterForArr2 = {}

  for(let val of arr1) {
    frequencyCounterForArr1[val] = (frequencyCounterForArr1[val] || 0) + 1
  }

  for(let val of arr2) {
    frequencyCounterForArr2[val] = (frequencyCounterForArr2[val] || 0) + 1
  }

  for(let key in frequencyCounterForArr1) {
    if (!(key ** 2 in frequencyCounterForArr2)) {
      return false
    }

    if(frequencyCounterForArr2[key ** 2] !== frequencyCounterForArr1[key]) {
      return false
    }
  }

  return true
}
console.log(same([1,2,3], [4,1,9]))
console.log(same([1,2,3], [1,9]))
console.log(same([1,2,1], [4,4,1]))