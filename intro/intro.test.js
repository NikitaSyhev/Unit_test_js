const {sum, nativeNull} = require('./intro');

describe('Sum function', ()=> {
  test('should return sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

test('shoudl be greater than', ()=> {
  expect(sum(2,5)).toBeGreaterThan(5);
  expect(sum(2,5)).toBeGreaterThanOrEqual(7);
  expect(sum(2,5)).toBeLessThan(8);
  });

  test('should sum 2 float values correctly', ()=> {
    expect(sum(0.3, 0.4)).toBeCloseTo(0.7);
  });
})


describe('Native null', ()=> {
  test('function should return false value null', ()=> {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeFalsy();
  })
})

