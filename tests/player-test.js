const chai = require('chai');
const expect = chai.expect;
const Player = require('../JS/Player.js');
// const spies = require('chai-spies')
// chai.use(spies);
// global.updateDOM = require('../JS/updateDOM.js');
// chai.spy.on(global.updateDOM, ['closeStartMenu', 'createQuestionBoxListeners'], () => true);
// const indexMethods = require('../index.js');
const Game = require('../JS/Game.js');
// global.Question = require('../JS/Question.js');
// const DailyDouble = require('../JS/DailyDouble.js');

describe('Make a player', function () {
  let player;

  beforeEach(function () {
   player = new Player(true, 'Pam', 0 );
  })
  it  ('updates player score', function() {
    player.updatePlayerScore(100);
    expect(player.score).to.equal(100);
  });
});
