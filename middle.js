const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🤑🤑🤑 Assertion Passed: [${actual}] and [${expected}] are equal`);
  } else {
    console.log(`😂😂😂 Assertion Failed: [${actual}] and [${expected}] are not equal`);
  }
};

const middle = function(array) { 
  if ((array.length === 1) || (array.length === 2)) {
    return [];
  } else if (array.length % 2 === 0) {
    let evenMiddle = Math.floor(array.length / 2);
    return [array[evenMiddle - 1], array[evenMiddle]];
  } else {
    let oddMiddle = Math.floor(array.length / 2);
    return [array[oddMiddle]];
}
}

let array1 = [3, 5, 7, 9, 11]
let array2 = [3]
let array3 = [2, 4, 6, 8]
console.log(middle(array1))
console.log(middle(array2))
console.log(middle(array3))

let check1 = [7];
assertArraysEqual(middle(array1), check1)
