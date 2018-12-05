const tileContainer = document.querySelector('.question-box-section');




tileContainer.addEventListener('click', askQuestion);




function askQuestion() {
  event.target.classList.add('ask-question');
}