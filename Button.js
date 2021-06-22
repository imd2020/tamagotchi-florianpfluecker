export default class Button extends Rectangle {
  constructor(x, y, w, h, title, r, g, b) {
    super(x, y, w, h, r, g, b);
    this.title = title;
  }

  button() {
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.w, this.h, 15);
    fill(255);
    textSize(18);
    textAlign(CENTER);
    text(this.title, this.x + this.w / 2, this.y + this.h / 1.7);

    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.w &&
      mouseY >= this.y &&
      mouseY <= this.y + this.h
    ) {
      this.r = 50;
      this.b = 50;
      this.g = 50;
    } else {
      this.r = 150;
      this.g = 150;
      this.b = 150;
    }
  }

  hitTest(x, y) {
    if (
      mouseX < this.x + this.w &&
      mouseX >= this.x &&
      mouseY < this.y + this.h &&
      mouseY >= this.y
    ) {
      //state = this.state;
      return true;
    } else {
      return false;
    }
  }

  display() {
    this.button();
  }
}
