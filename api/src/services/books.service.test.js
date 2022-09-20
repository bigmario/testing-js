const BookService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

const fakeBooks2 = [
  {
    _id: 1,
    name: 'Harry Potter2',
  },
];

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks();
  });
  describe('test for getBooks', () => {
    test('Should return book list', async () => {
      // Arrange
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books.length).toEqual(1);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return book list', async () => {
      // Arrange
      mockGetAll.mockResolvedValue(fakeBooks2);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books[0].name).toEqual('Harry Potter2');
    });
  });
});
