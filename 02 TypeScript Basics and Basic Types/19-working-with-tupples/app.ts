const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // define role to tupple type with number and string rules
} = {
  // const person = {
  name: 'Saddam',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

person.role.push('admin'); // work with no error when we append new elements into the role tupple, even we didn't define the tupple type yet. Push actually is an exception which is allowed in tuples. So unfortunately TypeScript can't catch this error,
// person.role[1] = 10; // error. person.role[1] should assign to string type
person.role = [0, 'admin', 'user']; // empty array or extra elementy would not allowed (get an error). should always consistent with the tupple type we have defined

// console.log(person);
console.log(person.role);

/*
  notes:
  you might want to consider a tuple instead of an array to get even more strictness 
  into your app to be even clearer about the type of data you're working with and the type 
  of data you're expecting.
*/
