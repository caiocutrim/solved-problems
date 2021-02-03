function log(n) {
  for (let i = 1; i < n; i*=2) {
    const result = i;
    console.log(result);  
  }
}

// o(log n)
// sempre vai ser proporcional ao tamanho da entrada
// input/2
log(1000)