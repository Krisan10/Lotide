//This code takes an array and implements the callback to each item of the array 

const map = function(array, callback) {
  const results = [];
  for (let item of array) { //iterate through each item of the array
    results.push(callback(item));// apply the callback to the item, then push it to the results variable
  }
  return results;
}

module.exports = map;