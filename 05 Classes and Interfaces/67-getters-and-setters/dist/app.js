"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; // it's now not just available in this class, but also in any class that extends this class.
        // we don't have to initialize value of field in constructor
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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT'); // super() calls the constructor of the base class (Department). id from constructor ITDepartment passed to this super(). 'IT' is hard code a value for the name of Department class
        this.admins = admins; // un-shorthand initialization. when we want using the shorthand initialization, we should add private/public keyword before admins: string[] in ITDepartment constructor
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'Saddam') {
            return;
        }
        this.employees.push(name); // So, now we can access employees from inside our accounting department (because the employees property on Department setted to protected)
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('dd1', ['Saddam']); // instantiate id and admins to ITDepartment (constructor(id: string, admins: string[]))
it.name = 'NEW NAME'; // change the ITDepartment property name, through the base class (Department) property name
it.describe(); // we can also use the base class (Department) method through the ITDepartment class
it.addEmployee('Rahmat');
it.addEmployee('Fuad');
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment('dd2', []);
accounting.addReports('Something went wrong...');
accounting.printReports();
accounting.addEmployee('Fitri');
accounting.printEmployeeInformation();
console.log(accounting);
/*
  Note:
  - private property can't be changed from outside the class in which they're defined
  - we can switch it to protected. protected is like private, but unlike private, it's now not just available in
    this class, but also in any class that extends this class.
*/
