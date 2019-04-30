//yellow: #ffde4a
//red: #e63a2b
//blue: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var rx;
var numbSq = 30 + 1;
var colorPick = 1;
var rin = 50;
var xinc = 10;
var angle = 0;
var speed;



//create array
var squares = new Array();
var colors = ["#FFE880", "#FFD724", "#FFF2B8" ,"#ffde4a", "#FFFFFF"];

squares.push({
  //left under
  x1: 0,
  //right under
  x2: 900,
  //right upper
  x3: 500,
  //left upper
  x4: 200,
  color: colors[0]
});

for (i = 1; i < numbSq; i++) {
  
  if ( isOdd(i) == 1 ){
    var width = 900 + Math.floor(Math.random() * 100);
    var width2 = 1300 + Math.floor(Math.random() * 100);
  }else{
    var width2 = 900 + Math.floor(Math.random() * 100);
    var width = 1300 + Math.floor(Math.random() * 100);
  }
  squares.push({
    //left under
    x1: squares[i-1].x1 - width,
    //right under
    x2: squares[i-1].x1,
    //right upper
    x3: squares[i-1].x4,
    //left upper
    x4: squares[i-1].x4 - width2,
    color: colors[colorPick]
  });


  colorPick += 1;
  if (colorPick == 5){
    colorPick = 0;
  }
}

console.log(squares);

function setup() {

  let myCanvas = createCanvas(1500, 1500);
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
    move(i);

  }
  
}

//functions
function display(i){
  fill(squares[i].color);
  quad(squares[i].x1, 250, squares[i].x2, 250, squares[i].x3, 0, squares[i].x4, 0);
}
speed = 1;
var angle2 = 0;
function move(i){
  //left under
  squares[i].x1 += sin(angle) * 2 + speed;
  //right under
  squares[i].x2 += sin(angle) * 2 + speed;
  //right upper
  squares[i].x3 += sin(angle2) * 2 + speed;
  //left upper
  squares[i].x4 += sin(angle2) * 2 + speed;
  angle += 0.0002;
  angle2 += 0.00023;

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


