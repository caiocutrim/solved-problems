


// O(N²)
// function findIntersectionBetweenTwoArrays(arr1, arr2) {
//   const result = []
//   for(const elem1 of arr1) {
//     for(const elem2 of arr2) {
//       if(elem1 === elem2) {
//         result.push(elem1)
//       }
//     }
//   }

//   return result
// }

function findIntersectionBetweenTwoArrays(arr1, arr2) {
  const result = []
  // to apply a binary-search, the elements should be sorted
  const sortedArray = arr1.sort((a, b) => a - b)
  const array = arr2.sort((a,b) => a - b)


  for(const value of sortedArray) {
    let start = 0
    let end = array.length - 1
    while (start <= end) {
      let middle = Math.floor((start + end) / 2);

      if(array[middle] === value) {
        result.push(value)
        break;
      } else if (array[middle] < value) {
        start = middle + 1
      } else {
        end = middle - 1
      }  
    }

  }

  return result
}


let result = findIntersectionBetweenTwoArrays([1,3,4], [0,1,4,7,8])
console.log(result)
result = findIntersectionBetweenTwoArrays([1,3,4,12], [0,1,4,7,8])
console.log(result)
result = findIntersectionBetweenTwoArrays([5,3,3,4,2,1], [8,10,12,5,1,2])
console.log(result)