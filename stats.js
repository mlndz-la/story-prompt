const prompt = require("prompt-async");
const fs = require("fs");
const { filepath } = require("./utils.js");

const properties = [
  {
    name: "OPTION_INPUT",
    message:
      "\nPick an option.\n1. Highest & lowest number entered\n2. Most common response\n3. Longest and shortest word\n4. Back\nInsert choice here",
    before: (value) => Number(value),
  },
];

const showStats = async () => {
  if (!fs.existsSync(filepath)) {
    console.log("You'll need to play before any statistics are shown.\n")
    return;
  }
  // show prompt to pick
  const { OPTION_INPUT } = await prompt.get(properties);
  // if exit is clicked exit showStats
  // display stats
  switch (OPTION_INPUT) {
    case 1:
      console.log("");
      await showStats();
      break;
    case 2:
      console.log("");
      await showStats();
      break;
    case 3:
      console.log("");
      await showStats();
      break;
    case 4:
      console.log("");
      break;
    default:
      console.log("That's not a 1, 2, 3 or 4. Try again.\n");
      await showStats();
      break;
  }
};

module.exports = showStats;
