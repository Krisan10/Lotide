// the value i = [] will contain the object that the letters will be put in.
// create a for in loop to loop through each letter
// count the amount of times a letter has appeared
// return that value in an object.

const countLetters = function(sentence) {
  let characters = {};

  for (const letter of sentence) {
    if (/[a-zA-Z]/.test(letter)) {
      let lowerChar = letter.toLowerCase();

      if (characters[lowerChar]) {
        characters[lowerChar]++;
      } else {
        characters[lowerChar] = 1;
      }
    }
  }
  return characters;
};

console.log(countLetters("I choose you Torterra!"));