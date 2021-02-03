// estrutura de dados não linear
// usa vertices como nodes e edges como ligações entre vertices
// uma forma comum de armazenar dados de graphs é
// usando matrix adjacentes
// também tem o uso de adjancent list
// usarei adjancent list pq aplicações reais de graphs tendem a ser sparser-graphs



module.exports = class Graph {
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
    console.log(this.adjancencyList)
  }

  removeEdge(v1, v2) {
    if(this.adjancencyList[v1])
      this.adjancencyList[v1] = this.adjancencyList[v1].filter(v => v !== v2)
    if(this.adjancencyList[v2])
      this.adjancencyList[v2] = this.adjancencyList[v2].filter(v => v !== v1)

    console.log(this.adjancencyList)
  }

  removeVertex(vertex) {
    while(this.adjancencyList[vertex].length) {
      const adjacentVertex = this.adjancencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjancencyList[vertex]
  }
}
