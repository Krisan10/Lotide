const letterPositions = function(sentence) {
  let characters = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].toLowerCase();
    if (/[a-z]/.test(letter)) {
      if (characters[letter]) {
        characters[letter].push(i);
      } else {
        characters[letter] = [i];
      }
    }
  }
  return characters;
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


assertArraysEqual(letterPositions("hello"), {h: [0], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ]});