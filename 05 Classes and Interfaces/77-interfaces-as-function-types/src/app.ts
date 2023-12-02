/* Sample1 (define the type of a function): 
type addFn = (a: number, b: number) => number;

let add: addFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
*/

/* Sample 2 (using an interface as an alternative to define function): 
interface addFn {
  (a: number, b: number): number;
}

let add: addFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(10, 20));
*/

/* Sample 3 (my experiment. implement interface as function into class): */
interface addFn {
  add(a: number, b: number): number; // we should add describe add() function inside addFn interface
}

interface Named {
  readonly name: string;
}

// extends the Named interface
interface Greetable extends Named, addFn {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30; // age value inside

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }

  add(n1: number, n2: number) {
    return n1 + n2;
  }
}

let user1: Greetable; // we can use our interface as a type.

user1 = new Person('Saddam');
user1.greet('Hello there - I am');
console.log(user1.add(100, 1));
console.log(user1);

/*
  Note:
  - interfaces can also be used to define the structure of a function.
*/
