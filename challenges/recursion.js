// write a function that call it self


let i = 0
function callMyself(message = '') {
  if(i < 3) {
    i++
    console.log(message)
    return callMyself('year its, me')
  }
  return message
}

console.log(callMyself())


function count(start, end) {
  if(start < end){
    start++
    return count(start, end)
  }
  console.log(start)
  return
}

console.log(count(1, 5))