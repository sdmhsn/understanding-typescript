"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    return function (constractor) {
        console.log('Rendering decorator function template...');
        const hookEl = document.getElementById(hookId);
        const p = new constractor(); // 1. Creating person object... (refer to Person constructor())
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
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
*/
/*
  Notes:
  - We can add more than one decorator to a class, or anywhere else where you can use a decorator.
  - They execute bottom up. The bottom-most decorator first, then thereafter, the decorators above it.
    Such as example on above, WithTemplate runs first, then Logger executes.
  - And important, about the actual decorator functions, the decorator factories run earlier. You will see
    that there, actually the LOGGER FACTORY runs first, and then we got the TEMPLATE FACTORY. And that makes sense
    because in the end, even though we got this @ symbol here, here we're executing a function, And of course,
    regular JavaScript rules apply here and this function execution (@Logger('LOGGING')) happens before this
    function (@WithTemplate('<h1>My Person Object</h1>', 'app')) execution. Which is why we see the Logger Factory
    before we see Template Factory.
  - So the creation of our actual decorator functions happens in the order in which we specify these factory functions.
    But the execution of the actual decorator functions then happens bottom up. Which means the bottom-most decorator
    executes first, so this decorator function, and thereafter the decorator above that executes.
*/
