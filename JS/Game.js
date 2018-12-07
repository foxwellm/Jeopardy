
class Game {
  constructor(manipulatedQuestionObj, round = 1, currentPlayer = 1, tilesLeft = 16) {
    this.manipulatedQuestionObj = manipulatedQuestionObj;
    this.round = round;
    this.currentPlayer = currentPlayer;
    this.tilesLeft = tilesLeft;
  }
  init() {
    this.round = 1;
    this.currentPlayer = 1;
    this.tilesLeft = 16;
    this.setGameBoard(this.round);
  }
  changePlayer() {
    this.player
  }


  setGameBoard(round) {
    let questionBoxesPointArray = [];
    //grab differentPointValues from manipulatedData instead when made
    let differentPointValues = [100,200,300,400].reverse();
    for(let i=0; i<4; i++) {  //size of categories
      differentPointValues.forEach(pointValue => {
        questionBoxesPointArray.push(pointValue*round);
      })
    }
    populateGameBoard(questionBoxesPointArray);
  }

  getQuestion(questionBoxIndex) {
    // debugger
   this.currentQuestion = this.manipulatedQuestionObj[`Round${this.round}Questions`][questionBoxIndex];
    // debugger
    return this.currentQuestion;

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