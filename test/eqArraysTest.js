const assert = require('chai').assert;
const eqArrays = require('../eqArrays')

describe("#eqArrays", () => {
  it("returns true if there are two empty arrays", () => {
    assert.deepEqual(eqArrays([], []), true);
  });

  it("returns true for identical arrays", () => {
    assert.deepEqual(eqArrays(["Treecko", "Torchic", "Mudkip"], ["Treecko", "Torchic", "Mudkip"]), true);
  });

  it("returns false for non-identical arrays", () => {
    assert.deepEqual(eqArrays(["Snivy", "Tepig", "Oshawott"], ["Pansage", "Pansear", "Panpour"]), false);
  });  
})
