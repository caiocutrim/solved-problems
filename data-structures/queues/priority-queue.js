class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }

  dequeue() {
    return this.values.shift()
  }
}

module.exports = PriorityQueue