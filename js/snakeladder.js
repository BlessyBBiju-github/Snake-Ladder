var player1 = "Player 1";
  

function editNames() {
    player1 = prompt("Change Player1 name");
    document.querySelector("p.Player1").innerHTML = player1;
}


function rollTheDice() {
         document.querySelector(".dicesl").setAttribute("src",
            "assets/dic1.gif");
    setTimeout(function () {
        var current = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".dicesl").setAttribute("src",
            "assets/dice" + current + ".png");

    } ,2500);
}
