const assert = require('chai').assert;
const map = require('../map')

describe("#map", () => {
  it("should apply a callback to each item of an array", () => {
    const inputArray = [1, 2, 3];
    const callback = (x) => x * 2;

    const result = map(inputArray, callback);
    assert.deepEqual(result, [2, 4, 6]);
  });

  it('should return an empty array for an empty input array', () => {
    const inputArray = [];
    const callback = (x) => x * 2;

    const result = map(inputArray, callback);
    assert.deepEqual(result, [])
  });

  it('should work with different types of elements', () => {
    const inputArray = ['a', 2, { key: 'value' }];
    const callback = (x) => (typeof x === 'number' ? x * 2 : x);

    const result = map(inputArray, callback);
    assert.deepEqual(result, ['a', 4, { key: 'value' }])
});
})