function plusMinus(arr) {
 let pos = 0
 let negs = 0
 let zeros = 0
 const base = arr.length

 for (let i = 0; i < arr.length; i++) {
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
