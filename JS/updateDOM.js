const questionBoxSection = document.querySelector('.question-box-section');
const tileContainer = document.querySelectorAll('.tile-container');
const bigScreen = document.querySelector('.big-screen');
const closeBigScreenBtn = document.querySelector('.close-big-screen');

questionBoxSection.addEventListener('click', askQuestion)
closeBigScreenBtn.addEventListener('click', closeBigScreen)


tileContainer.forEach(function (tile) {
  tile.addEventListener('click', function () {
    tile.firstElementChild.classList.add('ask-question');
    tile.classList.add('tile-container-answer');
    tile.classList.remove('tile-container-relative');
  });
});

function askQuestion() {
  bigScreen.classList.add('ask-question');
}

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