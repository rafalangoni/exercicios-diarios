// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function calculo(num1, num2){
    let resultado=0;
    if(num1 < num2){
        resultado = num1 / num2
    }else if (num2 < num1){
        resultado = num1 * num2;
    }else{
        return false;
    }
    return resultado;
}

console.log(calculo(10,1))