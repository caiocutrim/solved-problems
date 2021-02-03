// hash functions usam numeros primos para diminuir colisao
function hash(key, arrLength) {
  let total = 0
  const WEIRD_PRIME = 31  
  for(let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    // map a to 1, b to 2, c to 3 and go on
    let value =  char.charCodeAt(0) - 96 
    total = (total * WEIRD_PRIME + value) % arrLength
  }
  return total
}


// quando ocorrer colisao podemos usar duas estrategias de solucao:
// separate-chaining or linear-probing
// separate-chaining armazena no mesmo indice colidido
// linear-probing busca um novo indice a frente ou atras que se vazio, armazena o novo dado
// separate-chaining há dados aninhados
// linear-probing não há dados aninhados