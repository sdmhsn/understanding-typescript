"use strict";
class Department {
    constructor(n) {
        this.employees = []; // store data employee. private means employees is now a property which is only accessible from inside the class
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
console.log(accounting.employees); // we can't access the private property (employess) anymore
accounting.employees[1] = 'Fuad'; // we can't modify the private property (employess) anymore
console.log(accounting);
accounting.printEmployeeInformation();
