console.log("Say goodbye to your Weeknd! Have fun with your chores!");

const utils = require("./utils.js");
const InstanceOfChores = new utils.Chores();

InstanceOfChores.addChore(
  "Vacuum appartment",
  "Vacuum all common areas and bedroom",
  "Monthly"
);
InstanceOfChores.logChores();
