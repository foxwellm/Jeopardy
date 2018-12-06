
class Game {
  constructor(round = 1, currentPlayer = 1, tilesLeft = 16, manipulatedQuestionObj = {}) {
    this.round = round;
    this.currentPlayer = currentPlayer;
    this.tilesLeft = tilesLeft;
  }
  init() {
    this.round = 1;
    this.currentPlayer = 1;
    this.tilesLeft = 16;
    setGameTiles();
  }
  changePlayer() {
    this.player
  }


  setGameTiles(round) {
  // This is where we iterate over our tiles to give them the dollar values.
  }

  getQuestion() {
  // find question for tile based on round and manipulatedQuestionObj
  // send that data to updateDOM.
  // set recieved question's answer as this.currentAnswer
  }

  verifyAnswer() {
    // if this.currentAnswer === currentPlayerAnswer,
    /* updateScore()
    // if tilesLeft === 0, this.round++
    // disable tile/change innertext
    else - present false message and  wrongAnswer()
    */
  }

  wrongAnswer() {
    // check if all players have gone,
    // If so, disables the question and reverts to original player
    // if not, change current player to next in line.
  }



}






// if(typeof module.exports !== undefined) {
//   module.exports = Game
// }