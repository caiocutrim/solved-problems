
function binarySearchRecursive(array, value) {
  // time complexity = O(log n)
  let mid = Math.floor(array.length / 2)
  if (array[mid] === value) {
    return 1
  }
  if (array[0] != value && array.length === 1) {
    return -1
  }

  if (value < array[mid]) {
    return binarySearchRecursive(array.slice(0, mid), value)
  }

  if (value > array[mid]) {
    return binarySearchRecursive(array.slice(mid), value)
  }
}

const createdArray = (size => {
  const array = []
  for (let i = 0; i < size; i ++) {
    array.push(i) 
  }
  return array
})(1000000)

console.log(binarySearchRecursive(createdArray, 90100))
console.log(binarySearchRecursive(createdArray, 10000001))