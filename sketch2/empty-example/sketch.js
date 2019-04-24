//yellow: #ffde4a
//red: #e63a2b
//blue: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var rx;
var numbSq = 2000;
var xin = 0;
var yin = 0;
var colorPick = 0;
var r = 10;


//create array
var squares = new Array();
var colors = ["#e63a2b", "#84c497"];

for (i = 0; i < numbSq; i++) {
  squares.push({
    x: xin,
    y: yin,
    r = 10,
    color: colors[colorPick]
  });
  //increases
  xin += xinc;
  if (xin > 970){
    yin += 10;
    r =+ 10;
    xin = 0;
  }

  colorPick += 1;
  if (colorPick == 2){
    colorPick = 0;
  }
}

console.log(squares);

function setup() {
  let myCanvas = createCanvas(970, 250);
  myCanvas.parent('myContainer');
  background('#ffde4a');


}

function draw() {
  background('#ffde4a');
  noStroke();
  rectMode(RADIUS); 
  for (i = 0; i < squares.length; i++) {

    //functions
    //move(i);
    display(i);

    //
    rect(squares[i].x, squares[i].y, 10, 10);
  }
  
}

//functions
function display(i){
  fill(squares[i].color);
}

function move(i){
  squares[i].x += 1;
  //reset
  if (squares[i].x > 970 + 20){
    squares[i].x = -20;
  }
}

$( document ).ready(function() {
  $( "#art" ).mousemove(function( event ) {
    mousexpos = event.pageX;
    mouseypos = event.pageY;
  });
});


