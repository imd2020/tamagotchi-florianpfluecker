export default class DevelopmentStages {
  constructor() {}

  egg() {
    if (developmentCounter <= 2) {
      image(egg, 330, 505, 141, 203);
    }

    if (developmentCounter >= 3 && developmentCounter <= 5) {
      image(eggCrack, 330, 505, 141, 203);
    }

    if (developmentCounter > 5 && developmentCounter <= 6) {
      image(eggCracked, 330, 505, 141, 203);
    }
  }

  baby() {
    //BABY

    if (developmentCounter > 6 && developmentCounter <= 15) {
      image(baby, 210, 540, 385, 176);

      if (hungerBar.need > 150) {
        image(babyHappy, 368, 575, 55, 36);
      } else {
        image(babySad, 368, 573, 60, 39);
        image(hungry, 370, 400, 120, 130);
        fill(140, 98, 57);
        ellipse(400, 870, 15, 15);
        noFill();
      }

      if (thirstBar.need < 140) {
        image(thirsty, 160, 450, 140, 120);
        fill(41, 171, 226);
        ellipse(250, 870, 15, 15);
        noFill();
      }

      if (attentionBar.need < 70) {
        image(bored, 470, 430, 140, 120);
        fill(100, 100, 100);
        ellipse(550, 870, 15, 15);
        noFill();
      }
    }
  }

  child() {
    //CHILD

    if (developmentCounter > 15 && developmentCounter <= 25) {
      image(child, 30, 390, 506, 322);

      if (hungerBar.need > 150) {
        image(childHappy, 337, 447, 123, 86);
      } else {
        image(childSad, 337, 447, 123, 86);
        image(hungry, 370, 200, 120, 130);

        fill(140, 98, 57);
        ellipse(400, 870, 15, 15);
        noFill();
      }

      if (thirstBar.need < 140) {
        image(thirsty, 160, 250, 140, 120);

        fill(41, 171, 226);
        ellipse(250, 870, 15, 15);
        noFill();
      }

      if (attentionBar.need < 70) {
        image(bored, 470, 230, 140, 120);

        fill(100, 100, 100);
        ellipse(550, 870, 15, 15);
        noFill();
      }
    }
  }

  youth() {
    //YOUTH

    if (developmentCounter > 25) {
      image(youth, 235, 200, 352, 518);

      if (hungerBar.need > 150) {
        image(youthHappy, 340, 240, 112, 141);
      } else if (hungerBar.need > 70 && hungerBar.need < 150) {
        image(youthSad, 340, 240, 112, 136);
        image(hungry, 340, 50, 120, 130);

        fill(140, 98, 57);
        ellipse(400, 870, 15, 15);
        noFill();
      } else if (hungerBar.need < 70) {
        image(youthAngry, 340, 245, 112, 156);
        fill(140, 98, 57);
        ellipse(400, 870, 15, 15);
        noFill();
      }

      if (thirstBar.need < 140) {
        image(thirsty, 160, 90, 140, 120);

        fill(41, 171, 226);
        ellipse(250, 870, 15, 15);
        noFill();
      }

      if (attentionBar.need < 70) {
        image(bored, 470, 100, 140, 120);

        fill(100, 100, 100);
        ellipse(550, 870, 15, 15);
        noFill();
      }
    }
  }

  display() {
    this.egg();
    this.baby();
    this.child();
    this.youth();
  }
}
