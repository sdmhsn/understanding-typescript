// decorator
function Logger(constractor: Function) {
  console.log('Logging...');
  console.log(constractor);
  // console.log(constractor.name); // class name

  /*
    output:
    Logging...
    class Person {
      constructor() {
        this.name = 'Saddam';
        console.log('Creating person object...');
      }
    }
  */
}

@Logger // add decorator to Person class. 'Logger' accepts too few arguments to be used as a decorator here (e.g. function Logger(constractor: Function) )
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
  Logging...
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
  - Now decorators in general are all about classes, but this example is a decorator which we will add to the class as a whole.
  - A decorator is in the end just a function. A function we apply to something, for example, to a class in a certain way.
  - The decorator start with a capital character (e.g. Logger). This is not a must do by the way, we don't have to use a capital 
    starting character, we can use a lowercase one as well, we just see a lot of decorators out there in libraries which we might 
    use that use uppercase starting characters
  - We use @ symbonl to add a decorator to the class. The @ symbol here is a special identifier TypeScript sees or recognizes.
    And then the thing directly after the @ symbol should point at a function. Not execute it, but point at it, which should be our 
    decorator.
  - The 'Logger' accepts too few arguments to be used as a decorator. And indeed, decorators receive arguments. How many arguments 
    depends on where we use the decorator. For the example above, we can name the argument is 'constructor', because in the end we 
    will get our constructor function of this class, or whichever class we add this decorator to as a argument.
  - Please also note that our decorator output, Logging, and this class or this constructor function log here is printed first, before 
    we see Creating person object and our Person object class. Because, indeed, decorators and that's really important, decorators 
    execute when your class is defined. Not when it is instantiated. We could remove that code for instantiating the class, and we 
    would still get that decorator output.
  - So the decorator runs when JavaScript finds our class definition, our constructor function definition. Not when we use that 
    constructor function to instantiate an object.
*/
