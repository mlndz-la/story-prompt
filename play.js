const prompt = require("prompt-async");
const fs = require("fs");

const regexString = /^[a-zA-Z\s\-]+$/;
const regexNumber = /^[0-9]*$/;
const filepath = "records.json";
const properties = [
  {
    name: "INPUT_NUMBER",
    message: "Enter a number",
    validator: regexNumber,
    warning: "Please enter a number.\n",
    required: true,
    before: (value) => Number(value),
  },
  {
    name: "INPUT_UNIT_OF_MEASURE",
    validator: regexString,
    message: "Enter a unit of measure",
    warning: "Please enter a unit of measurement.\n",
    required: true,
  },
  {
    name: "INPUT_PLACE",
    validator: regexString,
    message: "Enter a place",
    warning: "Please enter a place.\n",
    required: true,
  },
  {
    name: "INPUT_ADJECTIVE",
    validator: regexString,
    message: "Enter an adjective",
    warning: "Please enter an adjective.\n",
    required: true,
  },
  {
    name: "INPUT_NOUN",
    validator: regexString,
    message: "Enter a noun",
    warning: "Please enter a noun.\n",
    required: true,
  },
];

const playAGame = async () => {
  console.log("\nHelp guide Anna.\n");

  // prompt the user
  const {
    INPUT_NUMBER,
    INPUT_UNIT_OF_MEASURE,
    INPUT_PLACE,
    INPUT_ADJECTIVE,
    INPUT_NOUN,
  } = await prompt.get(properties);

  // check if file exists
  if (fs.existsSync(filepath)) {
    // read file
    // parse the read file
    // add in new data
    // write to file
    const response = fs.readFileSync(filepath, { encoding: "utf-8" });
    const {
      numbers,
      unitOfMeasurements,
      places,
      adjectives,
      nouns,
    } = JSON.parse(response);
    const newData = {
      numbers: [...numbers, INPUT_NUMBER],
      unitOfMeasurements: [...unitOfMeasurements, INPUT_UNIT_OF_MEASURE],
      places: [...places, INPUT_PLACE],
      adjectives: [...adjectives, INPUT_ADJECTIVE],
      nouns: [...nouns, INPUT_NOUN],
    };
    fs.writeFileSync(filepath, JSON.stringify(newData), { encoding: "utf-8" });
  } else {
    // create file
    // add new data
    const obj = {
      numbers: [INPUT_NUMBER],
      unitOfMeasurements: [INPUT_UNIT_OF_MEASURE],
      places: [INPUT_PLACE],
      adjectives: [INPUT_ADJECTIVE],
      nouns: [INPUT_NOUN],
    };
    fs.writeFileSync(filepath, JSON.stringify(obj));
  }

  console.log(
    `\nOne day Anna was walking her ${INPUT_NUMBER} ${INPUT_UNIT_OF_MEASURE} commute to ${INPUT_PLACE} and found a ${INPUT_ADJECTIVE} ${INPUT_NOUN} on the ground.\n`
  );
};

module.exports = playAGame;
