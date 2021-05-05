const prompt = require("prompt-async");
const fs = require("fs");
const { filepath } = require("./utils.js");
const {
  searchHighestAndShortestNumber,
  searchCommonWord,
  searchLongestAndShortestWord,
} = require("./statsHelperFunctions.js");

const properties = [
  {
    name: "OPTION_INPUT",
    message:
      "\nPick an option.\n1. Highest & lowest number entered\n2. Most common word\n3. Longest and shortest word\n4. Back\nInsert choice here",
    before: (value) => Number(value),
  },
];

const showStats = async () => {
  let data = {};

  // stop operation if no db exists
  if (!fs.existsSync(filepath)) {
    console.log("You'll need to play before any statistics are shown.\n");
    return;
  } else {
    // grab data and pass to helper functions
    const response = fs.readFileSync(filepath, { encoding: "utf-8" });
    const parsedResponse = JSON.parse(response);
    data = {...parsedResponse}
  }

  // show prompt to pick
  const { OPTION_INPUT } = await prompt.get(properties);
  // if exit is clicked exit showStats
  // display stats
  switch (OPTION_INPUT) {
    case 1:
      console.log("");
      await searchHighestAndShortestNumber(data);
      await showStats();
      break;
    case 2:
      console.log("");
      await searchCommonWord(data);
      await showStats();
      break;
    case 3:
      console.log("");
      await searchLongestAndShortestWord(data);
      await showStats();
      break;
    case 4:
      console.log("");
      break;
    default:
      console.log("\nThat's not a 1, 2, 3 or 4. Try again.\n");
      await showStats();
      break;
  }
};

module.exports = showStats;
