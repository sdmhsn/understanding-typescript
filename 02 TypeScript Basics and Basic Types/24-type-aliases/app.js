function combine(input1, // reuse type alias
input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Saddam', 'Rahmat', 'as-text');
console.log(combinedNames);
var p1 = { title: 'A Book', price: 12.99, isListed: true }; // typescript error. isListed is not part of the "Product" type.
console.log(p1);
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
var person = { name: 'saddam', age: 30 };
greet(person);
var personAgeCheck = isOlder(person, 29);
console.log(personAgeCheck);
/*
  Notes:
  Type aliases help we avoid typos, simply save code, write code quicker, and always be clearer about our intentions,
  for example by choosing descriptive type alias names up there.
*/
