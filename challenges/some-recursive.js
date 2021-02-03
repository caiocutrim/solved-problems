
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

const item = someRecursive([0, 2, 3, 4, 5], value => {
  return value > 0
})
console.log(item)

