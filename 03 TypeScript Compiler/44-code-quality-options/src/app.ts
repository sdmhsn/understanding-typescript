const button = document.querySelector('button')!;

// let userName = 'Saddam'; // global variable

function clickHandler(message: string) {
  let userName = 'Saddam'; // local variable.  "noUnusedLocals": true

  /*
    You see, this has yellow squiggly lines because it's not an error, really. 
    It's more like a warning or a hint. So if I compile here, you'll see now, however, I do get an error
    because TypeScript only knows errors. And there we see that the username is declared, but its value is 
    never read because we made sure that we don't want unused local variables.
  */
  console.log('Clicked!' + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'You are welcome'));
}
