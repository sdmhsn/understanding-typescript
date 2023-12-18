class Person {
  name = 'Saddam';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();
console.log(pers); // Person { "name": "Saddam" }
console.log(Person);
/*
output:
  Creating person object...
  Person {name: 'Saddam'}
  class Person {
    constructor() {
        this.name = 'Saddam';
        console.log('Creating person object...');
    }
  }
*/

/*
  Notes: 
  - Now decorators in general are all about classes, but this example is a decorator which we will add to the class as a whole.


*/
