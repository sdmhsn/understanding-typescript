class Department {
  // private id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // we don't have to initialize value of field in constructor
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}):  ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'd2'; // typescript error. we can't modify the id value, even inside or outside its class. (e.g. constructor(private readonly id: string...))
    // console.log(this.id); // we can only read the readonly properties from inside or outside class
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
