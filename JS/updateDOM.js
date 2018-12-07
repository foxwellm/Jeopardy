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

    //  currentPlayerAnswerBox() fires and rises, showing answer input








// if (typeof module.exports !== undefined) {
//   module.exports = updateDOM.js
// }