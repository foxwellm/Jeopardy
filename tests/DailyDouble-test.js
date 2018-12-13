const chai = require('chai');
const expect = chai.expect;
global.Question = require('../JS/Question.js');
global.Game = require('../JS/Game.js');
global.testData = require('../tests/testData.js');
const DailyDouble = require('../JS/DailyDouble.js')

describe('DailyDouble', function () {
  var currentDailyDouble;
  beforeEach(function () {
    currentDailyDouble = new DailyDouble(0, testData, 1, 'player1');
   });

   it('Should verify current player', function () {
    expect(currentDailyDouble.currentPlayer).to.equal('player1');
  });

  it('Should verify current category', function () {
    expect(currentDailyDouble.currentCategory).to.deep.equal({name: "Name That Board Game", id: 5});
  });

});