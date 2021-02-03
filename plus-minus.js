function plusMinus(arr) {
 // positives
 let pos = 0
 // negatives
 let negs = 0
 // zeros 
 let zeros = 0
 // base <- array.length
 const base = arr.length

 // for each array element...do
 for (let i = 0; i < arr.length; i++) {
  // get ocurrences of positive, negatives and zeros
   let value =  arr[i]
   if (value > 0) {
     pos++
   } else if (value <  0) {
     negs++
   }
   else {
     zeros++
   }

 }
 console.log((pos/base).toFixed(6))
 console.log((negs/base).toFixed(6))
 console.log((zeros/base).toFixed(6))
}

plusMinus([5,0, 0, -1, 1, 1])