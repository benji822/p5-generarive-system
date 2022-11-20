import "../css/style.css";
import { sketch } from "p5js-wrapper";
import "p5.js-svg";

// determine basic structure of a crystal
// draw test shapes
//   - outline circle
//   - "spoke" lines
// paletted
// make a function

const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PLATTE = ["#6e44ff", "#b892ff", "#ffc2e2", "#ff90b3", "#ef7a85"];

sketch.setup = function () {
  createCanvas(800, 600, SVG);
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
};

sketch.draw = function () {
  testLines();
};

function testLines() {
  noFill();
  push();
  translate(width / 2, height / 2);
  stroke(PLATTE[4]);
  ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
  const angle = 360 / SIDES;
  for (let i = 0; i < SIDES; i++) {
    stroke(PLATTE[0]);
    line(0, 0, 0, CRYSTAL_SIZE / 2);
    rotate(angle);
  }
  pop();
}

sketch.mousePressed = function () {
  console.log("here");
};
