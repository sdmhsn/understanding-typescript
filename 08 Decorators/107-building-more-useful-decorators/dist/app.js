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
let Person = class Person {
    constructor() {
        this.name = 'Saddam';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger('LOGGING - PERSON') // pass a value for that in "logging - person" and use that inside of our decorator function
], Person);
const pers = new Person();
console.log(pers); // Person { "name": "Saddam" }
console.log(Person);
/*
  Notes:
  -
*/
