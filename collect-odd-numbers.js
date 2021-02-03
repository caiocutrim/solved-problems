// using helper function
// function collectOddNumbers(numbers) {
//   const collection = []
//   function counterHelper(step) {
//     if (step === numbers.length) return
//     if (numbers[step] % 2 === 1) {
//       collection.push(numbers[step])
//     }
//     counterHelper(step += 1)
//   }
//   counterHelper(0)
//   return collection.toString()
// }

// pure recursion
function collectOddNumbers(numbers) {
  let newArray = []
  if(numbers.length === 0) {
    return newArray
  }

  if(numbers[0] % 2 !== 0) {
    newArray.push(numbers[0])
  }

  newArray = newArray.concat(collectOddNumbers(numbers.slice(1)))
  return newArray.toString()
}

console.log(collectOddNumbers([1, 2, 3, 4, 5]))