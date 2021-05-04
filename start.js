const prompt = require("prompt-async");

const playAGame = require("./play.js");

const properties = {
  name: "option",
  message:
    "\nWhat would you like to do?\n1. Play a game\n2. Show Stats\n3. Quit\nInsert choice here",
};

const startScript = async () => {
  prompt.start();

  const { option } = await prompt.get([properties]);

  switch (Number(option)) {
    case 1:
      // anna game prompt
      await playAGame();
      startScript();
      break;
    case 2:
      // show the record of all played games
      console.log("STATS");
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
