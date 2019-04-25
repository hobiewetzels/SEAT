//yellow: #ffde4a
//red: #e63a2b
//blue: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var rx;
var numbSq = 1000;
var xin = Math.random(970);
var yin = Math.random(250);
var colorPick = 0;
var rin = 0;
var xinc = 10;
var angle = 0;
var rgrow = 0;
var g = 0;


//create array
var squares = new Array();
var colors = ["#e63a2b", "#84c497", "#ffde4a"];

for (i = 0; i < numbSq; i++) {
  squares.push({
    x: Math.floor(Math.random() * 970),
    y: Math.floor(Math.random() * 250),
    r: rin,
    color: colors[colorPick]
  });
  //increases
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
  background('#ffde4a');


}

function draw() {
  background('#ffde4a');
  noStroke();
  rectMode(RADIUS); 
  for (i = 0; i < squares.length; i++) {

    //functions

    display(i);

    //
    rect(squares[i].x, squares[i].y, squares[i].r, squares[i].r);
  }
  move();
  
}

//functions
function display(i){
  fill(squares[i].color);
}

function move(){
  squares[g].r += 10;
  if (squares[g].r > 970){
    g++
  }
}

$( document ).ready(function() {
  $( "#art" ).mousemove(function( event ) {
    mousexpos = event.pageX;
    mouseypos = event.pageY;
  });
});


