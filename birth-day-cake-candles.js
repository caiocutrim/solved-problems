
console.log(birthdayCakeCandles([3,2,1,3]))
console.log(birthdayCakeCandles([0,5,5,5,3,12]))
console.log(birthdayCakeCandles([0,3,3,5,5,2,2,1]))

function birthdayCakeCandles(candles) {
 let max = candles[0] 

 const highestCandles= []
 for (let i = 0; i < candles.length; i ++) {
   if (candles[i] > max) {
     max = candles[i]
   }
 }

 for(let i = 0; i < candles.length; i ++) {
   if(max === candles[i]) {
     highestCandles.push(candles[i])
   }
 }

 return highestCandles.toString()
}

