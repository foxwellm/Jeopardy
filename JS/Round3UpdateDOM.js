const round3UpdateDOM = {
  
  bigScreenR3AskQuestion(asking) {
    document.querySelector('.big-screen-back').innerText = asking;
    document.querySelector('.big-screen').classList.add('ask-question');
    document.querySelector('.big-screen').classList.add('round-3-big-screen');
  },
  
  createWagerBtnInputListeners() {
    const wagerBtns = document.querySelectorAll('.wager-btn');
    wagerBtns.forEach(function (button) {
      button.addEventListener('click', function () {
        currentRound3.collectWagers();
        currentTextBox.value = '';
      })
    })
  },
  
  playerDisplayBox(type, direction, ...boxes) {
    let whichBoxes = [...boxes];
    whichBoxes.forEach((box) => {
      if (direction === 'down') {
        document.querySelector(`.p${box}-${type}`).classList.remove('your-turn');
      } else {
        document.querySelector(`.p${box}-${type}`).classList.add('your-turn');
      }
    })
  },
  
  createPlayerInputListeners() {
    const answerBtns = document.querySelectorAll('.answer-btn');
    answerBtns.forEach(function (button) {
      button.addEventListener('click', function () {
        const currentTextBox = event.target.previousElementSibling;       
        currentRound3.checkAnswer(currentTextBox.value);
        currentTextBox.value = '';
      })
    })
    
  }
}