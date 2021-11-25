/*
Variables
*/
let r = 0; // Size of the elippse
let speed = 10; // Speed of the animation for the ellipse
let direction = 1; // 1: enlarge, -1: shrink

function setup() {
  createCanvas(windowWidth, windowHeight); // canvas bevat de volledige breedte en hoogte van de viewport
  background(0); // achtergrondkleur van de canvas is zwart
}

function draw() {
  background(0);
  ellipse(width / 2, height / 2, r, r);
  if ((r + speed) > width) {
    direction = -1;
  } else if ((r - speed) < 0) {
    direction = 1;
  }
  // speed += 2; // acceleration
  r += speed * direction;
}