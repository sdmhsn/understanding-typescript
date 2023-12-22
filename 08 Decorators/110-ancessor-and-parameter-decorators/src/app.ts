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

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  // target: any -> if we're dealing with an instance accessor, or if we're dealing with a static one, it will be the constructor function so we don't know we will be of type any.

  console.log('Accessor decorator!');
  console.log(target);
  console.log(name); // name of our accessor (set price(val: number)), price in this case. Not _price
  console.log(descriptor); // descriptor of accessor (setter function defined)
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name); // name of our accessor (set price(val: number)), price in this case. Not _price
  console.log(descriptor); // descriptor of method
}

function Log4(target: any, name: string | Symbol, postion: number) {
  console.log('Parameter decorator!'); // we see our parameter decorator position over the method position, because execution order is different
  console.log(target);
  console.log(name); // name of our accessor (set price(val: number)), price in this case. Not _price
  console.log(postion); // 0. the index of that argument, and that starts at zero, so the first argument has a number of zero here, an index of zero
}

class Product {
  @Log // add Log decorator to property
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log2 // add Log2 to accessor (set price())
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  @Log3 // add Log3 to method (getPriceWithTax(tax: number))
  getPriceWithTax(@Log4 tax: number, ta2: number) {
    // add Log4 to parameter (tax: number)
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
  Accessor decorator!
  {constructor: ƒ, getPriceWithTax: ƒ}
  price
  {get: undefined, enumerable: false, configurable: true, set: ƒ}
  Parameter decorator!
  {constructor: ƒ, getPriceWithTax: ƒ}
  getPriceWithTax
  0
  Method decorator!
  {constructor: ƒ, getPriceWithTax: ƒ}
  getPriceWithTax
  {writable: true, enumerable: false, configurable: true, value: ƒ}
*/

/*
  Notes: 
  - We can also add decorators to accessors, method and parameter
*/
