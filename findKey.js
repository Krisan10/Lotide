const findKey = function(object, callback) {
    for (const key in object) {
      if (object.hasOwnProperty(key) && callback(object[key])) {
        return key;
      }
    }
    return undefined;
  };
  
module.exports = findKey;
