const words = ["doll", "penguin", "desk", "remote", "zelda"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
 const grassStarters = ["treeko", "bulbasaur", "snivy", "rowlett"]
 const numbers = ["1", "5", "76", "405", "302223"]
 const pokemon = map(grassStarters, starter => starter[0])
 const digits = map(numbers, numb => numb[0])
const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, ["d","p","d","r","z"]));
console.log(assertArraysEqual(pokemon, ["t","b","s","r"]));
console.log(assertArraysEqual(digits, [1, 5, 7, 4, 3]));
