

// questionBoxSection.addEventListener('click', getQuestion)
const startBtn = document.querySelector('.start-btn');
const startScreen = document.querySelector('.start-screen');
startBtn.addEventListener('click', startGame);


function startGame() {
  startScreen.classList.add('start-game')
}

const game = new Game (gameQuestions);
const player1 = new Player ('Tom', true);
const player2 = new Player ('Matt', true);
const player3 = new Player ();

let currentQuestion; //better way to initialize this?
game.init();



// add 'click' event listener for the question box section
// calls our 'getQuestion() method inside Game.js

// verifyAnswer()

