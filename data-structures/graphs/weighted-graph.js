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
}



const g = new WeightedGraph()


g.addVertex('A')
g.addVertex('B')
g.addVertex('C')

g.addEdge('A', 'B', 10)
g.addEdge('A', 'C', 5)

/**
 * let do dijtrak's algorithm
 * 
 * finding the shortest path...
 */