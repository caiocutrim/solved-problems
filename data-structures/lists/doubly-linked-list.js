class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const node = new Node(val)
    if(!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node 
      node.prev = this.tail
      this.tail = node
    }
    this.length++
    return this
  }

  pop() {
    if(!this.head) return
    let temp = this.tail
    if(this.length === 1) { 
      this.head = null
      this.tail = null 
    } else {
      this.tail = temp.prev
      this.tail.next = null
      temp.prev = null
    } 
    this.length--
    return temp
  }

  shift() {
    if(!this.head) return 
    let oldHead = this.head
    if(this.length === 1)  {
      this.head = null, this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }

  unshift(val) {
    const node = new Node(val)
    if(!this.head) {
      this.head = node
      this.tail = node
    }
    this.head.prev = node
    node.next = this.head
    this.head = node
    this.length++
    return this
  }

  get(index) {
    let current, count
    if(index < 0 || index >= this.length) return 
    if(index <= this.length / 2) {
      count = 0
      current = this.head
      while(count !== index) {
        current = current.next
        count++
      }
    } else {
      current = this.tail
      count = this.length - 1
      while(count !== index) {
        current = current.prev
        count--
      }
    }
    return current
  }

  set(index, val) {
    const node = this.get(index)
    if(!!node) {
      node.val = val
      return true
    }
    return false
  }

  insert(index, val) {
    if(index < 0 || index > this.length) return false
    if(index === 0) return !!this.unshift(val)
    if(index === this.length) return !!this.push(val)
    let node = new Node(val)
    let prevNode = this.get(index - 1)
    let nextNode = prevNode.next
    node.prev = prevNode, prevNode.next = node // patch connections
    node.next = nextNode, nextNode.prev = node // patch connections
    this.length++
    return true
  }

  remove(index) {
    if(index < 0 || index >= this.length) return
    if(index === 0) return this.shift()
    if(index === this.length - 1) return this.pop()
    let removedNode = this.get(index)
    removedNode.prev.next = removedNode.next
    removedNode.next.prev = removedNode.prev
    removedNode.prev = null
    removedNode.next = null
    this.length--
    return removedNode
  }
}


const list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.unshift(0)
list.unshift(-1)
console.log(list)

// doubly linked list vs array vs singly-linked list
// arrays ou arranjos são indexados, ou seja para um array de 5 elementos, a 0-4 indices
// remover um elemento posicionado no inicio do array ou proximo a isso, singnifica, percorrer
// todo o array até o ínicio, remover o elemento e reindexar os indices, imagine um array de 10 milhoes
// de elementos, o custo para isso pode é muito caro
// singly-linked-list:
// é uma lista com um ponteiro referenciando o proximo elemento
// nao eh indexada, pode ser usada para elementos não ordenados
// para remover um elemento custa menos que um array, por falta dos indices, nao precisamos reindexar
// usa menos memoria que doubly-linked-lists por ter apenas um ponteiro referenciando o proximo elemento
// para adicionar e remover elementos é necessario percorrer ate o elemento anterior e fazer o patch de referencia dos elementos
// doubly linked list é parecido com singly-linked-list, porem com dois ponteiros, isto é, referencia o elemento anterior da lista e o posterior
// sll e dll armazena os elementos em nodes que sao objetos
// dll sao mais faceis de lidar com insercao e delecao de elementos por causa da referencia dobrada 
// dll custam mais memoria em relacao a sll por causa da referenia dobrada
// eh um trade-off que pode valer a pena dependendo do cenario
