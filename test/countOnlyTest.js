const countOnly = require('../countOnly')
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("returns 2 when counting Metagross for [Lopunny, Slaking, Honchkrow, Metagross, Metagross, Florges]", () => {
    assert.deepEqual(countOnly(["Metagross", "Slaking", "Clefairy", "Metagross", "Rhyperior"], {Metagross: true}), {Metagross: 2});
  });

  it("returns {} when not counting Graveler for [Golurk, Golduck, Goldeen, Gravler, Gholdengo, Graveler", () => {
    assert.deepEqual(countOnly (["Golurk", "Golduck", "Graveler", "Gholdengo", "Graveler"], {Graveler: false}), {})
  });

it("returns {} when counting Wurmple for [Geodude, Zubat, Aron, Makuhita]", () => {
  assert.deepEqual(countOnly(["Geodude","Zubat", "Aron", "Makuhita", "Zubat"], {Wurmple: true}), {})
})

it("returns {} when not counting Trapinch for [Tropius, Absol, Linoone, Linoone, Keckleon]", () => {
assert.deepEqual(countOnly(["Keckleon", "Tropius", "Linoone", "Absol", "Linoone"], {Trapinch: false}), {})
})
});


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(countOnly(firstNames, {Fang: false}))