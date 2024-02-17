//This code allows you to find the key of an object when presented with a value

const findKeyByValue = function(objects, values) { //This line takes two parameters, the object and the value used to find the key

  let objectsArray = Object.keys(objects); //This line is create a variable for the objects of the object

  for (const obj of objectsArray) { //This line loops over the objects in the object
    if (objects[obj] === values) { //This conditional for if the value being searched is connected to the key. If yes it returns the key.
      return obj;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
