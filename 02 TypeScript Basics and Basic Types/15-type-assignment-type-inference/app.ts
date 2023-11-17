function add(n1: number, n2: number, showResult: boolean, phrase) {
  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result); // string + number = string
  } else {
    // return result;
    console.log(result);
  }
}

let number1: number; // assign the typescript type in variable
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: '; // typescript inferred that we want to store a string
resultPhrase = 5; // then we get an error in typescript that 5 not assignable of string (but in js, this is correctly)

add(number1, number2, printResult, resultPhrase);
