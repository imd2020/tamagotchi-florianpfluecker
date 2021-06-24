import gsap from "./gsap.min.js";

class Rectangle {
  constructor(x, y, w, h, title, r, g, b) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  button() {
    fill(255, 0, 0);
    noStroke();
    rect(this.x, this.y, this.w, this.h, 15);
  }
}

let rechteck = new Rectangle(100, 100, 100, 100);

function draw() {
  background(255);
  rechteck.button();
}

gsap.to(rechteck, { duration: 3, x: 500, y: 300, ease: "elastic" });
