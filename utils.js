class Chores {
  constructor() {
    this.choresList = [];
  }

  addChore(name, description, frequency) {
    const newChore = {
      name: name,
      description: description,
      frequency: frequency,
      completed: false,
    };

    this.choresList.push(newChore);
    console.log(`Added \'${newChore.name}\'`);
    return;
  }

  logChores() {
    // add logic for empty list
    console.log(this.choresList);
  }

  completeChore(choreName) {
    const choreIndex = this.choresList.findIndex(
      (chore) => chore.name === choreName
    );
    if (choreIndex === -1) {
      console.log('No chore found under that name');
    } else {
      this.choresList[choreIndex].completed = true;
      console.log(`You completed ${this.choresList[choreIndex].title}!`);
      logEncouragingMessage();
    }
  }
}

const logEncouragingMessage = () => {
  const messages = [
    'There you go!',
    'Keep up the good work!',
    'You are one step closer to freedom!',
    'You got this!',
    'Go ninja, go ninja, go!',
    'Another one bites the dust...',
    'You are on fire!',
    "That wasn't half bad!",
  ];
  console.log(messages[Math.round(Math.random() * messages.length)]);
};

module.exports = { Chores };
