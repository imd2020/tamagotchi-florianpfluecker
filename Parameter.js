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

  //!
  hunger() {
    hunger = hunger - 0.02;
  }

  thirst() {
    thirst = thirst - 1.2;
  }

  attention() {
    attention = attention - 0.8;
  }

  button() {
    noStroke();
    fill(200);
    rect(this.x, this.y, this.w, this.h, 9);
  }

  parameter() {
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.need, this.h, 8);
    noFill();
  }

  display() {
    this.hunger();
    this.thirst();
    this.attention();
    this.button();
    this.parameter();
  }
}
