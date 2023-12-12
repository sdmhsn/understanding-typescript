"use strict";
/* Sample 1 */
function merge(objA, objB) {
    return Object.assign(objA, objB); // typescript error: This type parameter might need an `extends {}` constraint.
}
const mergedObj = merge({ name: 'saddam' }, { age: 30 });
console.log(mergedObj.age);
/*
  Notes:
  -
*/
