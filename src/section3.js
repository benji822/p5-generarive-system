import "../css/style.css";
import { sketch } from "p5js-wrapper";
import "p5.js-svg";

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
  // Generative Design rules:
  const rando = random(1);
  let numShapes;
  // 50% chance of numShapes = 6 and 50% chance of numShapes = 12
  if (rando > 0.5) {
    numShapes = SIDES;
  } else {
    numShapes = SIDES * 2;
  }

  // choose a random color from the palette
  const colorCode = float(random(PLATTE.length));
  const strokeColor = PLATTE[int(colorCode)];

  noFill();
  push();
  translate(width / 2, height / 2);
  stroke(PLATTE[4]);
  ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
  const angle = 360 / numShapes;
  for (let i = 0; i < numShapes; i++) {
    stroke(strokeColor);
    line(0, 0, 0, CRYSTAL_SIZE / 2);
    rotate(angle);
  }
  pop();
}

sketch.mousePressed = function () {
  console.log("here");
};
