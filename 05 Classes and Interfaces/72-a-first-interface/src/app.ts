abstract class Department {
  static fiscalYear = 2023; // static property
  protected employees: string[] = []; // it's now not just available in this class, but also in any class that extends this class.

  constructor(protected readonly id: string, public name: string) {
    // we don't have to initialize value of field in constructor
  }

  // static method
  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  // override the base class (Department) describe method
  describe() {
    console.log(`IT - Department ID: ${this.id}`); // id extends from id protected readonly property in base class (Department). we only can read the readonly property, but we can't modify the value of its property
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment; // there we'll store an AccountingDepartment instance.

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

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('dd2', []); // access the private constructor
    return this.instance;
  }

  // override the base class (Department) describe method
  describe() {
    console.log(`Accounting - Department ID: ${this.id}`); // id extends from id protected readonly property in base class (Department). we only can read the readonly property, but we can't modify the value of its property
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

// Here wegetting an error because the constructor is private:
// const accounting = new AccountingDepartment('dd2', []);
// accounting.describe(); // access the override methods

// if we wanna work with the AccountingDepartment,
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance(); // if we do this again, we will get the same instance as we will see in console log
console.log(accounting, accounting2); // we will see that the two should be exactly equal (same instance)

/*
  Note:
  - The singleton pattern is about ensuring that we always only have exactly one instance of a certain class.
    This can be useful in scenarios where we somehow can't use static methods or properties or we don't want to, 
    but at the same time we want to make sure that you can't create multiple objects based on a class but that we 
    always have exactly one object based on a class
  - Let's say for our AccountingDepartment we wanna make sure that we can only create exactly one object based on 
    this class, because we have exactly one accounting department in our entire company.
  - It's only accessible from inside the class, which sounds strange because how do we get inside of the class if 
    we can't create objects based on it anymore. The answer is, well, static methods. A static method can be called 
    on the class itself so you don't have instantiate it for that.
*/
