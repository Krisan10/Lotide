// This function compares two types and checks to see if they match. Strings and numbers will always be different.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😂😂😂 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual(3, 1);
assertEqual(2, "2");
assertEqual(true, true);