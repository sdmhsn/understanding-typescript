interface Bird {
  type: 'bird'; // discriminated union common property
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; // discriminated union common property
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  // discriminated union check
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
    default:
      break;
  }

  console.log(`Moving with speed: ${speed}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 400 });
moveAnimal({ type: 'horse', runningSpeed: 800 });

/*
  Notes:
  - discriminated union is a pattern, which we can use when working with union types, that makes implementing type guards easier. 
    it is available when we work with object types.
  - we can use in and instanceof to check if flyingSpeed is in animal, but animal instanceof bird will not work because data is an interface, 
    which is not compiled to JavaScript.
  - now this is a discriminated union because we have one common property in every object that makes up our union, which describes that object,
    so that we can use this property that describes this object in our check to have 100% type safety and understand which properties are 
    available for such an object and which properties are not.
  - so instead of checking for the existence of a given property, or instead of using instanceof, we use a property we know that exists
    to check which type of objects we're working with.
  - we also eliminate the danger of mistyping because TypeScript understands that the only cases we can have here, for animal type, are bird 
    and horse and hence it gives us this art of completion and if you would introduce a typo, we would immediately get an error.
  - so therefore this is a very useful pattern when working with objects and union types.
*/
