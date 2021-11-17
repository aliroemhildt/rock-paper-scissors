// QUERY SELECTORS
var gameTypeView = document.querySelector('.game-type-view');
var gameIconsView = document.querySelector('.game-icons-js');
var gameIconsClassic = document.querySelector('.game-icons-classic-js');
var gameIconsDifficult = document.querySelector('.game-icons-difficult-js');
var classicButton = document.querySelector('.classic-js');
var difficultButton = document.querySelector('.difficult-js');
var changeGameButton = document.querySelector('.change-game-button');
var body = document.querySelector('body');
var description = document.querySelector('.description');
var resetScoreButton = document.querySelector('.reset-score-button');
var buttons = document.querySelector('.buttons-container');

// GLOBAL VARIABLES
var human = new Player('Human', '🙂');
var computer = new Player('Computer', '🤖');
var game = new Game(human, computer);

// EVENT LISTENERS
classicButton.addEventListener('click', showGameView);
difficultButton.addEventListener('click', showGameView);
changeGameButton.addEventListener('click', showHomeView);
resetScoreButton.addEventListener('click', resetScore);
window.addEventListener('load', loadHomePage);

// FUNCTIONS
function loadHomePage() {
  resetIconEventListeners();
  displayPlayerInfo();
};

function resetIconEventListeners() {
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

function displayPlayerInfo() {
    updatePlayerInfo(game.human.name);
    updatePlayerInfo(game.computer.name);
    checkResetButton();
};

function updatePlayerInfo(playerName) {
  player = setPlayerInfo(playerName);
  var playerToken = document.querySelector(`.${player.playerKey}-token-js`);
  var playerName = document.querySelector(`.${player.playerKey}-name-js`);
  var playerWins = document.querySelector(`.${player.playerKey}-wins-js`);
  game[player.nameKey].wins = game[player.nameKey].retrieveWinsFromStorage() || 0;
  playerToken.innerText = game[player.nameKey].token;
  playerName.innerText = game[player.nameKey].name;
  playerWins.innerText = `Wins: ${game[player.nameKey].wins}`;
};

function setPlayerInfo(playerName) {
  var player = {playerKey: '', nameKey: ''};
  if (playerName === 'Human') {
    player.playerKey = 'player1';
    player.nameKey = 'human';
  } else if (playerName === 'Computer') {
    player.playerKey = 'player2';
    player.nameKey = 'computer';
  };
  return player;
};

function checkResetButton() {
  if (game.human.wins === 0 && game.computer.wins === 0) {
    resetScoreButton.classList.add('disable-button');
  } else {
    resetScoreButton.classList.remove('disable-button');
  };
};

function play() {
  makeSelections();
  showHumanSelection();
  determineWinner();
  body.classList.add('no-click');
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
  game.playRound(choice, game.type.choices);
};

function showHumanSelection() {
  var selectedIcon = document.getElementsByClassName(`human-token ${game.human.selection}-js`);
  selectedIcon[0].innerText = `${game.human.token}`;
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

function resetHumanSelection() {
  var tokens = document.getElementsByClassName('human-token');
  for (var i = 0; i < tokens.length; i++) {
    tokens[i].innerText = '';
  };
};

function displayWinner() {
  if (game.winner === 'tie') {
    description.innerText = 'It\'s a Draw';
  } else {
    description.innerText =`${game.winner} Wins!`;
  };
};

function resetView() {
  resetClassicIcons();
  resetHumanSelection();
  resetIconEventListeners();
  body.classList.remove('no-click');
  description.innerText = 'Choose Your Fighter';
  if (game.type.name === 'difficult') {
    removeHiddenView(gameIconsDifficult);
  };
};

function resetClassicIcons() {
  gameIconsClassic.innerHTML = `
    <div class="flex-column position-relative">
      <img class="image rock-js" src="assets/rock.png" alt="rock">
      <div class="human-token position-absolute rock-js"></div>
    </div>
    <div class="flex-column position-relative">
      <img class="image paper-js" src="assets/paper.png" alt="paper">
      <div class="human-token position-absolute paper-js"></div>
    </div>
    <div class="flex-column position-relative">
      <img class="image scissors-js" src="assets/scissors.png" alt="scissors">
      <div class="human-token position-absolute scissors-js"></div>
    </div>
  `;
};

function showGameView() {
  resetIconEventListeners();
  game.assignType(getGameType());
  addHiddenSpace(gameTypeView);
  removeHiddenSpace(gameIconsView);
  removeHiddenSpace(buttons);
  description.innerText = 'Choose Your Fighter';
  if (game.type.name === 'classic') {
    addHiddenView(gameIconsDifficult);
  } else if (game.type.name === 'difficult') {
    removeHiddenView(gameIconsDifficult);
  };
};

function getGameType() {
  if (event.currentTarget.classList.contains('classic-js')) {
    var gameType = 'classic';
  } else {
    var gameType = 'difficult';
  };
  return gameType;
};

function showHomeView() {
  resetClassicIcons();
  addHiddenSpace(gameIconsView);
  addHiddenSpace(buttons);
  removeHiddenSpace(gameTypeView);
  description.innerText = 'Choose Your Game';
};

function resetScore() {
  game.human.wins = 0;
  game.computer.wins = 0;
  game.human.saveWinsToStorage();
  game.computer.saveWinsToStorage();
  displayPlayerInfo();
};

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
