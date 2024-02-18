//This code is an assertion tool to see if two objects are identical

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`🤑🤑🤑 Assertion Passed: ${inspect(actual)} and ${inspect(expected)} are equal`);
  } else {
    console.log(`😂😂😂 Assertion Failed: ${inspect(actual)} and ${inspect(expected)} are not equal`);
  }
};

module.exports = assertObjectsEqual; 