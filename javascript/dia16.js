// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

// const teste = "Rafael"
// const teste2 = 'y'

// console.log(teste.includes(teste2));

function concatenaSePertence(texto1, texto2) {
  if (texto1.includes(texto2)) {
    let concatenaInicio = `${texto2} ${texto1}`;
    return concatenaInicio;
  }
  let concatenaFim = `${texto1} ${texto2}`;
  return concatenaFim;
}

const resultado = concatenaSePertence("Rafael", "Ra");
const resultado2 = concatenaSePertence("Rafael", "Langoni");
console.log(resultado);
console.log(resultado2);
