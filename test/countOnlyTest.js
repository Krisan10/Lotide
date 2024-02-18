const countOnly = require('../countOnly')
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("returns a number according to the itemsToCount parameter", () => {
    assert.deepEqual(countOnly(["Metagross", "Slaking", "Clefairy", "Metagross", "Rhyperior"], {Metagross: true}), {Metagross: 2});
  });

  it("returns {} not counting an item", () => {
    assert.deepEqual(countOnly (["Golurk", "Golduck", "Graveler", "Gholdengo", "Graveler"], {Graveler: false}), {})
  });

it("returns {} when the item being counted does not exist in the array", () => {
  assert.deepEqual(countOnly(["Geodude","Zubat", "Aron", "Makuhita", "Zubat"], {Wurmple: true}), {})
})

it("returns {} when not counting an item that does not exist", () => {
assert.deepEqual(countOnly(["Keckleon", "Tropius", "Linoone", "Absol", "Linoone"], {Trapinch: false}), {})
})
});
