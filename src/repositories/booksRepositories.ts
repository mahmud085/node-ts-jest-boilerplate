import BooksData from '../data/books';

export async function getBooks() {
  const books = await BooksData.getBooks();
  return books;
}

export async function addBook(data: any) {
  const book = await BooksData.addBook(data);
  return book;
}