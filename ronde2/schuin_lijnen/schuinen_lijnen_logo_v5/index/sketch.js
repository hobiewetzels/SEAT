//yellow: #ffde4a
//red: #e63a2b
//blue: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var rx;
var numbSq = 1;
var colorPick = 1;
var rin = 50;
var xinc = 10;
var angle = 0;
var speed;



//create array
var squares = new Array();
var colors = ["#ffde4a", "#d1b8c7"];

squares.push({
  //left under
  x1: Math.floor(Math.random() * 200),
  y1: 700,
  //right under
  x2: Math.floor(Math.random() * 200 + 1000),
  y2: 700,
  //right upper
  x3: Math.floor(Math.random() * 200 + 800),
  y3: 450,
  //left upper
  x4: Math.floor(Math.random() * 200 + 200),
  y4: 450,
  color: colors[0],
  randomSeed: Math.random() * 5 + 1
});

console.log(squares);

function setup() {

  let myCanvas = createCanvas(2500, 2500);
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
    move(i);

  }
  
}

//functions
function display(i){
  fill(squares[i].color);
  quad(squares[i].x1, squares[i].y1, squares[i].x2, squares[i].y2, squares[i].x3, squares[i].y3, squares[i].x4, squares[i].y4);

}

var angle2 = 0;
speed = 0.5;
var xcounter = 0;
var ycounter = 0;
var dest = Math.floor(Math.random() * 600 + 100);
var add = true;

function move(i){
  //speed = mousexpos / 60;
  //left under
  if (add){
    squares[i].x1 += 1;
    xcounter++;
    if (xcounter > dest){
      add = false;
      xcounter = 0;
    }
  }

  if (!add){
    squares[i].x1 -= 1;
    xcounter++;
    if (xcounter > dest){
      add = true;
      xcounter = 0;
    }
  }


  squares[i].x1 + speed;

  //right under
  squares[i].x2 += speed;
  //right upper
  squares[i].x3 += speed;
  //left upper
  squares[i].x4 += speed;
  angle += 0.0003;

}

//odd
function isOdd(num) { 
  return num % 2;
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
  });
});


