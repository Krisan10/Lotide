const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue')

describe('#findKeyByValue', () => {
  it("returns a key if the value matches the value of the key", () => {
    let eeveelutions = {Espeon: "psychic", Umbreon: "dark", Flareon: "fire", Vaporeon: "water", Leafeon: "grass"} 
    assert.deepEqual(findKeyByValue(eeveelutions, "dark"), "Umbreon")
  });

  it("returns undefined if the value does not match the key", () => {
    let eeveelutions = {Espeon: "psychic", Umbreon: "dark", Flareon: "fire", Vaporeon: "water", Leafeon: "grass"} 
    assert.deepEqual(findKeyByValue(eeveelutions, "electric"), undefined)
  });
  it("returns undefined if there is no value to match", () => {
    let eeveelutions = {Espeon: "psychic", Umbreon: "dark", Flareon: "fire", Vaporeon: "water", Leafeon: "grass"} 
    assert.deepEqual(findKeyByValue(eeveelutions), undefined)
  });


});