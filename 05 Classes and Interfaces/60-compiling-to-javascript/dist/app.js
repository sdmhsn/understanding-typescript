"use strict";
class Department {
    /*
      Notes: the name field above (name: string;) which we have does not exist in app.js in the class. This would actually
      be supported in modern JavaScript but it depends on the version of JavaScript we're building for.
      So in ES6 alone, it's not supported actually
    */
    constructor(n) {
        this.name = n;
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
