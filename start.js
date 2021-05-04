const prompt = require("prompt-async");

const startScript = async () => {
  prompt.start();

  const { option } = await prompt.get([
    {
      name: "option",
      message:
        "\nWhat would you like to do?\n1. Play a game\n2. Show Stats\n3. Quit\nInsert choice here",
    },
  ]);

  switch (Number(option)) {
    case 1:
      console.log("hi");
      break;
    case 2:
      console.log("hello");
      break;
    case 3:
      console.log("Thanks for playing! 🎈");
      break;
    default:
      console.log("That's not a 1, 2 or 3. Try again.\n\n");
      startScript();
      break;
  }
};

startScript();
