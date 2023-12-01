interface Person {
  // name: string = 'Saddam'; // we don't have this. and if we were to try and assign a default value here, we would get an error that an interface cannot have an initializer.
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person; // we can use our interface as a type.

user1 = {
  name: 'Saddam',
  age: 30,

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet('Hello there - I am');

/*
  Note:
  - an interface describes the structure of an object. we can use it to describe how an object should look like.
  - start with a capital character (e.g. Person), not a must do but a recommendation and a convention.
  - what can we now do with this person interface? what's the idea behind it? well, we can now use this to type check 
    an object, for example.
  - an interface allows us to define the structure of an object. we can use it as a type to type check for objects 
    that must have this structure
*/
