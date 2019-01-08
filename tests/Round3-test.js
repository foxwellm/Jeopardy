const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
global.round3UpdateDOM = require('../JS/round3UpdateDOM.js');
chai.spy.on(global.round3UpdateDOM, ['bigScreenR3AskQuestion', 'createWagerBtnInputListeners', 'playerDisplayBox', 'createPlayerInputListeners'], () => true);
const Round3 = require('../JS/Round3.js');
global.testData = require('../tests/testData.js');
global.Player = require('../JS/Player.js');

describe('Round3', function () {
  var currentRound3;
  beforeEach(function () {
    currentRound3 = new Round3(testData.Round3Categories, testData.Round3Questions);
  })
  
  afterEach(function () {
    chai.spy.restore(global.round3UpdateDOM)
  })

  it('Should set the round 3 category', function () {
    expect(currentRound3.category).to.equal("Life Sciences");
  })

  it('Should set the round 3 question', function () {
    expect(currentRound3.currentRound3Question).to.equal("Alimentary, my dear! waves of contractions moving food through the esophagus are called this");
  })

  it('Should set the round 3 answer', function () {
    expect(currentRound3.currentRound3Answer).to.equal("peristalsis");
  })

  it('Should start with all 3 players wagers at 0', function () {
    expect(currentRound3.currentWagers).to.deep.equal([0, 0, 0]);
  })

  it('Should start with all 3 players having not guessed anything', function () {
    expect(currentRound3.currentGuesses).to.deep.equal(['', '', '']);
  })

  it('Should start with all 3 players have guessed 0 times', function () {
    expect(currentRound3.playersGuessed).to.deep.equal([0, 0, 0]);
  })

  it('Should initiate approriate DOM elements when round 3 starts', function () {
    currentRound3.init()
    expect(round3UpdateDOM.bigScreenR3AskQuestion).to.have.been.called(1);
    expect(round3UpdateDOM.playerDisplayBox).to.have.been.called(1);
    expect(round3UpdateDOM.createWagerBtnInputListeners).to.have.been.called(1);
    expect(round3UpdateDOM.createPlayerInputListeners).to.have.been.called(1);
    })
  
  it.skip('Should collect all 3 wagers, then raise answer boxes and ask round 3 question', function () {
    currentRound3.collectWagers('player1-wager-input', 100);
    expect(currentRound3.currentWagers).to.deep.equal([100, 0, 0]);
    expect(round3UpdateDOM.playerDisplayBox).to.have.been.called(1);
    expect(round3UpdateDOM.bigScreenR3AskQuestion).to.have.been.called(0);

    currentRound3.collectWagers('player2-wager-input', 200);
    expect(currentRound3.currentWagers).to.deep.equal([100, 200, 0]);
    expect(round3UpdateDOM.playerDisplayBox).to.have.been.called(2);
    expect(round3UpdateDOM.bigScreenR3AskQuestion).to.have.been.called(0);

    currentRound3.collectWagers('player2-wager-input', 300);
    expect(currentRound3.currentWagers).to.deep.equal([100, 200, 300]);
    expect(round3UpdateDOM.playerDisplayBox).to.have.been.called(4);
    expect(round3UpdateDOM.bigScreenR3AskQuestion).to.have.been.called(1);
  })
  
  it.skip('Should collect all 3 answers in any order, then check all answers at the same time', function () {
    currentRound3.logAnswer('player1-text', "peristalsis");
    expect(currentRound3.currentGuesses).to.deep.equal([1, 0, 0]);
    expect(currentRound3.playersGuessed).to.deep.equal(['peristalsis', '', '']);
    expect(round3UpdateDOM.playerDisplayBox).to.have.been.called(1);

    currentRound3.logAnswer('player3-text', "peristalsis");
    expect(currentRound3.currentGuesses).to.deep.equal([1, 0, 1]);
    expect(currentRound3.playersGuessed).to.deep.equal(['peristalsis', '', 'peristalsis']);
    expect(round3UpdateDOM.playerDisplayBox).to.have.been.called(2);

    currentRound3.logAnswer('player2-text', "WRONG");
    expect(currentRound3.currentGuesses).to.deep.equal([1, 1, 1]);
    expect(currentRound3.playersGuessed).to.deep.equal(['peristalsis', 'WRONG', 'peristalsis']);
    expect(round3UpdateDOM.playerDisplayBox).to.have.been.called(5);
    expect(checkanswers).to.have.been.called(1);
    expect(Player.updatePlayerScore).to.have.been.called(3);

    expect(player1.score).to.equal(100);
    expect(player2.score).to.equal(-200);
    expect(player3.score).to.equal(300);
  })
});