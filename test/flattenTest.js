const flatten = require('../flatten')
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns an array if none of the items are in an array", () => {
    assert.deepEqual(flatten(['weedle', 'kakuna', 'beedrill']), ['weedle', 'kakuna', 'beedrill'])
  });

  it("returns an empty array if there is nothing in the array", () => {
    assert.deepEqual(flatten([]), [] )
  });

  it("returns  an array if there is one nested array inside", () => {
    assert.deepEqual(flatten(['applin', 'appletun', 'flapple', ['dipplin', 'hydrapple']]),['applin', 'appletun', 'flapple', 'dipplin', 'hydrapple'])
  });

it("returns a nested array if the nested array was two or more magnitudes higher" , () => {
  assert.deepEqual(flatten(['arceus', ['dialga', 'palkia', 'giratina', ['mesprit', 'azelf', 'uxie']]]), ['arceus', 'dialga', 'palkia', 'giratina', ['mesprit', 'azelf', 'uxie']])
})
})