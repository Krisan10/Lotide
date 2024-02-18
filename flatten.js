// This function will flatten any arrays by one level. Arrays one level deep will enter the larger array, and Arrays in two or more levels deep will decrease by one. [[]] --> []

const flatten = function(array) {
  let flattenedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {//This line checks if the array contains any arrays
      flattenedArray = flattenedArray.concat(array[i]); //This line reduces the array by one level
    } else {
      flattenedArray.push(array[i]);//This line is for items that are not in a nested array.
    }
  }

  return flattenedArray;
};

module.exports = flatten;
