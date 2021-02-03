function merge(arr1, arr2) {
   const results = []
   let i = 0
   let j = 0
   while(i < arr1.length && j < arr2.length) {
     if(arr2[j] > arr1[i]) {
       results.push(arr1[i])
       i++
     } else {
       results.push(arr2[j])
       j++
     }
   }
   while(i < arr1.length) {
     results.push(arr1[i])
     i++
   }
   while(j < arr2.length) {
     results.push(arr2[j])
     j++
   }
   return results
}


function mergeSort(array) {
  if(array.length <= 1) return array
  let mid = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, mid))
  let right = mergeSort(array.slice(mid))
  return merge(left, right)
}


console.log(mergeSort([2,1,4,3]))

// [2,1,4,3]=> slice
// [2,1][4,3] => slice one more 
// [2][1][4][3] => [left][right][left][right] (perfect!)
// merge([2],[1]) => [1,2] => left
// merge([4],[3]) => [3,4] => right
// [1,2] [3,4]
// merge([1,2][3,4]) => [1,2,3,4]