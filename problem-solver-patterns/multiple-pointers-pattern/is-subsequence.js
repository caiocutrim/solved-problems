/**
 * Write a function called isSubsequence which takes in two strings and checks whether the 
 * chars iin the first string form a subsequence of the chars in the second string. In other words, the 
 * function should check whether the chars in the first string appear somewhere in the second string, without their order 
 * changing
 * ex: 
 * isSubsequence('hello', 'hello world'); // true
 */


function isSubsequence(subsequence, sequence) {
  let i = 0
  let j = 0
  if(!subsequence) return true
  while(j < sequence.length) {
    if(subsequence[i] === sequence[j]) {
      i++
    }

    if(i === subsequence.length) {
      return true
    }

    j++
  }
  return false
}

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('hello', 'hi world')) // false
console.log(isSubsequence('jane', 'jane doe')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true