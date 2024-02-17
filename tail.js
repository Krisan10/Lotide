// This function will take everything but the beginning of the array.

const tail = function(array) {
  if (array.length > 1) { // This line is a conditional for whether the array has more than one value.
    return array.slice(1); // This line slices the first value (0) from the second value (1)
  } else if (array.length === 1){
    return []
  } else {
    return []; //This line returns any array with one or fewer values as []
  }
};

module.exports = tail;