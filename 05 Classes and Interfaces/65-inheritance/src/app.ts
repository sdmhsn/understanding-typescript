class Department {
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
    // this.id = 'd2'; // typescript error. we can't modify the id value, even inside the class. (e.g. constructor(private readonly id: string...))
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
  - 
*/
