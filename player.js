class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.selection = '';
  };

  saveWinsToStorage() {
    var stringifiedWins = JSON.stringify(this.wins)
    localStorage.setItem(`${this.name}-wins`, stringifiedWins);
  };

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem(`${this.name}-wins`);
    var unstringifiedWins = JSON.parse(retrievedWins);
    return unstringifiedWins;
  };

  takeTurn(choice, choices) {
    if (this.name === 'Human') {
      this.selection = choice;
    } else if (this.name === 'Computer') {
      var randomSelection = Math.floor(Math.random() * choices.length);
      this.selection = choices[randomSelection];
    };
  };
};
