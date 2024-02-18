// the value i = [] will contain the object that the letters will be put in.
// create a for in loop to loop through each letter
// count the amount of times a letter has appeared
// return that value in an object.

const countLetters = function(sentence) {
  let characters = {};

  for (const letter of sentence) {
    if (/[a-zA-Z]/.test(letter)) { //This line checks if the array contains strings
      let lowerChar = letter.toLowerCase(); // This line changes all letters to lowercase

      if (characters[lowerChar]) {
        characters[lowerChar]++; //This checks if the letter is already in an object and if it is, add one.
      } else {
        characters[lowerChar] = 1; //if the letter is the only one in the array, it returns 1
      }
    }
  }
  return characters;
};

module.exports = countLetters;