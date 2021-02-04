const Test = require('assert')

Test.strictEqual(likes([]), 'no one likes this');
Test.strictEqual(likes(['Peter']), 'Peter likes this');
Test.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
Test.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
Test.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this')


function likes(peopleList) {

  let result = ''
  const isEmpty = peopleList.length === 0

  if (isEmpty) {
    return 'no one likes this'
  } 

  if(peopleList.length === 1) {
    return peopleList.pop() + ' likes this'
  }

  if (peopleList.length === 2) {
    const lastOne = peopleList.pop()
    result = peopleList.toString() + ' and ' + lastOne + ' like this'
    return result
  }

  if (peopleList.length === 3) {
    const lastOne = peopleList.pop()
    result = peopleList.toString().replace(/,*$/, () => ' and '+lastOne+ ' like this') 
    result = result.replace(/,/g, ', ')
    return result
  }

  if(peopleList.length > 3) {
    result = peopleList.splice(0, 2).toString().replace(/,/g, ', ') +' and '+ peopleList.length + ' others like this'
    return result
  }
}