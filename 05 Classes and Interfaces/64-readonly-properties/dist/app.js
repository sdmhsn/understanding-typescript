"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // public name: string;
        this.employees = [];
        // we don't have to initialize value of field in constructor
        // this.id = id;
        // this.name = n;
    }
    describe() {
        console.log(`Department (${this.id}):  ${this.name}`);
    }
    addEmployee(employee) {
        this.id = 'd2'; // typescript error. we can't modify the id value, even inside the class. (e.g. constructor(private readonly id: string...))
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('d1', 'Accounting'); // instantiate id, name to accounting object
accounting.describe();
accounting.addEmployee('Saddam');
accounting.addEmployee('Rahmat');
console.log(accounting);
accounting.printEmployeeInformation();
/*
  Note:
  - Let's say we have certain fields, which should not just be private or public, they also shouldn't change after their initialization.
    For example, the id should not change thereafter. To make it clear that it shouldn't change, you can add readonly to the constructor
    parameter as well. e.g. constructor(private readonly id: string, public name: string)
  - The readonly keyword, just like private and public, is introduced by TypeScript, it does not exist in JavaScript.
*/
