// const button = document.querySelector('button')!;
const button = document.querySelector('button');

// this comment will be remove in app.js
button.addEventListener('click', () => {
  // we created error by removing ! sign in
  console.log('Clicked!');
});

/*
  Notes:
  If we set "noEmitOnError": true in tsconfig.json file, that problematic files (app.js) will not be generated.
*/
