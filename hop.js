function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  img = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/dog/main/impostor.png');
  textSize(15);
  textFont('Helvetica');
  fill(250);
  textAlign(CENTER);
  text('давай играть в Among Us!', width/2, height/1.5);
  text('QWERTY', width/2, height/1.4);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke()
  this.x = random(width);
  this.y = random(height);
  let size = random(1,5);
  fill(255);
  ellipse(this.x, this.y, size, size);
  image(img, width/2.1, height/2, 55, 80);
}

function mousePressed() {
  clear();
  background(0);
  textAlign(CENTER);
  text('давай играть в Among Us!', width/2, height/1.5);
  text('QWERTY', width/2, height/1.4);
}
