// This function will take the middle of an array. If the array is 2 or less, the array is empty. If the array has an odd amount of valyes, the array will have the middle value. If the array has an even amount of values, it'll take the two middle values.

const middle = function(array) {//This takes an array
  if ((array.length <= 2)) { //This line is for if the items in an array = 2 or less

    return [];
  } else if (array.length % 2 === 0) { //This line is for when the total number of items in an array is an even number

    let evenMiddle = Math.floor(array.length / 2); //This line is making a variable for the middle of the array

    return [array[evenMiddle - 1], array[evenMiddle]]; //This line is taking the middle of the array, and item before it since it is even
  } else {
    let oddMiddle = Math.floor(array.length / 2); //this line is taking the middle of the array
    return [array[oddMiddle]];
  }
};

module.exports = middle;
