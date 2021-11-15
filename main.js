
// var rock = document.querySelector('.rock-js');
// var paper = document.querySelector('.paper-js');
// var scissors = document.querySelector('.scissors-js');
// var alien = document.querySelector('.alien-js');
// var rockOn = document.querySelector('.rock-on-js');
var gameTypeView = document.querySelector('.game-type');
var gameIconsView = document.querySelector('.game-icons');
var gameIconsClassic = document.querySelector('.game-icons-classic');
var gameIconsDifficult = document.querySelector('.game-icons-difficult');
var classicButton = document.querySelector('.classic-js');
var difficultButton = document.querySelector('.difficult-js');
var changeGameButton = document.querySelector('.change-game-button');
// var pageDescription = document.querySelector('.description-js');
var body = document.querySelector('body');
var description = document.querySelector('.description');
var resetScoreButton = document.querySelector('.reset-score-button')
var buttons = document.querySelector('.button-div')

var human = new Player('Human', '🙂');
var computer = new Player('Computer', '🤖');
var game = new Game(human, computer);

// rock.addEventListener('click', play);
// paper.addEventListener('click', play);
// scissors.addEventListener('click', play);
// alien.addEventListener('click', play);
// rockOn.addEventListener('click', play);
classicButton.addEventListener('click', showGameView);
difficultButton.addEventListener('click', showGameView);
changeGameButton.addEventListener('click', changeGame);
resetScoreButton.addEventListener('click', resetScore);
window.addEventListener('load', loadHomePage);

function loadHomePage() {
  resetEventListeners();
  displayPlayerInfo();
};

function play() {
  makeSelections();
  showHumanSelection();
  body.classList.add('no-click');
  determineWinner();
  setTimeout(showWinnerView, 1500);
  setTimeout(game.resetGame, 1501);
  setTimeout(resetView, 3000);
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

function resetEventListeners() {
  var rock = document.querySelector('.rock-js');
  var paper = document.querySelector('.paper-js');
  var scissors = document.querySelector('.scissors-js');
  var alien = document.querySelector('.alien-js');
  var rockOn = document.querySelector('.rock-on-js');
  rock.addEventListener('click', play);
  paper.addEventListener('click', play);
  scissors.addEventListener('click', play);
  alien.addEventListener('click', play);
  rockOn.addEventListener('click', play);
};

function showHumanSelection() {
  var selectedIcon = document.getElementsByClassName(`human-token ${game.human.selection}-js`);
  selectedIcon[0].innerText = `${game.human.token}`;
};

function resetHumanSelection() {
    var tokens = document.getElementsByClassName('human-token');
    for (var i = 0; i < tokens.length; i++) {
      tokens[i].innerText = '';
    }
  };

function determineWinner() {
  if (game.type.name === 'classic') {
    game.chooseWinnerClassic(game.human, game.computer);
  } else if (game.type.name === 'difficult') {
    game.chooseWinnerDifficult(game.human, game.computer);
  };
  game.human.saveWinsToStorage();
  game.computer.saveWinsToStorage();
};

function showWinnerView() {
  addHiddenView(gameIconsDifficult);
  resetHumanSelection();
  displayWinner();
  displayPlayerInfo();
  gameIconsClassic.innerHTML = `
    <img class="image" src="assets/${game.human.selection}.png" alt="${game.human.selection}">
    <img class="image" src="assets/${game.computer.selection}.png" alt="${game.computer.selection}">
  `;
};

function resetView() {
  resetIcons();
  resetHumanSelection();
  resetEventListeners();
  body.classList.remove('no-click');
  description.innerText = 'Choose Your Fighter';
  if (game.type.name === 'difficult') {
    removeHiddenView(gameIconsDifficult);
  };
};

function resetIcons() {
  gameIconsClassic.innerHTML =
    `<div class="flex-column position-relative">
      <img class="image rock-js" src="assets/rock.png" alt="rock">
      <h6 class="human-token position-absolute rock-js"><h6>
    </div>
    <div class="flex-column position-relative">
      <img class="image paper-js" src="assets/paper.png" alt="paper">
      <h6 class="human-token position-absolute paper-js"><h6>
    </div>
    <div class="flex-column position-relative">
      <img class="image scissors-js" src="assets/scissors.png" alt="scissors">
      <h6 class="human-token position-absolute scissors-js"><h6>
    </div>`;
};

function displayWinner() {
  if (game.winner === 'tie') {
    description.innerText = 'It\'s a Draw';
  } else {
    description.innerText =`${game.winner} Wins!`;
  };
};

function displayPlayerInfo() {
    updatePlayer1Info();
    updatePlayer2Info();
};

function updatePlayer1Info() {
  player1Token = document.querySelector(".player1-token-js");
  player1Name = document.querySelector(".player1-name-js");
  player1Wins = document.querySelector(".player1-wins-js");
  game.human.wins = game.human.retrieveWinsFromStorage() || 0;
  player1Token.innerText = game.human.token;
  player1Name.innerText = game.human.name;
  player1Wins.innerText = `Wins: ${game.human.wins}`;
};

function updatePlayer2Info() {
  player2Token = document.querySelector('.player2-token-js');
  player2Name = document.querySelector('.player2-name-js');
  player2Wins = document.querySelector('.player2-wins-js');
  game.computer.wins = game.computer.retrieveWinsFromStorage() || 0;
  player2Token.innerText = game.computer.token;
  player2Name.innerText = game.computer.name;
  player2Wins.innerText = `Wins: ${game.computer.wins}`;
};

function showGameView() {
  resetEventListeners();
  assignGameType();
  addHiddenSpace(gameTypeView);
  removeHiddenSpace(gameIconsView);
  removeHiddenSpace(buttons);
  // removeHiddenView(changeGameButton);
  // removeHiddenView(resetScoreButton)
  description.innerText = 'Choose Your Fighter'
  if (game.type.name === 'classic') {
    addHiddenView(gameIconsDifficult);
  } else if (game.type.name === 'difficult') {
    removeHiddenView(gameIconsDifficult);
  };
};

function assignGameType() {
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

function changeGame() {
  resetIcons();
  resetHumanSelection();
  addHiddenSpace(gameIconsView);
  removeHiddenSpace(gameTypeView)
  addHiddenSpace(buttons);
  // addHiddenView(changeGameButton);
  // addHiddenView(resetScoreButton);
};

function resetScore() {
  localStorage.clear();
  displayPlayerInfo();
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
