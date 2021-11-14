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

// game.playRound(game.gameType.choices, 'rock-on');
// game.chooseWinnerDifficult(game.human, game.computer);
// console.log(game.human.name, ': ', game.human.selection, '\n', game.computer.name, ': ', game.computer.selection, '\n', 'Winner : ', game.winner);

//////
var rock = document.querySelector('.rock-js');
var paper = document.querySelector('.paper-js');
var scissors = document.querySelector('.scissors-js');
var alien = document.querySelector('.alien-js');
var rockOn = document.querySelector('.rock-on-js');

rock.addEventListener('click', chooseIcon);
paper.addEventListener('click', chooseIcon);
scissors.addEventListener('click', chooseIcon);
alien.addEventListener('click', chooseIcon);
rockOn.addEventListener('click', chooseIcon);
window.addEventListener('load', displayPlayerInfo);

function chooseIcon() {
  updateHumanSelection();
  showHumanSelection();
};

function updateHumanSelection() {
  if (event.target.classList.contains('rock-js')) {
    game.human.selection = 'rock';
  } else if (event.target.classList.contains('paper-js')) {
    game.human.selection = 'paper';
  } else if (event.target.classList.contains('scissors-js')) {
    game.human.selection = 'scissors';
  } else if (event.target.classList.contains('alien-js')) {
    game.human.selection = 'alien';
  } else if (event.target.classList.contains('rock-on-js')) {
    game.human.selection = 'rock-on';
  };
};

function showHumanSelection() {
  var selectedIcon = document.getElementsByClassName(`human-token ${game.human.selection}-js`);
  selectedIcon[0].innerText = `${game.human.token}`;
  toggle(selectedIcon[0]);
}

function toggle(element) {
  if (element.classList.contains('hidden-view')) {
    element.classList.remove('hidden-view');
  } else {
    element.classList.add('hidden-view');
  };
}

function displayPlayerInfo() {
    updatePlayer1Info();
    updatePlayer2Info();
};

function updatePlayer1Info() {
  player1Token = document.querySelector(".player1-token-js");
  player1Name = document.querySelector(".player1-name-js");
  player1Wins = document.querySelector(".player1-wins-js");
  player1Token.innerText = game.human.token;
  player1Name.innerText = game.human.name;
  player1Wins.innerText = `Wins: ${game.human.wins}`;
}

function updatePlayer2Info() {
  player2Token = document.querySelector('.player2-token-js');
  player2Name = document.querySelector('.player2-name-js');
  player2Wins = document.querySelector('.player2-wins-js');
  player2Token.innerText = game.computer.token;
  player2Name.innerText = game.computer.name;
  player2Wins.innerText = `Wins: ${game.computer.wins}`;
}
