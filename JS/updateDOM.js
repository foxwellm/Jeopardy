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
  
  if (game.currentPlayer === 'player1') {
    playerDisplayBox('answer', 'up', 1);
  } else if (game.currentPlayer === 'player2') {
    playerDisplayBox('answer', 'up', 2);
  } else {
    playerDisplayBox('answer', 'up', 3);
  };
  closeBigScreen();
  bigScreenAskQuestion(currentDailyDouble.currentQuestion)
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
 
    if (currentDailyDouble.currentPlayer === 'player1') {
      playerDisplayBox('wager', 'up', 1);
    } else if (currentDailyDouble.currentPlayer === 'player2'){
      playerDisplayBox('wager', 'up', 2);
    } else {
      playerDisplayBox('wager', 'up', 3);
    } 
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
        
      }else {
        currentDailyDouble.verifyAnswer(currentTextBox.value);
        currentTextBox.value = '';
        currentDailyDouble = false;
      }
    })
  })
}

//test function
function closeBigScreen() {
  document.querySelector('.big-screen').classList.remove('ask-question');
}


function populateGameBoard(roundCategories,questionBoxValues) {
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
  if (game.currentPlayer === 'player1') {
    playerDisplayBox('answer', 'up', 1);
  } else if (game.currentPlayer === 'player2') {
    playerDisplayBox('answer', 'up', 2);
  } else {
    playerDisplayBox('answer', 'up', 3);
  }
}

const p1Score = document.querySelector('.p1-score');
const p2Score = document.querySelector('.p2-score');
const p3Score = document.querySelector('.p3-score');

function updatePlayerScore() {
  p1Score.innerText = player1.score;
  p2Score.innerText = player2.score;
  p3Score.innerText = player3.score;
}

const p1Name = document.querySelector('.p1-name');
const p2Name = document.querySelector('.p2-name');
const p3Name = document.querySelector('.p3-name');

function setPlayerNames() {
  p1Name.innerText = player1.name;
  p2Name.innerText = player2.name;
  p3Name.innerText = player3.name;
};

// function bigScreenRound3() {
//   bigScreen.classList.add('ask-question');
//   bigScreen.classList.add('round-3-big-screen');
// };

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