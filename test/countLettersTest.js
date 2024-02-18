const countLetters = require('../countLetters')
const assert = require('chai').assert;

describe('#countLetters', () => {
  it('should count the occurrences of each letter in a sentence', () => {
    const sentence = 'Hello World';

    const result = countLetters(sentence);

    assert.deepEqual(result, { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 });
  });

  it('should handle an empty string', () => {
    const sentence = '';

    const result = countLetters(sentence);

    assert.deepEqual(result,{});
  });

  it('should handle a sentence with no letters', () => {
    const sentence = '12345!@#$';

    const result = countLetters(sentence);

    assert.deepEqual(result,{});
  });

  it('should be case-insensitive', () => {
    const sentence = 'AbC';

    const result = countLetters(sentence);

    assert.deepEqual(result,{ a: 1, b: 1, c: 1 });
  });

  it('should handle repeated letters', () => {
    const sentence = 'programming';

    const result = countLetters(sentence);

    assert.deepEqual(result,{ p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 });
  });
});