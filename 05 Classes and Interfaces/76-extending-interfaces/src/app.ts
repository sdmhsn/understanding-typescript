interface Named {
  readonly name: string;
}

// extends the Named interface
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  // name: string; // typescript error. because this class now incorrectly implements the interface Greetable, because the property name is missing.
  age = 30; // age value inside

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable; // we can use our interface as a type.

user1 = new Person('Saddam');
user1.greet('Hello there - I am');
console.log(user1);

/*
  Note:
  - we can also implement inheritance in interfaces.
*/
