class Round3 {
  constructor(category, questionSet) {
    this.category = category[0].name;
    this.currentRound3Question = questionSet[0].question;
    this.currentRound3Answer = questionSet[0].answer;
    this.currentWagers = [0,0,0];
  }
  
  init() {
    round3UpdateDOM.bigScreenR3AskQuestion(this.category)
    round3UpdateDOM.playerDisplayBox('wager', 'up', 1, 2, 3);
    round3UpdateDOM.createWagerBtnInputListeners();
  }
  
  collectWagers() {
    const playerWagering = event.target.previousSibling.previousSibling.classList.value;
    const playerWager = event.target.previousSibling.previousSibling.value;
    if (playerWagering === "player1-wager-input") {
      this.currentWagers[0] = playerWager;
      round3UpdateDOM.playerDisplayBox('wager', 'down', 1);
    } else if (playerWagering === "player2-wager-input") {
      this.currentWagers[1] = playerWager;
      round3UpdateDOM.playerDisplayBox('wager', 'down', 2);
    } else {
      this.currentWagers[2] = playerWager;
      round3UpdateDOM.playerDisplayBox('wager', 'down', 3);
    }
    if (this.currentWagers.every(x => x > 0)) {
      round3UpdateDOM.playerDisplayBox('answer', 'up', 1, 2, 3);
    }
    
  }

  checkAnswer(guess) {
    
  }
  
  
  
}