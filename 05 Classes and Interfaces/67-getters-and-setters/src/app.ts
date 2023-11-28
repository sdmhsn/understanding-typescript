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
  private lastReport: string;
  // private lastReport: string = ''; // when we don't want to use / initialize lastReport (this.lastReport = reports[0];) inside constructor

  // getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found!');
  }

  // setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReports(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Saddam') {
      return;
    }

    this.employees.push(name); // So, now we can access employees from inside our accounting department (because the employees property on Department setted to protected)
  }

  addReports(text: string) {
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

/*
  Note:
  - A getter is basically a property, where we execute a function or method, when we retrieve a value
    and that allows we as a developer to add more complex logic
  - A setter can use to set a value
  - both getter and setter are simply access like a property (e.g. console.log(accounting.mostRecentReport); and accounting.mostRecentReport = 'New Data';)
*/
