class Question {
  constructor(questionBoxId, manipulatedQuestionObj, currentRound) {
    this.currentRound = currentRound;
    this.questionBoxId = questionBoxId;
    this.manipulatedQuestionObj = manipulatedQuestionObj;

    this.currentQuestionSet = this.manipulatedQuestionObj[`Round${this.currentRound}Questions`][questionBoxId];

    this.currentQuestion = this.currentQuestionSet.question;
    this.currentAnswer = this.currentQuestionSet.answer;
    this.currentPointValue = this.currentQuestionSet.pointValue;
    this.currentCategoryId = this.currentQuestionSet.categoryId; //probably don't need
  }

  verifyAnswer(playerGuess) {
    const currentDDWager = currentDailyDouble.currentWager || undefined;
    if(playerGuess === this.currentAnswer) {
      game.rightAnswer(currentDDWager);
    }else {
      game.wrongAnswer(currentDDWager);
        }
      }   
  } 