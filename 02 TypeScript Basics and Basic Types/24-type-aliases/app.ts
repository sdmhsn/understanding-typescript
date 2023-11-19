// type aliases
type Combinable = number | string; // after type keyword, we add name of our custom/aliases type. the name is up to us. we can invent any name here which is not built into JavaScript or TypeScript as a key name
type ConversionDescriptor = 'as-number' | 'as-text'; // type alias for literal type combined with union type

function combine(
  input1: Combinable, // reuse type alias
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;

  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Saddam', 'Rahmat', 'as-text');
console.log(combinedNames);

/*
  Notes:
  Type aliases help we avoid typos, simply save code, write code quicker, and always be clearer about our intentions,
  for example by choosing descriptive type alias names up there.
*/
