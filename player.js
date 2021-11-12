class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.selection = ''; // not sure if i need this, might store which button is selected
  };

  saveWinsToStorage() {
    var stringifiedWins = JSON.stringify(this.wins)
    localStorage.setItem('human-wins', stringifiedWins);
  };

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem('human-wins');
    unstringifiedWins = JSON.parse(retrievedWins);
    this.wins = unstringifiedWins;
  };

  takeTurn(choices) {
    var randomSelection = Math.floor(Math.random() * choices.length);
    return choices[randomSelection];
  };

};

module.exports = Player;
