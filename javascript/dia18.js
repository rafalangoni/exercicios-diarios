let arrayNumerosSorteados = [];
const geraNumeros = (quantidadeDeNumeros) => {
  for (let i = 0; i < quantidadeDeNumeros; i++) {
    let numeroJaSorteado = 0;
    let numeroSorteado = parseInt(Math.random() * 60);

    numeroJaSorteado = numeroSorteado;

    while (numeroJaSorteado == numeroSorteado) {
      numeroSorteado = parseInt(Math.random() * 60);
    }
    numeroJaSorteado = numeroSorteado;

    arrayNumerosSorteados.push(numeroSorteado);
    arrayNumerosSorteados.sort();
  }
  return arrayNumerosSorteados;
};

console.log(geraNumeros(6));
