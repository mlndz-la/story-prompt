const prompt = require("prompt-async");
const fs = require("fs");

const properties = [
  {
    name: "NUMBER",
    message: "Enter a number",
    validator: /^[0-9]$/,
    warning: "Please enter a number.\n",
  },
  {
    name: "UNIT_OF_MEASURE",
    message: "Enter a unit of measure",
    warning: "Please enter a unit of measurement.\n",
  },
  {
    name: "PLACE",
    message: "Enter a place",
    warning: "Please enter a place.\n",
  },
  {
    name: "ADJECTIVE",
    message: "Enter an adjective",
    warning: "Please enter an adjective.\n",
  },
  {
    name: "NOUN",
    message: "Enter a noun",
    warning: "Please enter a noun.\n",
  },
];

const playAGame = async () => {
  console.log("\nHelp guide Anna.\n");

  // prompt the user
  const { NUMBER, UNIT_OF_MEASURE, PLACE, ADJECTIVE, NOUN } = await prompt.get(
    properties
  );

  // check if file exists
    // read file
    // parse the read file
    // add in new data
    // write to file
  // else
    // create file
    // add new data
  
  console.log(
    `\nOne day Anna was walking her ${NUMBER} ${UNIT_OF_MEASURE} commute to ${PLACE} and found a ${ADJECTIVE} ${NOUN} on the ground.\n`
  );
};

module.exports = playAGame;
