// const button = document.querySelector('button')!;
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('Clicked!');
// });

/*
  Notes:  remove exclamation mark (!) in  const button = document.querySelector('button')!;  will not get any typescript error
          when set the "strictNullChecks" to false in tsconfig.json
*/

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', () => {
    console.log('Clicked!');
  });
}

/*
  Notes: Now even without the exclamation mark (!), and strictNullChecks to true mode we get no error
  because TypeScript understands that this code is inside of this if statement and that this if statement 
  makes sure that button is not null and that this will not fail.
*/
