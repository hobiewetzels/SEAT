//yellow: #ffde4a
//red: #e63a2b
//blue: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var rx;
var numbSq = 100 + 1;
var colorPick = 1;
var rin = 50;
var xinc = 10;
var angle = 0;
var speed;



//create array
var squares = new Array();
var colors = ["#ffde4a", "#d1b8c7"];
var colors2 = ["#E6C1E8", "#D19BC7", "#D2B8DE"];
var colors3 = ["#CF618F", "#EB6EA2", "#EB8FB5", "#ffde4a"];

squares.push({
  //left under
  x1: 0,
  y1: 250,
  //right under
  x2: 900,
  y2: 250,
  //right upper
  x3: 500,
  y3: 0,
  //left upper
  x4: 200,
  y4: 0,
  color: colors3[0],
  randomSeed: Math.random() * 7 + 4
});

for (i = 1; i < numbSq; i++) {
  
  if ( isOdd(i) == 1 ){
    var width = 600 + Math.floor(Math.random() * 100);
    var width2 = 900 + Math.floor(Math.random() * 100);
  }else{
    var width2 = 600 + Math.floor(Math.random() * 100);
    var width = 900 + Math.floor(Math.random() * 100);
  }
  squares.push({
    //left under
    x1: squares[i-1].x1 - width,
    y1: 250,
    //right under
    x2: squares[i-1].x1,
    y2: 250,
    //right upper
    x3: squares[i-1].x4,
    y3: 0,
    //left upper
    x4: squares[i-1].x4 - width2,
    y4: 0,
    color: colors3[colorPick],
    randomSeed: Math.random() * 5 + 1
  });


  colorPick += 1;
  if (colorPick == 4){
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
    move(i);
    translate(mousexpos / (2 + squares[i].randomSeed) , 0);
  }
  
}

//functions
function display(i){
  fill(squares[i].color);
  quad(squares[i].x1, squares[i].y1, squares[i].x2, squares[i].y2, squares[i].x3, squares[i].y3, squares[i].x4, squares[i].y4);


}
var anglein = 1;
var angle2 = 0;
speed = 0.5;
function move(i){
  //speed = mousexpos / 60;
  //left under
  squares[i].x1 += squares[i].randomSeed * speed;
  squares[i].y1 += sin(angle) * squares[i].randomSeed;
  //right under
  squares[i].x2 += squares[i].randomSeed * speed;
  squares[i].y2 += sin(angle2) * squares[i].randomSeed;
  //right upper
  squares[i].x3 += squares[i].randomSeed * speed;
  //left upper
  squares[i].x4 += squares[i].randomSeed * speed;
  angle += 0.0003 * anglein;
  angle2 += 0.0002 * anglein ;

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


