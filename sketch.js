function setup() {
  createCanvas(600, 400);
}

function draw() {
  a = map(mouseX, 0, 233, 0, 255);
  b = map(mouseX, 234, 466, 255, 0);
  c = map(mouseX, 467, 600, 0, 255);
  background(a,b,c);
  var x = mouseX;
  var y = mouseY;
  //x position,y position,width,height
  ellipse(x, y, 55, 55);
}