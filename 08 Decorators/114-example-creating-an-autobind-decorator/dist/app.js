"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// decorator factory
function Logger(logString) {
    console.log('LOGGER FACTORY'); // A. the decorator factories here run earlier. runs first
    // decorator function
    return function (constractor) {
        console.log('Rendering decorator function logger...');
        console.log(logString); // 2. LOGGING
        console.log(constractor); // 3 class Person {...}
    };
}
// decorator factory
function WithTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY'); // B. the decorator factories here run earlier. runs second
    // decorator function
    return function (
    // { name: string } -> name property in Person class
    originalConstructor) {
        // console.log(originalConstructor); // class Person {...}
        // So here we can return a new function, a new constructor function, or simply return a new class, in the end
        return class extends originalConstructor {
            // because a class, the class keyword, allows us to use this syntactic sugar to create such a constructor function, and the class we create here doesn't need to have a name
            // so we are returning a constructor function, in the end, which is based on the original constructor function, so that we keep all the properties of our original class (Person), of our original constructor function,
            constructor(..._) {
                // we can change ...args in constructor() to an ..._ to tell typescript that we know we don't use it and that we wanna ignore this. This is a valid parameter name, it's just a special name which typescript takes as a we get it, we need to accept it, but we won't use it parameter.
                super();
                console.log('Rendering decorator function template...');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
// WithTemplate runs first, then Logger executes
let Person = class Person {
    constructor() {
        this.name = 'Saddam';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger('LOGGING'),
    WithTemplate('<h1>My Person Object</h1>', 'app')
], Person);
const pers = new Person(); // 4. Creating person object... (refer to Person constructor())
console.log(pers); // 5. Person { "name": "Saddam" }
/* Property Decorator */
function Log(target, propertyName) {
    // target: any -> we use any because we don't know exactly which structure does object will have.
    // propertyName: string | Symbol -> that could be a string or could of course also be a Symbol we don't know what we use as a property identifier
    console.log('Property decorator!');
    console.log(target); // {constructor: ƒ, getPriceWithTax: ƒ}. We see here that's the prototype of our object because we're not seeing title and price here. But we do see getPriceWithTax() and indeed methods are registered on the prototype of an object.
    console.log(propertyName); // title. property name we're working with.
}
function Log2(target, name, descriptor) {
    // target: any -> if we're dealing with an instance accessor, or if we're dealing with a static one, it will be the constructor function so we don't know we will be of type any.
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name); // name of our accessor (set price(val: number)), price in this case. Not _price
    console.log(descriptor); // descriptor of accessor (setter function defined)
}
function Log3(target, name, descriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name); // name of our accessor (set price(val: number)), price in this case. Not _price
    console.log(descriptor); // descriptor of method
}
function Log4(target, name, postion) {
    console.log('Parameter decorator!'); // we see our parameter decorator position over the method position, because execution order is different
    console.log(target);
    console.log(name); // name of our accessor (set price(val: number)), price in this case. Not _price
    console.log(postion); // 0. the index of that argument, and that starts at zero, so the first argument has a number of zero here, an index of zero
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - should be positive!');
        }
    }
    getPriceWithTax(tax, ta2) {
        // add Log4 to parameter (tax: number)
        return this.price * (1 + tax);
    }
}
__decorate([
    Log // add Log decorator to property
], Product.prototype, "title", void 0);
__decorate([
    Log2 // add Log2 to accessor (set price())
], Product.prototype, "price", null);
__decorate([
    Log3 // add Log3 to method (getPriceWithTax(tax: number))
    ,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
class Print {
    constructor() {
        this.message = 'Hello world';
    }
    // binding using arrow function (my experiment):
    // showMessage = () => {
    //   console.log(this.message);
    // };
    showMessage() {
        console.log(this.message);
    }
}
const p = new Print();
// p.showMessage();
const button = document.querySelector('button');
// button.addEventListener('click', p.showMessage);
// button.addEventListener('click', p.showMessage); // undefined
button.addEventListener('click', p.showMessage.bind(p)); // 'Hello world'
/*
  Notes:
  - We can return something on Method Decorators, and that something should be a descriptor, which allows us
    to change the method or change the configuration of the method.
*/
