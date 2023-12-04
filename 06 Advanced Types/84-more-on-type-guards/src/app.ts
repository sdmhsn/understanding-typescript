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

/* other type combinable: */
type Combinable = string | number; // union type
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

/*
  Notes:
  - 
*/
