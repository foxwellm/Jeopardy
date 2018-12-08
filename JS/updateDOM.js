const questionBoxes = document.querySelectorAll('.question-box');
const bigScreen = document.querySelector('.big-screen');
const closeBigScreenBtn = document.querySelector('.close-big-screen');
const bigScreenBack = document.querySelector('.big-screen-back');
closeBigScreenBtn.addEventListener('click', closeBigScreen)


questionBoxes.forEach(function (questionBox) {
  questionBox.addEventListener('click', function () {
    let questionNow = game.getQuestion(event.target.dataset.questionid);
    bigScreenBack.innerText = questionNow.question;
    bigScreen.classList.add('ask-question');
  });
});

//test function
function closeBigScreen() {
  bigScreen.classList.remove('ask-question');
}

function populateGameBoard(questionBoxValues) {
  questionBoxes.forEach(box => {
    box.innerText = questionBoxValues.splice(-1);
  })
}


const p1Turn = document.querySelector('.p1');
const p1End = document.querySelector('.p1E');
const p1Answer = document.querySelector('.p1-answer');

p1Turn.addEventListener('click', yourTurn);
p1End.addEventListener('click', yourTurnEnd);

function yourTurn() {
 p1Answer.classList.add('your-turn');
}
function yourTurnEnd() {
 p1Answer.classList.remove('your-turn');
}





    //  currentPlayerAnswerBox() fires and rises, showing answer input








// if (typeof module.exports !== undefined) {
//   module.exports = updateDOM.js
// }