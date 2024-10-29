// import the Media class:
const Media = require("./Media");
// create your Book class:
class Book extends Media {
  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }

  static calculateAverageRating(books) {
    return books.reduce((sum, movie) => sum + movie.rating, 0) / books.length;
  }

  static highestRating(arr) {
    let highestRate = 0;
    let highestBook;
    for (let book of arr) {
      if (book.rating > highestRate) {
        highestRate = book.rating;
        highestBook = book;
      }
    }
    return highestBook;
  }

  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
}

// don't change below
module.exports = Book;
