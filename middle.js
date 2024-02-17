// This function will take the middle of an array. If the array is 2 or less, the array is empty. If the array has an odd amount of valyes, the array will have the middle value. If the array has an even amount of values, it'll take the two middle values.

const middle = function(array) {
  if ((array.length <= 2)) {
    return [];
  } else if (array.length % 2 === 0) {
    let evenMiddle = Math.floor(array.length / 2);
    return [array[evenMiddle - 1], array[evenMiddle]];
  } else {
    let oddMiddle = Math.floor(array.length / 2);
    return [array[oddMiddle]];
  }
};

module.exports = middle;
