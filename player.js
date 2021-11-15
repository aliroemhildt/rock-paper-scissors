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

  takeTurn(choices) {
    var randomSelection = Math.floor(Math.random() * choices.length);
    return choices[randomSelection];
  };
};

// module.exports = Player;
