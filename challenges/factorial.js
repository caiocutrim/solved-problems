

// linear form

// function factorial(number) {
//   let total = 1
//   for (let i = number; i > 1; i --) {
//     total *= i
//   }
//   return total
// }

function factorial(number) {
  if(number === 1)  return 1 
  return factorial(number - 1) * number
}

factorial(3)