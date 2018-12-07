const questionBoxes = document.querySelectorAll('.question-box');
const bigScreen = document.querySelector('.big-screen');
const closeBigScreenBtn = document.querySelector('.close-big-screen');

closeBigScreenBtn.addEventListener('click', closeBigScreen)


questionBoxes.forEach(function (questionBox) {
  questionBox.addEventListener('click', function () {
    //retrieve question from game.getQuestion()
    //change big-screen innerText
    bigScreen.classList.add('ask-question');
  });
});


function closeBigScreen() {
  bigScreen.classList.remove('ask-question');
}


// presentQuestion(`${'CURRENT QUESTION'}`) {
//   big-screen-back.innerText() displays question 
    //  currentPlayerAnswerBox() fires and rises, showing answer input
// }







// if (typeof module.exports !== undefined) {
//   module.exports = updateDOM.js
// }