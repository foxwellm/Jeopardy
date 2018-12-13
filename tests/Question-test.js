const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
chai.spy.on(global, ['whosTurn', 'closeBigScreen', 'updateDomPlayerScore'], () => true);
global.Question = require('../JS/Question.js');
global.Game = require('../JS/Game.js');
global.testData = require('../tests/testData.js');
global.Player = require('../JS/Player.js');

describe('Question', function () {
  
  beforeEach(function () {
    currentQuestion = new Question(0, testData, 1);
    game = new Game(testData);
    player1 = new Player(true, 'Tom', 0);
  })
  
  it('Should add the approptiate points', function () {
    game.rightAnswer(100);
    expect(player1.score).to.equal(100);
  })
  
  it('Should subtract the approptiate points', function () {
    game.wrongAnswer(100);
    expect(player1.score).to.equal(-100);
  })
  
  it('Should be the current Round', function () {
    expect(currentQuestion.currentRound).to.equal(1);
  })
  
  it('Should get the box ID of clicked question', function () {
    expect(currentQuestion.questionBoxId).to.equal(0);  
  })
  
  it('Should get the manipulatedQuestionObject', function () {
    expect(currentQuestion.manipulatedQuestionObj).to.equal(testData);  
  })
  
  it('Should create the current question set', function () {
    expect(currentQuestion.currentQuestionSet).to.deep.equal({question: "Go directly to jail", answer: "Monopoly", pointValue: 100, categoryId: 5});  
  })
  
  it('Should get the current question from the question set', function () {
    expect(currentQuestion.currentQuestion).to.equal("Go directly to jail");  
  })
  
  it('Should get the current answer from the question set', function () {
    expect(currentQuestion.currentAnswer).to.equal("Monopoly");  
  })
  
  it('Should get the current point value from the question set', function () {
    expect(currentQuestion.currentPointValue).to.equal(100);  
  })
  
  it('Should get the current category ID from the question set', function () {
    expect(currentQuestion.currentCategoryId).to.equal(5);  
  })
  
});