"use strict";
// Sample 1 (Built in generics in array):
// const names: Array = []; // typescript error: Generic type 'Array<T>' requires 1 type argument(s)
// const names: Array<string | number> = ['Saddam', true]; // typescript error. generic type only able for string and number
// const names: Array<string> = ['Saddam', 2]; // typescript error. generic type is only for string
const names = [1, 'Saddam']; // array stored data with combined string and number type (string | number)[]
console.log(names);
// const names: Array<string> = ['Saddam', 'Rahmat', 'fuad husein']; // 100% same with string[]
// console.log(names[2].split(' '));
// Sample 2 (Built in generics in promise):
// Without generic type:
// const promise = new Promise((resolve, reject) => {
/*
  const promise: Promise<unknown> -> because TypeScript is not fully able to understand that we actually will
                                    resolve to a string here (resolve('This is done!')).
*/
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });
// Generic type:
const promise = new Promise((resolve, reject) => {
    /*
      const promise: Promise<number> -> the main type is promise, just like an array, it's kind of works together with other
                                        types as well.
    */
    setTimeout(() => {
        resolve(10); // number
    }, 2000);
});
promise.then((data) => {
    data.split(' '); // typescript error. this promise eventually will yield a number. property 'split' does not exist on type 'number'. we should change the promise to Promise<string>
});
/*
  Notes:
  - A generic type is a type which is kind of connected with some other type and is really flexible regarding which
    exact type that other type is.
  - A certain type in this case (names) above, the array type might simply work better or work at all if we provide an
    additional information about a type of data that's provided in this array type  and of course, the array type is
    just one example.
  - Another generic type which is built into TypeScript is the promise type. Promises are a JavaScript feature,
    it's not a TypeScript feature.
*/
