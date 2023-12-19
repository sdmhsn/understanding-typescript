// decorator factory
function Logger(logString: string) {
  // returned decorator function using anonymous function which takes that constructor argument
  return function (constractor: Function) {
    console.log(logString);
    console.log(constractor);
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
  Notes: 
  - 
*/
