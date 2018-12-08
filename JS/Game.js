
class Game {
  constructor(manipulatedQuestionObj, currentRound = 1, currentPlayer = 'player1', tilesLeft = 16) {
    this.manipulatedQuestionObj = manipulatedQuestionObj;
    this.currentRound = currentRound;
    this.currentPlayer = currentPlayer;
    this.tilesLeft = tilesLeft;
  }

  init() {
    this.currentRound = 2;
    this.currentPlayer = 'player1';
    this.tilesLeft = 16;
    createQuestionBoxListeners();
    createPlayerInputListeners();
    this.setGameBoard(this.currentRound);
  }
  changePlayer() {
    this.player
  }


  setGameBoard(currentRound) {
    let questionBoxesPointArray = [];
    //grab differentPointValues from manipulatedData instead when made
    let differentPointValues = [100,200,300,400].reverse();
    for(let i=0; i<4; i++) {  //size of categories
      differentPointValues.forEach(pointValue => {
        questionBoxesPointArray.push(pointValue*currentRound);
      })
    }
    const roundCategories = this.manipulatedQuestionObj[`Round${this.currentRound}Categories`].map(category => {
      return category.name
    }).reverse();
    populateGameBoard(roundCategories,questionBoxesPointArray);
  }

  rightAnswer() {
    
    this.currentPlayer.score = 10;
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