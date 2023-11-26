class Department {
  public name: string; // public property are accessible from outside. we also don't need to add public keyword because it is exactly the same as name with public in front of it.
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

// console.log(accounting.employees); // we can't access the private property (employess) anymore
// accounting.employees[1] = 'Fuad'; // we can't modify the private property (employess) anymore

accounting.name = 'NEW NAME';

console.log(accounting);
accounting.printEmployeeInformation();

/*
  Notes:
  - TypeScript introduces this feature, which of course does not work during runtime however, because JavaScript 
    until recently only knew public properties. So this line here, frozen error during TypeScript compilation.
    If we compile it to JavaScript nonetheless, this code will still execute at runtime without errors
    because again, JavaScript on its own, until recently didn't know this concept.

  - JavaScript doesn't know public and private. Only in very modern versions added recently such a thing exists.
    In the past, JavaScript didn't know private or public properties.

  - And therefore, TypeScript only supports this because it checks it during compilation, not at runtime. With it 
    however, we can avoid code like this and force everyone to write cleaner code.
*/
