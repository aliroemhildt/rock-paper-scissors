// var Game = require('./game.js');
// var Player = require('./player.js');

var human = new Player('Human', '🙂');
var computer = new Player('Computer', '🤖');
var classic = {
  name: 'classic',
  choices: ['rock', 'paper', 'scissors']
};
var difficult = {
  name: 'difficult',
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
var gameTypeView = document.querySelector('.game-type');
var gameIconsView = document.querySelector('.game-icons');
var gameIconsClassic = document.querySelector('.game-icons-classic');
var gameIconsDifficult = document.querySelector('.game-icons-difficult');
var classicButton = document.querySelector('.classic-js');
var difficultButton = document.querySelector('.difficult-js');
var pageDescription = document.querySelector('.description-js');
var body = document.querySelector('body');

rock.addEventListener('click', play);
paper.addEventListener('click', play);
scissors.addEventListener('click', play);
alien.addEventListener('click', play);
rockOn.addEventListener('click', play);
classicButton.addEventListener('click', showGameView);
difficultButton.addEventListener('click', showGameView);
window.addEventListener('load', displayPlayerInfo);

function play() {
  makeSelections();
  showHumanSelection();
  body.classList.add('no-click');
  determineWinner();
  setTimeout(showWinnerView, 1500);
  setTimeout(game.resetGame, 1501);
};

function displayWinner() {
  if (game.winner === 'tie') {
    pageDescription.innerText = 'It\'s a Draw';
  } else {
    pageDescription.innerText =`${game.winner} Wins!`;
  };
};

function determineWinner() {
  if (game.type.name === 'classic') {
    game.chooseWinnerClassic(game.human, game.computer);
  } else if (game.type.name === 'difficult') {
    game.chooseWinnerDifficult(game.human, game.computer);
  };
};

function showWinnerView() {
  addHiddenView(gameIconsDifficult);
  hideHumanSelection();
  displayWinner();
  gameIconsClassic.innerHTML = `
    <img class="image" src="assets/${game.human.selection}.png" alt="${game.human.selection}">
    <img class="image" src="assets/${game.computer.selection}.png" alt="${game.computer.selection}">
  `;
};

function makeSelections() {
  var choice = '';
  if (event.target.classList.contains('rock-js')) {
    choice = 'rock';
  } else if (event.target.classList.contains('paper-js')) {
    choice = 'paper';
  } else if (event.target.classList.contains('scissors-js')) {
    choice = 'scissors';
  } else if (event.target.classList.contains('alien-js')) {
    choice = 'alien';
  } else if (event.target.classList.contains('rock-on-js')) {
    choice = 'rock-on';
  };
  game.playRound(game.type.choices, choice)
};

function showHumanSelection() {
  var selectedIcon = document.getElementsByClassName(`human-token ${game.human.selection}-js`);
  selectedIcon[0].innerText = `${game.human.token}`;
}

function hideHumanSelection() {
  var selectedIcon = document.getElementsByClassName(`human-token ${game.human.selection}-js`);
  selectedIcon[0].innerText = '';
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

function addHiddenSpace(element) {
  element.classList.add('hidden-space');
};

function addHiddenView(element) {
  element.classList.add('hidden-view');
};

function removeHiddenSpace(element) {
  element.classList.remove('hidden-space');
};

function removeHiddenView(element) {
  element.classList.remove('hidden-view');
};

function assignGameType() {
  console.log(event.currentTarget)
  if (event.currentTarget.classList.contains('classic-js')) {
    game.type = {
      name: 'classic',
      choices: ['rock', 'paper', 'scissors']
    };
  } else if (event.currentTarget.classList.contains('difficult-js')) {
    game.type = {
      name: 'difficult',
      choices: ['rock', 'paper', 'scissors', 'rock-on', 'alien']
    };
  };
};

function showGameView() {
  console.log(game.type.name)
  assignGameType();
  addHiddenSpace(gameTypeView);
  removeHiddenSpace(gameIconsView);
  if (game.type.name === 'classic') {
    addHiddenView(gameIconsDifficult);
  } else if (game.type.name === 'difficult') {
    removeHiddenView(gameIconsDifficult);
  };
};
