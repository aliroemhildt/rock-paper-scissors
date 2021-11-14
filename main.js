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
var game = new Game(human, computer, classic);

game.playRound(game.gameType.choices, 'rock-on');
game.chooseWinnerDifficult(game.human, game.computer);
console.log(game.human.name, ': ', game.human.selection, '\n', game.computer.name, ': ', game.computer.selection, '\n', 'Winner : ', game.winner);

//////
var rock = document.querySelector('rock-js');
var paper = document.querySelector('paper-js');
var scissors = document.querySelector('scissors-js');
var alien = document.querySelector('alien-js');
var rockOn = document.querySelector('rock-on-js');

rock.addEventListener('click', updatePlayerChoice);
paper.addEventListener('click', updatePlayerChoice);
scissors.addEventListener('click', updatePlayerChoice);
alien.addEventListener('click', updatePlayerChoice);
rockOn.addEventListener('click', updatePlayerChoice);

function updatePlayerChoice() {
  if (event.target.classList.contains('rock-js')) {
    game.human.selection = 'rock';
  } else if (event.target.classList.contains('paper-js')) {
    game.human.selectoin = 'paper';
  } else if (event.target.classList.contains('scissor-js')) {
    game.human.selection = 'scissors';
  };
}
