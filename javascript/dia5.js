// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function retornaPosicaoCaractere(palavra, posicao) {
  return palavra[posicao];
}

console.log(retornaPosicaoCaractere("Rafael", 5));

/** */

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function retorna3PrimeirasPosicoes(array) {
  return array.slice(0,3);
}

const teste = [1,2,3,4,5]

console.log(retorna3PrimeirasPosicoes(teste))