/**
 * storing the results of a previous result
 * in a table (usually an array)
 * 
 * Usually done with interaction
 * 
 * Better space complexity can be achieved using tabulation
 */


function fib(n) {
  if (n <= 2) return 1

  const fibNums = [0, 1, 1]
  for(let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
  }
  return fibNums[n]
}


console.log(fib(100))