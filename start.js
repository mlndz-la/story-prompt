const prompt = require("prompt-async");
const playAGame = require("./play.js");
const showStats = require("./stats.js");

const properties = [
  {
    name: "INPUT_OPTION",
    message:
      "\nWhat would you like to do?\n1. Play a game\n2. Show Stats\n3. Quit\nInsert choice here",
    before: (value) => Number(value),
  },
];

prompt.start();

const startScript = async () => {
  const { INPUT_OPTION } = await prompt.get(properties);

  switch (INPUT_OPTION) {
    case 1:
      // anna game prompt
      await playAGame();
      startScript();
      break;
    case 2:
      // show the record of all played games
      console.log("");
      await showStats();
      startScript();
      break;
    case 3:
      // exit the application
      console.log("\nThanks for playing! 🎈");
      break;
    default:
      // incorrect input
      console.log("That's not a 1, 2 or 3. Try again.\n");
      startScript();
      break;
  }
};

startScript();
