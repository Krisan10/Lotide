// This function comapres two different arrays to see if they match.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual} and ${expected} are equal`);
  } else {
    console.log(`😂😂😂 Assertion Failed: ${actual} and ${expected} are not equal`);
  }
};

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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["cat", "dog", "frog"], ["cat", "dog", "eagle" ]);