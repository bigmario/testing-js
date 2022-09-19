const Person = require('./06-person');

describe('Test for Person', () => {
  let person;

  beforeAll(() => {
    person = new Person('Mario', 45, 1.78); // Arrange
  });

  test('should return normal', () => {
    person.weight = 70;
    const imc = person.calcIMC(); // Act / When
    expect(imc).toBe('normal'); // Assert / Then
  });

  test('should return down', () => {
    person.weight = 50;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });
});
