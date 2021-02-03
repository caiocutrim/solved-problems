class Node {
  constructor(val) {
    this.val = val
    this.next = null 
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(element) {
    const node = new Node(element)
    if(!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length ++
    return this
  }

  pop() {
    if (!this.head) return 

    let current = this.head
    let temp = this.head.next
    while(temp.next !== null) {
      current = current.next
    }
    current.next = null 
    this.tail = current 
    this.length --
    if(this.length === 0) {
      this.head = null
      this.tail = null
    }
    return temp 
  }

  shift() {
    if(!this.head) return
    const currentHead = this.head
    this.head = currentHead.next
    this.length--
    if(this.length === 0) {
      this.tail = null
    }
    return currentHead
  }

  unshift(value) {
    const node = new Node(value)
    if(!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++
    return this
  }

  get(index) {
    if(index < 0 || index >= this.length) return null
    let counter = 0
    let current = this.head
    while(counter !== index) {
      current = current.next
      counter ++
    }
    return current
  }

  set(index, value) {
    const node = this.get(index)
    if(node) {
      node.value = value
      return true
    } 
    return false 
  }

  insert(index, value) {
    if(index < 0 || index >= this.length) return false
    if(index === 0) return !!this.unshift(value)
    if(index === this.length) return !!this.push(value)
    const newNode = new Node(value)
    const pre = this.get(index - 1)
    const temp = pre.next
    pre.next= newNode
    newNode.next = temp
    this.length++
    return true
  }

  remove(index) {
    if(index < 0 || index >= this.length) return
    if(index === 0) return this.shift()
    if(index === this.length - 1) return this.pop()
    const pre = this.get(index - 1)
    const removed = pre.next
    pre.next = removed.next
    return removed
  } 

  print() {
    const arr = []
    let current =  this.head
    while(current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null
    for(let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}
