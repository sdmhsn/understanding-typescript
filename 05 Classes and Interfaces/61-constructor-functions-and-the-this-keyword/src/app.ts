class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    // this: Department --> typescript
    console.log('Department: ' + this.name);
  }
}

const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();

console.log(accounting.describe);

const accountingCopy = {
  name: 'Dummy!',
  describe: accounting.describe, // callback. we can call 'this' in object as well
};
console.log(accountingCopy);
accountingCopy.describe();

/* accountingCopy analogy (js method in object):
const mobil = {
  merk: 'Honda',
  hidupkan: function () {
    console.log(`Hidupkan mobil ${this.merk}`);
  },
};
console.log(mobil); // { merk: 'Honda', hidupkan: [Function: hidupkan] }
mobil.hidupkan(); // 'Hidupkan mobil Honda'
*/

/*
  Notes:
  - In a method or function definition, an initial parameter named this has special meaning in TypeScript. These 
  parameters are erased during compilation
  - TypeScript checks that calling a function with a this parameter is done so with a correct context. Instead 
  of using an arrow function, we can add a this parameter to method definitions to statically enforce that the 
  method is called correctly
  
  (https://www.typescriptlang.org/docs/handbook/2/classes.html#this-parameters).
*/
