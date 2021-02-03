
// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let minValue = 0
  let maxValue = 0

  arr = arr.sort()
  for(let i = 1; i < arr.length; i++) {
    maxValue += arr[i]
  }
  for(let i = 0; i < arr.length - 1; i++) {
    minValue += arr[i]
  }
  console.log(minValue, maxValue)
}

miniMaxSum([7,69,2,221,8974])
