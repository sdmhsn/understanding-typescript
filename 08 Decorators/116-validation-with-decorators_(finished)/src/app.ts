interface ValidatorConfig {
  [property: string]: {
    [ValidatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    // [propName]: ['required'], // bug
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'required',
    ], // fixing bug
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    // [propName]: ['positive'], // bug
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'positive',
    ], // fixing bug
  };
}

function validate(obj: any) {
  // change obj: object type to obj: any to get this extra flexibility
  // console.log(registeredValidators);
  const objValidatorConfig = registeredValidators[obj.constructor.name];

  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;

  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop]; // In JavaScript, the double exclamation operator converts an Object to Boolean. (source: https://www.logilax.com/javascript-double-exclamation-operator/#:~:text=In%20JavaScript%2C%20the%20double%20exclamation,!!)
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }

  console.log(createdCourse);
});

/*
  Notes: 
  - Decorators for validation (finished)
*/
