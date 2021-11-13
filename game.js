// var Player = require('./player.js');

class Game {
  constructor(player1, player2, gameType) {
    this.human = player1;
    this.computer = player2;
    this.winner = '';
    this.gameType = gameType;
    // gameTypes that will be used:
    // {type: 'classic',
    // choices = ['rock', 'paper', 'scissors']}
    // {type: 'difficult',
    // choices = ['rock', 'paper', 'scissors', 'rock-on', 'alien']}
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
    } else if (
      (player1.selection === 'rock' && player2.selection === 'paper') ||
      (player1.selection === 'paper' && player2.selection === 'scissors') ||
      (player1.selection === 'scissors' && player2.selection === 'rock')) {
        this.winner = player2.name;
    };
  };

  chooseWinnerDifficult(player1, player2) {
    if (player1.selection === player2.selection) {
      this.winner = 'Tie';
    } else if (
      (player1.selection === 'rock' && (player2.selection === 'scissors' || player2.selection === 'alien')) ||
      (player1.selection === 'paper' && (player2.selection === 'rock-on' || player2.selection === 'rock')) ||
      (player1.selection === 'scissors' && (player2.selection === 'paper' || player2.selection === 'alien')) ||
      (player1.selection === 'alien' && (player2.selection === 'paper' || player2.selection === 'rock-on')) ||
      (player1.selection === 'rock-on' && (player2.selection === 'rock' || player2.selection === 'scissors'))) {
        this.winner = player1.name;
    } else if (
      (player1.selection === 'rock' && (player2.selection === 'paper' || player2.selection === 'rock-on')) ||
      (player1.selection === 'paper' && (player2.selection === 'alien' || player2.selection === 'scissors')) ||
      (player1.selection === 'scissors' && (player2.selection === 'rock' || player2.selection === 'rock-on')) ||
      (player1.selection === 'alien' && (player2.selection === 'rock' || player2.selection === 'scissors')) ||
      (player1.selection === 'rock-on' && (player2.selection === 'paper' || player2.selection === 'alien'))) {
        this.winner = player2.name;
    };
  };
};

// module.exports = Game;
