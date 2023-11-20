function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    // anonymous function as addAndHandle parameter
    /*  without explicitly stating the type here (result) because TypeScript knows the result will be a number
        because we made it really clear that the callback will get one argument which is a number [cb: (num: number) => void]
    */
    /*  without explicitly stating the type here because TypeScript knows the result will be a number because
        we made it really clear that the callback will get one argument which is a number.
    */
    console.log(result);
    // return result; // it shouldn't return anything. This however, is not a mistake or a bug in TypeScript. It actually happens on purpose. By specifying void here our callback type, we're essentially saying we'll ignore any results you might be returning here.
});
/*
  Notes:
  callbacks and function types
*/
