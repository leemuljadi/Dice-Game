var randomNumber1 = Math.floor(Math.random() * 6) + 1 ; //1 - 6
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
document.querySelector(".img1").setAttribute("src", "images/"+randomDiceImage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1 ; //1 - 6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png
document.querySelector(".img2").setAttribute("src", "images/"+randomDiceImage2);


if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
