const updateDOM = {closeBigScreen}

function createQuestionBoxListeners() {
  const questionBoxes = document.querySelectorAll('.question-box');
  questionBoxes.forEach(function(eachQuestionBox) {
    eachQuestionBox.addEventListener('click', askQuestion);
  })
};

function playerDisplayBox(type, direction, ...boxes) {
  let whichBoxes = [...boxes];
  whichBoxes.forEach((box) => {
    if(direction === 'down') {
      document.querySelector(`.p${box}-${type}`).classList.remove('your-turn');
    } else {
      document.querySelector(`.p${box}-${type}`).classList.add('your-turn');
    }
  })
};

function DDOperations() {
  playerDisplayBox('wager','down', 1,2,3);
  playerDisplayBox('answer','down', 1,2,3);
  playerDisplayBox('answer', 'up', game.currentPlayer.slice(-1));
  closeBigScreen();
  bigScreenAskQuestion(currentDailyDouble.currentQuestion);
}

function round3Operations() {
  playerDisplayBox('wager','down', 1,2,3);
  playerDisplayBox('answer','down', 1,2,3);
  playerDisplayBox('answer', 'up', 1,2,3);
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

function askQuestion(event) {
  let currentQuestionID = event.target.dataset.questionid;
  if (game.currentRound === 1 && (currentQuestionID == game.DDround1)) {
    currentDailyDouble = new DailyDouble(event.target.dataset.questionid, game.manipulatedQuestionObj, game.currentRound,game.currentPlayer);
    bigScreenAskQuestion(currentDailyDouble.currentCategory)
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

function createPlayerInputListeners() {
  const answerBtns = document.querySelectorAll('.answer-btn');
  answerBtns.forEach(function(button) {
    button.addEventListener('click', function() {
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

function updatePlayerScore() {
  document.querySelector('.p1-score').innerText = player1.score;
  document.querySelector('.p2-score').innerText = player2.score;
  document.querySelector('.p3-score').innerText = player3.score;
}

function setPlayerNames() {
  document.querySelector('.p1-name').innerText = player1.name;
  document.querySelector('.p2-name').innerText = player2.name;
  document.querySelector('.p3-name').innerText = player3.name;
};

function bigScreenRound3() {
  document.querySelector('.big-screen').classList.add('ask-question');
  document.querySelector('.big-screen').classList.add('round-3-big-screen');
  currentDailyDouble = new DailyDouble(0, game.manipulatedQuestionObj, game.currentRound,game.currentPlayer);
  createWagerBtnInputListeners();
};

// TESTING

const closeBigScreenBtn = document.querySelector('.close-big-screen');
closeBigScreenBtn.addEventListener('click', closeBigScreenTest);

function closeBigScreenTest() {
  document.querySelector('.big-screen').classList.remove('ask-question');
  game.checkTilesLeft();
}


// const p1Turn = document.querySelector('.p1');
// const p1End = document.querySelector('.p1E');
// const p2Turn = document.querySelector('.p2');
// const p2End = document.querySelector('.p2E');
// const p3Turn = document.querySelector('.p3');
// const p3End = document.querySelector('.p3E');
// p1Turn.addEventListener('click', yourTurn1);
// p1End.addEventListener('click', yourTurnEnd1);
// p2Turn.addEventListener('click', yourTurn2);
// p2End.addEventListener('click', yourTurnEnd2);
// p3Turn.addEventListener('click', yourTurn3);
// p3End.addEventListener('click', yourTurnEnd3);



// const p1Wager = document.querySelector('.p1-wager');
// const p2Wager = document.querySelector('.p2-wager');
// const p3Wager = document.querySelector('.p3-wager');
// const p1WagerStart = document.querySelector('.p1W');
// const p1WagerEnd = document.querySelector('.p1WE');
// p1WagerStart.addEventListener('click', wager1);
// p1WagerEnd.addEventListener('click', wagerEnd1);

// function wager1() {
//   p1Wager.classList.add('your-turn');
// }

// function wager2() {
//   p2Wager.classList.add('your-turn');
// }

// function wager3() {
//   p3Wager.classList.add('your-turn');
// }

// function wagerEnd1() {
//   p1Wager.classList.remove('your-turn');
// }

// function wagerEnd2() {
//   p2Wager.classList.remove('your-turn');
// }

// function wagerEnd3() {
//   p3Wager.classList.remove('your-turn');
// }

// function yourTurn1() {
//   p1Answer.classList.add('your-turn');
// }

// function yourTurnEnd1() {
//   p1Answer.classList.remove('your-turn');
// }

// function yourTurn2() {
//   p2Answer.classList.add('your-turn');
// }

// function yourTurnEnd2() {
//   p2Answer.classList.remove('your-turn');
// }

// function yourTurn3() {
//   p3Answer.classList.add('your-turn');
// }

// function yourTurnEnd3() {
//   p3Answer.classList.remove('your-turn');
// }










// if (typeof module.exports !== undefined) {
//   module.exports = updateDOM.js
// }