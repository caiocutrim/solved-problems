const PriorityQueue = require('../queues/priority-queue.js')
class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) 
      this.adjacencyList[vertex] = []
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight })
    this.adjacencyList[v2].push({ node: v1, weight })
  }
  /**
   * let's do dijkstra's algorithm
   * 
   * finding the shortest path...
   * start, end are graph's vertex
   */
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let path = [] // to return at end
    let smallest

    // build up initial state
    for(let vertex in this.adjacencyList) {
      if(vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }

      previous[vertex] = null
    }
    // as long as there is something to visit
    while(nodes.values.length) {
      smallest = nodes.dequeue().val
      if(smallest === finish) {
        // We are done
        // build up path to return
        while(previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break;
      }

      if(smallest || distances[smallest] !== Infinity) {
        for(let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // calculate distance between two neighboring node
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if(candidate < distances[nextNode.node]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate
            // updating previous - now we got to neighbor
            previous[nextNeighbor] = smallest
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }

    return path.concat(smallest).reverse()
  }
}



const g = new WeightedGraph()


g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addVertex('G')

g.addEdge('A', 'B', 4)
g.addEdge('A', 'C', 2)
g.addEdge('B', 'E', 3)
g.addEdge('C', 'D', 2)
g.addEdge('C', 'F', 4)
g.addEdge('D', 'E', 3)
g.addEdge('D', 'F', 1)
g.addEdge('E', 'F', 1)

console.log(g.Dijkstra('A', 'E'))