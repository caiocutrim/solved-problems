function pivot(array, start=0, end=array.length-1) {
  function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
  }
  let pivot = array[start]
  let swapIndex = start
  for(let i = start + 1; i <= end; i++) {
    if(pivot > array[i]) {
      swapIndex++
      swap(array, swapIndex, i)
    }
  }
  swap(array, start, swapIndex)
  return swapIndex
}


// pivot([1,5,3,2,0,7])

function quickSort(array, left=0, right=array.length-1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right)
    // left
    quickSort(array,left,pivotIndex-1)
    // right
    quickSort(array,pivotIndex+1,right)
  }
  return array
}

console.log(quickSort([4,6,9,1,2,5,3]))