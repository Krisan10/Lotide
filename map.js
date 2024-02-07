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


const words = ["doll", "penguin", "desk", "remote", "zelda"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
 const grassStarters = ["treeko", "bulbasaur", "snivy", "rowlett"]
 const numbers = ["1", "5", "76", "405", "302223"]
 const pokemon = map(grassStarters, starter => starter[0])
 const digits = map(numbers, numb => numb[0])
const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, ["d","p","d","r","z"]));
console.log(assertArraysEqual(pokemon, ["t","b","s","r"]));
console.log(assertArraysEqual(digits, [1, 5, 7, 4, 3]));
