const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
chai.spy.on(global.updateDOM, ['whosTurn', 'closeBigScreen', 'updateDomPlayerScore'], () => true);
global.Question = require('../JS/Question.js');
global.Game = require('../JS/Game.js');
global.data = require('../JS/gameData.js');
global.gameQuestions = require('../JS/manipulatedData.js');
global.updateDOM = require('../JS/updateDOM.js');




// describe('Should be able to instantiate self',  function(){
//   let question = new Question(0,gameQuestions,1);
//   it('test', function(){

//     return true;
//   })
// })

describe('verifyAnswer', function () {
  let currentQuestion = new Question(0, gameQuestions, 1);
  let game = new Game(gameQuestions);
  it('test', function () {
    game.rightAnswer(100)

  })
})