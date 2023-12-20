"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorator factory
function Logger(logString) {
    // returned decorator function using anonymous function which takes that constructor argument
    return function (constractor) {
        console.log(logString);
        console.log(constractor);
    };
}
// decorator factory
function WithTemplate(template, hookId) {
    // decorator function
    return function (constractor) {
        // We convert this to any (constractor: any), so the typescript allows this and doesn't think it's a normal function.
        // console.log(constractor);
        const hookEl = document.getElementById(hookId); // no typescript error. no need to add exclamation mark (!), because hookEl constant used inside the if statement
        const p = new constractor(); // we can create a new person here, by calling our constructor, because that is our constructor: Function here, after all.
        // if HookEl is a thing that exists
        if (hookEl) {
            hookEl.innerHTML = template; //
            hookEl.querySelector('h1').textContent = p.name; // the querySelector() should add the exclamation mark (!) to assuming that we always find an h1 element. p.name = 'Saddam'
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Saddam';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    WithTemplate('<h1>My Person Object</h1>', 'app') // 'app': ID assigned to the div in index.html
], Person);
const pers = new Person();
console.log(pers); // Person { "name": "Saddam" }
/*
  Notes:
  -
*/
