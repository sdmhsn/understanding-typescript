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
    // override the base class (Department) describe method
    describe() {
        console.log(`IT - Department ID: ${this.id}`); // id extends from id protected readonly property in base class (Department). we only can read the readonly property, but we can't modify the value of its property
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
    // override the base class (Department) describe method
    describe() {
        console.log(`Accounting - Department ID: ${this.id}`); // id extends from id protected readonly property in base class (Department). we only can read the readonly property, but we can't modify the value of its property
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
// we can't instantiate Department now because the Department class marked as abstract:
// const department = new Department('d1', 'Department'); // typescript error: Cannot create an instance of an abstract class.
// department.describe();
const accounting = new AccountingDepartment('dd2', []);
accounting.describe(); // access the override methods
const it = new ITDepartment('dd1', ['Saddam']);
it.describe();
/*
  Note:
  - Sometimes we don't just want to offer the option of overriding a method because that always exists.
    we instead want to force the developers working with a certain class or extending a certain class
    to implement a certain method or to override a certain method.
  - When would we do that? Well, whenever we wanna ensure that a certain method is available in all classes
    based on some base class in this case Department.
  - Abstract can therefore be very useful if we wanna enforce that all classes based on some other class, share some
    common method or property, we can also have abstract properties. But at the same time, we wanna make sure that
    we don't have to provide the concrete value, the concrete implementation in the base class, but instead, the
    inheriting class has to do that.
  - Now, however, we get an error in the IT Department because it does not implement the inherited abstract member
    describe, which means, we don't offer the describe method here. And we do have to do that because we're based
    on the Department class, which is abstract, and which has such abstract method. Which means this method has to be
    implemented by any class based on this Department class.
*/
