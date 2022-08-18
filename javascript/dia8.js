// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists

const objeto1 = {
  chave: "velho",
  id: 12345,
};

function verificaChaveNoObjeto(objeto, chave) {
  if (chave in objeto) {
    console.log("Contém chave");
  } else {
    console.log("Não contém chave");
  }
}

verificaChaveNoObjeto(objeto1, "id");
verificaChaveNoObjeto(objeto1, "nome");
