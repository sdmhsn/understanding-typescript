"use strict";
/*Sample 1 (using OR operator: || in null or undefined data):
const userInput = null; // falsy data
const storeData = userInput || 'DEFAULT'; // null: false || 'DEFAULT': true = 'DEFAULT': true
console.log(storeData); // 'DEFAULT'
*/
/* Sample 2 (using OR operator: || in empty string data):
const userInput = ''; // empty string = falsy data
const storeData = userInput || 'DEFAULT'; // '': false || 'DEFAULT': true = 'DEFAULT': true
console.log(storeData); // 'DEFAULT'
*/
// Sample 3 (Nullish coalescing operator: ??):
const userInput = null; // null or undefined
const storeData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT'; // if userInput null or undefined, use 'DEFAULT'. and if not null or undefined, use the userInput value
console.log(storeData); // 'DEFAULT'
// const userInput = 'test'; // not null or undefined
// const storeData = userInput ?? 'DEFAULT';
// console.log(storeData); // 'test'
/*
  Notes:
  - nullish coalescing is a feature which helps us deal with nullish data.
  - nullish coalescing operator is using double question mark (??)

*/
