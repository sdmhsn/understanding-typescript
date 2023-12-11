"use strict";
/*  Sample 1 (problem):
function merge(objA: object, objB: object) {
  return Object.assign(objA, objB); // Object.assign() built in method in javascript
}

// console.log(merges({ name: 'saddam' }, { age: 30 })); // { "name": "saddam", "age": 30 }

const mergedObj = merge({ name: 'saddam' }, { age: 30 });
console.log(mergedObj.age); // typescript error. we can't access age or name. the properties doesn't exist on object. typescript can't know this.
*/
/* Sample 2 (generic function) */
function merge(objA, objB) {
    /*
      - So here, generics can help us. We turn this into a generic function by adding these angled brackets after the function name. And then we define Q identifiers e.g. <T, U>.
        Typically you start with T, for type. But we could use any identifier here, doesn't have to be a single character but the convention is to use a single character and
        typically, if we only have one generic type we name this T.
      - This is now available inside of this function parameter. So we could say what we get here is of type T in objA: T and type U in objB: U.
    */
    return Object.assign(objA, objB); // typescript error: This type parameter might need an `extends {}` constraint. explains in the next lecture (96. Working with constraints)
}
const mergedObj = merge({ name: 'saddam' }, { age: 30 });
console.log(mergedObj.age);
/*
  Notes:
  - get started with our own generics. we can build generic classes and functions
  - With generic types, what we're telling typescript is that, these two parameters (objA and objB) can and often will be of different types and therefor typescript is able to
    understand that we're not just working with some random object type, but that we will get different type data here. And that this function overall will return
    the intersection of that data. And therefor typescript is able to understand that what we store in here in merged object is such intersect the data of these two
    inputs. Because now we're not just dealing with some unknown objects here but with very specific types. And therefor now if we console log merged object age here
    this works without errors.
  - to solve "This type parameter might need an `extends {}` constraint" error:
    https://www.udemy.com/course/understanding-typescript/learn/lecture/16894048#questions/17636910
*/
