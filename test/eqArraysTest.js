const assert = require('chai').assert;
const eqArrays = require('../eqArrays')

describe("#eqArrays", () => {
  it("returns true for ([], [])", () => {
    assert.deepEqual(eqArrays([], []), true);
  });

  it("returns true for (['Treecko', 'Torchic', 'Mudkip'], ['Treecko', 'Torchic', 'Mudkip'])", () => {
    assert.deepEqual(eqArrays(["Treecko", "Torchic", "Mudkip"], ["Treecko", "Torchic", "Mudkip"]), true);
  });

  it("returns false for (['Snivy', 'Tepig', 'Oshawott'], ['Pansage', 'Pansear', 'Panpour'])", () => {
    assert.deepEqual(eqArrays(["Snivy", "Tepig", "Oshawott"], ["Pansage", "Pansear", "Panpour"]), false);
  });  
})
