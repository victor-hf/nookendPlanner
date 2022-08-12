console.log('Say goodbye to your Wknd! \nHave fun with your chores!');

const utils = require('./utils.js');
const Chores = new utils.Chores();

Chores.logChores();

Chores.addChore('Dishes', 'Put dishes in dishwasher', 'Monthly');
Chores.addChore('Make bed', 'you know', 'daily');
Chores.addChore('Clean cat', 'Dust off the cat', 'Daily');

Chores.completeChore('Vacuum appartment');
