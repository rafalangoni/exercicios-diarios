// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor

const teste = {
  "prop-2": "prop1",
  nome: "nome1",
};

const teste2 = {
  "prop-2": "prop1",
  nome: "nome1",
};

teste["prop-2"];

function retornaProp2(objeto) {
  if (objeto["prop-2"] != null) {
    console.log("tem prop2");
  } else {
    console.log("não tem prop2");
  }
}
retornaProp2(teste);
retornaProp2(teste2);
