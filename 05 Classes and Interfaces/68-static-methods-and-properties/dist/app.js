"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; // it's now not just available in this class, but also in any class that extends this class.
        // we don't have to initialize value of field in constructor
    }
    // static method
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log(`Department (${this.id}):  ${this.name}`);
    }
    addEmployee(employee) {
        // this.id = 'd2'; // typescript error. we can't modify the id readonly value, even inside the class. (e.g. constructor(private readonly id: string...))
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2023; // static property
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT'); // super() calls the constructor of the base class (Department). id from constructor ITDepartment passed to this super(). 'IT' is hard code a value for the name of Department class
        this.admins = admins; // un-shorthand initialization. when we want using the shorthand initialization, we should add private/public keyword before admins: string[] in ITDepartment constructor
    }
}
class AccountingDepartment extends Department {
    // private lastReport: string = ''; // when we don't want to use / initialize lastReport (this.lastReport = reports[0];) inside constructor
    // getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found!');
    }
    // setter
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReports(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name) {
        if (name === 'Saddam') {
            return;
        }
        this.employees.push(name); // So, now we can access employees from inside our accounting department (because the employees property on Department setted to protected)
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment('dd2', []);
accounting.addReports('Something went wrong...');
accounting.mostRecentReport = 'Year end report'; // setter
// accounting.mostRecentReport = ''; // setter error: Please pass in a valid value
// without any setter access -> error: No report found!
console.log(accounting.mostRecentReport); // getter
console.log(accounting);
// using static method and property
const employee1 = Department.createEmployee('Saddam');
console.log(employee1, Department.fiscalYear); // static method and property output
/*
  Note:
  - Static properties and methods allow we to add properties and methods to classes which are not accessed
    on an instance of the class, so where you don't need to call new class name first
    (e.g. const accounting = new AccountingDepartment('dd2', []);), but which we access directly on the class.
*/
