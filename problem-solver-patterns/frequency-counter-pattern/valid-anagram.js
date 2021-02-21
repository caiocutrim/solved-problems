

function validAnagram (first, second) {
  if (first.length !== second.length) return false

  const lookup = {}

  for(let i = 0; i < first.length; i++) {
    let letter = first[i]
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for(let i = 0; i < second.length; i++) {
    let letter = second[i]
    if(!lookup[letter]) {
      return false
    } else {
      lookup[letter] - 1
    }
  }

  return true
}

console.log(validAnagram('ana', 'ana'))// true
console.log(validAnagram('anagram', 'nagaram'))// true
console.log(validAnagram('', '')) // true
console.log(validAnagram('qwerty', 'ytrewq')) // true
console.log(validAnagram('car', 'rat')) // false
