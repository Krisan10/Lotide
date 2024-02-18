// This function will remove an item from an array.

const without = function(array, itemsToRemove) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) { //This line iterates through each item in teh array
    if (!itemsToRemove.includes(array[i])) { //This line pushes all the items aside from the items to remove
      newArray.push(array[i]);
    }
  }

  return newArray;
};

module.exports = without