// it does not have comparison and
// works on numbers list
// it gets digits and according to it, put it in respective buckets
// the digits are counted from right to left of give number
// if the number has one digit, put on bucket 0, and then go on to the next number
// validate if has two digits, put on bucket 1
// list again the list and repeat the process
// for base 10 number, we have 10 buckets

function getDigit(number, index) {
  return Math.floor(Math.abs(number) / 10 ** index) % 10
}

function countDigit(number) {
  const countResult = Math.floor(Math.log10(Math.abs(number))) + 1
  return number === 1? number: countResult
}

function getMostDigits(numbers) {
  let maxDigits = 0
  for(let i = 0; i < numbers.length; i ++) {
    maxDigits = Math.max(maxDigits, countDigit(numbers[i]))
  }
  return maxDigits
}

// console.log(getDigit(1345, 1))
// console.log(getDigit(1345, 3))
// console.log(getDigit(-1345, 3))

// console.log(countDigit(1345)) // 4
// console.log(getMostDigits([0, 12, 1234])) //  4


function radixSort(numbers) {
  const maxDigitCount = getMostDigits(numbers)
  for(let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for(let i = 0; i < numbers.length; i ++) {
      let digit = getDigit(numbers[i], k)
      digitBuckets[digit].push(numbers[i])
    }
    numbers = [].concat(...digitBuckets)
  }
  return numbers
}


//  O(nk) n = numbers, k = length of numbers

console.log(radixSort([5,10,500,323,9883,443,130]))