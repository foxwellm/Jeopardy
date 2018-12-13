const chai = require('chai');
const expect = chai.expect;
global.Question = require('../JS/Question.js');
global.Game = require('../JS/Game.js');
global.testData = require('../tests/testData.js');
global.Player = require('../JS/Player.js');

describe('Player', function () {
  let player;
  
  beforeEach(function () {
    player = new Player(true, 'Pam', 0 );
  })
  
  it  ('updates player score', function() {
    player.updatePlayerScore(100);
    expect(player.score).to.equal(100);
  })
  
  it('Should create the right name', function () {
    expect(player.name).to.equal('Pam');
  })
  
  it('Should be human', function () {
    expect(player.human).to.equal(true);
  })
  
  it('Should initiate with a default score of zero', function () {
    expect(player.score).to.equal(0);
  })
  
});

