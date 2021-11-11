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

  takeTurn(array of choices, game object ?) {
    if (this.name === 'Computer') {
      var randomSelection = Math.floor(Math.random() * choices.length);
      this.selection = choices[randomSelection];
    } else if (this.name === 'Human') {
      this.slection = // do I need to access a query selector/something from main to see what the person clicked?
    }
  };

};

module.exports = Player;
