// import the Media class:
const Media = require("./Media");

// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }

  static longestMovie(arr) {
    return arr.reduce(
      (longestDuration, movie) =>
        movie.duration > (longestDuration?.duration || 0)
          ? movie
          : longestDuration,
      null
    );
  }

  static calculateAverageRating(movies) {
    return movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
}

// don't change below
module.exports = Movie;
