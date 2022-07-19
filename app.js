console.log("Say goodbye to your Weeknd! Have fun with your chores!");

const Chore = require('./helper.js');

const chores = [];

const testChore = new Chore('Recycling', 'Empty recicling bins', 'Weekly');
chores.push(testChore);

const testChore2 = new Chore('Vacuum appartment', 'Vacuum all common areas and bedroom', 'Monthly');
chores.push(testChore2);


console.log(chores);