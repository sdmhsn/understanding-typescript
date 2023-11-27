class Department {
  protected employees: string[] = []; // it's now not just available in this class, but also in any class that extends this class.

  constructor(private readonly id: string, public name: string) {
    // we don't have to initialize value of field in constructor
  }

  describe(this: Department) {
    console.log(`Department (${this.id}):  ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'd2'; // typescript error. we can't modify the id readonly value, even inside the class. (e.g. constructor(private readonly id: string...))
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[]; // we want to store admins in here (un-shorthand initialization)

  constructor(id: string, admins: string[]) {
    super(id, 'IT'); // super() calls the constructor of the base class (Department). id from constructor ITDepartment passed to this super(). 'IT' is hard code a value for the name of Department class
    this.admins = admins; // un-shorthand initialization. when we want using the shorthand initialization, we should add private/public keyword before admins: string[] in ITDepartment constructor
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(name: string) {
    if (name === 'Saddam') {
      return;
    }

    this.employees.push(name); // So, now we can access employees from inside our accounting department (because the employees property on Department setted to protected)
  }

  addReports(text: string) {
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
accounting.employees.push('Fitri'); // property 'employees' is protected and only accessible within class 'Department' and its subclasses.
console.log(accounting);

/*
  Note:
  - private property can't be changed from outside the class in which they're defined
  - we can switch it to protected. protected is like private, but unlike private, it's now not just available in 
    this class, but also in any class that extends this class.
*/
