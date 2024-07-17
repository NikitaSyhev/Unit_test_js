const {sum, nativeNull} = require('./intro');

test('Sum should return sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });