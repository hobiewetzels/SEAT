//yellow: #ffde4a
//red: #e63a2b
//blue: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var rx;
var numbSq = 6;
var colorPick = 1;
var rin = 50;
var xinc = 10;
var angle = 0;
var speed;
var inc = 1;



//create array
var squares = new Array();
var colors = ["#A3FFC0", "#89E8C2", "#96FFF3" ,"#89E88C", "#B7FF96"];

for (i = 0; i < numbSq; i++) {
  
  squares.push({
    //left under
    x: 0,
    //right under
    y: -300,
    //right upper
    w: 2000,
    //left upper
    h: 100,
    scalefactor: i * inc,
    color: colors[colorPick]
  });
  
  inc += 2;

  colorPick += 1;
  if (colorPick == 5){
    colorPick = 0;
  }
}

console.log(squares);

function setup() {

  let myCanvas = createCanvas(970, 250);
  myCanvas.parent('myContainer');
  background('#84C497');

}

function draw() {
  background('#84C497');
  noStroke();
  rectMode(RADIUS); 
  angleMode(DEGREES);


  for (i = numbSq - 1; i > 0; i--) {

    //functions
    move(i);
    interaction(i);
    display(i);


  }

}

//functions
function display(i){
  fill(squares[i].color);
  rect(squares[i].x, squares[i].y, squares[i].w, squares[i].h);
}

function interaction(i){
  rotate(mousexpos / 50) * squares[i].scalefactor;
  squares[i].h = (mousexpos / 10) * squares[i].scalefactor;
  //translate((mousexpos / 5) * -1 , (mouseypos * 1));
}

function move(i){
  //squares[i].w += sin(angle) / 5;
  //squares[i].h += sin(angle) / 5;
  angle += 0.2;
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


