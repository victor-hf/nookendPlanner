class Chores {
  constructor() {
    this.choresList = [];
  }

  addChore(title, description, frequency) {
    const newChore = {
      title: title,
      description: description,
      frequency: frequency,
      completed: false,
    };

    this.choresList.push(newChore);
    console.log(`Added \'${newChore.title}\'`);
    return;
  }

  logChores() {
    // add logic for empty list
    console.log(this.choresList);
  }

  completeChore(targetChoreTitle) {
    const choreIndex = this.choresList.findIndex(
      (chore) => chore.title === targetChoreTitle
    );

    // add logic for when tasks are null and/or not found
    this.choresList[choreIndex].completed = true;
    console.log(`You completed ${this.choresList[choreIndex].title}! \nYou are one step closer to freedom!`)
  }
}

module.exports = { Chores };
