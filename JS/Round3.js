class Round3 {
  constructor(category, questionSet) {
    this.category = category[0].name;
    this.currentRound3Question = questionSet[0].question;
    this.currentRound3Answer = questionSet[0].answer;
    this.currentWagers = [0, 0, 0];
    this.currentGuesses = ['', '', ''];
    this.playersGuessed = [0, 0, 0];
  }
  
  init() {
    round3UpdateDOM.bigScreenR3AskQuestion(this.category)
    round3UpdateDOM.playerDisplayBox('wager', 'up', 1, 2, 3);
    round3UpdateDOM.createWagerBtnInputListeners();
    round3UpdateDOM.createPlayerInputListeners();
  }
  
  collectWagers(playerWagering, playerWager) {

    switch (playerWagering) {
      case 'player1-wager-input':
      this.currentWagers[0] = playerWager;
      round3UpdateDOM.playerDisplayBox('wager', 'down', 1);
      break;
      case 'player2-wager-input':
      this.currentWagers[1] = playerWager;
      round3UpdateDOM.playerDisplayBox('wager', 'down', 2);
      break;
      case 'player3-wager-input':
      this.currentWagers[2] = playerWager;
      round3UpdateDOM.playerDisplayBox('wager', 'down', 3);
      break;
    }
    if (this.currentWagers.every(x => x > 0)) {
      round3UpdateDOM.playerDisplayBox('answer', 'up', 1, 2, 3);
      round3UpdateDOM.bigScreenR3AskQuestion(this.currentRound3Question);
    }
  }
  
  logAnswer(playerGuessing, playerGuess) {
  
    switch (playerGuessing) {
      case 'player1-text':
      this.currentGuesses[0] = playerGuess;
      this.playersGuessed[0] = 1;
      round3UpdateDOM.playerDisplayBox('answer', 'down', 1);
      break;
      case 'player2-text':
      this.currentGuesses[1] = playerGuess;
      this.playersGuessed[1] = 1;
      round3UpdateDOM.playerDisplayBox('answer', 'down', 2);
      break;
      default:
      this.currentGuesses[2] = playerGuess;
      this.playersGuessed[2] = 1;
      round3UpdateDOM.playerDisplayBox('answer', 'down', 3);
    }
    if (this.playersGuessed.every(x => x > 0)) {
      this.checkanswers();
    }
  }
  
  checkanswers() {
    if (this.currentGuesses[0] === this.currentRound3Answer) {
      player1.updatePlayerScore(this.currentWagers[0]);      
    } else {
      player1.updatePlayerScore(-(this.currentWagers[0]));
    }
    if (this.currentGuesses[1] === this.currentRound3Answer) {
      player2.updatePlayerScore(this.currentWagers[1]);
    } else {
      player2.updatePlayerScore(-(this.currentWagers[1]));
    }
    if (this.currentGuesses[2] === this.currentRound3Answer) {
      player3.updatePlayerScore(this.currentWagers[2]);
    } else {
      player3.updatePlayerScore(-(this.currentWagers[2]));
    }
    round3UpdateDOM.updatePlayerScore();
  }
}

if (typeof module !== 'undefined') {
  module.exports = Round3;
}