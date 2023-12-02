"use strict";
class Person {
    constructor(n) {
        this.age = 30; // age value inside
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let user1; // we can use our interface as a type.
user1 = new Person('Saddam');
user1.name = 'Rahmat'; // typescript error. name in Named interface is read-only property
user1.greet('Hello there - I am');
console.log(user1);
/*
  Note:
  - we can also implement inheritance in interfaces.
*/
