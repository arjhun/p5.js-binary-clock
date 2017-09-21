var diameter = 60,
    spacing = 10,
    padding = diameter + spacing;


function setup() {
  createCanvas(1024, 576);
}

function draw() {
  background(200);

  //put somewhere in the middle
  translate(width / 2 - 4 * padding, height / 2 + (diameter));

  //colors
  var highlightH = color(252, 147, 26),
      highlightM = color(24, 157, 194),
      highlightS = color(252, 232, 26);

  //split into individual integers for collumns
  var h = hour().toString().split("").map(Number),
      m = minute().toString().split("").map(Number),
      s = second().toString().split("").map(Number);

  //hours
  drawDigits(2, h[0], highlightH);
  drawDigits(4, h[1], highlightH);

  //separator
  drawline();

  //minutes
  drawDigits(3, m[0], highlightM);
  drawDigits(4, m[1], highlightM);

  //separator
  drawline();

  //seconds
  drawDigits(3, s[0], highlightS);
  drawDigits(4, s[1], highlightS);

  //text
  fill(255);
  textSize(diameter);
  textAlign(CENTER, CENTER);
  text('1', 0, 0);
  text('2', 0, -(padding));
  text('4', 0, -(padding) * 2);
  text('8', 0, -(padding) * 3);

}

function drawline() {
  stroke(128);
  strokeWeight(3);
  line(0, 0, 0, -3 * padding);
  noStroke();
  translate(padding, 0);
}

function drawDigits(num, digit, color) {
  for (var i = 0; i < num; i++) {
    var bit = (digit >> i) & 1;
    if (bit) {
      fill(color);
    } else {
      fill(255);
    }
    ellipse(0, -(padding) * i, diameter);
  }
  translate(padding, 0);
}
