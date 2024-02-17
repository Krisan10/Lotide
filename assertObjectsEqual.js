const inspect = require('util').inspect;
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`🤑🤑🤑 Assertion Passed: ${inspect(actual)} and ${inspect(expected)} are equal`);
  } else {
    console.log(`😂😂😂 Assertion Failed: ${inspect(actual)} and ${inspect(expected)} are not equal`);
  }
};

module.exports = assertObjectsEqual; 