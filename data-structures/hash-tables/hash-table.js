// hash functions usam numeros primos para diminuir colisao
// quando ocorrer colisao podemos usar duas estrategias de solucao:
// separate-chaining or linear-probing
// separate-chaining armazena no mesmo indice colidido
// linear-probing busca um novo indice a frente ou atras que se vazio, armazena o novo dado
// separate-chaining há dados aninhados
// linear-probing não há dados aninhados

class HashTable {
  constructor(size=17) {
    this.keymap = new Array(size)
  }

  _hash(key) {
    let total = 0
    const WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i ++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keymap.length
    }
    return total
  }

  set(key, value) {
    let index = this._hash(key)
    if(!this.keymap[index]) {
      this.keymap[index] = []
    }
    this.keymap[index].push([key, value])
  }

  get(key) {
    let index = this._hash(key)
    if(this.keymap[index]) {
      for(let i = 0; i < this.keymap[index].length; i ++) {
        if(this.keymap[index][i][0] === key) {
          return this.keymap[index][i][1]
        }
      }
    }
    return
  }

  values() {
    let valuesArr = []
    for (let i = 0; i < this.keymap.length; i ++) {
      if(this.keymap[i]) {
        for(let j = 0; j < this.keymap[i].length; j++) {
          if(!valuesArr.includes(this.keymap[i][j][1])) {
            valuesArr.push(this.keymap[i][j][1])
          }
        }
      }
    }
    return valuesArr
  }

  keys() {
    let keysArr = []
    for (let i = 0; i < this.keymap.length; i ++) {
      if(this.keymap[i]) {
        for(let j = 0; j < this.keymap[i].length; j++) {
          if(!keysArr.includes(this.keymap[i][j][0])) {
            keysArr.push(this.keymap[i][j][0])
          }
        }
      }
    }
    return keysArr
  }
}


ht = new HashTable()
ht.set('wife', 'fabiane')
ht.set('friend', 'abraao')
ht.set('blue', '#09f')
ht.set('ocean', '#09f')
ht.set('sky', '#09f')
ht.set('white', '#FFFFFF')
console.log(ht.get('white'))
console.log(ht.get('friend'))
console.log(ht.get('blue'))
console.log(ht.get('wife'))
console.log(ht.values())
console.log(ht.keys())