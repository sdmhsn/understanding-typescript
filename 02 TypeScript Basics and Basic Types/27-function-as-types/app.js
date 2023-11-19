function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
/* Sample 1 (using Function keyword to describe a function):
let combineValues: Function;
combineValues = add;
// combineValues = 5; typescript error because the combineValues define as Function
combineValues = printResult; // typescript will not complain, but we stored the wrong function in there

console.log(combineValues(8, 8));
*/
/* Sample 2: (using arrow function with some callback notation, to describe a function): */
var combineValues;
combineValues = add;
// combineValues = printResult; // typescript will complain bacause 'combinevalues' should accept any function that takes two parameters where each parameter is a number, and where the function overall then returns a number
console.log(combineValues(8, 8));
/*
  Notes:
  So function types, allow us to describe which type of function specifically we want to use somewhere.
  Be that an expected value in a parameter, for create a function with some call back, or a variable.
*/
