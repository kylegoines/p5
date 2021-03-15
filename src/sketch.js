// this is just a random thing i made -
// heres some ideas -
// how could i make the canvas the whole screen?
// how could i change the color randomly
// how could i change the circle radius randomly
// how could i add a circle to the screen randomly every 1 second
// how could i clear the circles so instead of drawing a bunch of them theres only one on the screen

function setup() {
  createCanvas(400, 400);
  background("pink");
}

function draw() {
  if (mouseIsPressed) {
    fill("skyblue");
  } else {
    fill("white");
  }
  ellipse(mouseX, mouseY, 80, 80);
}
