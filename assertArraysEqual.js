// This code asserts whether two arrays are identical.

const assertArraysEqual = function(actual, expected) { //This line takes two arrays
  if (eqArrays(actual, expected)) {
    console.log(`🤑🤑🤑 Assertion Passed: [${actual}] and [${expected}] are equal`);
  } else {
    console.log(`😂😂😂 Assertion Failed: [${actual}] and [${expected}] are not equal`);
  }
};

module.exports = assertArraysEqual;