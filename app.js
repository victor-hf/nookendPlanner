console.log("Say goodbye to your Weeknd! Have fun with your chores!");

const utils = require("./utils.js");
const Chores = new utils.Chores();

Chores.addChore(
  "Vacuum appartment",
  "Vacuum all common areas and bedroom",
  "Monthly"
);

Chores.addChore(
  "Load dishwasher",
  "Put all dishes in dishwasher",
  "Every 2 days"
);

Chores.addChore("Make bed", "you know", "daily");

Chores.logChores();
