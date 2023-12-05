interface Bird {
  flyingSpeed: number;
}

interface Horse {
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // console.log('Moving with speed: ' + animal.flyingSpeed); // typescript error. it can't access flyingSpeed here because not all animals (Bird and Horse) have a flyingSpeed.
  // console.log('Moving with speed: ' + animal.runningSpeed); // typescript error. it can't access runningSpeed here because not all animals (Bird and Horse) have a runningSpeed.

  // We can check if flying speed is in animal here
  if ('flyingSpeed' in animal) {
    console.log('Moving with speed: ' + animal.flyingSpeed);
  }
}

moveAnimal({
  flyingSpeed: 400,
});

/*
  Notes:
  - 
*/
