const { sum, multiply, divide } = require('./02-math');

describe('Tests for Sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    const rta = sum(1, 2);
    expect(rta).toBe(3);
  });
});

describe('Tests for Multiply', () => {
  test('multiply 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
  });
});

describe('Tests for Divide', () => {
  test('divide 2 / 2 to equal 1', () => {
    expect(divide(2, 2)).toBe(1);
    expect(divide(3, 2)).toBe(1.5);
  });

  test('divide 2 / 0 to equal null', () => {
    expect(divide(2, 0)).toBe(null);
    expect(divide(3, 0)).toBe(null);
  });
});
