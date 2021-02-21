// Using divide and conquer problem solver, this is the classic binary search algorithm
// only works on an ordened input list
function binarySearch (array, value) {
  let start = array[0]
  let end = array.length - 1
  let middle = Math.floor((start + end) / 2)
  while (array[middle] !== value && start < end) {
    value < array[middle] ? end = middle - 1 : start = middle + 1
    middle = Math.floor((start + end) / 2)
  }

  return array[middle] === value ? middle + 1 : -1
}

console.log(binarySearch([0, 1, 2, 3], 3))
