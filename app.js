console.log("Say goodbye to your Wknd! \nHave fun with your chores!");

const utils = require("./utils.js");
const Chores = new utils.Chores();

Chores.addChore(
  "Dishes",
  "Put dishes in dishwasher",
  "Monthly"
);

Chores.addChore(
  "Vacuum appartment",
  "Vacuum all common areas and bedroom",
  "Monthly"
);

Chores.logChores();

Chores.completeChore("Vacuum appartment")

Chores.logChores();
