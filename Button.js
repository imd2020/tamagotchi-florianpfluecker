export default class Button {
  constructor(x, y, w, h, title, r, g, b, state) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.title = title;
    this.r = r;
    this.g = g;
    this.b = b;
    this.state = state;
  }

  display() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.w, this.h, 5);
    fill(255);
    textAlign(CENTER);
    text(this.title, this.x + this.w / 2, this.y + this.h / 1.7);
  }

  hitTest(x, y) {
    if (
      mouseX < this.x + this.w &&
      mouseX >= this.x &&
      mouseY < this.y + this.h &&
      mouseY >= this.y
    ) {
      state = this.state;
      return true;
    } else {
      return false;
    }
  }
}
