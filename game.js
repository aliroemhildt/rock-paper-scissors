// var Player = require('./player.js');

class Game {
  constructor(player1, player2, gameType) {
    this.human = player1;
    this.computer = player2;
    this.winner = '';
    this.type = gameType;
  };

  resetGame() {
    this.winner='';
    this.human.selection = '';
    this.computer.selection = '';
};

  playRound(choices, choice) {
    this.human.selection = choice;
    this.computer.selection = this.computer.takeTurn(choices);
  };

  chooseWinnerClassic() {
    if (this.human.selection === this.computer.selection) {
      this.winner = 'tie';
    } else if (
      (this.human.selection === 'rock' && this.computer.selection === 'scissors') ||
      (this.human.selection === 'paper' && this.computer.selection === 'rock') ||
      (this.human.selection === 'scissors' && this.computer.selection === 'paper')) {
        this.winner = this.human.name;
        this.human.wins++;
    } else if (
      (this.human.selection === 'rock' && this.computer.selection === 'paper') ||
      (this.human.selection === 'paper' && this.computer.selection === 'scissors') ||
      (this.human.selection === 'scissors' && this.computer.selection === 'rock')) {
        this.winner = this.computer.name;
        this.computer.wins++;
    };
  };

  chooseWinnerDifficult() {
    if (this.human.selection === this.computer.selection) {
      this.winner = 'tie';
    } else if (
      (this.human.selection === 'rock' && (this.computer.selection === 'scissors' || this.computer.selection === 'alien')) ||
      (this.human.selection === 'paper' && (this.computer.selection === 'rock-on' || this.computer.selection === 'rock')) ||
      (this.human.selection === 'scissors' && (this.computer.selection === 'paper' || this.computer.selection === 'alien')) ||
      (this.human.selection === 'alien' && (this.computer.selection === 'paper' || this.computer.selection === 'rock-on')) ||
      (this.human.selection === 'rock-on' && (this.computer.selection === 'rock' || this.computer.selection === 'scissors'))) {
        this.winner = this.human.name;
        this.human.wins++;
    } else if (
      (this.human.selection === 'rock' && (this.computer.selection === 'paper' || this.computer.selection === 'rock-on')) ||
      (this.human.selection === 'paper' && (this.computer.selection === 'alien' || this.computer.selection === 'scissors')) ||
      (this.human.selection === 'scissors' && (this.computer.selection === 'rock' || this.computer.selection === 'rock-on')) ||
      (this.human.selection === 'alien' && (this.computer.selection === 'rock' || this.computer.selection === 'scissors')) ||
      (this.human.selection === 'rock-on' && (this.computer.selection === 'paper' || this.computer.selection === 'alien'))) {
        this.winner = this.computer.name;
        this.computer.wins++;
    };
  };
};

// module.exports = Game;
