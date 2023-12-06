"use strict";
/*  Sample 1:
// const paragraph = document.querySelector('p'); // HTMLParagraphElement. when we hover this const, TypeScript actually finds out that this is a paragraph element.
const paragraph = document.getElementById('message-output'); // HTMLElement. TypeScript detect this as HTMLElement, it doesn't know which specific HTML element that is.
*/
// Sample 2 (error):
// const userInputElement = document.getElementById('user-input'); // HTMLElement. we as a developer, we know that here, we reach out to this input element, but TypeScript doesn't know that. TypeScript doesn't read our HTML code, so TypeScript only knows that it's some HTML element.
// userInputElement.value = 'Hi there!'; // if we would want to set the value property of this therefore, and it would try to do userInputElement.value equal "Hi There!", you see that we actually get an error. We get an error because for one, this object is possibly null and Property 'value' does not exist on type 'HTMLElement'.
// Sample 3 (how to fix error):
// const userInputElement = document.getElementById('user-input')!;
// userInputElement.value = 'Hi there!'; // we can fix 'userInputElement' is possibly 'null to not null' by adding an exclamation mark (!) after document.getElementById('user-input'), but we still get an error that 'value' does not exist on type HTML Element because this generic type, which basically any HTML element has as a type, does not support properties that are specific to, well, specific HTML elements.
// So, we would need to tell TypeScript that actually what we select here is not just not null, but that it's also of type HTMLInputElement by these two ways:
// version 1:
// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')!
// ); // We add angled brackets opening and closing <> and then between these brackets, the type of the thing after the angled brackets we add HTMLInputElement. And this type is globally available because in our tsconfig.json file, we are including the dom lib. With that, TypeScript knows that whatever we select here after the angled brackets will be of type HTMLInputElement, and therefore it doesn't complain anymore.
// userInputElement.value = 'Hello there!';
// version 2:
const userInputElement = document.getElementById('user-input'); // we can also add something after the thing we want to type cast, so after this selection in this case, and that thing is the "as" keyword. And then here we again add the type to which we wanna cast this (HTMLInputElement). So, this now tells TypeScript that the expression in front of it, in this case, this expression here, will yield a value of type HTMLInputElement. Therefore, again, we get no error.
userInputElement.value = 'Hello there!';
// other version (if we're not sure that this (userInputElement) will not return null / alternative to using the exclamation mark (!), we can use an if check statement):
// const userInputElement = document.getElementById(
//   'user-input'
// ) as HTMLInputElement; // casting as HTMLInputElement defines outside the if statement
// if (userInputElement) {
//   userInputElement.value = 'Hello there!';
// }
// or
// const userInputElement = document.getElementById('user-input');
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'Hello there!'; // casting as HTMLInputElement defines inside the if statement (userInputElement as HTMLInputElement))
// }
/*
  Notes:
  - Type casting helps we tell TypeScript that some value is of a specific type where TypeScript is
    not able to detect it on it's own, but we as a developer know that it will be the case.
  - TypeScript does not dive into our HTML files and analyze them.
  - The exclamation mark (!) allows us to tell TypeScript that the expression in front of it (e.g. document.getElementById('user-input')) will never yield null.
    If we know as developer that this (userInputElement) will never return null, then we can use this exclamation mark.
  - If we're not sure that this (userInputElement) will not return null, we can use an if check.
  - Type Casting is called Type Assertions in the official Docs and it's explained here: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
*/
