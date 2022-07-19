class Chores {
    constructor() {
        this.choresList = [];
    }

    getChoresList() {
        return this.choresList.forEach(chore => chore.title);
    }

    addChore(title, description, frequency) {
        const newChore = {
            title: title,
            description: description,
            frequency: frequency
        };

        this.choresList.push(newChore);
        return `Added ${newChore.title}`;
    }

    logChores() {
        console.log(this.choresList);
    }
};


module.exports = {Chores};