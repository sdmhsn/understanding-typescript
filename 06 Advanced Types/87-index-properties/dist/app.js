"use strict";
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!', // we can add multiple values here
    /*
      with the help of ErrorContainer, which gives us this extra flexibility that we don't need to know in advance
      which property names we want to use and how many properties we need.
    */
};
/*
  Notes:
  - index types a feature that allows us to create objects which are more flexible regarding the properties they
    might hold.
  - flexible example: able to use it on any form we have in our webpage.
 */
