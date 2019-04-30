//yellow: #ffde4a
//red: #e63a2b
//blue: #84c497

//global vars
var mousexpos = 0;
var mouseypos = 0;
var numbLines = 500;
//counters
lineCounter = 0;


//starters
var binstart = 0;
var binstart2 = 800;
var binstart3 = 1000;
var binstart4 = -240;
var ystart = 500;
var xstart = 840;


//in
var xin = 850
var yin = 500;
var bin = binstart;
var bin2 = binstart2;
var bin3 = binstart3;
var bin4 = binstart4;

//inc
var xinc = 10 / 10;
var yinc = 0.01;
var binc = 1;
var binc2 = 1;
var binc3 = 1;
var binc4 = 1;


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
    xstart: 0,
    //first anchor point
    x1: 0,
    y1: 0,
    //first control point
    x2: 0,
    y2: 0,
    //second control point
    x3: 0,
    y3: 0,
    //second anchor point
    x4: 0,
    y4: 0
  });
}


console.log(lines);

function setup() {

  let myCanvas = createCanvas(1700, 1000);
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
  lines[i].y4 = yin;
  //bin
  lines[i].x2 = bin;
  lines[i].y2 = bin2
  lines[i].x3 = bin3;
  lines[i].y3 = bin4;

  //increases
  //x
  xin += xinc;
  yin += yinc;
 
  //bin
  bin += binc;
  bin2 += binc2;
  bin3 += binc3;
  bin4 += binc4;


  //reset within array
  if (xin > maxX){

    //yin += yinc;
    xin = xstart;
  }


  //reset all values
  if (i == numbLines - 1){
    xin = xstart;
    yin = ystart;
    bin = binstart;
    bin2 = binstart2;
    bin3 = binstart3;
    bin4 = binstart4;
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







//STARTERS//////////////////


//number of lines 3
var slider3 = document.getElementById("slider3");
var output3 = document.getElementById("output3");
output3.innerHTML = slider3.value;


slider3.oninput = function() {
output3.innerHTML = this.value;
numbLines = parseInt(this.value);
}



//binstart
var binstart_input = document.getElementById("binstart_input");
var binstart_output = document.getElementById("binstart_output");
binstart_output.innerHTML = binstart_input.value;


binstart_input.oninput = function() {
binstart_output.innerHTML = this.value;
binstart = parseInt(this.value);
}
//binstart2
var binstart2_input = document.getElementById("binstart2_input");
var binstart2_output = document.getElementById("binstart2_output");
binstart2_output.innerHTML = binstart2_input.value;


binstart2_input.oninput = function() {
binstart2_output.innerHTML = this.value;
binstart2 = parseInt(this.value);
}
//binstart3
var binstart3_input = document.getElementById("binstart3_input");
var binstart3_output = document.getElementById("binstart3_output");
binstart3_output.innerHTML = binstart3_input.value;


binstart3_input.oninput = function() {
binstart3_output.innerHTML = this.value;
binstart3 = parseInt(this.value);
}
//binstart4
var binstart4_input = document.getElementById("binstart4_input");
var binstart4_output = document.getElementById("binstart4_output");
binstart4_output.innerHTML = binstart4_input.value;


binstart4_input.oninput = function() {
binstart4_output.innerHTML = this.value;
binstart4 = parseInt(this.value);
}
//xstart
var xstart_input = document.getElementById("xstart_input");
var xstart_output = document.getElementById("xstart_output");
xstart_output.innerHTML = xstart_input.value;


xstart_input.oninput = function() {
xstart_output.innerHTML = this.value;
xstart = parseInt(this.value);
}
//ystart
var ystart_input = document.getElementById("ystart_input");
var ystart_output = document.getElementById("ystart_output");
ystart_output.innerHTML = ystart_input.value;


ystart_input.oninput = function() {
ystart_output.innerHTML = this.value;
ystart = parseInt(this.value);
}

// INCREASES //////////////////

//xinc
  var slider1 = document.getElementById("slider1");
  var output1 = document.getElementById("output1");
  output1.innerHTML = slider1.value;
  

  slider1.oninput = function() {
  output1.innerHTML = this.value;
  xinc = parseInt(this.value);
  xinc = xinc / 10;
}
  //yinc
  var slider2 = document.getElementById("slider2");
  var output2 = document.getElementById("output2");
  output2.innerHTML = slider2.value;
  

  slider2.oninput = function() {
  output2.innerHTML = this.value;
  yinc = parseInt(this.value);
}
  //BINC
  var binc_input = document.getElementById("binc_input");
  var binc_output = document.getElementById("binc_output");
  binc_output.innerHTML = binc_input.value;
  

  binc_input.oninput = function() {
  binc_output.innerHTML = this.value;
  binc = parseInt(this.value);
}
  //BINC2
  var binc2_input = document.getElementById("binc2_input");
  var binc2_output = document.getElementById("binc2_output");
  binc2_output.innerHTML = binc2_input.value;
  

  binc2_input.oninput = function() {
  binc2_output.innerHTML = this.value;
  binc2 = parseInt(this.value);
}
  //BINC3
  var binc3_input = document.getElementById("binc3_input");
  var binc3_output = document.getElementById("binc3_output");
  binc3_output.innerHTML = binc3_input.value;
  

  binc3_input.oninput = function() {
  binc3_output.innerHTML = this.value;
  binc3 = parseInt(this.value);
}
  //BINC4
  var binc4_input = document.getElementById("binc4_input");
  var binc4_output = document.getElementById("binc4_output");
  binc4_output.innerHTML = binc4_input.value;
  

  binc4_input.oninput = function() {
  binc4_output.innerHTML = this.value;
  binc4 = parseInt(this.value);
}


// MAX VALUES //////////////////

//max x
var slider4 = document.getElementById("slider4");
var output4 = document.getElementById("output4");
output4.innerHTML = slider4.value;


slider4.oninput = function() {
output4.innerHTML = this.value;
maxX = parseInt(this.value);
}

});


