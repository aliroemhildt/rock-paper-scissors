// var Game = require('./game.js');
// var Player = require('./player.js');

var human = new Player('Human', '🙂');
var computer = new Player('Computer', '🤖');
var classic = {
  type: 'classic',
  choices: ['rock', 'paper', 'scissors']
};
var difficult = {
  type: 'difficult',
  choices: ['rock', 'paper', 'scissors', 'alien', 'rock-on']
};
var classicGame = new Game(human, computer, classic);
var difficultGame = new Game(human, computer, difficult);

difficultGame.playRound(difficultGame.gameType.choices, 'rock-on');
difficultGame.chooseWinnerDifficult(difficultGame.human, difficultGame.computer);
console.log(difficultGame.human.name, ': ', difficultGame.human.selection, '\n',difficultGame.computer.name, ': ',difficultGame.computer.selection, '\n', 'Winner : ', difficultGame.winner);
