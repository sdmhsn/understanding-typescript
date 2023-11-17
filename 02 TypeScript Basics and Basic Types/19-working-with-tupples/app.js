// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: 'Saddam',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
};
// console.log(person);
// console.log(person.name);
/* Typescript inference for array
let favoriteActivities: string[]; // any[] for mix array (e.g. ['Sports', 1]). number[] for number array (e.g. [1, 2, 3])
favoriteActivities = 'Sprots'; // we get an error in typescript that 'Sports' not assignable to array of string
favoriteActivities = ['Sport']; // correctly
favoriteActivities = ['Sport', 1]; // in mix array, we should change string[] into any[]
 */
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // console.log(hobby);
    // console.log(hobby.toUpperCase()); // we wouldn't get any complain in typescript when we using toUpperCase() method
    console.log(hobby.map()); // we will get an error when we using .map() method, because map() is available on array not on string array (string[])
}
