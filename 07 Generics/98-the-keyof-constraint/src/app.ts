function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  /*
    - The idea of this function here is that we get an object (obj) as a first argument, and the second 
      parameter is, in the end, a key (key).
    - On the generic types here (<T extends object, U extends keyof T>), we could say we've got a type T,
      and that will be our object here, and type U has to be a key of our T-type though. So of this object, 
      we wanna guarantee that what we get here as a second parameter as a key is a property of that first type.
  */
  return `Value: ${obj[key]}`; // Value: Saddam
}

console.log(extractAndConvert({ name: 'Saddam' }, 'name')); // 'name' refer to key of name: 'Saddam'. it would pass in an object as a first argument, and then a string as a second.
// console.log(extractAndConvert({ name: 'Saddam' }, 'age')); // typescript error. "age" is not assignable

/*
  Notes:
  - with this keyoff keyword is also to tell TypeScript that we want to ensure that we have this correct structure, 
    and that's of course really useful, because it allows us to ensure that we don't make dumb mistakes
*/
