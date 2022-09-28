 var player1= "Player 1";
    var sum=0; 
    var num=1;
    var current=0;
    function editNames() {
        player1 = prompt("Change Player1 name");
        document.querySelector("p.Player1").innerHTML = player1;
    }
  
    // Function to roll the dice
    function rollTheDice() {
             document.querySelector(".img1").setAttribute("src","Assets/dice.gif");
    $("#"+sum+"").remove(":contains('A')");
        setTimeout(function () {
         current = Math.floor(Math.random() * 6) + 1;
  
            document.querySelector(".img1").setAttribute("src","Assets/dice" + current + ".png"); 
   if(current==1){
	num++;
}
   playGame();

          
        } ,1500);
    }

  function playGame() {
    	if (num > 0) {
		$("#image").remove();
		sum += current;
		if(sum==36){
			sum=8;
			play();
		}
		else if(sum==30){
			sum=12;
			play();
		}
		else if(sum==86){
			sum=57;
			play();
		}
		else if(sum==70){
			sum=50;
			play();
		}
		else if(sum==99){
			sum=42;
			play();
		}
		else if(sum==4){
			sum=39;
			play();
		}
		else if(sum==26){
			sum=75;
			play();
		}
		else if(sum==33){
			sum=52;
			play();
		}
		else if(sum==59){
			sum=63;
			play();
		}
		else if(sum==73){
			sum=93;
			play();
		}

		else{
			play();
		}
		function play(){
    			$('#' + sum + "").append('<img id="image" src="Assets/giphy.gif">');
    			console.log(sum);
		}
   	 }
}