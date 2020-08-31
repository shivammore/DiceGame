var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;
if(player1>player2){
  document.querySelector("h1").innerHTML="Player 1 Wins!!";

}
else if (player2>player1) {
  document.querySelector("h1").innerHTML="Player 2 Wins!!";
}
else{
  document.querySelector("h1").innerHTML="Draw!!";

}

document.querySelector(".player1dice").setAttribute("src", "images/dice"+player1+".png");
document.querySelector(".player2dice").setAttribute("src", "images/dice"+player2+".png");
