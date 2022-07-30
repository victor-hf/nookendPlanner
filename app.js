console.log("Say goodbye to your Weeknd! Have fun with your chores!");

const utils = require("./utils.js");
const Chores = new utils.Chores();

Chores.addChore(
  "Vacuum appartment",
  "Vacuum all common areas and bedroom",
  "Monthly"
);
Chores.logChores();
