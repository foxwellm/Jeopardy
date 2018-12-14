const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;
global.Question = require('../JS/Question.js');
global.Game = require('../JS/Game.js');
global.testData = require('../tests/testData.js');
global.Player = require('../JS/Player.js');

describe('Game', function () {
  chai.spy.on(global, ['createQuestionBoxListeners', 'createPlayerInputListeners', 'setPlayerNames', 'updateRoundCounter', 'populateGameBoard'], () => true);
  
  beforeEach(function () {
    currentQuestion = new Question(0, testData, 1);
    game = new Game(testData);
    player1 = new Player(true, 'Tom', 0);
  })

  afterEach(function () {
    //chai.spies.restore()
  })
  
  it('Should get manipulated game object', function () {
    expect(game.manipulatedQuestionObj).to.equal(testData);
  })
  
  it('Should get current round', function () {
    expect(game.currentRound).to.equal(1);
  })
  
  it('Should get current player', function () {
    expect(game.currentPlayer).to.equal('player1');
  })
  
  it('Should get starting tiles', function () {
    expect(game.tilesLeft).to.equal(16);
  })
  
  it('Should start with 0 people gone', function () {
    expect(game.peopleGone).to.equal(0);
  })
  
  it('Should initiate where daily double is for round 1', function () {
    expect(game.DDround1).to.equal(0);
  })
  
  it('Should initiate where daily doubles are for round 2', function () {
    expect(game.DDround2).to.deep.equal([0, 0]);
  })
  
  it('Should initiate game', function () {
    game.init();
    expect(createQuestionBoxListeners).to.have.been.called(1);
    expect(createPlayerInputListeners).to.have.been.called(1);
    expect(setPlayerNames).to.have.been.called(1);
    expect(updateDomPlayerScore).to.have.been.called(1);
    expect(whosTurn).to.have.been.called(1);
    expect(updateRoundCounter).to.have.been.called(1);
  })
  
  it('Should check tiles and subtract one', function () {
    game.checkTilesLeft();
    expect(game.tilesLeft).to.equal(15);
  })
  
  it('Should call populateGameBoard twice', function () {
    game.setGameBoard();
    expect(populateGameBoard).to.have.been.called(2);
  })
  
  it('Should create a random number between 0 and 15', function () {
    game.createDD();
    expect(game.DDround1).to.be.within(0, 15);
  })
  
  it('Should create a random number between 0 and 15', function () {
    game.createRandom();
    expect(game.DDround2[0]).to.be.within(0, 15);
    expect(game.DDround2[1]).to.be.within(0, 15);
  })
  
  it('Should reset peopleGone to zero on right answer', function () {
    game.rightAnswer();
    expect(game.peopleGone).to.equal(0);
  })
  
  it('Should closeBigScreen when a player on daily double (bet wager) gets the question wrong', function () {
    game.wrongAnswer(100);
    expect(closeBigScreen).to.have.been.called(2);
  })
})

