let player1; //PLAYER ONE
let player2; //PLAYER TWO
let currentPlayer = player1; //DEFAULT PLAYER

const board = [
  4,
  4,
  4,
  4,
  4,
  4,
  0, //PLAYER ONE (6 in the array)
  4,
  4,
  4,
  4,
  4,
  4,
  0, //PLAYER TWO (13 in the array)
];

function gameStart() {
  let counter = 0;
  for (let i = 0; i < board.length; i++) {
    $(`#pit${counter}`).text(board[i]);
    counter++;
    console.log(board[i]);
  }
}
gameStart(); //THANK YOU BABY JESUS

function playerTurn() {
  if (currentPlayer === player1) {
    //if current player is 1, then switch to 2
    currentPlayer = player2;
  } else {
    currentPlayer = player1; //if current player is not 1 then switch to 1
  }
}

$("button").on("click", function () {
  //click function for restart game button
  location.reload();
});
