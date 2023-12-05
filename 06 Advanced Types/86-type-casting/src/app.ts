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
  - 
*/
