/*  Sample 1:
function add(n1: number, n2: number) {
  return n1 + n2; // when we hover to function add(n1: number, n2: number): number -> the colon (: number) after the parameter list, describes the return type of the function
  // return n1.toString() + n2.toString(); // this will describes to string -> add(n1: number, n2: number): string
}
*/
/* Sample 2:
function add(n1: number, n2: number): string {
  // Now of course, we can always explicitly assign a return type by adding a colon after the parameter list,
  return n1 + n2; // typescript error because the type colon after the parameter list, does not match with described return type

  // function add(n1: number, n2: number) {
  // And if we have no specific reason for explicitly setting the type, we should therefore not set the type, and instead let TypeScript infer the type.
  // return n1 + n2;
}
*/
/* Sample 3: difference between void and undefined */
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num); // when we hover to printResult() function, the return type is void not string. we are not returning anything here. the typescript inference did its job by return this statement to void
}
// function printResult(num: number): undefined {
//   return 'Result: ' + num; // because we use return, we can use undefined type. but again, this is a rare use case, and you could use void
// }
printResult(add(5, 12));
/*
  Notes:
  Void really just means this function doesn't have a return statement, it doesn't return anything.
  It successfully completes, it does its job. It executes its code, it does not yield an error or
  anything like that, but it then does not return anything. That's the void return type.
*/
