class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

module.exports = class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    const node = new Node(val)
    if(!this.first) {
      this.first = node
      this.last = node
    } else {
      let temp = this.first
      this.first = node
      this.first.next = temp
    }
    return ++this.size 
  }

  pop() {
    if(!this.first) return null
    let temp = this.first
    if(this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.val
  }
}


// big o 
// search o(n)
// access o(n)
// push o(1)
// pop o(1)