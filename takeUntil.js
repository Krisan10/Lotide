//This code will take an array and only keep the items according to the callback.

const takeUntil = function(array, callback) {
  const result = [];

  for (const item of array) {//This line iterates through all the objects
    if (!callback(item)) { //This line checks if the callback condition is not met
      result.push(item); // If the condition is not met, push it into results
    } else {

      break; //This line is to end the loop once the condition is met
    }
  }

  return result;
};

module.exports = takeUntil;
