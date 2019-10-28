let bgR = 255; // background Red, Green, and Blue
let bgG = 255;
let bgB = 255;

let roc = 2; // rate of variable change AKA sensitivity

let layer = 10; // which layer is being edited

let x1 = 837.5; // shape's x/y-coordinates
let y1 = 430;
let shape1 = 1; // flag for shape
let e1 = 0; // edge roundness for rect
let lr1 = 200; // horizontal & vertical measures
let ud1 = 200;
let R1 = 255; // layer 1 shape's Red, Green, Blue
let G1 = 255;
let B1 = 255;
let op1 = 0; // layer 1 shape's opacity

let x2 = 837.5;
let y2 = 430;
let shape2 = 1;
let e2 = 0;
let lr2 = 200;
let ud2 = 200;
let R2 = 255;
let G2 = 255;
let B2 = 255;
let op2 = 0;

let x3 = 837.5;
let y3 = 430;
let shape3 = 1;
let e3 = 0;
let lr3 = 200;
let ud3 = 200;
let R3 = 255;
let G3 = 255;
let B3 = 255;
let op3 = 0;

let x4 = 837.5;
let y4 = 430;
let shape4 = 1;
let e4 = 0;
let lr4 = 200;
let ud4 = 200;
let R4 = 255;
let G4 = 255;
let B4 = 255;
let op4 = 0;

let x5 = 837.5;
let y5 = 430;
let shape5 = 1;
let e5 = 0;
let lr5 = 200;
let ud5 = 200;
let R5 = 255;
let G5 = 255;
let B5 = 255;
let op5 = 0;

let x6 = 837.5;
let y6 = 430;
let shape6 = 1;
let e6 = 0;
let lr6 = 200;
let ud6 = 200;
let R6 = 255;
let G6 = 255;
let B6 = 255;
let op6 = 0;

let x7 = 837.5;
let y7 = 430;
let shape7 = 1;
let e7 = 0;
let lr7 = 200;
let ud7 = 200;
let R7 = 255;
let G7 = 255;
let B7 = 255;
let op7 = 0;

let x8 = 837.5;
let y8 = 430;
let shape8 = 1;
let e8 = 0;
let lr8 = 200;
let ud8 = 200;
let R8 = 255;
let G8 = 255;
let B8 = 255;
let op8 = 0;

let x9 = 837.5;
let y9 = 430;
let shape9 = 1;
let e9 = 0;
let lr9 = 200;
let ud9 = 200;
let R9 = 255;
let G9 = 255;
let B9 = 255;
let op9 = 0;

let x10 = 837.5;
let y10 = 430;
let shape10 = 1;
let e10 = 0;
let lr10 = 200;
let ud10 = 200;
let R10 = 255;
let G10 = 255;
let B10 = 255;
let op10 = 255;

function preload() {
  soundFormats("mp3");
  mySound = loadSound("Ladyfingers.mp3");
}

function setup() {
  createCanvas(1675, 860);
  background(255);
  rectMode(CENTER);
  colorMode(RGB);
  mySound.setLoop(true);
  mySound.play();
  mySound.playMode('restart');
}

function draw() {

  // select layer 1
  if (keyIsDown(49)) {
    layer = 1;
  }

  // select layer 2
  if (keyIsDown(50)) {
    layer = 2;
  }

  // select layer 3
  if (keyIsDown(51)) {
    layer = 3;
  }

  // select layer 4
  if (keyIsDown(52)) {
    layer = 4;
  }

  // select layer 5
  if (keyIsDown(53)) {
    layer = 5;
  }

  // select layer 6
  if (keyIsDown(54)) {
    layer = 6;
  }

  // select layer 7
  if (keyIsDown(55)) {
    layer = 7;
  }

  // select layer 8
  if (keyIsDown(56)) {
    layer = 8;
  }

  // select layer 9
  if (keyIsDown(57)) {
    layer = 9;
  }

  // select layer 10
  if (keyIsDown(48)) {
    layer = 10;
  }

  // increase sensitivity
  if (keyIsDown(221)) {
    roc += roc;
  }

  // decrease sensitivity
  if (keyIsDown(219)) {
    roc -= roc;
  }

  // increase Red of background
  if (keyIsDown(87)) {
    bgR += roc;
  }

  // decrease Red of background
  if (keyIsDown(81)) {
    bgR -= roc;
  }

  // background Green up
  if (keyIsDown(83)) {
    bgG += roc;
  }

  // background Green down
  if (keyIsDown(65)) {
    bgG -= roc;
  }

  // background Blue up
  if (keyIsDown(88)) {
    bgB += roc;
  }

  // background Blue down
  if (keyIsDown(90)) {
    bgB -= roc;
  }

  // randomize background color
  if (keyIsDown(66)) {
    bgR = random(0, 255);
    bgG = random(0, 255);
    bgB = random(0, 255);
  }

  if (keyIsDown(76)) {
    mySound.stop();
  }

  if (keyIsDown(186)) {
    mySound.play();
  }

  // stretch vertically
  if (keyIsDown(89)) {

    if (layer == 1) {
      ud1 += roc;
    }

    if (layer == 2) {
      ud2 += roc;
    }

    if (layer == 3) {
      ud3 += roc;
    }

    if (layer == 4) {
      ud4 += roc;
    }

    if (layer == 5) {
      ud5 += roc;
    }

    if (layer == 6) {
      ud6 += roc;
    }

    if (layer == 7) {
      ud7 += roc;
    }

    if (layer == 8) {
      ud8 += roc;
    }

    if (layer == 9) {
      ud9 += roc;
    }

    if (layer == 10) {
      ud10 += roc;
    }
  }

  // compress vertically
  if (keyIsDown(74)) {

    if (layer == 1) {
      ud1 -= roc;
    }

    if (layer == 2) {
      ud2 -= roc;
    }

    if (layer == 3) {
      ud3 -= roc;
    }

    if (layer == 4) {
      ud4 -= roc;
    }

    if (layer == 5) {
      ud5 -= roc;
    }

    if (layer == 6) {
      ud6 -= roc;
    }

    if (layer == 7) {
      ud7 -= roc;
    }

    if (layer == 8) {
      ud8 -= roc;
    }

    if (layer == 9) {
      ud9 -= roc;
    }

    if (layer == 10) {
      ud10 -= roc;
    }
  }

  // stretch horizontally
  if (keyIsDown(73)) {

    if (layer == 1) {
      lr1 += roc;
    }

    if (layer == 2) {
      lr2 += roc;
    }

    if (layer == 3) {
      lr3 += roc;
    }

    if (layer == 4) {
      lr4 += roc;
    }

    if (layer == 5) {
      lr5 += roc;
    }

    if (layer == 6) {
      lr6 += roc;
    }

    if (layer == 7) {
      lr7 += roc;
    }

    if (layer == 8) {
      lr8 += roc;
    }

    if (layer == 9) {
      lr9 += roc;
    }

    if (layer == 10) {
      lr10 += roc;
    }
  }

  // compress horizontally
  if (keyIsDown(71)) {

    if (layer == 1) {
      lr1 -= roc;
    }

    if (layer == 2) {
      lr2 -= roc;
    }

    if (layer == 3) {
      lr3 -= roc;
    }

    if (layer == 4) {
      lr4 -= roc;
    }

    if (layer == 5) {
      lr5 -= roc;
    }

    if (layer == 6) {
      lr6 -= roc;
    }

    if (layer == 7) {
      lr7 -= roc;
    }

    if (layer == 8) {
      lr8 -= roc;
    }

    if (layer == 9) {
      lr9 -= roc;
    }

    if (layer == 10) {
      lr10 -= roc;
    }
  }

  // increase Red of Shape
  if (keyIsDown(82)) {

    if (layer == 1) {
      R1 += roc;
    }

    if (layer == 2) {
      R2 += roc;
    }

    if (layer == 3) {
      R3 += roc;
    }

    if (layer == 4) {
      R4 += roc;
    }

    if (layer == 5) {
      R5 += roc;
    }

    if (layer == 6) {
      R6 += roc;
    }

    if (layer == 7) {
      R7 += roc;
    }

    if (layer == 8) {
      R8 += roc;
    }

    if (layer == 9) {
      R9 += roc;
    }

    if (layer == 10) {
      R10 += roc;
    }
  }

  // decrease Red of Shape
  if (keyIsDown(69)) {

    if (layer == 1) {
      R1 -= roc;
    }

    if (layer == 2) {
      R2 -= roc;
    }

    if (layer == 3) {
      R3 -= roc;
    }

    if (layer == 4) {
      R4 -= roc;
    }

    if (layer == 5) {
      R5 -= roc;
    }

    if (layer == 6) {
      R6 -= roc;
    }

    if (layer == 7) {
      R7 -= roc;
    }

    if (layer == 8) {
      R8 -= roc;
    }

    if (layer == 9) {
      R9 -= roc;
    }

    if (layer == 10) {
      R10 -= roc;
    }
  }

  // increase Green of Shape
  if (keyIsDown(70)) {

    if (layer == 1) {
      G1 += roc;
    }

    if (layer == 2) {
      G2 += roc;
    }

    if (layer == 3) {
      G3 += roc;
    }

    if (layer == 4) {
      G4 += roc;
    }

    if (layer == 5) {
      G5 += roc;
    }

    if (layer == 6) {
      G6 += roc;
    }

    if (layer == 7) {
      G7 += roc;
    }

    if (layer == 8) {
      G8 += roc;
    }

    if (layer == 9) {
      G9 += roc;
    }

    if (layer == 10) {
      G10 += roc;
    }
  }

  // decrease Green of Shape
  if (keyIsDown(68)) {

    if (layer == 1) {
      G1 -= roc;
    }

    if (layer == 2) {
      G2 -= roc;
    }

    if (layer == 3) {
      G3 -= roc;
    }

    if (layer == 4) {
      G4 -= roc;
    }

    if (layer == 5) {
      G5 -= roc;
    }

    if (layer == 6) {
      G6 -= roc;
    }

    if (layer == 7) {
      G7 -= roc;
    }

    if (layer == 8) {
      G8 -= roc;
    }

    if (layer == 9) {
      G9 -= roc;
    }

    if (layer == 10) {
      G10 -= roc;
    }
  }

  // increase Blue of Shape
  if (keyIsDown(86)) {

    if (layer == 1) {
      B1 += roc;
    }

    if (layer == 2) {
      B2 += roc;
    }

    if (layer == 3) {
      B3 += roc;
    }

    if (layer == 4) {
      B4 += roc;
    }

    if (layer == 5) {
      B5 += roc;
    }

    if (layer == 6) {
      B6 += roc;
    }

    if (layer == 7) {
      B7 += roc;
    }

    if (layer == 8) {
      B8 += roc;
    }

    if (layer == 9) {
      B9 += roc;
    }

    if (layer == 10) {
      B10 += roc;
    }
  }

  // decrease Blue of Shape
  if (keyIsDown(67)) {

    if (layer == 1) {
      B1 -= roc;
    }

    if (layer == 2) {
      B2 -= roc;
    }

    if (layer == 3) {
      B3 -= roc;
    }

    if (layer == 4) {
      B4 -= roc;
    }

    if (layer == 5) {
      B5 -= roc;
    }

    if (layer == 6) {
      B6 -= roc;
    }

    if (layer == 7) {
      B7 -= roc;
    }

    if (layer == 8) {
      B8 -= roc;
    }

    if (layer == 9) {
      B9 -= roc;
    }

    if (layer == 10) {
      B10 -= roc;
    }
  }

  // randomize color
  if (keyIsDown(32)) {

    if (layer == 1) {
      R1 = random(0, 255);
      G1 = random(0, 255);
      B1 = random(0, 255);
    }

    if (layer == 2) {
      R2 = random(0, 255);
      G2 = random(0, 255);
      B2 = random(0, 255);
    }

    if (layer == 3) {
      R3 = random(0, 255);
      G3 = random(0, 255);
      B3 = random(0, 255);
    }

    if (layer == 4) {
      R4 = random(0, 255);
      G4 = random(0, 255);
      B4 = random(0, 255);
    }

    if (layer == 5) {
      R5 = random(0, 255);
      G5 = random(0, 255);
      B5 = random(0, 255);
    }

    if (layer == 6) {
      R6 = random(0, 255);
      G6 = random(0, 255);
      B6 = random(0, 255);
    }

    if (layer == 7) {
      R7 = random(0, 255);
      G7 = random(0, 255);
      B7 = random(0, 255);
    }

    if (layer == 8) {
      R8 = random(0, 255);
      G8 = random(0, 255);
      B8 = random(0, 255);
    }

    if (layer == 9) {
      R9 = random(0, 255);
      G9 = random(0, 255);
      B9 = random(0, 255);
    }

    if (layer == 10) {
      R10 = random(0, 255);
      G10 = random(0, 255);
      B10 = random(0, 255);
    }
  }

  // decrease opacity of shape
  if (keyIsDown(80)) {

    if (layer == 1) {
      op1 += roc;
    }

    if (layer == 2) {
      op2 += roc;
    }

    if (layer == 3) {
      op3 += roc;
    }

    if (layer == 4) {
      op4 += roc;
    }

    if (layer == 5) {
      op5 += roc;
    }

    if (layer == 6) {
      op6 += roc;
    }

    if (layer == 7) {
      op7 += roc;
    }

    if (layer == 8) {
      op8 += roc;
    }

    if (layer == 9) {
      op9 += roc;
    }

    if (layer == 10) {
      op10 += roc;
    }
  }

  if (keyIsDown(79)) {

    if (layer == 1) {
      op1 -= roc;
    }

    if (layer == 2) {
      op2 -= roc;
    }

    if (layer == 3) {
      op3 -= roc;
    }

    if (layer == 4) {
      op4 -= roc;
    }

    if (layer == 5) {
      op5 -= roc;
    }

    if (layer == 6) {
      op6 -= roc;
    }

    if (layer == 7) {
      op7 -= roc;
    }

    if (layer == 8) {
      op8 -= roc;
    }

    if (layer == 9) {
      op9 -= roc;
    }

    if (layer == 10) {
      op10 -= roc;
    }
  }

  // round edges (rect only)
  if (keyIsDown(190)) {

    if (layer == 1) {
      e1 += roc;
    }

    if (layer == 2) {
      e2 += roc;
    }

    if (layer == 3) {
      e3 += roc;
    }

    if (layer == 4) {
      e4 += roc;
    }

    if (layer == 5) {
      e5 += roc;
    }

    if (layer == 6) {
      e6 += roc;
    }

    if (layer == 7) {
      e7 += roc;
    }

    if (layer == 8) {
      e8 += roc;
    }

    if (layer == 9) {
      e9 += roc;
    }

    if (layer == 10) {
      e10 += roc;
    }
  }

  // sharpen edges (rect only)
  if (keyIsDown(188)) {

    if (layer == 1) {
      e1 -= roc;
    }

    if (layer == 2) {
      e2 -= roc;
    }

    if (layer == 3) {
      e3 -= roc;
    }

    if (layer == 4) {
      e4 -= roc;
    }

    if (layer == 5) {
      e5 -= roc;
    }

    if (layer == 6) {
      e6 -= roc;
    }

    if (layer == 7) {
      e7 -= roc;
    }

    if (layer == 8) {
      e8 -= roc;
    }

    if (layer == 9) {
      e9 -= roc;
    }

    if (layer == 10) {
      e10 -= roc;
    }
  }

  // change rectangle to circle
  if (keyIsDown(78)) {

    if (layer == 1) {
      shape1 -= roc;
    }

    if (layer == 2) {
      shape2 -= roc;
    }

    if (layer == 3) {
      shape3 -= roc;
    }

    if (layer == 4) {
      shape4 -= roc;
    }

    if (layer == 5) {
      shape5 -= roc;
    }

    if (layer == 6) {
      shape6 -= roc;
    }

    if (layer == 7) {
      shape7 -= roc;
    }

    if (layer == 8) {
      shape8 -= roc;
    }

    if (layer == 9) {
      shape9 -= roc;
    }

    if (layer == 10) {
      shape10 -= roc;
    }
  }

  if (keyIsDown(77)) {

    if (layer == 1) {
      shape1 += roc;
    }

    if (layer == 2) {
      shape2 += roc;
    }

    if (layer == 3) {
      shape3 += roc;
    }

    if (layer == 4) {
      shape4 += roc;
    }

    if (layer == 5) {
      shape5 += roc;
    }

    if (layer == 6) {
      shape6 += roc;
    }

    if (layer == 7) {
      shape7 += roc;
    }

    if (layer == 8) {
      shape8 += roc;
    }

    if (layer == 9) {
      shape9 += roc;
    }

    if (layer == 10) {
      shape10 += roc;
    }
  }

  if (keyIsDown(75)) {

    if (layer == 1) {
      x1 += roc;
    }

    if (layer == 2) {
      x2 += roc;
    }

    if (layer == 3) {
      x3 += roc;
    }

    if (layer == 4) {
      x4 += roc;
    }

    if (layer == 5) {
      x5 += roc;
    }

    if (layer == 6) {
      x6 += roc;
    }

    if (layer == 7) {
      x7 += roc;
    }

    if (layer == 8) {
      x8 += roc;
    }

    if (layer == 9) {
      x9 += roc;
    }

    if (layer == 10) {
      x10 += roc;
    }
  }

  if (keyIsDown(84)) {

    if (layer == 1) {
      x1 -= roc;
    }

    if (layer == 2) {
      x2 -= roc;
    }

    if (layer == 3) {
      x3 -= roc;
    }

    if (layer == 4) {
      x4 -= roc;
    }

    if (layer == 5) {
      x5 -= roc;
    }

    if (layer == 6) {
      x6 -= roc;
    }

    if (layer == 7) {
      x7 -= roc;
    }

    if (layer == 8) {
      x8 -= roc;
    }

    if (layer == 9) {
      x9 -= roc;
    }

    if (layer == 10) {
      x10 -= roc;
    }
  }

  if (keyIsDown(85)) {

    if (layer == 1) {
      y1 -= roc;
    }

    if (layer == 2) {
      y2 -= roc;
    }

    if (layer == 3) {
      y3 -= roc;
    }

    if (layer == 4) {
      y4 -= roc;
    }

    if (layer == 5) {
      y5 -= roc;
    }

    if (layer == 6) {
      y6 -= roc;
    }

    if (layer == 7) {
      y7 -= roc;
    }

    if (layer == 8) {
      y8 -= roc;
    }

    if (layer == 9) {
      y9 -= roc;
    }

    if (layer == 10) {
      y10 -= roc;
    }
  }

  if (keyIsDown(72)) {

    if (layer == 1) {
      y1 += roc;
    }

    if (layer == 2) {
      y2 += roc;
    }

    if (layer == 3) {
      y3 += roc;
    }

    if (layer == 4) {
      y4 += roc;
    }

    if (layer == 5) {
      y5 += roc;
    }

    if (layer == 6) {
      y6 += roc;
    }

    if (layer == 7) {
      y7 += roc;
    }

    if (layer == 8) {
      y8 += roc;
    }

    if (layer == 9) {
      y9 += roc;
    }

    if (layer == 10) {
      y10 += roc;
    }
  }

  // return shape to start form : white square
  if (keyIsDown(8)) {

    if (layer == 1) {
      x1 = width / 2
      y1 = height / 2
      ud1 = 200
      lr1 = 200
      e1 = 0
      R1 = 255
      G1 = 255
      B1 = 255
    }

    if (layer == 2) {
      x2 = width / 2
      y2 = height / 2
      ud2 = 200
      lr2 = 200
      e2 = 0
      R2 = 255
      G2 = 255
      B2 = 255
    }

    if (layer == 3) {
      x3 = width / 2
      y3 = height / 2
      ud3 = 200
      lr3 = 200
      e3 = 0
      R3 = 255
      G3 = 255
      B3 = 255
    }

    if (layer == 4) {
      x4 = width / 2
      y4 = height / 2
      ud4 = 200
      lr4 = 200
      e4 = 0
      R4 = 255
      G4 = 255
      B4 = 255
    }

    if (layer == 5) {
      x5 = width / 2
      y5 = height / 2
      ud5 = 200
      lr5 = 200
      e5 = 0
      R5 = 255
      G5 = 255
      B5 = 255
    }

    if (layer == 6) {
      x6 = width / 2
      y6 = height / 2
      ud6 = 200
      lr6 = 200
      e6 = 0
      R6 = 255
      G6 = 255
      B6 = 255
    }

    if (layer == 7) {
      x7 = width / 2
      y7 = height / 2
      ud7 = 200
      lr7 = 200
      e7 = 0
      R7 = 255
      G7 = 255
      B7 = 255
    }

    if (layer == 8) {
      x8 = width / 2
      y8 = height / 2
      ud8 = 200
      lr8 = 200
      e8 = 0
      R8 = 255
      G8 = 255
      B8 = 255
    }

    if (layer == 1) {
      x9 = width / 2
      y9 = height / 2
      ud9 = 200
      lr9 = 200
      e9 = 0
      R9 = 255
      G9 = 255
      B9 = 255
    }

    if (layer == 10) {
      x10 = width / 2
      y10 = height / 2
      ud10 = 200
      lr10 = 200
      e10 = 0
      R10 = 255
      G10 = 255
      B10 = 255
    }
  }

  // parameters for variable boundaries where values will cause error
  if (bgR > 255) {
    bgR = 255;
  }

  if (bgR < 0) {
    bgR = 0;
  }

  if (bgG > 255) {
    bgG = 255;
  }

  if (bgG < 0) {
    bgG = 0;
  }

  if (bgB > 255) {
    bgB = 255;
  }

  if (bgB < 0) {
    bgB = 0;
  }

  if (ud1 > height) {
    ud1 = height;
  }

  if (ud1 < 0) {
    ud1 = 0;
  }

  if (ud2 > height) {
    ud2 = height;
  }

  if (ud2 < 0) {
    ud2 = 0;
  }

  if (ud3 > height) {
    ud3 = height;
  }

  if (ud3 < 0) {
    ud3 = 0;
  }

  if (ud4 > height) {
    ud4 = height;
  }

  if (ud4 < 0) {
    ud4 = 0;
  }

  if (ud5 > height) {
    ud5 = height;
  }

  if (ud5 < 0) {
    ud5 = 0;
  }

  if (ud6 > height) {
    ud6 = height;
  }

  if (ud6 < 0) {
    ud6 = 0;
  }

  if (ud7 > height) {
    ud7 = height;
  }

  if (ud7 < 0) {
    ud7 = 0;
  }

  if (ud8 > height) {
    ud8 = height;
  }

  if (ud8 < 0) {
    ud8 = 0;
  }

  if (ud9 > height) {
    ud9 = height;
  }

  if (ud9 < 0) {
    ud9 = 0;
  }

  if (ud10 > height) {
    ud10 = height;
  }

  if (ud10 < 0) {
    ud10 = 0;
  }

  if (lr1 > width) {
    lr1 = width;
  }

  if (lr1 < 0) {
    lr1 = 0;
  }

  if (lr2 > width) {
    lr2 = width;
  }

  if (lr2 < 0) {
    lr2 = 0;
  }

  if (lr3 > width) {
    lr3 = width;
  }

  if (lr3 < 0) {
    lr3 = 0;
  }

  if (lr4 > width) {
    lr4 = width;
  }

  if (lr4 < 0) {
    lr4 = 0;
  }

  if (lr5 > width) {
    lr5 = width;
  }

  if (lr5 < 0) {
    lr5 = 0;
  }

  if (lr6 > width) {
    lr6 = width;
  }

  if (lr6 < 0) {
    lr6 = 0;
  }

  if (lr7 > width) {
    lr7 = width;
  }

  if (lr7 < 0) {
    lr7 = 0;
  }

  if (lr8 > width) {
    lr8 = width;
  }

  if (lr8 < 0) {
    lr8 = 0;
  }

  if (lr9 > width) {
    lr9 = width;
  }

  if (lr9 < 0) {
    lr9 = 0;
  }

  if (lr10 > width) {
    lr10 = width;
  }

  if (lr10 < 0) {
    lr10 = 0;
  }

  if (R1 > 255) {
    R1 = 255;
  }

  if (R1 < 0) {
    R1 = 0;
  }

  if (R2 > 255) {
    R2 = 255;
  }

  if (R2 < 0) {
    R2 = 0;
  }

  if (R3 > 255) {
    R3 = 255;
  }

  if (R3 < 0) {
    R3 = 0;
  }

  if (R4 > 255) {
    R4 = 255;
  }

  if (R4 < 0) {
    R4 = 0;
  }

  if (R5 > 255) {
    R5 = 255;
  }

  if (R5 < 0) {
    R5 = 0;
  }

  if (R6 > 255) {
    R6 = 255;
  }

  if (R6 < 0) {
    R6 = 0;
  }

  if (R7 > 255) {
    R7 = 255;
  }

  if (R7 < 0) {
    R7 = 0;
  }

  if (R8 > 255) {
    R8 = 255;
  }

  if (R8 < 0) {
    R8 = 0;
  }

  if (R9 > 255) {
    R9 = 255;
  }

  if (R9 < 0) {
    R9 = 0;
  }

  if (R10 > 255) {
    R10 = 255;
  }

  if (R10 < 0) {
    R10 = 0;
  }

  if (G1 > 255) {
    G1 = 255;
  }

  if (G1 < 0) {
    G1 = 0;
  }

  if (G2 > 255) {
    G2 = 255;
  }

  if (G2 < 0) {
    G2 = 0;
  }

  if (G3 > 255) {
    G3 = 255;
  }

  if (G3 < 0) {
    G3 = 0;
  }

  if (G4 > 255) {
    G4 = 255;
  }

  if (G4 < 0) {
    G4 = 0;
  }

  if (G5 > 255) {
    G5 = 255;
  }

  if (G5 < 0) {
    G5 = 0;
  }

  if (G6 > 255) {
    G6 = 255;
  }

  if (G6 < 0) {
    G6 = 0;
  }

  if (G7 > 255) {
    G7 = 255;
  }

  if (G7 < 0) {
    G7 = 0;
  }

  if (G8 > 255) {
    G8 = 255;
  }

  if (G8 < 0) {
    G8 = 0;
  }

  if (G9 > 255) {
    G9 = 255;
  }

  if (G9 < 0) {
    G9 = 0;
  }

  if (G10 > 255) {
    G10 = 255;
  }

  if (G10 < 0) {
    G10 = 0;
  }

  if (B1 > 255) {
    B1 = 255;
  }

  if (B1 < 0) {
    B1 = 0;
  }

  if (B2 > 255) {
    B2 = 255;
  }

  if (B2 < 0) {
    B2 = 0;
  }

  if (B3 > 255) {
    B3 = 255;
  }

  if (B3 < 0) {
    B3 = 0;
  }

  if (B4 > 255) {
    B4 = 255;
  }

  if (B4 < 0) {
    B4 = 0;
  }

  if (B5 > 255) {
    B5 = 255;
  }

  if (B5 < 0) {
    B5 = 0;
  }

  if (B6 > 255) {
    B6 = 255;
  }

  if (B6 < 0) {
    B6 = 0;
  }

  if (B7 > 255) {
    B7 = 255;
  }

  if (B7 < 0) {
    B7 = 0;
  }

  if (B8 > 255) {
    B8 = 255;
  }

  if (B8 < 0) {
    B8 = 0;
  }

  if (B9 > 255) {
    B9 = 255;
  }

  if (B9 < 0) {
    B9 = 0;
  }

  if (B10 > 255) {
    B10 = 255;
  }

  if (B10 < 0) {
    B10 = 0;
  }

  if (e1 > 200) {
    e1 = 200;
  }

  if (e1 < 0) {
    e1 = 0;
  }

  if (e2 > 200) {
    e2 = 200;
  }

  if (e2 < 0) {
    e2 = 0;
  }

  if (e3 > 200) {
    e3 = 200;
  }

  if (e3 < 0) {
    e3 = 0;
  }

  if (e4 > 200) {
    e4 = 200;
  }

  if (e4 < 0) {
    e4 = 0;
  }

  if (e5 > 200) {
    e5 = 200;
  }

  if (e5 < 0) {
    e5 = 0;
  }

  if (e6 > 200) {
    e6 = 200;
  }

  if (e6 < 0) {
    e6 = 0;
  }

  if (e7 > 200) {
    e7 = 200;
  }

  if (e7 < 0) {
    e7 = 0;
  }

  if (e8 > 200) {
    e8 = 200;
  }

  if (e8 < 0) {
    e8 = 0;
  }

  if (e9 > 200) {
    e9 = 200;
  }

  if (e9 < 0) {
    e9 = 0;
  }

  if (e10 > 200) {
    e10 = 200;
  }

  if (e10 < 0) {
    e10 = 0;
  }

  if (roc > 5) {
    roc = 5;
  }

  if (roc < 1) {
    roc = 1;
  }

  if (x1 > width) {
    x1 = width;
  }

  if (x1 < 0) {
    x1 = 0;
  }

  if (x2 > width) {
    x2 = width;
  }

  if (x2 < 0) {
    x2 = 0;
  }

  if (x3 > width) {
    x3 = width;
  }

  if (x3 < 0) {
    x3 = 0;
  }

  if (x4 > width) {
    x4 = width;
  }

  if (x4 < 0) {
    x4 = 0;
  }

  if (x5 > width) {
    x5 = width;
  }

  if (x5 < 0) {
    x5 = 0;
  }

  if (x6 > width) {
    x6 = width;
  }

  if (x6 < 0) {
    x6 = 0;
  }

  if (x7 > width) {
    x7 = width;
  }

  if (x7 < 0) {
    x7 = 0;
  }

  if (x8 > width) {
    x8 = width;
  }

  if (x8 < 0) {
    x8 = 0;
  }

  if (x9 > width) {
    x9 = width;
  }

  if (x9 < 0) {
    x9 = 0;
  }

  if (x10 > width) {
    x10 = width;
  }

  if (x10 < 0) {
    x10 = 0;
  }

  if (y1 > height) {
    y1 = height;
  }

  if (y1 < 0) {
    y1 = 0;
  }

  if (y2 > height) {
    y2 = height;
  }

  if (y2 < 0) {
    y2 = 0;
  }

  if (y3 > height) {
    y3 = height;
  }

  if (y3 < 0) {
    y3 = 0;
  }

  if (y4 > height) {
    y4 = height;
  }

  if (y4 < 0) {
    y4 = 0;
  }

  if (y5 > height) {
    y5 = height;
  }

  if (y5 < 0) {
    y5 = 0;
  }

  if (y6 > height) {
    y6 = height;
  }

  if (y6 < 0) {
    y6 = 0;
  }

  if (y7 > height) {
    y7 = height;
  }

  if (y7 < 0) {
    y7 = 0;
  }

  if (y8 > height) {
    y8 = height;
  }

  if (y8 < 0) {
    y8 = 0;
  }

  if (y9 > height) {
    y9 = height;
  }

  if (y9 < 0) {
    y9 = 0;
  }

  if (y10 > height) {
    y10 = height;
  }

  if (y10 < 0) {
    y10 = 0;
  }

  if (op1 > 255) {
    op1 = 255;
  }

  if (op1 < 0) {
    op1 = 0;
  }

  if (op2 > 255) {
    op2 = 255;
  }

  if (op2 < 0) {
    op2 = 0;
  }

  if (op3 > 255) {
    op3 = 255;
  }

  if (op3 < 0) {
    op3 = 0;
  }

  if (op4 > 255) {
    op4 = 255;
  }

  if (op4 < 0) {
    op4 = 0;
  }

  if (op5 > 255) {
    op5 = 255;
  }

  if (op5 < 0) {
    op5 = 0;
  }

  if (op6 > 255) {
    op6 = 255;
  }

  if (op6 < 0) {
    op6 = 0;
  }

  if (op7 > 255) {
    op7 = 255;
  }

  if (op7 < 0) {
    op7 = 0;
  }

  if (op8 > 255) {
    op8 = 255;
  }

  if (op8 < 0) {
    op8 = 0;
  }

  if (op9 > 255) {
    op9 = 255;
  }

  if (op9 < 0) {
    op9 = 0;
  }

  if (op10 > 255) {
    op10 = 255;
  }

  if (op10 < 0) {
    op10 = 0;
  }

  if (shape1 > 1) {
    shape1 = 1;
  }

  if (shape1 < -1) {
    shape1 = -1;
  }

  if (shape2 > 1) {
    shape2 = 1;
  }

  if (shape2 < -1) {
    shape2 = -1;
  }

  if (shape3 > 1) {
    shape3 = 1;
  }

  if (shape3 < -1) {
    shape3 = -1;
  }

  if (shape4 > 1) {
    shape4 = 1;
  }

  if (shape4 < -1) {
    shape4 = -1;
  }

  if (shape5 > 1) {
    shape5 = 1;
  }

  if (shape5 < -1) {
    shape5 = -1;
  }

  if (shape6 > 1) {
    shape6 = 1;
  }

  if (shape6 < -1) {
    shape6 = -1;
  }

  if (shape7 > 1) {
    shape7 = 1;
  }

  if (shape7 < -1) {
    shape7 = -1;
  }

  if (shape8 > 1) {
    shape8 = 1;
  }

  if (shape8 < -1) {
    shape8 = -1;
  }

  if (shape9 > 1) {
    shape9 = 1;
  }

  if (shape9 < -1) {
    shape9 = -1;
  }

  if (shape10 > 1) {
    shape10 = 1;
  }

  if (shape10 < -1) {
    shape10 = -1;
  }

  // draw layer 1
  if (shape1 > 0) {
    clear();
    background(bgR, bgG, bgB);
    noStroke();
    fill(R1, G1, B1, op1);
    rect(x1, y1, lr1, ud1, e1);
  }

  if (shape1 < 0) {
    noStroke();
    fill(R1, G1, B1, op1);
    ellipse(x1, y1, lr1, ud1);
  }

  // draw layer 2
  if (shape2 > 0) {
    noStroke();
    fill(R2, G2, B2, op2);
    rect(x2, y2, lr2, ud2, e2);
  }

  if (shape2 < 0) {
    noStroke();
    fill(R2, G2, B2, op2);
    ellipse(x2, y2, lr2, ud2);
  }

  // draw layer 3
  if (shape3 > 0) {
    noStroke();
    fill(R3, G3, B3, op3);
    rect(x3, y3, lr3, ud3, e3);
  }

  if (shape3 < 0) {
    noStroke();
    fill(R3, G3, B3, op3);
    ellipse(x3, y3, lr3, ud3);
  }

  // draw layer 4
  if (shape4 > 0) {
    noStroke();
    fill(R4, G4, B4, op4);
    rect(x4, y4, lr4, ud4, e4);
  }

  if (shape4 < 0) {
    noStroke();
    fill(R4, G4, B4, op4);
    ellipse(x4, y4, lr4, ud4);
  }

  // draw layer 5
  if (shape4 > 0) {
    noStroke();
    fill(R5, G5, B5, op5);
    rect(x5, y5, lr5, ud5, e5);
  }

  if (shape5 < 0) {
    noStroke();
    fill(R5, G5, B5, op5);
    ellipse(x5, y5, lr5, ud5);
  }

  // draw layer 6
  if (shape6 > 0) {
    noStroke();
    fill(R6, G6, B6, op6);
    rect(x6, y6, lr6, ud1, e6);
  }

  if (shape6 < 0) {
    noStroke();
    fill(R6, G6, B6, op6);
    ellipse(x6, y6, lr6, ud6);
  }

  // draw layer 7
  if (shape7 > 0) {
    noStroke();
    fill(R7, G7, B7, op7);
    rect(x7, y7, lr7, ud7, e7);

  if (shape7 < 0) {
    noStroke();
    fill(R7, G7, B7, op7);
    ellipse(x7, y7, lr7, ud7);
  }

  // draw layer 8
  if (shape8 > 0) {
    noStroke();
    fill(R8, G8, B8, op8);
    rect(x8, y8, lr8, ud8, e8);
  }

  if (shape8 < 0) {
    noStroke();
    fill(R8, G8, B8, op8);
    ellipse(x8, y8, lr8, ud8);
  }

  // draw layer 9
  if (shape9 > 0) {
    noStroke();
    fill(R9, G9, B9, op9);
    rect(x9, y9, lr9, ud9, e9);
  }

  if (shape9 < 0) {
    noStroke();
    fill(R9, G9, B9, op9);
    ellipse(x9, y9, lr9, ud9);
  }

  // draw layer 10
  if (shape10 > 0) {
    noStroke();
    fill(R10, G10, B10, op10);
    rect(x10, y10, lr10, ud10, e10);
  }

  if (shape10 < 0) {
    noStroke();
    fill(R10, G10, B10, op10);
    ellipse(x10, y10, lr10, ud10);
  }
 }
}
