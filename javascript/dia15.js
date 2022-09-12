// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false


function ehInteiro(numero){
    const num = parseInt(numero)
    if(num === numero){
        return true
    }
    return false
}

console.log(ehInteiro(10.48))