//This code is to check if two objects are the same 
const eqArrays = require('./eqArrays')

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
 
  if (keys1.length !== keys2.length) { // This line checks if the object names are the same.
    return false;
  }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    //This code checks if there is an array in the object and compares them using eqArrays
    if (Array.isArray(value1) && Array.isArray(value2)) {
          
      if (!eqArrays(value1, value2)) {
        return false;
      }
      // This code checks if any primitive values are the same.
    } else if (value1 !== value2) {
        
      return false;
    }
  }
    
  return true;
};

module.exports = eqObjects;


    