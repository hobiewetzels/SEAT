//yellow: #ffde4a
//red: #e63a2b
//blue: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var rx;
var numbSq = 8;
var colorPick = 1;
var rin = 50;
var xinc = 10;
var angle = 0;
var speed;



//create array
var squares = new Array();
var colors = ["#FFE880", "#FFD724", "#49C46E" ,"#84C497"];

for (i = 0; i < numbSq; i++) {
  
  squares.push({
    //left under
    x: 0,
    //right under
    y: 0,
    //right upper
    w: 175,
    //left upper
    h: 2000,
    color: colors[colorPick]
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
  background('#84C497');

}

function draw() {
  background('#84C497');
  noStroke();
  rectMode(RADIUS); 
  angleMode(DEGREES);
  translate(width / 2.3, height / 2);


  for (i = 1; i < squares.length; i++) {
    move(i);
    //functions
    display(i);

  }

}

//functions
function display(i){
  fill(squares[i].color);
  rect(squares[i].x, squares[i].y, squares[i].w, squares[i].h);
}

function move(i){

  rotate(mouseypos / 20);
  squares[i].w = (mousexpos * 1.5) - (i * 100);



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


