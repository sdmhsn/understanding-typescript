function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result); // string + number = string
    }
    else {
        // return result;
        console.log(result);
    }
}
var number1; // assign the typescript type in variable
number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: '; // typescript inferred that we want to store a string
resultPhrase = 5; // then we get an error in typescript that 5 not assignable of string (but in js, this is correctly)
add(number1, number2, printResult, resultPhrase);
