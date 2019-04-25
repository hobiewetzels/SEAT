

//global vars
var mousexpos = 0;
var mouseypos = 0;
var rx;


function setup() {
  let myCanvas = createCanvas(970, 250);
  myCanvas.parent('myContainer');
  background('#ffde4a');

  //global vars


  rx = random(100, 500);


}

function draw() {
  noStroke();
  fill('#ffde4a');
  quad(mousexpos, 250, mousexpos, 0, 970, 0, 970, 250)
  //fill('');
  //rect(0, 0, mousexpos, 250);
  fill('#e63a2b');
  quad(0, 250, 0, 0, mousexpos, 0, mousexpos, 250)
  fill('#84c497');
  quad(0, 250, 0, 0, mousexpos - rx , 0, mousexpos - rx, 250)
}

$( document ).ready(function() {
  $( "#art" ).mousemove(function( event ) {
    mousexpos = event.pageX;
    mouseypos = event.pageY;
  });
});
