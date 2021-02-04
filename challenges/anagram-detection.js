const Test = require('assert')
Test.strictEqual(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
Test.strictEqual(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
Test.strictEqual(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')

Test.strictEqual(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
Test.strictEqual(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
Test.strictEqual(isAnagram("apple", "pale"), false, 'Same letters, but different count')


function isAnagram(test, original) {
  if(test.length === 0 && original.length === 0) {
    return true
  }

  if(test.length !== original.length) {
    return false
  }

  test = test.toLowerCase()
  original = original.toLowerCase()

  const str1ObjCounter = {}
  const str2ObjCounter = {}

  for (let chars of test) {
    str1ObjCounter[chars] = (str1ObjCounter[chars] || 0) + 1
  }

  for (let chars of original) {
    str2ObjCounter[chars] = (str2ObjCounter[chars] || 0) + 1
  }

  for (let key in str1ObjCounter) {
    if (str1ObjCounter[key] === str2ObjCounter[key]) {
      return true
    } else {
      return false
    }
  }
}