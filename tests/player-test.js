const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
chai.spy.on(global, ['whosTurn', 'closeBigScreen', 'updateDomPlayerScore'], () => true);
global.Question = require('../JS/Question.js');
global.Game = require('../JS/Game.js');
global.testData = require('../tests/testData.js');
global.Player = require('../JS/Player.js');

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
