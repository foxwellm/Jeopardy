const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const p1Radio = document.querySelectorAll('.p1radio'); 
let player1;
let player2;
let player3;
let game;
let currentQuestion;
let currentDailyDouble;
let currentRound3;

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

function startGame() {
  closeStartMenu();  
  const p1Name = document.querySelector('input[name="p1Name"]').value;
  const p2Name = document.querySelector('input[name="p2Name"]').value;
  const p3Name = document.querySelector('input[name="p3Name"]').value;
  const p1Human = document.querySelector('input[name="p1Human"]:checked').value;
  const p2Human = document.querySelector('input[name="p2Human"]:checked').value;
  const p3Human = document.querySelector('input[name="p3Human"]:checked').value;
  player1 = new Player(p1Human, p1Name);
  player2 = new Player(p2Human, p2Name);
  player3 = new Player(p3Human, p3Name);
  game = new Game(gameQuestions);
  game.init();
}

function resetGame() {
  openStartMenu();
}