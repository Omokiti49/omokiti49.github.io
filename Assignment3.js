function loadRounds() {
	if (localStorage.getItem("rounds")) {
		clubs = JSON.parse(localStorage.getItem("rounds"));
	}
	else {
		resetAllClubDistances();
		rounds = JSON.parse(localStorage.getItem("rounds"));
	}
	return rounds;
}
function resetScores(){
rounds = [
    [round1date, hole1score, hole2score, ...],
    [round2date, hole1score, hole2score, ...],
    [round3date, hole1score, hole2score, ...]
    ,...
]
	// store the array in local storage
	var str = JSON.stringify(scores);
	localStorage.setItem("scores", str);
	window.location.href="golfScorecards.html";
}
function populateStatsTable() {
	document.getElementById('gsc_club').innerHTML = '<strong>' + scores[scoresRow][1] + '</strong>'; 
	document.getElementById('gsc_min').innerHTML = Math.round(scores[scoresRow][4]); 
	document.getElementById('gsc_avg').innerHTML = '<strong>' + Math.round(scores[scoresRow][3]) + '</strong>'; 
	document.getElementById('gsc_max').innerHTML = Math.round(scores[scoresRow][5]); 
	document.getElementById('gsc_num').innerHTML = Math.round(scores[scoresRow][6]);  
}
function appendTableRows() {
	// select the HTML table 
	var tbl = document.getElementById('scoreTable'); 
	// append one row to HTML table for each row in "clubs" array
	for (var i = 0; i < scores.length; i++) {
		// create an empty row
		var row = tbl.insertRow(i+1); // skip first row (column headings)
		// create an empty cell for each column to appear in HTML table
		var cell0 = row.insertCell(0); // clubAbbrev
		var cell1 = row.insertCell(1); // avgDist
		var cell2 = row.insertCell(2); // minDist
		var cell3 = row.insertCell(3); // maxDist
		var cell4 = row.insertCell(4); // numOfShots
		// right align only the cells that need to be right aligned
		//cell0.className = "cmn_hidden"; // clubAbbrev
		//cell1.className = "cmn_alignRight cmn_fullHeight"; // avgDist
		//cell2.className = "cmn_alignRight cmn_hidden"; // minDist
		//cell3.className = "cmn_alignRight cmn_fullHeight"; // maxDist
		//cell4.className = "cmn_alignRight cmn_hidden"; // numOfShots
		// populate HTML table with data from "clubs" array
		cell0.innerHTML = clubs[i][0]; // clubAbbrev
		cell1.innerHTML = Math.round(clubs[i][1]); // hole1
		cell2.innerHTML = Math.round(clubs[i][2]); // hole2
		cell3.innerHTML = Math.round(clubs[i][3]); // hole3
		cell4.innerHTML = Math.round(clubs[i][4]); // score
		// cell6.innerHTML = clubs[i][2] + ", " + clubs[i][7] + "&deg;"; 
	}
}
function loadRounds() {
	if (localStorage.getItem("scores")) {
		clubs = JSON.parse(localStorage.getItem("scores"));
	}
	else {
		resetAllClubDistances();
		clubs = JSON.parse(localStorage.getItem("scores"));
	}
	return scores;
}
function updateStats(scoreInput) {
	// shotDistance can be user-entered by fast-entry button or by typed input
	// if shotDistance==0 then shotDistance was entered by typed input,
	// so must pull shotValue from getElementById('clubVal')
	//if(shotDistance==0)
		shotDistance = parseInt(document.getElementById('scoreVal').value);
	//if(parseInt(shotDistance) > 0) {
		// save current clubs array for "Undo" functionality
		//var str = JSON.stringify(clubs);
		//localStorage.setItem("clubsUndo", str);
		// update average
		currentAverage = scores[scoresRow][3];
		currentNumScores = scores[scoresRow][6];
		newAverage = (currentAverage * currentNumScores + scoreInput) 
			/ (currentNumScores + 1);
		scores[scoresRow][3] = newAverage;
		// update shot count
		scores[scoresRow][6] += 1;
		// update min
		if (scores[scoresRow][4]==0 || shotDistance < scores[scoresRow][4]) scores[scoresRow][4] = scoreInput;
		// update max
		if (scores[scoresRow][5]==0 || shotDistance > scores[scoresRow][5]) scores[scoresRow][5] = scoreInput;
		// save updated stats in local storage
		var str = JSON.stringify(scores);
		localStorage.setItem("scores", str);
		// return to list screen
		window.location.href = "golfScorecard.html"; 
	}
}
/*var elem
  = document.getElementById("1");
var elem2
  = document.getElementById("2");
var elem3
  = document.getElementById("3");
var elem4
  = document.getElementById("4");
var elem5
  = document.getElementById("5");
var elem6
  = document.getElementById("6");
var elem7
  = document.getElementById("7");
var elem8
  = document.getElementById("8");
var elem9
  = document.getElementById("9");
var elem10
  = document.getElementById("10");
var elem11
  = document.getElementById("11");
var elem12
  = document.getElementById("12");
var elem13
  = document.getElementById("13");
var elem14
  = document.getElementById("14");
var elem15
  = document.getElementById("15");
var elem16
  = document.getElementById("16");
var elem17
  = document.getElementById("17");
var elem18
  = document.getElementById("18");

console.log(elem.children[4].children[0]);
console.log(elem2.children[4].children[0]);
console.log(elem3.children[4].children[0]);
console.log(elem4.children[4].children[0]);
console.log(elem5.children[4].children[0]);
console.log(elem6.children[4].children[0]);
console.log(elem7.children[4].children[0]);
console.log(elem8.children[4].children[0]);
console.log(elem9.children[4].children[0]);
console.log(elem10.children[4].children[0]);
console.log(elem11.children[4].children[0]);
console.log(elem12.children[4].children[0]);
console.log(elem13.children[4].children[0]);
console.log(elem14.children[4].children[0]);
console.log(elem15.children[4].children[0]);
console.log(elem16.children[4].children[0]);
console.log(elem17.children[4].children[0]);
console.log(elem18.children[4].children[0]);

elem.children[4].children[0].onclick 
  = function(){add1(elem);};
elem.children[4].children[1].onclick 
  = function(){subtract1(elem);};
elem.children[4].children[2].onclick 
  = function(){clear(elem);};
elem2.children[4].children[0].onclick 
  = function(){add1(elem2);};
elem2.children[4].children[1].onclick 
  = function(){subtract1(elem2);};
elem2.children[4].children[2].onclick 
  = function(){clear(elem2);};
elem3.children[4].children[0].onclick 
  = function(){add1(elem3);};
elem3.children[4].children[1].onclick 
  = function(){subtract1(elem3);};
elem3.children[4].children[2].onclick 
  = function(){clear(elem3);};
elem4.children[4].children[0].onclick 
  = function(){add1(elem4);};
elem4.children[4].children[1].onclick 
  = function(){subtract1(elem4);};
elem4.children[4].children[2].onclick 
  = function(){clear(elem4);};
elem5.children[4].children[0].onclick 
  = function(){add1(elem5);};
elem5.children[4].children[1].onclick 
  = function(){subtract1(elem5);};
elem5.children[4].children[2].onclick 
  = function(){clear(elem5);};
elem6.children[4].children[0].onclick 
  = function(){add1(elem6);};
elem6.children[4].children[1].onclick 
  = function(){subtract1(elem6);};
elem6.children[4].children[2].onclick 
  = function(){clear(elem6);};
elem7.children[4].children[0].onclick 
  = function(){add1(elem7);};
elem7.children[4].children[1].onclick 
  = function(){subtract1(elem7);};
elem7.children[4].children[2].onclick 
  = function(){clear(elem7);};
elem8.children[4].children[0].onclick 
  = function(){add1(elem8);};
elem8.children[4].children[1].onclick 
  = function(){subtract1(elem8);};
elem8.children[4].children[2].onclick 
  = function(){clear(elem8);};
elem9.children[4].children[0].onclick 
  = function(){add1(elem9);};
elem9.children[4].children[1].onclick 
  = function(){subtract1(elem9);};
elem9.children[4].children[2].onclick 
  = function(){clear(elem9);};
elem10.children[4].children[0].onclick 
  = function(){add1(elem10);};
elem10.children[4].children[1].onclick 
  = function(){subtract1(elem10);};
elem10.children[4].children[2].onclick 
  = function(){clear(elem10);};
elem11.children[4].children[0].onclick 
  = function(){add1(elem11);};
elem11.children[4].children[1].onclick 
  = function(){subtract1(elem11);};
elem11.children[4].children[2].onclick 
  = function(){clear(elem11);};
elem12.children[4].children[0].onclick 
  = function(){add1(elem12);};
elem12.children[4].children[1].onclick 
  = function(){subtract1(elem12);};
elem12.children[4].children[2].onclick 
  = function(){clear(elem12);};
elem13.children[4].children[0].onclick 
  = function(){add1(elem13);};
elem13.children[4].children[1].onclick 
  = function(){subtract1(elem13);};
elem13.children[4].children[2].onclick 
  = function(){clear(elem13);};
elem14.children[4].children[0].onclick 
  = function(){add1(elem14);};
elem14.children[4].children[1].onclick 
  = function(){subtract1(elem14);};
elem14.children[4].children[2].onclick 
  = function(){clear(elem14);};
elem15.children[4].children[0].onclick 
  = function(){add1(elem15);};
elem15.children[4].children[1].onclick 
  = function(){subtract1(elem15);};
elem15.children[4].children[2].onclick 
  = function(){clear(elem15);};
elem16.children[4].children[0].onclick 
  = function(){add1(elem16);};
elem16.children[4].children[1].onclick 
  = function(){subtract1(elem16);};
elem16.children[4].children[2].onclick 
  = function(){clear(elem16);};
elem17.children[4].children[0].onclick 
  = function(){add1(elem17);};
elem17.children[4].children[1].onclick 
  = function(){subtract1(elem17);};
elem17.children[4].children[2].onclick 
  = function(){clear(elem17);};
elem18.children[4].children[0].onclick 
  = function(){add1(elem18);};
elem18.children[4].children[1].onclick 
  = function(){subtract1(elem18);};
elem18.children[4].children[2].onclick 
  = function(){clear(elem18);};
*/
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    elem.children[3].innerHTML = currentScore + 1;
  }
}

function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") elem.children[2].innerHTML = "-1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
    elem.children[3].innerHTML = currentScore - 1;
  }
}
