// matchers
test('test obj', () => {
  const data = { name: 'Mario' };
  data.lastName = 'Castro';
  expect(data).toEqual({ name: 'Mario', lastName: 'Castro' });
});

test('test null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('test booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('test string', () => {
  expect('Christoph').toMatch(/stop/);
});

test('test list */arrays', () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  expect(numbers).toContain(3);
});
