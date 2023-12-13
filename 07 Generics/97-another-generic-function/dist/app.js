"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'saddam', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
console.log(mergedObj.age);
/*
  Notes:
  -
*/
