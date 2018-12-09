
class Game {
  constructor(manipulatedQuestionObj, currentRound = 1, currentPlayer = 'player1', tilesLeft = 16) {
    this.manipulatedQuestionObj = manipulatedQuestionObj;
    this.currentRound = currentRound;
    this.currentPlayer = currentPlayer;
    this.tilesLeft = tilesLeft;
    this.peopleGone = 0;
  }

  init() {
    this.currentRound = 1;
    this.currentPlayer = 'player1';
    this.tilesLeft = 16;
    createQuestionBoxListeners();
    createPlayerInputListeners();
    this.setGameBoard();
    setPlayerNames();
    updatePlayerScore();
  }
  changePlayer() {
    this.player
  }

  checkTilesLeft() {
    if (game.tilesLeft === 0) {
      this.tilesLeft = 16;
      this.currentRound++;
      if (this.currentRound === 3) {
        this.setRound3();
      }else{
      this.setGameBoard();
      }
    }
  };
  
  setRound3() {
    currentQuestion = new Question(0, this.manipulatedQuestionObj, this.currentRound);
    bigScreenBack.innerText = this.manipulatedQuestionObj.Round3Categories[0].name
    bigScreenRound3();
  }



  setGameBoard() {
    let questionBoxesPointArray = [];
    //grab differentPointValues from manipulatedData instead when made
    let differentPointValues = [100,200,300,400].reverse();
    for(let i=0; i<4; i++) {  //size of categories
      differentPointValues.forEach(pointValue => {
        questionBoxesPointArray.push(pointValue*this.currentRound);
      })
    }
    const roundCategories = this.manipulatedQuestionObj[`Round${this.currentRound}Categories`].map(category => {
      return category.name
    }).reverse();
    populateGameBoard(roundCategories,questionBoxesPointArray);
  }

  rightAnswer() {
    const answeredPoints = currentQuestion.currentPointValue; 
    const round = this.currentRound;
    const pointsToAdd = (answeredPoints * round);
    whosTurn();
    if (this.currentPlayer === 'player1') {
      player1.score += pointsToAdd;
      closeBigScreen();
      }else if (this.currentPlayer === 'player2') { player2.score += (currentQuestion.pointValue * this.currentRound)
      } else { player3.score += (currentQuestion.pointValue * this.currentRound) 
    }
    updatePlayerScore();
  }

  wrongAnswer() {
      
     
      this.peopleGone++;
    
      if (this.currentPlayer === 'player1') {
        this.currentPlayer = 'player2'
      } else if (this.currentPlayer === 'player2') {
        this.currentPlayer = 'player3'
      } else {
        this.currentPlayer = 'player1';
          }
      if (this.peopleGone > 2){
        closeBigScreen();
        this.peopleGone = 0;
           } 
       whosTurn();
        }

}






// if(typeof module.exports !== undefined) {
//   module.exports = Game
// }