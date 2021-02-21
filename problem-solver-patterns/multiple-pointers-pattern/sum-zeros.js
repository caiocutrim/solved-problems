// write a function called sumZero which accepts a sorted
// array of strings. The function should find the first pair
// where the sum is 0. Return an array that includes both
// values that sum to zero or undefined if a pair does not exist
// ex
// sumZero([-3,-2,-1,0,1,2,3]) --> [-3,3]
// sumZero([-2,0,1,3]) --> undefined 
// sumZero([1,2,3])  --> undefined


function sumZero(arr) {
  let firstPointer = 0
  let lastPointer = arr.length - 1
  while(firstPointer < lastPointer) {
    let sum =arr[firstPointer] + arr[lastPointer]
    if(sum === 0) {
      return [arr[firstPointer],arr[lastPointer]]
    } else if(sum > 0){
      lastPointer--
    } else {
      firstPointer++
    }
  }
}
console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([-2,0,1,3])) 
console.log(sumZero([1,2,3]))
console.log(sumZero([-1,0,1,2,3]))