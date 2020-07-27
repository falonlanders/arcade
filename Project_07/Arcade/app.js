//only up to 9 turns
//10 turn = alert for game over
//player x player o (can make global variable for default player x to go first)
//switch each click (click handler for board) -toggle
//click handler for each square in board
//current players html into square

let currentTurn;
let defaultPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

$('.div').toggle();


$('.container').click(function() {
    alert ("works");
});

// $("p").click(function(){
//     alert("The paragraph was clicked.");
//   });

// function turnChange() {

// };

function Restart() {
};