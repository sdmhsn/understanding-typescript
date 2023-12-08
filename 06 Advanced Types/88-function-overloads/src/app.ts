type Combinable = string | number; // union type
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function overloads
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString(); // concatenate these two strings
  }
  return a + b; // a and b have to be numbers here
}

// const result = add('Saddam', ' Husein'); // typescript infers: function add(a: string, b: string): string (+3 overloads)
// const result = add(1, 5);
const result = add(1, 'Husein'); // string. typescript infers: function add(a: number, b: string): string (+3 overloads)

console.log(result);

/*
  Notes:
  - function overloads a feature that allows us to define multiple function signatures, so to say, for one 
    and the same function. which simply means we can have multiple possible ways of calling a function with 
    different parameters, for example, to then do something inside of that function.
  - So these are function overloads and they can help us in situations like this here, where TypeScript 
    would not be able to correctly infer the return type on its own, here we can be really clear 
    about what's getting returned for the different combinations we might support in our function.
*/
