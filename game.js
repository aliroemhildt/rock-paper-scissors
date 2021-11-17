class Game {
  constructor(player1, player2, gameType) {
    this.human = player1;
    this.computer = player2;
    this.winner = '';
    this.type = gameType;
  };

  playRound(choice, choices) {
    this.human.takeTurn(choice, choices)
    this.computer.takeTurn(choice, choices);
  };

  chooseWinnerClassic() {
    var human = this.human.selection;
    var computer = this.computer.selection;
    if (human === computer) {
      this.winner = 'tie';
    } else if (
      (human === 'rock' && computer === 'scissors') ||
      (human === 'paper' && computer === 'rock') ||
      (human === 'scissors' && computer === 'paper')) {
        this.winner = this.human.name;
        this.human.wins++;
    } else {
        this.winner = this.computer.name;
        this.computer.wins++;
    };
  };

  chooseWinnerDifficult() {
    var human = this.human.selection;
    var computer = this.computer.selection;
    if (human === computer) {
      this.winner = 'tie';
    } else if (
      (human === 'rock' && (computer === 'scissors' || computer === 'alien')) ||
      (human === 'paper' && (computer === 'rock-on' || computer === 'rock')) ||
      (human === 'scissors' && (computer === 'paper' || computer === 'alien')) ||
      (human === 'alien' && (computer === 'paper' || computer === 'rock-on')) ||
      (human === 'rock-on' && (computer === 'rock' || computer === 'scissors'))) {
        this.winner = this.human.name;
        this.human.wins++;
    } else {
        this.winner = this.computer.name;
        this.computer.wins++;
    };
  };

  assignType(gameType) {
    if (gameType === 'classic') {
      this.type = {
        name: 'classic',
        choices: ['rock', 'paper', 'scissors']
      };
    } else {
      this.type = {
        name: 'difficult',
        choices: ['rock', 'paper', 'scissors', 'rock-on', 'alien']
      };
    };
  };

  resetGame() {
    this.winner='';
    this.human.selection = '';
    this.computer.selection = '';
  };
};
