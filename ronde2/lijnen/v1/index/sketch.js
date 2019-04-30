//yellow: #ffde4a
//red: #e63a2b
//blue: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var numbLines = 1000;
//counters
lineCounter = 0;

//in
var xin = 0
var yin = 0;
var bin = 0;
var bin2 = 0;

//inc
var xinc = 10;
var yinc = 100;
var binc = 20;


//max
var maxX = 1000;
var binmax = 500;


//controls
var xinput = 0;





//create array
var lines = new Array();


for (i = 0; i < numbLines; i++) {
  lines.push({
    //starters
    xstart: xin,
    //first anchor point
    x1: xin,
    y1: yin,
    //first control point
    x2: bin,
    y2: bin2,
    //second control point
    x3: bin,
    y3: bin2,
    //second anchoir point
    x4: xin,
    y4: 250 + yin
  });
  //inc
  bin += binc;
  bin2 += 80;
  xin += xinc;
  //reset
  if (bin > binmax){
    bin = 0;
  }
  if (xin > maxX){
    xin = 0;
    yin += yinc;
  }
  lineCounter++;
}


console.log(lines);

function setup() {

  let myCanvas = createCanvas(1500, 1500);
  myCanvas.parent('myContainer');
  background('#000');

}

function draw() {
  background('#cf7fa1');
  noFill();
  strokeWeight(0.3);
  for (i = 0; i < numbLines; i++) {
  
    display(i);
    control(i);
  }
  
}

//functions
function display(i){
  stroke(255);
  bezier(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2, lines[i].x3, lines[i].y3, lines[i].x4, lines[i].y4, )
}

function control(i){
  //xin
  lines[i].x1 = xin;
  lines[i].x4 = xin;
  //yin
  lines[i].y1 = yin;
  lines[i].y4 = yin + 250;
  //bin
  lines[i].x2 = bin;
  lines[i].x3 = bin;
  //increases
  xin += xinc;
  bin += binc;


  //reset within array
  if (xin > maxX){

    yin += yinc;
    xin = 0;
  }
  if (bin > binmax){
    bin = 0;
  }


  //reset all values
  if (i == numbLines - 1){
    xin = 0;
    yin = 0;
    bin = 0;
    lineCounter = 0;
  }
  //counter
  lineCounter++;

}



//////////////////////////////
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


//functions after ready


$( document ).ready(function() {
  $( "#art" ).mousemove(function( event ) {
    mousexpos = event.pageX;
    mouseypos = event.pageY;
  });

  //sliders
  var slider1 = document.getElementById("slider1");
  var output1 = document.getElementById("output1");
  output1.innerHTML = slider1.value;
  

  slider1.oninput = function() {
  output1.innerHTML = this.value;
  xinc = parseInt(this.value);
  xinc = xinc / 10;
}

  //slider 2
  var slider2 = document.getElementById("slider2");
  var output2 = document.getElementById("output2");
  output2.innerHTML = slider2.value;
  

  slider2.oninput = function() {
  output2.innerHTML = this.value;
  yinc = parseInt(this.value);
}

//slider 3
var slider3 = document.getElementById("slider3");
var output3 = document.getElementById("output3");
output3.innerHTML = slider3.value;


slider3.oninput = function() {
output3.innerHTML = this.value;
numbLines = parseInt(this.value);
}

//max x
var slider4 = document.getElementById("slider4");
var output4 = document.getElementById("output4");
output4.innerHTML = slider4.value;


slider4.oninput = function() {
output4.innerHTML = this.value;
maxX = parseInt(this.value);
}

//binc
var slider5 = document.getElementById("slider5");
var output5 = document.getElementById("output5");
output5.innerHTML = slider5.value;


slider5.oninput = function() {
output5.innerHTML = this.value;
binc = parseInt(this.value);
}
});


