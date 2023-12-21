// decorator factory
function Logger(logString: string) {
  console.log('LOGGER FACTORY'); // A. the decorator factories here run earlier. runs first

  // decorator function
  return function (constractor: Function) {
    console.log('Rendering decorator function logger...');
    console.log(logString); // 2. LOGGING
    console.log(constractor); // 3 class Person {...}
  };
}

// decorator factory
function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY'); // B. the decorator factories here run earlier. runs second

  // decorator function
  return function (constractor: any) {
    console.log('Rendering decorator function template...');
    const hookEl = document.getElementById(hookId);
    const p = new constractor(); // 1. Creating person object... (refer to Person constructor())

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

// WithTemplate runs first, then Logger executes
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Saddam';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person(); // 4. Creating person object... (refer to Person constructor())
console.log(pers); // 5. Person { "name": "Saddam" }

/* Property Decorator */
function Log(target: any, propertyName: string | Symbol) {
  // target: any -> we use any because we don't know exactly which structure does object will have.
  // propertyName: string | Symbol -> that could be a string or could of course also be a Symbol we don't know what we use as a property identifier
  console.log('Property decorator!');
  console.log(target); // {constructor: ƒ, getPriceWithTax: ƒ}. We see here that's the prototype of our object because we're not seeing title and price here. But we do see getPriceWithTax() and indeed methods are registered on the prototype of an object.
  console.log(propertyName); // title. property name we're working with.
}

class Product {
  @Log // add Log decorator to property
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}

/*
  output:

  LOGGER FACTORY
  TEMPLATE FACTORY
  Rendering decorator function template...
  Creating person object...
  Rendering decorator function logger...
  LOGGING
  class Person {
    constructor() {
        this.name = 'Saddam';
        console.log('Creating person object...');
    }
  }
  Creating person object...
  Person {name: 'Saddam'}
  Property decorator!
  {constructor: ƒ, getPriceWithTax: ƒ}
  title
*/

/*
  Notes: 
  - We can add a decorator to a property. If we add a decorator to a property, the decorator receives two arguments. 
  - The first argument, is the target of the property and for an instance property, which we call on a instance if we 
    work with it. If we had a static property, target would refer to the constructor function state.
  - The second argument we get, is the property name simply. 
  - About Symbol: https://www.udemy.com/course/understanding-typescript/learn/lecture/16935722#questions/18123174
*/
