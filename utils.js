// one reference to the location of the db
const filepath = "./records.json";

const consoleLogEachWord = (arrayOfWords) =>
  arrayOfWords.forEach((word) => console.log(word));

module.exports = { filepath, consoleLogEachWord };
