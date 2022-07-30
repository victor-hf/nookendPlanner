class Chores {
  constructor() {
    this.choresList = [];
  }

  getChoresList() {
    return this.choresList.forEach((chore) => chore.title);
  }

  addChore(title, description, frequency) {
    const newChore = {
      title: title,
      description: description,
      frequency: frequency,
    };

    this.choresList.push(newChore);
    console.log(`Added \'${newChore.title}\'`);
    return;
  }

  logChores() {
    console.log(this.choresList);
  }
}

module.exports = { Chores };
