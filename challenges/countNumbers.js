// implementar uma funcao que calcula
// o numbero de ocorrencia de numberos unicos
// em um determidado array ordenado


function sumNumbers(array) {
  let i = 0
  for(let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++
      array[i] = array[j]
    }
    console.log(i, j)
  }
  return i + 1 
}


console.log(sumNumbers([-1, 1, 1, 2, 3, 3])) // 4

//            i
// [-1, 1, 2, 3, 3, 3]
//                  j
// the last step of the loop