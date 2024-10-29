// import the Media class:
const Media = require("./Media");

// create your Music class:
class Music extends Media {
  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }

  static shortestAlbum(arr) {
    return arr.reduce((shortest, music) =>
      music.length < shortest?.length ? music : shortest
    );
  }

  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
  }
}

// don't change below
module.exports = Music;
