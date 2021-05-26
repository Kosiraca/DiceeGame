var randomNumber = Math.floor((Math.random() * 6) + 1);


if (randomNumber == 1) {
    document.getElementsByClassName("image1").item("img").setAttribute("src", "dice1.png");
} else if (randomNumber == 2) {
    document.getElementsByClassName("image1").item("img").setAttribute("src", "dice2.png");
} else if (randomNumber == 3) {
    document.getElementsByClassName("image1").item("img").setAttribute("src", "dice3.png");
} else if (randomNumber == 4) {
    document.getElementsByClassName("image1").item("img").setAttribute("src", "dice4.png");
} else if (randomNumber == 5) {
    document.getElementsByClassName("image1").item("img").setAttribute("src", "dice5.png");


} else {
    document.getElementsByClassName("image1").item("img").setAttribute("src", "dice6.png");
}

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
if (randomNumber2 == 1) {
    document.getElementsByClassName("image2").item("img").setAttribute("src", "dice1.png");
} else if (randomNumber2 == 2) {
    document.getElementsByClassName("image2").item("img").setAttribute("src", "dice2.png");
} else if (randomNumber2 == 3) {
    document.getElementsByClassName("image2").item("img").setAttribute("src", "dice3.png");
} else if (randomNumber2 == 4) {
    document.getElementsByClassName("image2").item("img").setAttribute("src", "dice4.png");
} else if (randomNumber2 == 5) {
    document.getElementsByClassName("image2").item("img").setAttribute("src", "dice5.png");


} else {
    document.getElementsByClassName("image2").item("img").setAttribute("src", "dice6.png");
}

if (randomNumber > randomNumber2) {
    document.getElementsByClassName("heading").item("h1").innerHTML = "🏁 Player 1 won!";
} else if (randomNumber < randomNumber2) {
    document.getElementsByClassName("heading").item("h1").innerHTML = "Player 2 won 🏁!";
} else {
    document.getElementsByClassName("heading").item("h1").innerHTML = "Draw";
}

