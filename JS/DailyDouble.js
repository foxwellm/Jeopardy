
class DailyDouble extends Question {
  constructor(questionBoxId, manipulatedQuestionObj, currentRound, currentPlayer) {
    super(questionBoxId, manipulatedQuestionObj, currentRound)

    this.currentPlayer = currentPlayer;
    this.currentCategory = manipulatedQuestionObj["Round1Categories"].find(category => {
      return category.id === this.currentCategoryId
    })
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
}

// if (typeof module.exports !== 'undefined') {
//   module.exports = DailyDouble;
// }