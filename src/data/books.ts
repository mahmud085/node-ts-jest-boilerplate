const Book = require("./db");

export default {
  getBooks: () => {
    return Book.find(function (err: any, data: any) {
      return data;
    });
  },
  addBook: (data: any) => {
    const book = new Book(data);
    book.save(function (err: any, data: any) {
        if (err) console.log(err);
        else return data;
    });
  },
};