"use strict";
/*  Sample 1 (Partial built-in utility type):
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  // what this does is it tells TypeScript that, this is an object which in the end will be a <CourseGoal>.
  // But initially, partial kind of wraps our own type, and changes it to a type where all these properties
  // are optional. That's what partial does one of these built-in types, Typescript ships with.

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal; // typescript error. Type 'Partial<CourseGoal>' is not assignable to type 'CourseGoal'.
  // return courseGoal as CourseGoal; // We can fix this by converting this to courseGoal with type casting, because we know at this point of time, we will have added all the data.
}
*/
/*  Sample 2 (Readonly built-in utility type): */
const names = ['Saddam', 'Rahmat'];
// So when we try to add something with push(), or if we try to remove something with pop(), we get errors
names.push('Fuad');
console.log(names);
names.pop();
console.log(names);
/*
  Notes:
  - Here, it just a few examples. Now just as all these type things, these types only exist in types
    of the world and therefore, only prior to compilation. But during this compilation step, they can give you extra
    type safety or extra flexibility. For example, there is the built-in Partial type. We could have scenarios like Sample 1,
    where we want to temporarily switch one of our object types, one of our interfaces to be optional only. To make sure that
    all the properties in there can be optional only temporarily.
  - Another built-in utility type which we have is the Readonly type that can all be very useful. And this is not limited
    to arrays by the way, we can also use read only on an object.
  - Now, all these are just utility types that only exist in TypeScript world. So they're not compiled to anything. But
    during compilation, they give you extra strictness, or extra checks or skip certain checks as we did it with partial.
*/
