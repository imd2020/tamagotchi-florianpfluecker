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

    if (developmentCounter > 6 && developmentCounter <= 9) {
      image(baby, 210, 540, 385, 176);

      if (hungerBar.need > 190) {
        image(babyHappy, 368, 575, 55, 36);
      } else {
        image(babySad, 368, 573, 60, 39);
        //thinkbubble img !
      }
    }
  }

  child() {
    //CHILD

    if (developmentCounter > 9 && developmentCounter <= 15) {
      image(child, 30, 390, 506, 322);

      if (hungerBar.need > 150) {
        image(childHappy, 337, 447, 123, 86);
      } else {
        image(childSad, 337, 447, 123, 86);
      }
    }
  }

  youth() {
    //YOUTH

    if (developmentCounter > 15) {
      image(youth, 235, 200, 352, 518);

      if (hungerBar.need > 150) {
        image(youthHappy, 340, 240, 112, 141);
      } else if (hungerBar.need > 70 && hungerBar.need < 150) {
        image(youthSad, 340, 240, 112, 136);
      } else if (hungerBar.need < 70) {
        image(youthAngry, 340, 245, 112, 156);
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
