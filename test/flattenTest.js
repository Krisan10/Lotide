const flatten = require('../flatten')
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns ['weedle', 'kakuna', 'beedrill'] from ['weedle', 'kakuna', beedrill]", () => {
    assert.deepEqual(flatten(['weedle', 'kakuna', 'beedrill']), ['weedle', 'kakuna', 'beedrill'])
  });

  it("returns [] from []", () => {
    assert.deepEqual(flatten([]), [] )
  });

  it("returns ['applin', 'appletun', 'flapple', 'dipplin', 'hydrapple'] from ['applin', 'appletun', 'flapple', ['dipplin', 'hydrapple']]", () => {
    assert.deepEqual(flatten(['applin', 'appletun', 'flapple', ['dipplin', 'hydrapple']]),['applin', 'appletun', 'flapple', 'dipplin', 'hydrapple'])
  });

it("returns ['arceus', 'dialga', 'palkia', 'giratina', ['mesprit', 'azelf', 'uxie']] from ['arceus', ['dialga', 'palkia', 'giratina', ['mesprit', 'azelf', 'uxie']]]", () => {
  assert.deepEqual(flatten(['arceus', ['dialga', 'palkia', 'giratina', ['mesprit', 'azelf', 'uxie']]]), ['arceus', 'dialga', 'palkia', 'giratina', ['mesprit', 'azelf', 'uxie']])
})
})