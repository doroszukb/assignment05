var myImage, state = true;
var mySong;
var analyzer;


function preload(){
    mySong = loadSound("./assets/HVOB.mp3");

    myImage = loadImage("./assets/sky.jpg");
}

function setup() {
  
  createCanvas(windowWidth,windowHeight)
  background(100)
  
  analyzer = new p5.Amplitude();
    analyzer.setInput(mySong);
      mySong.play();

  
}

function draw() {
  background(1,0,32)
  
   var volume = analyzer.getLevel();
  
  translate((windowWidth-800)/2,(windowHeight-509)/2)
 // if (mySong.isPlaying() == false) {

  //  }

  image(myImage,0,0);
  noStroke();
  
  
  for(var x = 0; x < 6; x += 1)
  {
volume = analyzer.getLevel();
//fill(volume);
    rect(186, 340+x*7, 4+volume, 4)
  }
  for(var x = 0; x < 6; x += 1)
  {
    rect(226, 290+x*9, 16, 6)
  }
  for(var x = 0; x < 2; x += 1)
  {
    rect(230, 360+x*7, 4, 4)
  }
  for(var x = 0; x < 6; x += 1)
  {
    rect(260, 320+x*10, 6, 6)
  }  
  for(var x = 0; x < 6; x += 1)
  {
    rect(274, 320+x*10, 6, 6)
  }  
    for(var x = 0; x < 6; x += 1)
  {
    rect(314, 330+x*9, 5, 5)
  }  
    for(var x = 0; x < 6; x += 1)
  {
    rect(334, 330+x*9, 5, 5)
  }  
    for(var x = 0; x < 6; x += 1)
  {
    rect(354, 330+x*9, 5, 5)
  }  
  for(var x = 0; x < 2; x += 1)
  {
    rect(385, 365+x*7, 4, 4)
  }
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
    
}