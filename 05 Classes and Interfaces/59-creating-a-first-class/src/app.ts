class Department {
  name: string; // property

  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department('Accounting'); // object. object value = 'Accounting
console.log(accounting);
