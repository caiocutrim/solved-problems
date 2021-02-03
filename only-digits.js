
function getOnlyDigits(cpf) {
  let onlyDigits = ''
  for(let i = 0; i < cpf.length; i ++) {
    if(cpf[i] !== '.' && cpf[i] !== '-') {
      onlyDigits += cpf[i]
    }
  }
  return onlyDigits 
}

console.log(getOnlyDigits('601.518.423-02'))