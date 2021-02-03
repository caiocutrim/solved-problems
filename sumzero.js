// construir uma funcao que pega um array odernado, e retorna pares de valores 
// que se somados resultam zero


// versao beeh

// function sumZero(array) {
//   for (let i = 0; i < array.length; i ++) {
//     for (let j = 0; j < array.length;  j++) {
//       if (array[i] + array[j] === 0) {
//         return [array[i], array[j]]
//       }
//     }
//   }
// }

// versao com dois ponteiros
function sumZero(array) {
  let left = array[0]
  const lastIndex = array.length - 1
  let right = array[lastIndex]
  while(left < right) {
    let sum = array[left] + array[right]
    if (sum === 0) {
      return [array[left], array[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++ 
    }
  }
}
console.log(sumZero([-5, -2, 0, 1, 2, 3, 4]))