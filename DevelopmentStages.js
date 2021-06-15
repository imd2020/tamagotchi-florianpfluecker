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
    }

    //happy
    if (developmentCounter > 6 && developmentCounter <= 9 && hunger > 120) {
      image(babyHappy, 368, 575, 55, 36);
    }

    //sad
    if (developmentCounter > 6 && developmentCounter <= 9 && hunger <= 120) {
      image(babySad, 368, 573, 60, 39);
    }
  }

  child() {
    //CHILD

    if (developmentCounter > 9 && developmentCounter <= 15) {
      image(child, 30, 390, 506, 322);
    }

    //happy
    if (developmentCounter > 9 && developmentCounter <= 15) {
      //image(childHappy, 307, 447, 123, 86);
    }

    //sad
    if (developmentCounter > 9 && developmentCounter <= 15) {
      //image(childSad, 307, 447, 123, 86);
    }
  }

  youth() {
    //YOUTH

    if (developmentCounter > 15) {
      image(youth, 235, 200, 352, 518);
    }

    if (developmentCounter > 15) {
      image(youthHappy, 340, 240, 112, 141);
    }

    if (developmentCounter > 15) {
      //image(youthSad, 340, 240, 112, 136);
    }

    if (developmentCounter > 15) {
      //image(youthAngry, 340, 245, 112, 156);
    }
  }

  display() {
    this.egg();
    this.baby();
    this.child();
    this.youth();
  }
}
