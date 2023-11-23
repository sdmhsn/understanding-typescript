"use strict";
/* Sample 1: */
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
/* Sample 2: */
const person = {
    firstName: 'Saddam',
    age: 30,
};
const { firstName: userName, age } = person; // firstName: userName is not a type assignment here. This is JavaScript syntax, where we alias rename a property we're pulling out of person.
console.log(userName, age, person);
