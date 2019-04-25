//yellow: #ffde4a
//red: #e63a2b
//blue: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var rx;
var numbSq = 50;
var colorPick = 0;
var rin = 50;
var xinc = 10;
var angle = 0;


//create array
var squares = new Array();
var colors = ["#ffde4a", "#cf7fa1", "#d1b8c7"];

for (i = 0; i < numbSq; i++) {
  squares.push({
    x: Math.floor(Math.random() * 970),
    y: Math.floor(Math.random() * 250),
    r: Math.floor(Math.random() * 50 + 20),
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
    rect(squares[i].x, squares[i].y, squares[i].r, squares[i].r);
    move(i);
  }

  
}

//functions
function display(i){
  fill(squares[i].color);
}

function move(i){
  //if ( Math.abs(squares[i].x - mousexpos) > 20){
    squares[i].x += (mousexpos - 485) / (squares[i].r * 10);
    if (squares[i].x < 0 - squares[i].r){
      squares[i].x = 970 + squares[i].r;
    }
    if (squares[i].x > 970 + squares[i].r){
      squares[i].x = 0 - squares[i].r;
    }
    //squares[i].r = squares[i].x / 100;
  
  //} 

}

$( document ).ready(function() {
  $( "#art" ).mousemove(function( event ) {
    mousexpos = event.pageX;
    mouseypos = event.pageY;
    console.log(mousexpos - 485);
  });
});


