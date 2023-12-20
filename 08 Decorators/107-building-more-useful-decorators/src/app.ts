// decorator factory
function Logger(logString: string) {
  // returned decorator function using anonymous function which takes that constructor argument
  return function (constractor: Function) {
    console.log(logString);
    console.log(constractor);
  };
}

// decorator factory
function WithTemplate(template: string, hookId: string) {
  // decorator function
  return function (constractor: any) {
    // We convert this to any (constractor: any), so the typescript allows this and doesn't think it's a normal function.
    // console.log(constractor);

    const hookEl = document.getElementById(hookId); // no typescript error. no need to add exclamation mark (!), because hookEl constant used inside the if statement
    const p = new constractor(); // we can create a new person here, by calling our constructor, because that is our constructor: Function here, after all.

    // if HookEl is a thing that exists
    if (hookEl) {
      hookEl.innerHTML = template; //
      hookEl.querySelector('h1')!.textContent = p.name; // the querySelector() should add the exclamation mark (!) to assuming that we always find an h1 element. p.name = 'Saddam'
    }
  };
}

@WithTemplate('<h1>My Person Object</h1>', 'app') // 'app': ID assigned to the div in index.html
class Person {
  name = 'Saddam';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();
console.log(pers); // Person { "name": "Saddam" }

/*
  Notes: 
  - We provide extra utilities to developers, which the other developers can use to, for example, conveniently 
    render something on the screen for a giving class.
  - Meta - programming is we're creating things, we're creating decorator functions, which we might say have some 
    impact on the end user.
*/
