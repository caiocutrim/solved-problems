// estrutura de dados não linear
// usa vertices como nodes e edges como ligações entre vertices
// uma forma comum de armazenar dados de graphs é
// usando matrix adjacentes
// também tem o uso de adjancent list
// usarei adjancent list pq aplicações reais de graphs tendem a ser sparser-graphs


class Graph {
  constructor() {
    this.adjancencyList = {}
  }

  addVertex(vertex) {
    if(!this.adjancencyList[vertex])
      this.adjancencyList[vertex] = []
  }

  addEdge(v1, v2) {
    if(this.adjancencyList[v1])
      this.adjancencyList[v1].push(v2)
    if(this.adjancencyList[v2])
      this.adjancencyList[v2].push(v1)
  }

  removeEdge(v1, v2) {
    if(this.adjancencyList[v1])
      this.adjancencyList[v1] = this.adjancencyList[v1].filter(v => v !== v2)
    if(this.adjancencyList[v2])
      this.adjancencyList[v2] = this.adjancencyList[v2].filter(v => v !== v1)

  }

  removeVertex(vertex) {
    while(this.adjancencyList[vertex].length) {
      const adjacentVertex = this.adjancencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjancencyList[vertex]
  }

  deepthFirstSearchInterative(start) {
    const stack = [start]
    const result = []
    const visited = {}
    let currentVertex

    visited[start] = true
    while(stack.length) {
    currentVertex = stack.pop()
      console.log(stack)
      result.push(currentVertex)

      this.adjancencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return result
  }
}

const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

console.log(g.deepthFirstSearchInterative('A'))

