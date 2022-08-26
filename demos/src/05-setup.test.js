// setup
describe('Set', () => {
  afterAll(() => {
    console.log('afterAll');
    // down db
  });

  beforeAll(() => {
    console.log('beforeAll');
    // up db
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('case 2');
    expect(20 + 1).toBe(21);
  });

  describe('Set 2', () => {
    test('case 3', () => {
      console.log('case 3');
      expect(2 + 2).toBe(4);
    });

    test('case 4', () => {
      console.log('case 4');
      expect(4 + 1).toBe(5);
    });
  });
});
