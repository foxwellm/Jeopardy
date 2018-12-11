
class Game {
  constructor(manipulatedQuestionObj) {
    this.manipulatedQuestionObj = manipulatedQuestionObj;
    this.currentRound = 1;
    this.currentPlayer = 'player1';
    this.tilesLeft = 16;
    this.peopleGone = 0;
    this.DDround1 = 0;
    this.DDround2 = [0,0]
  }
  
  init() {
    createQuestionBoxListeners();
    createPlayerInputListeners();
    this.setGameBoard();
    setPlayerNames();
    updatePlayerScore();
    this.createDD()
    whosTurn()
  };
  
  setGameBoard() {
    let questionBoxesPointArray = [];
    let differentPointValues = [100,200,300,400].reverse();
    for(let i=0; i<4; i++) {  
      differentPointValues.forEach(pointValue => {
        questionBoxesPointArray.push(pointValue*this.currentRound);
      })
    };
    const roundCategories = this.manipulatedQuestionObj[`Round${this.currentRound}Categories`].map(category => {
      return category.name
    }).reverse();
    populateGameBoard(roundCategories,questionBoxesPointArray);
  };
  
  createDD() {
    let DD = Math.floor(Math.random() * (15 - 1)) + 0;
    this.DDround1 = DD;
    DD = Math.floor(Math.random() * (15 - 1)) + 0;
    this.DDround2[0] = DD;
    this.createRandom();
  };
  
  createRandom() {
    let DD2 = Math.floor(Math.random() * (15 - 1)) + 0;
    if (DD2 === this.DDround2[0]){
      this.createRandom();
    } else {
      this.DDround2[1] = DD2;
    }
  };
  
  checkTilesLeft() {
    this.tilesLeft--;
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
  
  rightAnswer(wager) {
    this.peopleGone = 0;
    const pointsToAdd = parseInt(wager) || (currentQuestion.currentPointValue * this.currentRound);
    whosTurn();
    if (this.currentPlayer === 'player1') {
      player1.score += pointsToAdd;
    } else if (this.currentPlayer === 'player2') { 
      player2.score += pointsToAdd;
    } else { 
      player3.score += pointsToAdd;
    }
    closeBigScreen();
    this.checkTilesLeft();
    updatePlayerScore();
  };
  
  wrongAnswer(wager) {
    const pointsToAdd = wager || (currentQuestion.currentPointValue * this.currentRound);
    if(!wager) this.peopleGone++;
    if (this.currentPlayer === 'player1') {
      player1.score -= pointsToAdd;
      this.currentPlayer = 'player2';
    } else if (this.currentPlayer === 'player2') {
      player2.score -= pointsToAdd;
      this.currentPlayer = 'player3';
    } else {
      player3.score -= pointsToAdd;
      this.currentPlayer = 'player1';
    }
    if (this.peopleGone > 2){
      closeBigScreen();
      this.checkTilesLeft();
      this.peopleGone = 0;
    } 
    if(wager) closeBigScreen();
    whosTurn();
    updatePlayerScore();  
  };
  
  setRound3() {
    currentQuestion = new Question(0, this.manipulatedQuestionObj, this.currentRound);
    bigScreenBack.innerText = this.manipulatedQuestionObj.Round3Categories[0].name;
    bigScreenRound3();
    playerDisplayBox('wager', 'up', 1, 2, 3);
  };
  
};






// if(typeof module.exports !== undefined) {
//   module.exports = Game
// }