"use strict";
/* No error:
  const add = (a: number, b: number = 1) => {
    return a + b;
  };

  const printOutput: (myNum: string | number) => void = (output) =>
    console.log(output);

  printOutput(add(3));
*/
/* Error: */
const add = (a = 1, b) => {
    return a + b;
};
const printOutput = (output) => console.log(output);
printOutput(add(3));
/*
  Notes: make sure that the parameters for which you don't accept default arguments come
         first before your default parameters (default parameter should be the last position) e.g. const add = (a: number, b: number = 1) .
*/
