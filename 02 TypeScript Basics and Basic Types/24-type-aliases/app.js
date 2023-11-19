function combine(input1, // reuse type alias
input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Saddam', 'Rahmat', 'as-text');
console.log(combinedNames);
/*
  Notes:
  Type aliases help we avoid typos, simply save code, write code quicker, and always be clearer about our intentions,
  for example by choosing descriptive type alias names up there.
*/
