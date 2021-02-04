const Test = require('assert')

Test.strictEqual(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
Test.strictEqual(pigIt('This is my string'),'hisTay siay ymay tringsay')
Test.strictEqual(pigIt('This is my string !'),'hisTay siay ymay tringsay !')

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('Pig latin is cool !'))
console.log(pigIt('Pig latin is cool ?'))

function pigIt(str) {
 const stringArr = str.split(' ')
  return stringArr
    .map(word => 
       word.match(/[A-z]/i)
        ? `${word.substr(1)}${word.substr(0, 1)}ay`
        : word
    )
    .join(' ')
}