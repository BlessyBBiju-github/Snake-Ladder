   var player1 = "Player 1";
    var sum=0; 
    var sum2 = 0;
    var num=1;
    var current=0;
    var p = 0;
    var n = 0;
    function editNames() {
        player1 = prompt("Change Player1 name");
        document.querySelector("p.Player1").innerHTML = player1;
    }
  // Function to roll the dice
function rollTheDice() {
             document.querySelector(".img1").setAttribute("src","Assets/dice.gif");
	     setTimeout(function () {
		 n++;
                 current = Math.floor(Math.random() * 6) + 1;
  	        document.querySelector(".img1").setAttribute("src", "Assets/dice" + current + ".png"); 
		if(current==1){
				num++;
		}
		playGame();
	} ,1500);
      }
   function playGame() {
    	if (num > 0) {
    		if (n % 2 == 0) {
    			player2();
    		} else {
    			player1();
    		}
    	}

	function player1() {
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
		else if (sum > 100) {
    			sum -= current;
    			play();
		}
		else{
			play();
		}
		if (sum == 100) {
    			alert("player1 win")
    		}
	}
	function player2() {
    	
		$("#image2").remove();
		sum2 += current;
		if(sum2==36){
			sum2=8;
			play2();
		}
		else if(sum2==30){
			sum2=12;
			play2();
		}
		else if(sum2==86){
			sum2=57;
			play2();
		}
		else if(sum2==70){
			sum2=50;
			play2();
		}
		else if(sum2==99){
			sum2=42;
			play2();
		}
		else if(sum2==4){
			sum2=39;
			play2();
		}
		else if(sum2==26){
			sum2=75;
			play2();
		}
		else if(sum2==33){
			sum2=52;
			play2();
		}
		else if(sum2==59){
			sum2=63;
			play2();
		}
		else if(sum2==73){
			sum2=93;
			play2();
		}
		else if (sum2 > 100) {
    			sum -= current;
    			play();
		}
		else{
			play2();
		}
		if (sum2 == 100) {
    			alert("player2 win")
    		}
	}

	function play(){
    		$('#' + sum + "").append('<img id="image" src="Assets/giphy.gif">');
    		console.log(sum);
		}
   	 
	}
	function play2() {
                 $('#' + sum2 + "").append('<img id="image2" src="Assets/green.png">');
    		 console.log(sum2);


   }