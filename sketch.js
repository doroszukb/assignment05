var myImage, state = true;
var mySong;
var analyzer;
var x; 

function preload(){
	myImage = loadImage("./assets/sky.jpg");
	myImage1 = loadImage("./assets/luna.jpg");
	mySong = loadSound("./assets/HVOB1.mp3");

    
}

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  background(100);
  mySong.play();
  analyzer = new p5.Amplitude();
    analyzer.setInput(mySong);
}

function draw() {
  background(1,0,32);

 x=0;

  
  translate((windowWidth-800)/2,(windowHeight-509)/2)
 // if (mySong.isPlaying() == false) {

  //  }

  image(myImage,0,0);

  noStroke();
  
  
  for(var x = 0; x < 4; x += 1)
  {
    recta(186, 336+x*12, 9, 9)
  }
  for(var x = 0; x < 2; x += 1)
  {
    recta(173, 336+x*12, 9, 9)
  }
  for(var x = 0; x < 4; x += 1)
  {
    recta(210, 278+x*9, 6, 6)
  }
  for(var x = 0; x < 4; x += 1)
  {
    recta(220, 278+x*9, 6, 6)
  }
  for(var x = 0; x < 2; x += 1)
  {
    recta(230, 278+x*9, 6, 6)
  }
  for(var x = 0; x < 2; x += 1)
  {
    recta(230, 360+x*9, 6, 6)
  }
  for(var x = 0; x < 4; x += 1)
  {
    recta(260, 320+x*11, 8, 8)
  }  
  for(var x = 0; x < 4; x += 1)
  {
    recta(274, 320+x*11, 8, 8)
  }  
    for(var x = 0; x < 4; x += 1)
  {
    recta(310, 320+x*11, 6, 6)
  }  
    for(var x = 0; x < 4; x += 1)
  {
    recta(320, 320+x*11, 6, 6)
  }  
    for(var x = 0; x < 4; x += 1)
  {
    recta(330, 320+x*11, 6, 6)
  }  
  for(var x = 0; x < 2; x += 1)
  {
    recta(375, 360+x*11, 8, 8)
  }
  for(var x = 0; x < 1; x += 1)
  {
    recta(386, 360+x*11, 8, 8)
  }
  for(var x = 0; x < 5; x += 1)
  {
    recta(374, 222+x*12, 9, 9)
  }
  for(var x = 0; x < 5; x += 1)
  {
    recta(386, 222+x*12, 9, 9)
  }
  for(var x = 0; x < 2; x += 1)
  {
    recta(398, 222+x*12, 9, 9)
  }
  for(var x = 0; x < 2; x += 1)
  {
    recta(410, 222+x*12, 9, 9)
  }
  for(var x = 0; x < 6; x += 1)
  {
    recta(446, 276+x*12, 9, 9)
  }
  for(var x = 0; x < 6; x += 1)
  {
    recta(458, 276+x*12, 9, 9)
  }
  for(var x = 4; x < 6; x += 1)
  {
    recta(470, 276+x*12, 9, 9)
  }
  for(var x = 0; x < 7; x += 1)
  {
    recta(520, 154+x*11, 8, 8)
  }
  for(var x = 0; x < 7; x += 1)
  {
    recta(532, 154+x*11, 8, 8)
  }
  for(var x = 0; x < 3; x += 1)
  {
    recta(544, 154+x*11, 8, 8)
  }
  for(var x = 0; x < 5; x += 1)
  {
    recta(552, 286+x*14, 11, 11)
  }
  for(var x = 0; x < 5; x += 1)
  {
    recta(566, 286+x*14, 11, 11)
  }
  for(var x = 0; x < 3; x += 1)
  {
    recta(580, 286+x*14, 11, 11)
  }
  for(var x = 0; x < 3; x += 1)
  {
    recta(640, 320+x*14, 11, 11)
  }
var volume = map(analyzer.getLevel(),0,1,0,100);
var i=Math.round(volume);
//translate(-100,-100);
rotate(-i/70);
image(myImage1,0,0);

}
function recta(a,b,c,d) {
volume = map(analyzer.getLevel(),0,1,0,755);
var i=Math.round(volume);
//i=i+e;
if (i>55) {i=random(255)} else {i=0};
	fill(i);
    rect(a,b,c,d);
fill(255);
};
function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
    
}