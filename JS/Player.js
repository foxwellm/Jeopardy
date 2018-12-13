class Player {
  constructor(human = false, name = 'AI', score = 0) {
    this.name = name;
    this.human = human;
    this.score = score;
    
  }
  updatePlayerScore(pointsToAdd) {
    this.score += pointsToAdd
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}