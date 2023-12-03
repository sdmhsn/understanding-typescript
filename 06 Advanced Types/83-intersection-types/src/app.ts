/* Sample 1 (using type aliases): */
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// new type using intersection type (&)
type ElevatedEmployee = Admin & Employee; // combination Admin and Employee object type aliases

// object type
const e1: ElevatedEmployee = {
  name: 'Saddam',
  privileges: ['create-server'],
  startDate: new Date(),
};

console.log(e1);

/* Sample 2 (using interfaces):
  interface Admin {
    name: string;
    privileges: string[];
  }

  interface Employee {
    name: string;
    startDate: Date;
  }

  interface ElevatedEmployee extends Admin, Employee {} // combination Admin and Employee object type aliases

  // object type
  const e1: ElevatedEmployee = {
    name: 'Saddam',
    privileges: ['create-server'],
    startDate: new Date(),
  };

  console.log(e1);
*/

/* Sample 3 (other type combinable):
  type Combinable = string | number; // union type
  type Numeric = number | boolean;

  type Universal = Combinable & Numeric;
*/

/*
  Notes:
  - intersection types allow us to combine other types.
  - in these examples above, we could create this with an interface as well, but here we doing it with a type
  - intersection types are closely related to interface inheritance
*/
