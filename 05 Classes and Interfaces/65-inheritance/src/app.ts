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

const it = new ITDepartment('dd1', ['Saddam']); // instantiate id and admins to ITDepartment (constructor(id: string, admins: string[]))
it.name = 'NEW NAME'; // change the ITDepartment property name, through the base class (Department) property name
it.describe(); // we can also use the base class (Department) method through the ITDepartment class
it.addEmployee('Rahmat');
it.addEmployee('Fuad');
it.printEmployeeInformation();
console.log(it);

/*
  Note:
  - We can only inherit from one class (e.g. class ITDepartment extends Department), so we can't inherit from multiple classes
  - super() calls the constructor of the base class, so department constructor in this case
  - if we are using something that uses the "this" keyword in constructor, we have to do that after calling super
*/
