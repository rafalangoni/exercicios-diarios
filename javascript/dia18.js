let arrayNumerosSorteados = [];
const geraNumeros = (quantidadeDeNumeros) => {
  for (let i = 0; i < quantidadeDeNumeros; i++) {
    let numeroJaSorteado = 0;
    let numeroSorteado = 1 + parseInt(Math.random() * 60);

    if (numeroSorteado === numeroJaSorteado) {
      numeroSorteado = 1 + parseInt(Math.random() * 60);
      numeroJaSorteado = numeroSorteado;
    }

    arrayNumerosSorteados.push(numeroSorteado);
    arrayNumerosSorteados.sort((a, b) => a - b);
  }
  return arrayNumerosSorteados;
};

console.log(geraNumeros(6));
