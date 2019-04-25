//yellow: #ffde4a
//red: #e63a2b
//blue: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var rx;
var numbSq = 6;
var xin = Math.random(970);
var yin = Math.random(250);
var colorPick = 0;
var rin = 0;
var xinc = 10;
var angle = 0;
var rgrow = 0;
var g = 0;
var offsetin = 3;


//create array
var squares = new Array();
var colors = ["#ffde4a", "#cf7fa1", "#d1b8c7"];

for (i = 0; i < numbSq; i++) {
  squares.push({
    x: 0,
    y: 125,
    r: rin,
    color: colors[colorPick],
    offset: offsetin 
  });
  //increases
  offsetin -= offsetin / numbSq;
  console.log(offsetin);
  xin += xinc;
  //on new row
  if (xin > 970){
    //yin += 10;
    //xin = 0;
  }

  colorPick += 1;
  if (colorPick == 3){
    colorPick = 0;
  }
}

console.log(squares);

function setup() {

  let myCanvas = createCanvas(970, 250);
  myCanvas.parent('myContainer');
  background('#cf7fa1');

}

function draw() {
  background('#cf7fa1');
  noStroke();
  rectMode(RADIUS); 
  for (i = 0; i < squares.length; i++) {

    //functions

    display(i);

    //
    rect(squares[i].x, squares[i].y, squares[i].r, 125);
    move(i);
  }

  
}

//functions
function display(i){
  fill(squares[i].color);
}

function move(i){
squares[i].r = mousexpos * squares[i].offset;
squares[i].x -= 1;
if (squares[i].x < (0 - squares[i].r)){
  squares[i].x = 970 + squares[i].r;
}

}

$( document ).ready(function() {
  $( "#art" ).mousemove(function( event ) {
    mousexpos = event.pageX;
    mouseypos = event.pageY;
  });
});


