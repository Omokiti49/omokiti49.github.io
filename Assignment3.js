var elem
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
  = function(){add1(elem2);};
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
// you don't have to define the function before you use it! 
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}

function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") elem.children[2].innerHTML = "-1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
