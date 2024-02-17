// This code is for telling us which position each letter is in a word.

const letterPositions = function(sentence) {
  let characters = {};

  for (let i = 0; i < sentence.length; i++) {// For loop to iterate over each letter
    const letter = sentence[i].toLowerCase(); //This line converts every letter in the string into lowercase
    if (/[a-z]/.test(letter)) { //This line checks if the letter is a letter
      if (characters[letter]) {
        characters[letter].push(i); //This line pushes a letter into the letter's object
      } else {
        characters[letter] = [i]; //This line is for when there is only one letter in the string
      }
    }
  }
  return characters;
};

module.exports = letterPositions