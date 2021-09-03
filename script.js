let numberOfPlays = 0;
let player = "X";
let square = document.querySelectorAll(".square");
let status = document.querySelector("#game-status");
let resetGame = document.querySelector("#button-reset"); 

// Check Winner Function
function checkGame(square, numberOfPlays){

	//Check Lines
	for (let i=0; i<=6; i+=3){
		if (square[i].innerText == square[i+1].innerText && 
		    square[i].innerText == square[i+2].innerText && 
		   (square[i].innerText === "X" || square[i].innerText === "O")){
			alert(`The winner is "${square[i].innerText}"`);
			reset();
			return;
		}
			
	}
	//Check Columns
	for (let i=0; i<=2; i++){
		if (square[i].innerText == square[i+3].innerText && 
			square[i].innerText == square[i+6].innerText && 
		   (square[i].innerText === "X" || square[i].innerText === "O")){
			alert(`The winner is "${square[i].innerText}"`);
			reset();
			return;
		}
			
	}
	//Check Diagonal1
	let i = 0;
	if (square[i].innerText == square[i+4].innerText && 
		square[i].innerText == square[i+8].innerText && 
	   (square[i].innerText === "X" || square[i].innerText === "O")){
		alert(`The winner is "${square[i].innerText}"`);
		reset();
		return;
	}
		
	//Check Diagonal2
	i = 2;
	if (square[i].innerText == square[i+2].innerText && 
		square[i].innerText == square[i+4].innerText && 
	   (square[i].innerText === "X" || square[i].innerText === "O")){
		alert(`The winner is "${square[i].innerText}"`);
		reset();
		return;
	}

	if (numberOfPlays == 9){
		alert(`Draw Game!!`);
		reset();
		return;
	} 
};

// Change Player Function
let activePlayer = (currentPlayer) => {
	if (/X/.test(currentPlayer))
		return "O";
	else 
		return "X";
};

// Reset Game Function
let reset = ()=>{
	square.forEach(item =>{
		item.innerText = "";
		item.classList.remove("active");
	})
	numberOfPlays = 0;
	player = "X";
	status.innerText = `Player "${player}" turn`;
};

// Event Listener for Squares Click
status.innerText = `Player "${player}" turn`;
square.forEach((item)=>{
 	item.addEventListener("click", ()=>{
 		item.classList.add("active");
     	numberOfPlays += 1;
     	if (item.innerText === ""){
     		item.innerText = player;
     	}
     	player = activePlayer(player);
     	status.innerText = `Player "${player}" turn`; 
     	checkGame(square, numberOfPlays);   	
 	});
});

resetGame.addEventListener("click", reset);


