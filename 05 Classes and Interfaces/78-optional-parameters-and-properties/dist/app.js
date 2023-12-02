"use strict";
class Person {
    // n? -> optional parameter in function
    constructor(n) {
        this.age = 30; // age value inside
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1; // we can use our interface as a type.
user1 = new Person(); // we could do this without passing in a name
user1.greet('Hello there - I am');
console.log(user1);
/*
  Note:
  - we can also define optional properties in interfaces and also in classes using question mark (?)
  - on these examples above, we mark the name property as optional property
*/
