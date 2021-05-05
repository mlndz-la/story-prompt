const { consoleLogEachWord } = require("./utils.js");

const searchHighestAndShortestNumber = ({ numbers }) => {
  // instantiate highest and lowest number
  let lowest = Infinity;
  let highest = -Infinity;
  // iterate through numbers
  numbers.forEach((num) => {
    // if numbers at i is greater than highest number
    if (num > highest) {
      // reassign highest number to numbers at i
      highest = num;
    }
    // if numbers at i is less than lowest number
    if (num < lowest) {
      // reassign lowest number to numbers at i
      lowest = num;
    }
  });

  // log output
  console.log(`The highest number is ${highest}.`);
  console.log(`The lowest number is ${lowest}.`);
  console.log("");
};

const searchCommonWord = ({
  unitOfMeasurements,
  places,
  adjectives,
  nouns,
}) => {
  // instantiate an obj
  const cache = {};
  // declare a num, -Infinity
  let commonTimes = -Infinity;
  // declare a string
  let commonWord = "";
  // instantiate an array
  const listOfCommonWords = [];
  // declare an array, dump all array values into it
  const arrayOfWords = [
    ...unitOfMeasurements,
    ...places,
    ...adjectives,
    ...nouns,
  ];
  // iterate through array
  arrayOfWords.forEach((word) => {
    // if array at i exists in obj
    if (cache[word]) {
      // increment value by 1
      cache[word] += 1;
    } else {
      // else create a key pair value at value 1 and key of current index
      cache[word] = 1;
    }
  });

  // iterate through cache
  for (const key in cache) {
    // if value at key is greater than commonTimes
    if (cache[key] > commonTimes) {
      // reassign commonWord to key
      // reassign commonTimes to value at key
      // empty out listOfCommonWords
      commonTimes = cache[key];
      commonWord = key;
      listOfCommonWords.splice(0, listOfCommonWords.length);
    }
    // if value at key is equal to commonTimes
    if (cache[key] === commonTimes) {
      // push to listOfCommonWords
      listOfCommonWords.push(key);
    }
  }

  // log output
  if (listOfCommonWords.length < 1) {
    console.log("Here is a list of common words:");
    consoleLogEachWord(listOfCommonWords);
  } else {
    console.log(`The most common word is ${commonWord}.`);
  }
  console.log("");
};

const displayLongestAndShortestWord = (listOfLongStr, listOfShortStr) => {
  const longestWordDialogue = `The longest word is ${listOfLongStr[0]}.`;
  const shortestWordDialogue = `The shortest word is ${listOfShortStr[0]}.`;
  const longestListDialogue = "Here is a list of all the longest words:";
  const shortestListDialogue = "Here is a list of all the shortest words:";
  // if lists are length of 1
  if (listOfLongStr.length === 1 && listOfShortStr.length === 1) {
    // only display 1st word in both arrays
    console.log(longestWordDialogue);
    console.log(shortestWordDialogue);
  } else if (listOfLongStr.length > 1 && listOfShortStr.length === 1) {
    // if longest is bigger in length than 1
    // display all words for longest
    // display one for shortest
    console.log(longestListDialogue);
    consoleLogEachWord(listOfLongStr);
    console.log(shortestWordDialogue);
  } else if (listOfShortStr.length > 1 && listOfLongStr.length === 1) {
    // if shortest is bigger in length than 1
    // display all words for shortest
    // display one for longest
    console.log(longestWordDialogue);
    console.log(shortestListDialogue);
    consoleLogEachWord(listOfShortStr);
  } else {
    // display list of words for both long and short arrays
    console.log(longestListDialogue);
    consoleLogEachWord(listOfLongStr);
    console.log(shortestListDialogue);
    consoleLogEachWord(listOfShortStr);
  }
};

const searchLongestAndShortestWord = ({
  unitOfMeasurements,
  places,
  adjectives,
  nouns,
}) => {
  // dump all values into an array
  const listOfWords = [
    ...unitOfMeasurements,
    ...places,
    ...adjectives,
    ...nouns,
  ];
  // instantiate a longest word length
  let longestWord = listOfWords[0];
  // instantiate a shortest word length
  let shortestWord = listOfWords[0];
  // list of longest words
  const longestWordList = [];
  // list of shortest words
  const shortestWordList = [];
  // iterate through array
  listOfWords.forEach((word) => {
    // if length of current word is greater than longest word,
    if (word.length > longestWord.length) {
      // reinitialize
      longestWord = word;
      longestWordList.splice(0, longestWordList.length);
    }
    // if word doesn't exist in longest word list, add it
    if (word.length === longestWord.length && !longestWordList.includes(word)) {
      longestWordList.push(word);
    }
    // if length of current word is less than shortest word,
    if (word.length < shortestWord.length) {
      // reinitialize
      shortestWord = word;
      shortestWordList.splice(0, shortestWordList.length);
    }
    // if word doesn't exist in shortest word list, add it
    if (
      word.length === shortestWord.length &&
      !shortestWordList.includes(word)
    ) {
      shortestWordList.push(word);
    }
  });

  displayLongestAndShortestWord(longestWordList, shortestWordList);
  console.log("");
};

module.exports = {
  searchHighestAndShortestNumber,
  searchCommonWord,
  searchLongestAndShortestWord,
};
