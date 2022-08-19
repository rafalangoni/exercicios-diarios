// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const arrayTeste = [1,2,3,4,5,6]

function retornaElementosArray(array){
    return array.slice(0,3)
}

console.log(retornaElementosArray(arrayTeste))