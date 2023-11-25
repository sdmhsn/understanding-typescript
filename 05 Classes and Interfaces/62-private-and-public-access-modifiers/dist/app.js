"use strict";
class Department {
    constructor(n) {
        this.employees = []; // store data employee
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();
accounting.addEmployee('Saddam');
accounting.addEmployee('Rahmat');
console.log(accounting);
accounting.printEmployeeInformation();
