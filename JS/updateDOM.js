const tileContainer = document.querySelector('.question-box-section');
const bigScreen = document.querySelector('.big-screen-question');



tileContainer.addEventListener('click', askQuestion);




function askQuestion() {
  bigScreen.classList.add('ask-question');
}