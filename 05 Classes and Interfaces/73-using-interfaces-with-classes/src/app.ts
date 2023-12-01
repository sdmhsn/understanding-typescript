interface Greetable {
  name: string;
  age: number;

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

user1 = new Person('Saddam'); // instantiate name on user1 object using Person class
user1.greet('Hello there - I am');
console.log(user1); // we see that it is a normal object with the age and the name in this case, but the key takeaway is that it is based on a class which implements the interface.
/*
  console.log(user1) output:
  {
    "age": 30,
    "name": "Saddam"
  }
*/
console.log(Person);
/*
  console.log(Person) output:
  class Person {
    constructor(n) {
        this.age = 30; // age value inside
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
  }
*/

/*
  Note:
  - an interface and a custom type are not exactly the same whilst often, you can use them interchangeably 
    and we can use an interface instead of a custom type or the other way around.
  - one nature difference is that interfaces can only be used to describe the structure of an object, we 
    can use type for that as well, but instead of a custom type, we can also store other things like union 
    types and so on what we did early in the course. that sounds like type is therefore more flexible, but the 
    other side of the coin is that interface is clearer. when we define something as an interface, it's super 
    clear that you want to define the structure of an object with that.
  - another thing we can do with interfaces but we would only be able to do with custom types is we can 
    implement an interface in a class.
*/
