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
  return function <T extends { new (...args: any[]): { name: string } }>(
    // { name: string } -> name property in Person class
    originalConstructor: T
  ) {
    // console.log(originalConstructor); // class Person {...}

    // So here we can return a new function, a new constructor function, or simply return a new class, in the end
    return class extends originalConstructor {
      // because a class, the class keyword, allows us to use this syntactic sugar to create such a constructor function, and the class we create here doesn't need to have a name
      // so we are returning a constructor function, in the end, which is based on the original constructor function, so that we keep all the properties of our original class (Person), of our original constructor function,

      constructor(..._: any[]) {
        // we can change ...args in constructor() to an ..._ to tell typescript that we know we don't use it and that we wanna ignore this. This is a valid parameter name, it's just a special name which typescript takes as a we get it, we need to accept it, but we won't use it parameter.
        super();
        console.log('Rendering decorator function template...');
        const hookEl = document.getElementById(hookId);

        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
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

function AutoBind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log('Autobind decorator!');
  console.log(descriptor);

  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // get() default javascript method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
      // the getter (get()) basically is like having a value property with extra logic that runs before the value is returned.
      const boundFn = originalMethod.bind(this); // if we would remove the binding here in our getter and the decorator and we save that, we will see that if it is now reloads and we click Click me, we see undefined again.
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Print {
  message = 'Hello world';

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Print();
// p.showMessage();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage); // 'Hello world'

/*
  Notes: 
  - We can return something on Method Decorators, and that something should be a descriptor, which allows us 
    to change the method or change the configuration of the method.
  - So this is one neat example of how we can utilize decorators to build a quite amazing functionality and 
    save you the hassle of manually calling bind everywhere.
*/
