const noPlayer = 0; //no player
let currentPlayer = 1; //default player

const numRows = 7; //rows
const numCols = numRows; //columns
const board = Array.from(Array(numCols), (column) => Array(numRows).fill(0)); //board array

function playerChange() {
  //player change function
  currentPlayer = -currentPlayer;
}

const playerClasses = {
  //taken/open space classes
  [-1]: `tree`, //tree
  [noPlayer]: `none`, //no player
  [1]: `deer`, //deer
};

function drawBoard() {
  //creating board
  const $container = $(".container");
  $container.html("");
  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    board.forEach((column, columnIndex) => {
      const playerId = column[rowIndex];
      const playerClass = playerClasses[playerId];
      $container.append(
        //appends all data to container
        `<div data-row="${rowIndex}" data-col="${columnIndex}" class="cell ${playerClass}"></div>`
      );
    });
  }
}
drawBoard();

$("button").on("click", function () {
  location.reload();
});

$(".container").on("click", ".cell", function (clicky) {
  const targetRow = $(clicky.currentTarget).data("row");
  const targetCol = $(clicky.currentTarget).data("col");
  const currentVal = board[targetCol][targetRow];
  if (currentVal !== noPlayer) {
    return;
  }
  const takenRow = board[targetCol].findIndex((none) => none !== noPlayer);
  const lowestRow = takenRow === -1 ? numRows - 1 : takenRow - 1;
  board[targetCol][lowestRow] = currentPlayer;
  drawBoard();
  playerChange();
});
