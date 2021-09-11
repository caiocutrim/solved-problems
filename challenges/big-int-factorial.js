// eslint-disable

function extraLongFactorial(n) {
  let bigInt = BigInt(n);
  let factorial = 1n;
  for (let i = 0n; i < bigInt; i ++) {
    factorial *= bigInt - i
  }
  console.log(factorial.toString())
}


extraLongFactorial(25)