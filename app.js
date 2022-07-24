console.log("Say goodbye to your Weeknd! Have fun with your chores!");

const hlp = require('./helper.js');
const InstanceOfChores = new hlp.Chores;


InstanceOfChores.addChore('Vacuum appartment', 'Vacuum all common areas and bedroom', 'Monthly');
InstanceOfChores.logChores();