// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function myFunction(a, b) {
  if (a === b) {
    console.log(true);
  } else {
    console.log(false);
  }
}
function myFunction2(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

console.log(myFunction2(2, "2"))  
console.log(myFunction2(2, 2))
