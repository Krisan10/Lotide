//This function will take in an array and filter it through the object of items to count.
const countOnly = function(allItems, itemsToCount) {// This line takes two parameters. allItems = the array, itemsToCount = object of which items to count

  const results = {}; // This line puts the results into an array

  for (const item of allItems) { //This line iterates each item through the allItems array
  // checks if the items are to be counted
    if (itemsToCount[item]) {
      if (results[item]) { //if item is already in the results, add one more.
        results[item] += 1;
      } else {
        results[item] = 1; //if item is only counted once, return one
      }
    }
  }

  return results;
};

module.exports = countOnly;