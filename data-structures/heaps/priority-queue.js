class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority 
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }

  bubbleUp() {
    let lastIndex = this.values.length - 1
    let element = this.values[lastIndex]
    while(lastIndex > 0) {
      let parentIndex = Math.floor((lastIndex - 1) / 2)
      let parent = this.values[parentIndex]
      if(element.priority <= parent.priority) break
      this.values[parentIndex] = element
      this.values[lastIndex] = parent
      lastIndex = parentIndex
    }
  }

  dequeue() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }

  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]

    while(true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if(leftChild.priority > element.priority) {
          swap = leftChildIdx
        }
      }

      if (rightChild < length) {
        rightChild = this.values[rightChildIdx]

        if(
            (!swap && rightChild.priority > element.priority) || 
            (swap && rightChild.priority > leftChild.priority)

          ) {
            
            swap = rightChildIdx

        }
      }

      if(!swap) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }

}


module.exports = PriorityQueue