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
        const playerWagering = event.target.previousSibling.previousSibling.classList.value;
        const playerWager = event.target.previousSibling.previousSibling.value;
        currentRound3.collectWagers(playerWagering, playerWager);
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
        const playerGuessing = event.target.previousElementSibling.classList[1];
        const playerGuess = event.target.previousElementSibling.value;
        currentRound3.logAnswer(playerGuessing, playerGuess);
      })
    })   
  },
  
  updatePlayerScore() {
    document.querySelector('.p1-score').innerText = player1.score;
    document.querySelector('.p2-score').innerText = player2.score;
    document.querySelector('.p3-score').innerText = player3.score;
  }
}

if (typeof module !== 'undefined') {
  module.exports = round3UpdateDOM;
}
