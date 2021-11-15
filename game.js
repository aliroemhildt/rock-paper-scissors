// var Player = require('./player.js');

class Game {
  constructor(player1, player2, gameType) {
    this.human = player1;
    this.computer = player2;
    this.winner = '';
    this.type = gameType;
  };

  // can look into using conditions array instead ???
  playRound(choices, choice) {
    this.human.selection = choice;
    this.computer.selection = this.computer.takeTurn(choices);
  };

  chooseWinnerClassic(player1, player2) {
    if (player1.selection === player2.selection) {
      this.winner = 'Tie';
    } else if (
      (player1.selection === 'rock' && player2.selection === 'scissors') ||
      (player1.selection === 'paper' && player2.selection === 'rock') ||
      (player1.selection === 'scissors' && player2.selection === 'paper')) {
        this.winner = player1.name;
        player1.wins++;
    } else if (
      (player1.selection === 'rock' && player2.selection === 'paper') ||
      (player1.selection === 'paper' && player2.selection === 'scissors') ||
      (player1.selection === 'scissors' && player2.selection === 'rock')) {
        this.winner = player2.name;
        player2.wins++;
    };
  };

  chooseWinnerDifficult(player1, player2) {
    if (player1.selection === player2.selection) {
      this.winner = 'tie';
    } else if (
      (player1.selection === 'rock' && (player2.selection === 'scissors' || player2.selection === 'alien')) ||
      (player1.selection === 'paper' && (player2.selection === 'rock-on' || player2.selection === 'rock')) ||
      (player1.selection === 'scissors' && (player2.selection === 'paper' || player2.selection === 'alien')) ||
      (player1.selection === 'alien' && (player2.selection === 'paper' || player2.selection === 'rock-on')) ||
      (player1.selection === 'rock-on' && (player2.selection === 'rock' || player2.selection === 'scissors'))) {
        this.winner = player1.name;
        player1.wins++;
    } else if (
      (player1.selection === 'rock' && (player2.selection === 'paper' || player2.selection === 'rock-on')) ||
      (player1.selection === 'paper' && (player2.selection === 'alien' || player2.selection === 'scissors')) ||
      (player1.selection === 'scissors' && (player2.selection === 'rock' || player2.selection === 'rock-on')) ||
      (player1.selection === 'alien' && (player2.selection === 'rock' || player2.selection === 'scissors')) ||
      (player1.selection === 'rock-on' && (player2.selection === 'paper' || player2.selection === 'alien'))) {
        this.winner = player2.name;
        player2.wins++;
    };
  };
};

// module.exports = Game;
