
class Player {
  constructor (name) {
    this.name = name;
  }
}
class Game {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.player1 = player1;
    this.player2 = player2;
    this.board = [[' ', ' ', ' '],
                  [' ', ' ', ' '],
                  [' ', ' ', ' ']];
  }

  showPlayers() {
    return this.players;
  }
}

var tieGame = function () {
  for (var i = 0; i < row.length; i++) {
    if (var )
  }
}
var gameWon () {
  for (var i )
}

var play = function () {
  // generate new game with new players
  
  while (!gameWon) {
    // play turn

  }

}

var playTurn = function () {
  var move = prompt('Please enter your move position. (In the form of row,col)');


}

var game = new Game(new Player('Cary'), new Player('Brad'));

console.log(game.showPlayers());
