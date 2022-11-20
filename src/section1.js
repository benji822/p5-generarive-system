import "../css/style.css";
import { sketch } from "p5js-wrapper";
import "p5.js-svg";

// project setup
// draw something simple
// translate()
// push() + pop()
// rotate() + angleMode()
// rectMode()

sketch.setup = function () {
  createCanvas(800, 600, SVG);
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
};

sketch.draw = function () {
  background("teal");
  fill(0);

  push();
  translate(width / 2, height / 2);
  rotate(45);
  rect(0, 0, 50, 50);
  pop();
};

sketch.mousePressed = function () {
  console.log("here");
};
