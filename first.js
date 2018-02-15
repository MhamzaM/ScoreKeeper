var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");

var scr1 = 0;
var scr2 = 0; 
var gameOver = false;
var totalScore = 5;

var reset = document.getElementById("reset");
var numbers = document.getElementById("numbers");
var tscr = document.getElementById("totalScore");

function chkWin(score){

	if (score == totalScore)
	{

		gameOver = true;
	}
}

player1.addEventListener("click",function(){

	if(gameOver != true){	
		scr1++;
		p1.textContent = scr1;
		chkWin(scr1);

		if(scr1 == totalScore){
			p1.style.color = "green";
		}
	}	
});


player2.addEventListener("click",function(){

	if(gameOver != true){
		scr2++;
		p2.textContent = scr2;
		chkWin(scr2);
	}	
	if(scr2 == totalScore){
			p2.style.color = "green";
	}
});


reset.addEventListener("click",function(){

	scr1 = 0;
	scr2 = 0;

	p1.textContent = scr1;
	p2.textContent = scr2;
	p1.style.color = "black";
	p2.style.color = "black";
	gameOver = false;

});


numbers.addEventListener("change",function(){


	if(numbers.value > 0){

		totalScore = numbers.value;
		tscr.textContent = totalScore;	
	}
});
