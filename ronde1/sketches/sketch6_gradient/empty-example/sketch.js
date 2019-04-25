//yellow: #ffde4a
//red: #e63a2b
//green: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var rx;
var numbSq = 200;
var xin = Math.random(970);
var yin = Math.random(250);
var colorPick = 0;
var rin = 50;
var xinc = 10;
var angle = 0;
var rinc = 2;
var currentr = 0;
var g = 0;
var c1;
var c2;
const Y_AXIS = 1;
const X_AXIS = 2;
var leftin = true;

var distY;
var distX;
var xcent;
var ycent;

//create array
var squares = new Array();
var colors = ["#84c497", "#ffde4a"];

//(squares[i].y + squares[i].r) / 2
squares.push({
  x: 0,
  y: 0,
  r: 970,
  color: colors[colorPick],
  left: leftin,
  opacity: 255,
  xcent: 0,
  ycent: 0
});

console.log(squares);

function setup() {

  let myCanvas = createCanvas(970, 250);
  myCanvas.parent('myContainer');
  background('#ffde4a');


}

function draw() {
  background('#ffde4a');

  //create gradients
  for (i = 0; i < squares.length; i++) {
    setGradient(squares[i].x, squares[i].y, squares[i].r, 250, color(255,222,74, squares[i].opacity), color(132,196,151, squares[i].opacity), X_AXIS);
  }
  //display on hover


}

//functions


function move(i){
angle += 0.05;
//squares[i].r = sin(angle) * 50 + 100;
squares[g].r = sin(angle) * 200;
currentr =  sin(angle) * 200;
console.log(currentr);
if (currentr > 100){
g++;
currentr = 0;
angle = 0;
}
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function isOdd(num) { 
  return num % 2;
}

$( document ).ready(function() {
  $( "#art" ).mousemove(function( event ) {
    mousexpos = event.pageX;
    mouseypos = event.pageY;
  });
  $( "#art" ).click(function() {
    squares.push({
      x: mousexpos,
      y: 0,
      r: 970 - mousexpos,
      color: colors[colorPick],
      left: leftin,
      opacity: 255,
      xcent: 0,
      ycent: 0
    });
    console.log
  });


//end
});


