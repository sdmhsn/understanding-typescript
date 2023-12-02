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
user1.name = 'Rahmat'; // typescript error. read-only modifier is inside interface
user1.greet('Hello there - I am');
console.log(user1);
/*
  Note:
  - inside of an interface we can also add the read-only modifier. by add read-only inside interface, it makes clear
    that this property in whatever object we built based on this interface must only be set once and is read-only
    thereafter so that it can't be changed after the object has been initialized.
  - we cannot add public or private or anything like that inside of an interface.
*/
