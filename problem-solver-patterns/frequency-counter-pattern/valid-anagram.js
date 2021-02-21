
validAnagram('ana', 'ana')// true
validAnagram('anagram', 'nagaram')// true
validAnagram('', '') // true
validAnagram('querty', 'qeywrt') // true
validAnagram('car', 'rat') // false

function validAnagram (str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    console.log(true)
    return true
  }

  if (str1.length !== str2.length) {
    return false
  }
  const str1ObjCounter = {}
  const str2ObjCounter = {}
  for (let chars of str1) {
    str1ObjCounter[chars] = (str1ObjCounter[chars] || 0) + 1
  }
  for (let chars of str2) {
    str2ObjCounter[chars] = (str2ObjCounter[chars] || 0) + 1
  }

  for (let key in str1ObjCounter) {
    if (str1ObjCounter[key] === str2ObjCounter[key]) {
      console.log(true)
      return true
    } else {
      console.log(false)
      return false
    }
  }
}
