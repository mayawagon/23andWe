var capture;
var imgArray = [];
var page = 1;

function preload() {
  for (k = 1; k<=12; k++){
    
  imgArray[k] = loadImage("Prototype"+k+".png");
  }
    
  }

function setup() {
  createCanvas(768,1024);
  capture = createCapture(VIDEO);
  capture.size(571,571);
  capture.hide();
  
  
  // load all images from prototypes as each page.

  
}

function draw() {
  
  for (i = 1; i <page; i++){
    image(imgArray[i], 0, 0);
    if (i==3) {
        image(capture, 100, 310, 571, 571);
    }
  }
  
  
  // background(255);
  // image(capture, 0, 0, 320, 240);
  // filter('INVERT');
}

function mouseClicked() {
  page++;
  if (page == 12) {
    page =1;
  }
  
}