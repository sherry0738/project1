console.log("Ready for Game!")

var bOne = document.querySelector('.b1'); 
var bTwo = document.querySelector('.b2'); 
var bThree = document.querySelector('.b3'); 
var bFour = document.querySelector('.b4'); 
var bFive = document.querySelector('.b5'); 
var bSix = document.querySelector('.b6'); 
var bSeven = document.querySelector('.b7');
var bEight = document.querySelector('.b8');
var bNine = document.querySelector('.b9');
var allBoxes = document.querySelectorAll('.box');

var rowOne = [bOne, bTwo, bThree];
var rowTwo = [bFour, bFive, bSix];
var rowThree = [bSeven, bEight, bNine];
var colOne = [bOne, bFour, bSeven];
var colTwo = [bTwo, bFive, bEight];
var colThree = [bThree, bSix, bNine];
var rows = [rowOne, rowTwo, rowThree];
var crossOne = [bOne, bFive, bNine];
var crossTwo = [bThree, bFive, bSeven];
var winningCombinations = [rowOne, rowTwo, rowThree, colOne, colTwo, colThree, crossOne, crossTwo];

var numOfClicks = 1;

function boardChangeColor(event) {
	var playerName="player 1";
	
	if(numOfClicks % 2 === 0) {
		event.target.style.backgroundColor = 'red'; 
		playerName = "player 2";		
	} else {
		event.target.style.backgroundColor = 'blue'; 				 
	};
	console.log("Step1 works :)");
	checkMatch();
	numOfClicks = numOfClicks + 1;		
}

function bluegameEnd() {
    alert("player 1 wins!  Want to another try? Please refresh the page first.");
}

function redgameEnd() {
    alert("player2 wins!  Want to another try? Please refresh the page first.");
}

function gameEnd() {
    alert("Draw! Want to another try? Please refresh the page first.");
}

function checkMatch() {
	for (var i = 0; i < winningCombinations.length; i++) {
		if(numOfClicks > 5 && numOfClicks < 9) {
			if(winningCombinations[i][0].style.backgroundColor === 'blue' && winningCombinations[i][1].style.backgroundColor === 'blue' && winningCombinations[i][2].style.backgroundColor === 'blue') {
				console.log('player 1 wins');
				bluegameEnd();	
			} else if(winningCombinations[i][0].style.backgroundColor === 'red' && winningCombinations[i][1].style.backgroundColor === 'red' && winningCombinations[i][2].style.backgroundColor === 'red') {
				console.log('player 2 wins');
				redgameEnd();
			} 
		} else if(numOfClicks === 9) {
			if(winningCombinations[i][0].style.backgroundColor !== 'blue' || winningCombinations[i][1].style.backgroundColor !== 'blue' || winningCombinations[i][2].style.backgroundColor !== 'blue') {
				console.log('draw');
			} else if(winningCombinations[i][0].style.backgroundColor !== 'red' || winningCombinations[i][1].style.backgroundColor !== 'red' || winningCombinations[i][2].style.backgroundColor !== 'red') {
				console.log('draw');
				gameEnd();
			}

		}
		
	}  
}

allBoxes.forEach(function(eachBox) {	
	eachBox.addEventListener("click", boardChangeColor)

})

// var pOneTotalClicks = 1;
// var pTwoTotalClicks = 2;
// var pOneTotalClicks = "";
// var pTwoTotalClicks = "";
// var symKnot = document.getElementById("").src = imgknot; 
// var symCross = document.getElementById("").src = imgCross;

// pTwoTotalClicks = pTwoTotalClicks + 2;
// pOneTotalClicks = pOneTotalClicks + 1;

	//}
//}
	// if(numOfClicks > 5 && numOfClicks < 9) {
	// 	if(bOne.style.backgroundColor === 'blue' && bTwo.style.backgroundColor === 'blue' && bThree.style.backgroundColor === 'blue' || 
	// 	bFour.style.backgroundColor === 'blue' && bFive.style.backgroundColor === 'blue' && bSix.style.backgroundColor === 'blue' ||
	// 	bSeven.style.backgroundColor === 'blue' && bEight.style.backgroundColor === 'blue' && bNine.style.backgroundColor === 'blue' ||
	// 	bOne.style.backgroundColor === 'blue' && bFour.style.backgroundColor === 'blue' && bSeven.style.backgroundColor === 'blue' ||
	// 	bTwo.style.backgroundColor === 'blue' && bFive.style.backgroundColor === 'blue' && bEight.style.backgroundColor === 'blue' ||
	// 	bThree.style.backgroundColor === 'blue' && bSix.style.backgroundColor === 'blue' && bNine.style.backgroundColor === 'blue' ||
	// 	bOne.style.backgroundColor === 'blue' && bFive.style.backgroundColor === 'blue' && bNine.style.backgroundColor === 'blue' ||
	// 	bThree.style.backgroundColor === 'blue' && bFive.style.backgroundColor === 'blue' && bSeven.style.backgroundColor === 'blue') {
	// 	console.log('player 1 wins');
	// 	} else if(bOne.style.backgroundColor === 'red' && bTwo.style.backgroundColor === 'red' && bThree.style.backgroundColor === 'red' || 
	// 	bFour.style.backgroundColor === 'red' && bFive.style.backgroundColor === 'red' && bSix.style.backgroundColor === 'red' ||
	// 	bSeven.style.backgroundColor === 'red' && bEight.style.backgroundColor === 'red' && bNine.style.backgroundColor === 'red' ||
	// 	bOne.style.backgroundColor === 'red' && bFour.style.backgroundColor === 'red' && bSeven.style.backgroundColor === 'red' ||
	// 	bTwo.style.backgroundColor === 'red' && bFive.style.backgroundColor === 'red' && bEight.style.backgroundColor === 'red' ||
	// 	bThree.style.backgroundColor === 'red' && bSix.style.backgroundColor === 'red' && bNine.style.backgroundColor === 'red' ||
	// 	bOne.style.backgroundColor === 'red' && bFive.style.backgroundColor === 'red' && bNine.style.backgroundColor === 'red' ||
	// 	bThree.style.backgroundColor === 'red' && bFive.style.backgroundColor === 'red' && bSeven.style.backgroundColor === 'red') {
	// 	console.log('player 2 wins');
	// 	} else {
	// 		console.log("Draw!");
	// 	}
	// } 
//}
	
	// for (var i = 0; i < winningCombinations.length; i++) {

	// }	
	// var pOneSum = winningCombinations[0].length * pOneTotalClicks;
	// var pTwoSum = winningCombinations[0].length * pTwoTotalClicks;
	// if (pOneSum === 3) {
	// 	console.log("player 1 wins!");
	// } else if (pTwoSum === 6) {
	// 	console.log("player 2 wins!");
	// } else {
	// 	console.log("draw");
	// }



	//eachBox.addEventListener('click',checkMatch)

// step1: make function for find player 1 and 2 's pattern -- update the infomation
// step 2 : problem is how to use if statement (and foreach) to check their patterns.
// calculate the sum for one of winningCombinations to check its result whether === player1's pattern or player2's pattern when run the ( whick? )function or loop the all boxes. 

// step 3:   find out the winner by running the function which can 
// step 4:  //document.getElementById("i2").src =img1;


// 	pOnePattern = event.target.style.backgroundColor;
// 	pTwoPattern = event.target.style.backgroundColor;
// }
// var createBoard = function() {
//     for (var i = 0; i < allBoxes.length; i++) {
//         var cardElement = document.createElement('img');
//         cardElement.setAttribute('src', 'images/back.png');
//         cardElement.setAttribute('data-id', i);
//         cardElement.addEventListener('click', flipCard);
//         document.getElementById('game-board').appendChild(cardElement); 
//   }   
// };
 
//createBoard();

// add 2 players by 
// first, take turns to click ...??need to figue out how to make two different color work by taking turns to click.
// second, 
// and three of rows , columns and crosses are matched,

// var eachRed = 1;
// var eachBlue = 2;
// var redMoves = 3;
// var blueMoves = 6;


//console.log(rows);
// var rowsInBoard = Object.keys(rows);
// console.log(rowsInBoard);

// var rowCheck = function() {
// 	for (var i = 0; i < rows.length; i++)
// 		// for (var y = 0; y < rows[i].length. y++)
// 		if(rows[i][0] === rowsInBoard[i][1] === rowsInBoard[i][2]) {	
// 		console.log("red wins");
// 		} else {
// 		console.log("blue wins");
// 		}	
// }

// rowsInBoard.forEach(function(eachRow) {
// 	if (rowsInBoard[0].length === 3) {
//         rowCheck(); 
//     }	
// })


// var crossesInBoard = Object.keys(crosses);
// console.log(crossesInBoard);

// var columnsInBoard = Object.keys(columns);
// console.log(columnsInBoard);
// var colorCheck = [];



//console.log(rowsInBoard);

// 	if(rows[0] === 3 || rows[1] === redMoves || rows[2] === redMoves) {
// 		console.log("red wins");
// 	} else if (rows[0] === blueMoves || rows[1] === blueMoves || rows[2] === blueMoves) {
// 		console.log("blue wins");
// 	} else {
// 	}
// })

//if (rows[1][0] === rows[1][1] === rows[1][2])









