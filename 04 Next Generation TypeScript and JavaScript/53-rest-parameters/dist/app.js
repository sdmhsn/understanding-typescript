"use strict";
const add = (...numbers) => {
    // const add = (...numbers: [number, number, number, number]) => {
    return numbers.reduce((curResult, curValue) => curResult + curValue);
};
const addNumbers = add(5, 10, 2, 3.7);
console.log(addNumbers);
