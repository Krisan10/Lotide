const assert = require('chai').assert;
const without = require("../without")

describe('#without', () => {
  it('should remove specified items from the array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const itemsToRemove = [2, 4];

    const result = without(inputArray, itemsToRemove);
    assert.deepEqual(result, [1, 3, 5])

  });

  it('should handle an empty input array', () => {
    const inputArray = [];
    const itemsToRemove = [2, 4];

    const result = without(inputArray, itemsToRemove);
    assert.deepEqual(result, [])
  });

  it('should handle an empty itemsToRemove array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const itemsToRemove = [];

    const result = without(inputArray, itemsToRemove);
    assert.deepEqual(result, [1, 2, 3, 4, 5])
  });

  it('should not modify the original array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const itemsToRemove = [2, 4];

    const result = without(inputArray, itemsToRemove);

    assert.deepEqual(inputArray, [1, 2, 3, 4, 5]);
  });
});