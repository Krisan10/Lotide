//This code is to find the first key that meets the callbacks function

const findKey = function(object, callback) {
    for (const key in object) { //This line checks if the object has the property represented by the current key
      if (object.hasOwnProperty(key) && callback(object[key])) { //This line checks if the object and the callback object have the same key
        return key;
      }
    }
    return undefined;
  };
  
module.exports = findKey;
