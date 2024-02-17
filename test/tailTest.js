const assert = require('chai').assert;
const tail = require('../tail')
const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), [])
  })
}); 

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); 
assertEqual(tail(words).length, 2); 
assertEqual(tail(words).length, 3); 


const pokemon = ["Pikachu", "Rampardos", "Tsareena", "Flamigo"];
console.log(tail(pokemon));
assertEqual(tail(pokemon).length, 3);

const digimon = ["Angewomon"]
console.log(tail(digimon));
assertEqual(tail(digimon).length, 0)
assertEqual(tail(digimon).length, 1)