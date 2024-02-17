// This function will compare two arrays to see if they match. It will then compare whether the arrays match with true or false, written by the coder.

const eqArrays = function(actual, expected) {// These are the two parameters
  if (actual.length !== expected.length) { // This line is for if the values of the two arrays don't line up.
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {// this line is for the values of the array itself. If they don't match, return false. If they match, return true.
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;