const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual} === ${expected}`)} else {
    console.log( `😂😂😂 Assertion Failed: ${actual} !== ${expected}`)
  }
};
const tail = function(array) {
    if (array.length > 1) {
      return array.slice(1);
    } else {
      return [];
    }
  };

  const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 4); // original array should still have 3 elements!
assertEqual(words.length, 3);

const pokemon = ["Pikachu", "Rampardos", "Tsareena", "Flamigo"]
tail(pokemon)
assertEqual(pokemon.length, 4);
assertEqual(pokemon.length, 9);