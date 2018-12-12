const chai = require('chai');
const expect = chai.expect;
const Player = require('../JS/Player.js');
const spies = require('chai-spies')
chai.use(spies);
global.updateDOM = require('../updateDOM.js');
chai.spy.on(global.domUpdates, ['displayHeight','displayWidth'], () => true);
// const indexMethods = require('../index.js');
const Game = require('../JS/Game.js');
global.Question = require('../JS/Question.js');
global.updateDOM = require('../JS/updateDOM.js');
const DailyDouble = require('../JS/DailyDouble.js');

// // describe('Make a player', function () {
// //   let question;

// //   beforeEach(function () {
// //    question= new Question (1, {}, 1);
// //   })
// //   it  (', function() {
// //     question.verifyAnswer('string');
// //     expect('string').to.equal(100);
// //   });
// // });
