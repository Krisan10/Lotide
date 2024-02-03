const inspect = require('util').inspect;
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

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
          
      if (!eqArrays(value1, value2)) {
        return false;
      }

    } else if (value1 !== value2) {
        
      return false;
    }
  }
    
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`🤑🤑🤑 Assertion Passed: ${inspect(actual)} and ${inspect(expected)} are equal`);
  } else {
    console.log(`😂😂😂 Assertion Failed: ${inspect(actual)} and ${inspect(expected)} are not equal`);
  }
};

const object1 = { a: 1, b: [2, 3], c: "hello" };
const object2 = { a: 1, b: [2, 3], c: "hello" };
const object3 = { a: 1, b: [2, 3, 4], c: "hello" };
const object4 = { a: 1, b: [2, 3], c: "world" };
assertObjectsEqual(object1, object2);
assertObjectsEqual(object1, object3);
assertObjectsEqual(object1, object4);