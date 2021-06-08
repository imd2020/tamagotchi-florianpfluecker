export default class Parameter {
  constructor(x, y, w, h, r, g, b) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  hunger() {
    hunger = hunger - 0.02;
  }

  thirst() {
    thirst = thirst - 0.2;
  }

  attention() {
    attention = attention - 0.8;
  }

  bar() {
    noStroke();
    fill(200);
    rect(this.x, this.y, this.w, this.h, 9);
  }

  parameter() {
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, hunger, this.h, 8);
  }

  display() {
    this.hunger();
    this.thirst();
    this.attention();
    this.bar();
    this.parameter();
  }
}
