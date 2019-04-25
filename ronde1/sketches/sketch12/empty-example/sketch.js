//yellow: #ffde4a
//red: #e63a2b
//blue: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var rx;
var numbSq = 1;
var colorPick = 0;
var rin = 50;
var xinc = 10;
var angle = 0;
var speed;


//create array
var squares = new Array();
var colors = ["#ffde4a", "#cf7fa1", "#d1b8c7"];

for (i = 0; i < numbSq; i++) {
  squares.push({
    x1: 0,
    x2: 500,
    x3: 200,
    x4: 0,
    color: colors[colorPick],
  });


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
    quad(squares[i].x1, 250, squares[i].x2, 250, squares[i].x3, 0, squares[i].x4, 0);

    move(i);
    //intersect(i);

  }
  
}

//functions
function display(i){
  fill(squares[i].color);
}

function move(i){

  squares[i].x3 += 1;


//reset x
if (squares[i].x > 970 + squares[i].r){
  squares[i].r = Math.floor(Math.random() * 500 + 100);
  squares[i].x = 0 - squares[i].r;
}
if (squares[i].r < 0){
  squares[i].r = Math.floor(Math.random() * 500 + 100);
  squares[i].x = 0 - squares[i].r;
}
//reset y

}


function intersect(i){
  if (Math.abs(squares[i].x - mousexpos) < squares[i].r)
  {
    squares[i].r -= 0.5;
  }else{
    squares[i].r += 0.2;
  }
}
$( document ).ready(function() {
  $( "#art" ).mousemove(function( event ) {
    mousexpos = event.pageX;
    mouseypos = event.pageY;
    speed = mousexpos - 480;
    console.log(speed);
  });
});


