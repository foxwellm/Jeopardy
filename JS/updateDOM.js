const questionBoxes = document.querySelectorAll('.question-box');
const categoryBoxes = document.querySelectorAll('.category-box');
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

function populateGameBoard(roundCategories,questionBoxValues) {
  categoryBoxes.forEach(categoryBox => {
    categoryBox.innerText = roundCategories.splice(-1);
  })
  questionBoxes.forEach(questionBox => {
    questionBox.innerText = questionBoxValues.splice(-1);
  })
}


const p1Turn = document.querySelector('.p1');
const p1End = document.querySelector('.p1E');
const p1Answer = document.querySelector('.p1-answer');
const p2Turn = document.querySelector('.p2');
const p2End = document.querySelector('.p2E');
const p2Answer = document.querySelector('.p2-answer');
const p3Turn = document.querySelector('.p3');
const p3End = document.querySelector('.p3E');
const p3Answer = document.querySelector('.p3-answer');

p1Turn.addEventListener('click', yourTurn1);
p1End.addEventListener('click', yourTurnEnd1);
p2Turn.addEventListener('click', yourTurn2);
p2End.addEventListener('click', yourTurnEnd2);
p3Turn.addEventListener('click', yourTurn3);
p3End.addEventListener('click', yourTurnEnd3);



function yourTurn1() {
 p1Answer.classList.add('your-turn');
}
function yourTurnEnd1() {
 p1Answer.classList.remove('your-turn');
}
function yourTurn2() {
 p2Answer.classList.add('your-turn');
}
function yourTurnEnd2() {
 p2Answer.classList.remove('your-turn');
}
function yourTurn3() {
 p3Answer.classList.add('your-turn');
}
function yourTurnEnd3() {
 p3Answer.classList.remove('your-turn');
}





    //  currentPlayerAnswerBox() fires and rises, showing answer input








// if (typeof module.exports !== undefined) {
//   module.exports = updateDOM.js
// }