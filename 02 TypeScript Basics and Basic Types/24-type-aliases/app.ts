// 1. Type aliases
type Combinable = number | string; // after type keyword, we add name of our custom/aliases type. the name is up to us. we can invent any name here which is not built into JavaScript or TypeScript as a key name
type ConversionDescriptor = 'as-number' | 'as-text'; // type alias for literal type combined with union type

function combine(
  input1: Combinable, // reuse type alias
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;

  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Saddam', 'Rahmat', 'as-text');
console.log(combinedNames);

// 2. Type aliases & object types
// sample 1 (get from quiz):
type Product = { title: string; price: number };
const p1: Product = { title: 'A Book', price: 12.99, isListed: true }; // typescript error. isListed is not part of the "Product" type.
console.log(p1);

// sample 2:
type User = { name: string; age: number };

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

const person = { name: 'saddam', age: 30 };
greet(person);
const personAgeCheck = isOlder(person, 29);
console.log(personAgeCheck);

/*
  Notes:
  Type aliases help we avoid typos, simply save code, write code quicker, and always be clearer about our intentions,
  for example by choosing descriptive type alias names up there.
*/
