const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue')

describe('#findKeyByValue', () => {
  it("returns Umbreon if the value is dark from {Espeon: 'psychic', Umbreon: 'dark', Flareon: 'fire', Vaporeon: 'water', Leafeon: 'grass'}", () => {
    let eeveelutions = {Espeon: "psychic", Umbreon: "dark", Flareon: "fire", Vaporeon: "water", Leafeon: "grass"} 
    assert.deepEqual(findKeyByValue(eeveelutions, "dark"), "Umbreon")
  });

  it("returns undefined if the value is electric from {Espeon: 'psychic', Umbreon: 'dark', Flareon: 'fire', Vaporeon: 'water', Leafeon: 'grass'}", () => {
    let eeveelutions = {Espeon: "psychic", Umbreon: "dark", Flareon: "fire", Vaporeon: "water", Leafeon: "grass"} 
    assert.deepEqual(findKeyByValue(eeveelutions, "electric"), undefined)
  });
});