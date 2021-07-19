import Rectangle from "./Rectangle.js";
export default class Parameter extends Rectangle {
  constructor(x, y, w, h, r, g, b, need) {
    super(x, y, w, h, r, g, b);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
    this.need = need;
  }

  button() {
    noStroke();
    fill(200);
    rect(this.x - 2, this.y, this.w + 2, this.h, 9);
  }

  parameter() {
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y + 2, this.need, this.h - 4, 8);
    noFill();
  }

  display() {
    this.button();
    this.parameter();
  }
}
