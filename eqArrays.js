const eqArrays = function(compare1, compare2) {
  if (compare1.length !== compare2.length) {
    console.log(`😂😂😂 Assertion Failed: ${compare1} !== ${compare2}`);
  }

 for (let i = 0; i < compare1.length; i++) {
    if (compare1[i] !== compare2[i]) {
      console.log(`😂😂😂 Assertion Failed: ${compare1} !== ${compare2}`);
      return;
    }
  }

  console.log(`🤑🤑🤑 Assertion Passed: ${compare1} === ${compare2}`);
};
 
eqArrays([1, 2, 3], [1, 2, 3]); // Assertion Passed
eqArrays([1, 2, 3], [3, 2, 1]); // Assertion Failed
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // Assertion Passed
eqArrays(["1", "2", "3"], ["1", "2", 3]); // Assertion Failed