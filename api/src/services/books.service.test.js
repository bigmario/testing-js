const BookService = require('./books.service');

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
  });
  describe('test for getBooks', () => {
    test('Should return book list', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
    });
  });
});
