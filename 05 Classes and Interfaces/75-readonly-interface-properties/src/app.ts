interface Greetable {
  // private name: string; // public/private/protected: not possible in interface
  readonly name: string; // readonly: possible in interface
  age: number;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string; // even though we didn't add readonly keyword here, the class knows that it implements readable and it automatically assumes that the property name, which we have here, which we need to have because of the interface is read-only because that is what we set up inside of the interface
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
user1.name = 'Rahmat'; // typescript error. read-only modifier is inside interface
user1.greet('Hello there - I am');
console.log(user1);

/*
  Note:
  - inside of an interface we can also add the read-only modifier. by add read-only inside interface, it makes clear
    that this property in whatever object we built based on this interface must only be set once and is read-only 
    thereafter so that it can't be changed after the object has been initialized.
  - we cannot add public or private or anything like that inside of an interface.
*/
