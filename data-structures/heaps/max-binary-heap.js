// heaps são trees com algumas restrições diferentes
// childs de heaps nao tem relacao como de binary-search-trees
// para max heaps,o parent sempre tera valor maior que o child
// heaps are non-linear-data-structure

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(value) {
    this.values.push(value)
    this.bubbleUp()
  }

  bubbleUp() {
    let lastIndex = this.values.length - 1
    let element = this.values[lastIndex]
    while(lastIndex > 0) {
      let parentIndex = Math.floor((lastIndex - 1) / 2)
      let parent = this.values[parentIndex]
      if(element <= parent) break
      this.values[parentIndex] = element
      this.values[lastIndex] = parent
      lastIndex = parentIndex
    }
  }
  
  extractMax() {
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
        if(leftChild > element) {
          swap = leftChildIdx
        }
      }

      if (rightChild < length) {
        rightChild = this.values[rightChildIdx]

        if(
            (!swap && rightChild > element) || 
            (swap && rightChild > leftChild)

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

heap = new MaxBinaryHeap()
// [41,39,33,18,27,12,55]

// [41,39,33,18,27,12,55]
// [41,39,55,18,27,12,33]
// [55,39,41,18,27,12,33]
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
console.log(heap.values)
// console.log(heap.extractMax())
// console.log(heap.values)
// console.log(heap.extractMax())
// console.log(heap.values)
