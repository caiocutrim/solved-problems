function insertionSort(array) {
  for(let i = 1; i < array.length; i++) {
    let current = array[i]
    let j = i - 1
    while(j >= 0 && array[j] > current) {
      // no swaps, just inserts
      array[j + 1]  = array[j] 
      j--
    }
    array[j+1] = current
  }
  console.log(array)
  return array
}
// [2,1,9,76,4]
// [1,1,9,76,4]
// [1,2,4,9,76]


insertionSort([2,1,9,76,4])
