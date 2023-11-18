// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // define role to tupple type with number and string rules
// } = {
/*
enum types:
enum Role {
  ADMIN, // 0
  READ_ONLY, // 1
  AUTHOR, // 2
}
*/
/*
assign the enum starting number:
enum Role {
  ADMIN = 5, // 5
  READ_ONLY, // 6
  AUTHOR, // 7
}
*/
// assign the enum as string
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Saddam',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN, // accessing enum
};
console.log(person); // { "name": "Saddam", "age": 30, "hobbies": [ "Sports", "Cooking" ], "role": 0 }
if (person.role === Role.AUTHOR) {
    console.log('is author'); // person.role set as ROLE.ADMIN
}
/*
  notes:
  enum automatically enumerated global constant identifier
*/
