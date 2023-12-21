// decorator factory
function Logger(logString: string) {
  console.log('LOGGER FACTORY'); // A. the decorator factories here run earlier. runs first

  // decorator function
  return function (constractor: Function) {
    console.log('Rendering decorator function logger...');
    console.log(logString); // 2. LOGGING
    console.log(constractor); // 3 class Person {...}
  };
}

// decorator factory
function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY'); // B. the decorator factories here run earlier. runs second

  // decorator function
  return function (constractor: any) {
    console.log('Rendering decorator function template...');
    const hookEl = document.getElementById(hookId);
    const p = new constractor(); // 1. Creating person object... (refer to Person constructor())

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

// WithTemplate runs first, then Logger executes
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Saddam';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person(); // 4. Creating person object... (refer to Person constructor())
console.log(pers); // 5. Person { "name": "Saddam" }

/*
  output:

  LOGGER FACTORY
  TEMPLATE FACTORY
  Rendering decorator function template...
  Creating person object...
  Rendering decorator function logger...
  LOGGING
  class Person {
    constructor() {
        this.name = 'Saddam';
        console.log('Creating person object...');
    }
  }
  Creating person object...
  Person {name: 'Saddam'}
*/

/*
  Notes: 
  - 
*/
