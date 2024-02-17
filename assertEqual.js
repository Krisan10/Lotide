// This function compares two types and checks to see if they match. Strings and numbers will always be different.

const assertEqual = function(actual, expected) {
  if (actual === expected) { // This line takes the two parameters to check if the are the exact same.
    console.log(`🤑🤑🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😂😂😂 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;