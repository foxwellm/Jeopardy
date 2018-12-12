class DailyDouble {
  constructor(questionBoxId, manipulatedQuestionObj, currentRound, currentPlayer, currentCategory) {
    this.currentPlayer = currentPlayer;
    this.currentCategory = 'Happy';
    this.currentRound = currentRound;
    this.questionBoxId = questionBoxId;
    this.manipulatedQuestionObj = manipulatedQuestionObj;
    this.currentQuestionSet = this.manipulatedQuestionObj[`Round${this.currentRound}Questions`][questionBoxId];
    this.currentQuestion = this.currentQuestionSet.question;
    this.currentAnswer = this.currentQuestionSet.answer;
    this.currentPointValue = this.currentQuestionSet.pointValue;
    this.currentCategoryId = this.currentQuestionSet.categoryId;
    this.isDDRunning = true;
    this.currentWager = 0;
  }

  collectWager() {
    this.currentWager = event.target.previousSibling.previousSibling.value;
    if (game.currentRound !== 3) {
      DDOperations();
    } else {
      round3Operations();
    }
  }
  verifyAnswer(playerGuess) {
    if (playerGuess === this.currentAnswer) {
      game.rightAnswer(this.currentWager);
    } else {
      game.wrongAnswer(this.currentWager);
    }
  }
}