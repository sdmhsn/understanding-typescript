const fetchedUserData = {
  id: 'u1',
  name: 'Saddam',
  job: { title: 'CEO', description: 'My own company' },
};

// console.log(fetchedUserData.job.title);
// console.log(fetchedUserData && fetchedUserData.job.title);

// optional chaining operator:
console.log(fetchedUserData?.job?.title); // this tells TypeScript does fetchedUserData exist?, if it does access job and hence here we can add that question mark and therefore only access title if job is defined.

/*
  Notes:
  - optional chaining operator helps us safely access nested properties and nested objects in our object 
    data and if the thing in front of the question mark is undefined it will not access the thing thereafter 
    and therefore will not throw a runtime error but instead it will just not continue.
  - so behind the scenes this is basically compiled to an if check which checks whether that exists before it 
    tries to access this.
*/
