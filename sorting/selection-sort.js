function selectionSort(array) {
  for (let i = 0; i < array.length; i ++) {
    let lowest = i
    for (let j= i + 1; j < array.length; j ++) {
      console.log(i,j)
      if(array[j] < array[lowest]) {
        lowest = j
      }
      if(i !== lowest) {
        let temp = array[i]
        array[i] = array[lowest]
        array[lowest] = temp
      }
    }
  }
  return array
}

console.log(selectionSort([1,2,0,5,3]))