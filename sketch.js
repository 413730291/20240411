let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1); // 降低畫布解析度
  frameRate(30); // 限制幀率
  background('#fefae0');

  // 生成 10 個圓的初始資料
  for (let i = 0; i < 10; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  background('#fefae0'); // 每次重繪背景

  let sizeOffset = map(mouseX, 0, width, 10, 120);

  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
