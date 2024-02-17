// This function comapres two different arrays to see if they match.
const eqArrays = require('./eqArrays')

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🤑🤑🤑 Assertion Passed: [${actual}] and [${expected}] are equal`);
  } else {
    console.log(`😂😂😂 Assertion Failed: [${actual}] and [${expected}] are not equal`);
  }
};

module.exports = assertArraysEqual;