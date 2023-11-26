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
accounting.printEmployeeInformation();
