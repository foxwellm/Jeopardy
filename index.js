

// questionBoxSection.addEventListener('click', getQuestion)
const startBtn = document.querySelector('.start-btn');
const startScreen = document.querySelector('.start-screen');
const p1Radio = document.querySelectorAll('.p1radio'); 
startBtn.addEventListener('click', startGame);

// let player1;
// let player2;
// let player3;

let currentQuestion; //better way to initialize this?
let currentDailyDouble;

function startGame() {
  startScreen.classList.add('start-game');
  const p1Name = document.querySelector('input[name="p1Name"]').value;
  const p2Name = document.querySelector('input[name="p2Name"]').value;
  const p3Name = document.querySelector('input[name="p3Name"]').value;
  const p1Human = document.querySelector('input[name="p1Human"]:checked').value;
  const p2Human = document.querySelector('input[name="p2Human"]:checked').value;
  const p3Human = document.querySelector('input[name="p3Human"]:checked').value;
  player1 = new Player(p1Human, p1Name);
  player2 = new Player(p2Human, p2Name);
  player3 = new Player(p3Human, p3Name);
  const game = new Game(gameQuestions);
  game.init();
}