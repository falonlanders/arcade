//default start player
let currentPlayer = "X";

$(".cell").on('click', function() { 
  if (currentPlayer == "X" && $(this).hasClass("takenByX" || "takenByO")) { //checks to see if square has been played
      (""); //does nothing
  } else if (currentPlayer == "X") {
      $(this).text("X").addClass("takenByX"); //change clicked square to x & adds class taken
       playerChange();} //runs player change function
    if(currentPlayer == "O" && $(this).hasClass("takenByX" || "takenByO")) { //checks to see if square has been played
       (""); //does nothing
  } else if (currentPlayer == "O") { 
      $(this).text("0").addClass("takenByO"); //change clicked square to o & adds class taken
       playerChange(); //runs player change function
  }});

function playerChange() {
  if (currentPlayer === "X"){ //if current player is x, then switch to o
    currentPlayer = "O";
  } else {
    currentPlayer = "X"; //if current player is not x then switch to x
  }
  winner();
}

$("button").on('click', function() { //click function for restart game button
  $('.cell').text(""); //removes all added text from the cells
  $('.cell').removeClass("takenByX"); //removes the taken class from the cells
  $('.cell').removeClass("takenByO"); //removes the taken class from the cells
  $('.cell').css({"color" : "rgb(0, 35, 46)" , "background-color" : ""}) //returns board to normal
  $("div.container").css("pointer-events", "all"); //returns click events to normal
  $('h1').text("C R O S S E S & & N O U G H T S").append; //returns heading to normal
  if (currentPlayer == "O"){
    playerChange(); //changes back to player x so o doesnt play first
  }
});

function winner(){    
  if ( 
       $(".cell1").hasClass("takenByX") && $(".cell2").hasClass("takenByX") && $(".cell3").hasClass("takenByX") || // -
       $(".cell1").hasClass("takenByX") && $(".cell5").hasClass("takenByX") && $(".cell9").hasClass("takenByX") || // \
       $(".cell1").hasClass("takenByX") && $(".cell4").hasClass("takenByX") && $(".cell7").hasClass("takenByX") || // |
       $(".cell2").hasClass("takenByX") && $(".cell5").hasClass("takenByX") && $(".cell8").hasClass("takenByX") || // |
       $(".cell3").hasClass("takenByX") && $(".cell5").hasClass("takenByX") && $(".cell7").hasClass("takenByX") || // /
       $(".cell3").hasClass("takenByX") && $(".cell6").hasClass("takenByX") && $(".cell9").hasClass("takenByX") || // |
       $(".cell4").hasClass("takenByX") && $(".cell5").hasClass("takenByX") && $(".cell6").hasClass("takenByX") || // -
       $(".cell7").hasClass("takenByX") && $(".cell8").hasClass("takenByX") && $(".cell9").hasClass("takenByX")    // -
  ){
       $('h1').text("Congratulations! X Wins!").append; //changes header text for winner alert
       $(".takenByO").css({"color" : "DarkCyan" , "background-color" : "DarkCyan"}); //changes loser squares
       $(".takenByX").css("color", "FloralWhite"); //changes winner squares
       $(".cell:empty").css({"background-color" : "DarkCyan" , "color" : "DarkCyan"}); //changes empty squares
       $("div.container").css("pointer-events", "none"); //prevents click events
  }  else if (
       $(".cell1").hasClass("takenByO") && $(".cell2").hasClass("takenByO") && $(".cell3").hasClass("takenByO") || // -
       $(".cell1").hasClass("takenByO") && $(".cell5").hasClass("takenByO") && $(".cell9").hasClass("takenByO") || // \
       $(".cell1").hasClass("takenByO") && $(".cell4").hasClass("takenByO") && $(".cell7").hasClass("takenByO") || // |
       $(".cell2").hasClass("takenByO") && $(".cell5").hasClass("takenByO") && $(".cell8").hasClass("takenByO") || // |
       $(".cell3").hasClass("takenByO") && $(".cell5").hasClass("takenByO") && $(".cell7").hasClass("takenByO") || // /
       $(".cell3").hasClass("takenByO") && $(".cell6").hasClass("takenByO") && $(".cell9").hasClass("takenByO") || // |
       $(".cell4").hasClass("takenByO") && $(".cell5").hasClass("takenByO") && $(".cell6").hasClass("takenByO") || // -
       $(".cell7").hasClass("takenByO") && $(".cell8").hasClass("takenByO") && $(".cell9").hasClass("takenByO")    // _ 
  ){
       $('h1').text("Congratulations! 0 Wins!").append; //changes heading text for winner alert
       $(".takenByX").css({"color" : "DarkCyan" , "background-color" : "DarkCyan"}); //changes loser squares
       $(".takenByO").css("color", "FloralWhite"); //changes winner squares
       $(".cell:empty").css({"background-color" : "DarkCyan" , "color" : "DarkCyan"}); //changes empty squares
       $("div.container").css("pointer-events", "none"); //prevents click events
  } else {
        (""); //does nothing
  }}

  