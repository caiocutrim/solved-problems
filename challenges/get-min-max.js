function getMinMax(array) {
  let min = array[0]
  let max = array[0]
  for(let i = 1; i < array.length; i ++) {
    if(array[i] < min) {
      min = array[i]
    } else if (array[i] > max) {
      max = array[i]
    }
  }
  return [min, max]
}


console.log(getMinMax([0, 5, 3, 2, 7, 10]))
