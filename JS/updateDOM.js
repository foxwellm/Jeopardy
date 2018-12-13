function closeStartMenu() {
  document.querySelector('.start-screen').classList.add('start-game');
}

function openStartMenu() {
  document.querySelector('.start-screen').classList.remove('start-game');
}

function createQuestionBoxListeners() {
  const questionBoxes = document.querySelectorAll('.question-box');
  questionBoxes.forEach(function(eachQuestionBox) {
    eachQuestionBox.addEventListener('click', askQuestion);
  })
}

function createPlayerInputListeners() {
  const answerBtns = document.querySelectorAll('.answer-btn');
  answerBtns.forEach(function (button) {
    button.addEventListener('click', function () {
      const currentTextBox = event.target.previousElementSibling;
      if (!currentDailyDouble) {
        currentQuestion.verifyAnswer(currentTextBox.value);
        currentTextBox.value = '';
      } else {
        currentDailyDouble.verifyAnswer(currentTextBox.value);
        currentTextBox.value = '';
        currentDailyDouble = false;
      }
    })
  })
}

function setPlayerNames() {
  document.querySelector('.p1-name').innerText = player1.name;
  document.querySelector('.p2-name').innerText = player2.name;
  document.querySelector('.p3-name').innerText = player3.name;
}

function updateDomPlayerScore() {
  document.querySelector('.p1-score').innerText = player1.score;
  document.querySelector('.p2-score').innerText = player2.score;
  document.querySelector('.p3-score').innerText = player3.score;
}

function whosTurn() {
  const answerBoxes = document.querySelectorAll('.answer');
  answerBoxes.forEach((answerBox) => {
    answerBox.classList.remove('your-turn')
  });
  playerDisplayBox('answer', 'up', game.currentPlayer.slice(-1));
}

function updateRoundCounter() {
  let roundCounter = document.querySelector('.right-light');
  roundCounter.innerText = `Round ${game.currentRound}`;
}

function askQuestion(event) {
  let currentQuestionID = event.target.dataset.questionid;
  if (game.currentRound === 1 && (currentQuestionID == game.DDround1)) {
    currentDailyDouble = new DailyDouble(event.target.dataset.questionid, game.manipulatedQuestionObj, game.currentRound, game.currentPlayer);
    bigScreenAskQuestion(currentDailyDouble.currentCategory.name)
    createWagerBtnInputListeners();
    playerDisplayBox('wager', 'up', game.currentPlayer.slice(-1));
  } else {
    currentQuestion = new Question(event.target.dataset.questionid, game.manipulatedQuestionObj, game.currentRound);
    bigScreenAskQuestion(currentQuestion.currentQuestion);
    whosTurn();
  }
  const boxToDisable = event.target.closest('.question-box');
  boxToDisable.innerText = '';
  boxToDisable.removeEventListener('click', askQuestion);
}

function playerDisplayBox(type, direction, ...boxes) {
  let whichBoxes = [...boxes];
  whichBoxes.forEach((box) => {
    if (direction === 'down') {
      document.querySelector(`.p${box}-${type}`).classList.remove('your-turn');
    } else {
      document.querySelector(`.p${box}-${type}`).classList.add('your-turn');
    }
  })
}

function DDOperations() {
  playerDisplayBox('wager', 'down', 1, 2, 3);
  playerDisplayBox('answer', 'down', 1, 2, 3);
  playerDisplayBox('answer', 'up', game.currentPlayer.slice(-1));
  closeBigScreen();
  bigScreenAskQuestion(currentDailyDouble.currentQuestion);
}

function round3Operations() {
  playerDisplayBox('wager', 'down', 1, 2, 3);
  playerDisplayBox('answer', 'down', 1, 2, 3);
  playerDisplayBox('answer', 'up', 1, 2, 3);
  closeBigScreen();
  bigScreenAskQuestion(currentDailyDouble.currentQuestion);
  
}

function bigScreenAskQuestion(asking) {
  document.querySelector('.big-screen-back').innerText = asking;
  document.querySelector('.big-screen').classList.add('ask-question');
}

function createWagerBtnInputListeners() {
  const wagerBtns = document.querySelectorAll('.wager-btn');
  wagerBtns.forEach(function (button) {
    button.addEventListener('click', function () {
      currentDailyDouble.collectWager(); 
    })
  })
}

function closeBigScreen() {
  document.querySelector('.big-screen').classList.remove('ask-question');
}

function populateGameBoard(roundCategories, questionBoxValues) {
  const categoryBoxes = document.querySelectorAll('.category-box');
  const questionBoxes = document.querySelectorAll('.question-box');
  categoryBoxes.forEach(categoryBox => {
    categoryBox.innerText = roundCategories.splice(-1);
  })
  questionBoxes.forEach(questionBox => {
    questionBox.innerText = questionBoxValues.splice(-1);
  })
}

function bigScreenRound3() {
  document.querySelector('.big-screen').classList.add('ask-question');
  document.querySelector('.big-screen').classList.add('round-3-big-screen');
  currentDailyDouble = new DailyDouble(0, game.manipulatedQuestionObj, game.currentRound, game.currentPlayer);
  createWagerBtnInputListeners();
}

// TESTING

const closeBigScreenBtn = document.querySelector('.close-big-screen');
closeBigScreenBtn.addEventListener('click', closeBigScreenTest);

function closeBigScreenTest() {
  document.querySelector('.big-screen').classList.remove('ask-question');
  game.checkTilesLeft();
}

// if (typeof module.exports !== 'undefined') {
//   module.exports = updateDOM;
// }