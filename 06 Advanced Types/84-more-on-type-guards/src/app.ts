/* Sample 1 (type guard using typeof):
type Combinable = string | number; // union type
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

  function add(a: Combinable, b: Combinable) {
    // return a + b; // this doesn't work. cannot be applied to types 'Combinable' and 'Combinable'
    // return a.toString() + b.toString(); // this works

    // type guard using typeof
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString(); // concatenate these two strings
    }
    return a + b; // a and b have to be numbers here
  }

  console.log(add(10, 20));
*/

/* Sample 2 (type quard using "in" keyword): 
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // combination Admin and Employee object type aliases

// object type
const e1: ElevatedEmployee = {
  name: 'Saddam',
  privileges: ['create-server'],
  startDate: new Date(),
};

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name); // which will work without issues because both types of employees have a name property.
  // console.log('Name: ' + emp.privileges); // typescript error. because TypeScript can't confirm that this always exists on the argument (emp: UnknownEmployee). the UnknownEmployee might be a normal employee which does not have a privileges property. Only the admin has that.
  // console.log('Name: ' + emp.startDate); // startDate error as well

  // Hence, if we move the code in this if check, TypeScript is not happier than before because an object is, well, just an object. Doesn't tell us anything about the properties.
  // if (typeof emp === 'object') {
  //   console.log(emp.privileges); // error
  // }

  // We can use the "in" keywords that's built into JavaScript to check it:
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges); // no TypeScript error
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Rahmat', startDate: new Date() }); // if we pass in an employee which does not have all these fields, for example, if we create one on the fly which only has a startDate but no privileges, then there's all the works and compiled without errors
*/

/* Sample 3 (type guard using instanceof): */
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo: ' + amount);
  }
}

type Vechicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vechicle) {
  vehicle.drive(); // no TypeScript error
  // vehicle.loadCargo(); // TypeScript error when we access the loadCargo() in vehicle argument

  // using "in" keyword:
  // if ('loadCargo' in vehicle) {
  //   vehicle.loadCargo(10000); // no TypeScript error when we access the loadCargo() in vehicle argument
  // }

  // using instanceof (An alternative way, which might be a bit more elegant because it also eliminates the risk of we misstyping in this property string here)
  if (vehicle instanceof Truck) {
    // An instanceof is a normal operator built into vanilla JavaScript, so this is no TypeScript code. Just like typeof, this is part of JavaScript and it executes at runtime.
    vehicle.loadCargo(20000); // no TypeScript error when we access the loadCargo() in vehicle argument
  }
}

useVehicle(v1);
useVehicle(v2);

/*
  Notes:
  - type guards is just a term that describes the idea or approach of checking if a certain property or method 
    exists before we try to use it, or if we can do something with the type before we try to use it.
  - type guard it allows us to utilize the flexibility union types gives us and still ensure that our code 
    runs correctly at runtime, because often we have functions that work with two or three different types, 
    and, therefore, a union type is perfect, but what exactly you do with the values then does depend on the 
    type, we either concatenate or we add mathematically.
  - we could not use instanceof because interfaces, as we learned, are not compiled to any JavaScript code, 
    and, therefore, we can't use them at runtime. for classes we can do that because JavaScript supports classes 
    and constructor functions, and with instanceof, we can then find out if some object is based on that class.
  - for objects, that can be done with "instanceof" or with "in", for other types, we can use "typeof", and, therefore, 
    we now have all the flexibility to use the flexibility union types give we and still write code that then 
    does one thing or the other based on the exact type we're getting at runtime.
*/
