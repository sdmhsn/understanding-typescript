class Department {
  name: string;
  private employees: string[] = []; // store data employee. private means employees is now a property which is only accessible from inside the class

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
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
