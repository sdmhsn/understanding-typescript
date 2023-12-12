"use strict";
function merge(objA, objB) {
    /*
      So here we could say extends object, and with that I'm saying, the T type can be any
      object with any structure, but it has to be an object. We can do the same for U.
      And of course, we don't have to constraint all generic types. If we just want to
      constrain U, we can do that. In this example, it just makes sense to constraint both
      because object assign wants two objects here, but we're really flexible there.
    */
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'saddam', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
console.log(mergedObj.age);
/*
  Notes:
  - we can restrict the types of T and U here to solve our generic types with type constraints.
  - for generic types, we can set certain constraints regarding the types our generic types can be based on
    and we do this with the "extends" keyword in the angled brackets after the type which we wanna constrain.
  - and these constraints can be anything. we can refer to objects, to string, we could use our own type if
    we had it. we can also use union types if we want to, we're really flexible there, we can set any
    constraints we want.
*/
