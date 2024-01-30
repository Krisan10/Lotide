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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["cat", "dog", "frog"], ["cat", "dog", "eagle" ]), false); 
assertEqual(eqArrays(["yeah"], []), false); 
assertEqual(eqArrays([], [],), true); 