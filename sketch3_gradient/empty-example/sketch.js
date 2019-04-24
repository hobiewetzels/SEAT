//yellow: #ffde4a
//red: #e63a2b
//green: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var rx;
var numbSq = 1000;
var xin = Math.random(970);
var yin = -400;
var colorPick = 0;
var rin = 0;
var xinc = 10;
var angle = 0;
var rinc = 2;
var currentr = 0;
var g = 0;
var c1;
var c2;
const Y_AXIS = 1;
const X_AXIS = 2;

//create array
var squares = new Array();
var colors = ["#84c497", "#ffde4a"];

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
  if (colorPick == 2){
    colorPick = 0;
  }
}

console.log(squares);

function setup() {

  let myCanvas = createCanvas(970, 250);
  myCanvas.parent('myContainer');
  background('#ffde4a');
  c1 = color(255,222,74);
  c2 = color(132,196,151);


}

function draw() {
  background('#ffde4a');
  //noStroke();
  rectMode(RADIUS); 
  //for (i = 0; i < squares.length; i++) {

    //functions

    //display(i);

    //
    //rect(squares[i].x, squares[i].y, squares[i].r, 2000);
  //}
  //move(i);
    setGradient(0, 0, 970, 250, c1, c2, X_AXIS);

  
}

//functions
function display(i){
  fill(squares[i].color);
}

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
      let inter = map(i, x, x + w, mousexpos / 200, 0);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

$( document ).ready(function() {
  $( "#art" ).mousemove(function( event ) {
    mousexpos = event.pageX;
    mouseypos = event.pageY;
  });
});


