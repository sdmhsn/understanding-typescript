"use strict";
/* Sample1 (define the type of a function):
type addFn = (a: number, b: number) => number;

let add: addFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
*/
class Person {
    constructor(n) {
        this.age = 30; // age value inside
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
    add(n1, n2) {
        return n1 + n2;
    }
}
let user1; // we can use our interface as a type.
user1 = new Person('Saddam');
user1.greet('Hello there - I am');
console.log(user1.add(100, 1));
console.log(user1);
/*
  Note:
  - interfaces can also be used to define the structure of a function.
*/
