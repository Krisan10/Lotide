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

const flatten = function(array) {
  let flattenedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenedArray = flattenedArray.concat(array[i]);
    } else {
      flattenedArray.push(array[i]);
    }
  }

  return flattenedArray;
};

let johtoLegendaries = ["Ho-oh", "Lugia", ["Entei", "Raikou", ["Suicune"]], "Celebi"]
console.log(flatten(johtoLegendaries));
assertArraysEqual(flatten(johtoLegendaries), ["Ho-oh", "Lugia", "Entei", "Raikou", ["Suicune"], "Celebi"])