var bOne = document.querySelectorAll('.b1'); 
var bTwo = document.querySelectorAll('.b2'); 
var bThree = document.querySelectorAll('.b3'); 
var bFour = document.querySelectorAll('.b4'); 
var bFive = document.querySelectorAll('.b5'); 
var bSix = document.querySelectorAll('.b6'); 
var bSeven = document.querySelectorAll('.b7');
var bEight = document.querySelectorAll('.b8');
var bNine = document.querySelectorAll('.b9');
var allBoxes = document.querySelectorAll('.box');
var board = "";

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

var numOfClicks = 0;
function boardChangeColor(event) {	
	if(numOfClicks % 2 === 0) {
		event.target.style.backgroundColor = 'red';
	} else {
		event.target.style.backgroundColor = 'blue';
	};
	numOfClicks = numOfClicks + 1;
}

function checkMatch(event) {
	if(bOne.backgroundColor === bTwo.backgroundColor === bThree.backgroundColor) {
		console.log('red wins');
	} 
	// }
	 board = bOne.value
}

allBoxes.forEach(function(eachBox) {
	
	eachBox.addEventListener('click', boardChangeColor)
	eachBox.addEventListener('click',checkMatch)
})

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

// var columns = {
// colOne: [bOne, bFour, bSeven],
// colTwo: [bTwo, bFive, bEight],
// colThree: [bThree, bSix, bNine]
// }

// var crosses = {
// crossOne: [bOne, bFive, bNine],
// crossTwo: [bThree, bFive, bSeven]
// }
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









