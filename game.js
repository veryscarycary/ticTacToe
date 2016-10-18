
class Player {
  constructor (name, mark) {
    this.name = name;
    this.mark = mark;
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
    this.currentPlayer = player1;
    this.waitingPlayer = player2;

    this.winner = null;
  }

  showPlayers() {
    return this.players;
  }

  tieGame () {
    let row = this.board;
    for (var i = 0; i < row.length; i++) {
      for (var j = 0; j < row.length; j++) {
        if (this.board[i][j] )
      }
    }
  }

  displayBoard() {
      console.log(`| ${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]} |`);
      console.log(`| ${this.board[1][0]} | ${this.board[1][1]} | ${this.board[1][2]} |`);
      console.log(`| ${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]} |`);
  }

  switchPlayers () {
    var temp = this.currentPlayer;
    this.currentPlayer = this.waitingPlayer;
    this.waitingPlayer = temp;
  }

  gameWon () {

  }

  validMove(moveArray) {
    if (this.board[moveArray[0], moveArray[1]] === ' ') {
      this.board[moveArray[0], moveArray[1]] = this.currentPlayer.mark;
      return true;
    } else {
      console.log(`Another mark is already at ${moveArray[0]},${moveArray[1]}! Try Again!`);
    }
  }


  play () {
    console.log('Hello! Welcome to tic-tac-toe!');

    while (!this.gameWon) {
      this.playTurn();

    }

    console.log()
  }

  playTurn () {
    this.displayBoard();
    var response = prompt('Please enter your move position. (In the form of row,col)');
    var moveArray = response.split(',').forEach((string) => Number(string));

    if (this.board[moveArray[0], moveArray[1]] === ' ') {
      this.board[moveArray[0], moveArray[1]] = this.currentPlayer.mark;
    } else {
      console.log('there was an issue placing the mark!');
    }

    this.switchPlayers();
  }

};


var game = new Game(new Player('Cary', 'x'), new Player('Brad', 'o'));

console.log(game.showPlayers());
game.play();
