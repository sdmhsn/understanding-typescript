interface Named {
  readonly name: string;
}

// extends the Named interface
interface Greetable extends Named {
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
}

let user1: Greetable; // we can use our interface as a type.

user1 = new Person('Saddam');
user1.greet('Hello there - I am');
console.log(user1);

/*
  Note:
  - we can also implement inheritance in interfaces.
  - and there we can also extend more than one interfaces, simply separated with a comma. remember that for a 
    classes, this was not possible.
  - when we use classes in inheritance, we can only inherit from one class. we can't inherit from multiple
    classes. for interfaces that is different. for interfaces, we can indeed inherit from multiple interfaces, 
    because in the end they're all just getting merged together, and in this pure TypeScript feature, 
    which is actually not translated to JavaScript as we will see
*/
