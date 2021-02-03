function getAnagramIndexes(anagramList) {
  let anagramsObject  = {}
  let count = 1

  anagramsObject = update(anagramList, anagramsObject,  count)

  return Object.values(anagramsObject)
}

function update(anagramList, anagramsObject, count) {

  const updateObj = (key) => 
    isValidAnagramKey(key, anagramsObject) ? 
      anagramsObject[key].push(count++) : 
      anagramsObject[key] = [count++]

  for(let a of anagramList ) {
    const key = sortAnagram(a)
    updateObj(key)
  }


  return anagramsObject
}

function isValidAnagramKey(key, anagramsObject) {
 return anagramsObject[key] && anagramsObject[key] !== null
}

function sortAnagram(a) {
 return a.split('').sort().join('')
}



console.log(getAnagramIndexes(['cat', 'tca', 'act', 'dog', 'god', 'rat'])) 
// [ [ 1, 2, 3 ], [ 4, 5 ], [ 6 ] ]