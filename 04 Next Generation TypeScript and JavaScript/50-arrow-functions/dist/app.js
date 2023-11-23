"use strict";
const add = (a, b) => {
    return a + b;
};
// const printOutput = (output: string | number) => console.log(output);
/* But now, since we only have one argument, we can even omit the parentheses around that argument.
  However with that type assignment, it will then not work.
*/
// const printOutput = (output) => console.log(output); // vanilla js
const printOutput = (output) => console.log(output); // typescript
printOutput(add(2, 5));
