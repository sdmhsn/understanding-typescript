// Sample 1 (difference between unknow and any):
/* unknow 
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Saddam';
userName = userInput; // typescript error. type 'unknown' is not assignable to type 'string'.
*/
/* any 
let userInput: any;
let userName: string;

userInput = 5;
userInput = 'Saddam';
userName = userInput; // no typescript error
*/

// Sample 2 (extra type check here with unknown):
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Saddam';
// userName = userInput;

if (typeof userInput === 'string') {
  /*
    So, we need such a extra type check here with unknown to be able to assign a unknown value to a value with a fixed type
    and therefore unknown is the better choice over any if you know I can't tell exactly what type of store in there,
    it might be a number, it might be a string, but I know what I want to do with it eventually
  */
  userName = userInput;
}

/*
  Notes:
  - Unknown is a bit more restrictive than any. With unknown, we have to first of all check the type that's currently 
    stored in userInput before we can assign it to, for example, a variable that wants a string.
  - And then unknown is better than any because it makes sure that you're not allowed to do everything 
    but you have at least some type checking.
  - So, unknown still is a type you shouldn't use all the time, but it is better than any for the reasons described.
*/
