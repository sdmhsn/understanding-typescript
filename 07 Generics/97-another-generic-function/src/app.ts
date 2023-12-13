interface Lengthy {
  length: number; // refer to the length property, not to the countAndDescribe() argument
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';

  if (descriptionText.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (descriptionText.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }

  return [element, descriptionText];
}

console.log(countAndDescribe('Saddam'));
console.log(countAndDescribe(['Saddam', 'Rahmat', 'Fuad']));
console.log(countAndDescribe([]));
// console.log(countAndDescribe(10)); // typescript error. because a number doesn't have a length property and therefore this does not work.

/*
  Notes:
  - So, here again, we got our generic function. Idea is similar to the function before. We want to be a bit unspecific 
    about the type of data we get here. We don't really care if it's a string, if it's an array, or anything else which a 
    length property. We just care about that it does have a length property and then we want to do something with it 
    because we rely on the length property in our code, so we need to guarantee that we got that, but other than that, 
    we really have no interest in which type of data we're getting here.
  - We want to be more flexible and with generic types we can be that, we don't care about the exact type. Here, thanks 
    to the constraint, we only care about the fact that it has a length property.
*/
