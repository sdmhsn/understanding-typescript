// decorator factory
function Logger(logString: string) {
  // returned decorator function using anonymous function which takes that constructor argument
  return function (constractor: Function) {
    console.log(logString);
    console.log(constractor);

    /*
    output:
      LOGGING - PERSON
      class Person {
        constructor() {
          this.name = 'Saddam';
          console.log('Creating person object...');
        }
      }
    */
  };
}

@Logger('LOGGING - PERSON') // pass a value for that in "logging - person" and use that inside of our decorator function
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
  LOGGING - PERSON
  class Person {
    constructor() {
      this.name = 'Saddam';
      console.log('Creating person object...');
    }
  }
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
  - We can also define a decorator factory, which basically returns a decorator function, but allows us to configure it when we 
    assign it as a decorator to something.
  - We can customize the values the decorator function uses when it executes with our factory function. We now call our decorator here,
    because we're not executing the decorator function, but we're executing a function that will return such a decorator function. 
    And the advantage to this is that we can now pass in values (e.g. 'LOGGING - PERSON') which will be used by that inner returned 
    decorator function.
  - Using decorator factories can give us more power and more possibilities of configuring what the decorator then does internally.
*/
