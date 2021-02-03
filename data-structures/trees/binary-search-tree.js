const Queue = require('../queues/queue')

class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
    this.left = null
    this.right = null
  }

  insert (value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let currentParent = this.root
    while (true) {
      // avoid infinity loop when inserting a same item into the tree
      if (value === currentParent.value) return
      if (value < currentParent.value) {
        if (!currentParent.left) {
          currentParent.left = newNode
          return this
        }
        currentParent = currentParent.left
      } else if (value > currentParent.value) {
        if (!currentParent.right) {
          currentParent.right = newNode
          return this
        }
        currentParent = currentParent.right
      }
    }
  }

  find (value) {
    if (!this.root) return
    if (this.root.value === value) return this.root

    let parent = this.root; let found = false

    while (parent && !found) {
      if (value > parent.value) {
        parent = parent.right
      } else if (value < parent.value) {
        parent = parent.left
      } else {
        found = true
      }
    }
    if (!found) return
    return parent
  }

  breadthSearchTree () {
    let node = this.root

    let data = []

    let queue = new Queue()
    queue.enqueue(node)
    while (queue.size) {
      node = queue.dequeue()
      data.push(node.value)
      if (node.left) queue.enqueue(node.left)
      if (node.right) queue.enqueue(node.right)
    }
    return data
  }

  deepthFirstSearchPreOrder () {
    const data = []
    function traverse (node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }

  deepthFirstSearchPostOrder () {
    const data = []
    function traverse (node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }

  deepthFirstSearchInOrder() {
    const data = []
    function traverse (node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}

/**
 *       10
 *     5    13
 *   2    12  14
 */
const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(2)
bst.insert(13)
bst.insert(12)
bst.insert(14)

console.log(bst.breadthSearchTree())
console.log(bst.deepthFirstSearchPreOrder())
console.log(bst.deepthFirstSearchPostOrder())
console.log(bst.deepthFirstSearchInOrder())
/**
 * trees: binary-trees, binary-search-trees
 * são estruturas de dados não lineares
 * podem ser atraversadas com breadth-first-search-tree e deepth-first-search-tree algoritmos
 * dfs tem três variantes in-order, post-order e pre-order
 * in-order: comumente usada em bst, preserva a ordem dos elementos na saida
 * pre-order: usado comumente para copiar a estrutura de uma tree
 * post-order: usado comumente para busca onde a ordem não importa, o numero de visita nos nodes 
 * eh menor em relacao a dfs
 *  */  