var RandomNumber1 = Math.floor(Math.random() * 6) + 1;   // pick a random number for player 1 from 1 to 6 

var RandomImageSource1 = "images/dice" + RandomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src",RandomImageSource1); // pick a ramdom rice image for player 1

var RandomNumber2 = Math.floor(Math.random() * 6) + 1;   // pick a random number for player 2 from 1 to 6 

var RandomImageSource2 = "images/dice" + RandomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src",RandomImageSource2); // pick a ramdom rice image for player 2


if (RandomNumber1>RandomNumber2) {
  document.querySelector("h1").innerHTML = " Play 1 Wins!";

}

else if (RandomNumber2>RandomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 wins!  ";
}

else {
    document.querySelector("h1").innerHTML="Draw !";
}

