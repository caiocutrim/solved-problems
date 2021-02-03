function bubleSort(array) {
  let counterSwaps = 0
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j ++) {
      noSwaps = true
      console.log(array, array[j], array[j + 1])
      if(array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        counterSwaps ++
        noSwaps = false
      }
    }
    console.log('one pass')
    if(noSwaps) break
  }
  console.log('total swaps =', counterSwaps)
  return array
}


console.log(bubleSort([3,2,5,6,7,8]))