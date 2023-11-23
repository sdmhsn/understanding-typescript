/* Sample 1: */
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
// activeHobbies.push(...hobbies);
// const activeHobbies = ['Hiking', ...hobbies];
console.log(activeHobbies); // ['Hiking', 'Sports', 'Cooking']

/* Sample 2: */
const person = {
  name: 'Saddam',
  age: 30,
};

const copiedPerson = {
  ...person,
};

console.log(copiedPerson); // {name: 'Saddam', age: 30}
