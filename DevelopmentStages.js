export default class DevelopmentStages {
  constructor(images) {
    this.iyouth = images.iyouth;
    this.youthAngry = images.youthAngry;
    this.youthHappy = images.youthHappy;
    this.youthSad = images.youthSad;
    this.youthBloody = images.youthBloody;
    this.ichild = images.ichild;
    this.childSad = images.childSad;
    this.childHappy = images.childHappy;
    this.ibaby = images.ibaby;
    this.babyHappy = images.babyHappy;
    this.babySad = images.babySad;
    this.eggCrack = images.eggCrack;
    this.eggCracked = images.eggCracked;
    this.hungry = images.hungry;
    this.thirsty = images.thirsty;
    this.bored = images.bored;
    this.logo = images.logo;
    this.candle = images.candle;
    this.foot = images.foot;
    this.iegg = images.iegg;
  }

  egg() {
    if (developmentCounter <= 2) {
      image(this.iegg, 330, 505, 141, 203);
    }

    if (developmentCounter >= 3 && developmentCounter <= 5) {
      image(this.eggCrack, 330, 505, 141, 203);
    }

    if (developmentCounter > 5 && developmentCounter <= 6) {
      image(this.eggCracked, 330, 505, 141, 203);
    }
  }

  baby() {
    //BABY

    if (developmentCounter > 6 && developmentCounter <= 15) {
      image(this.ibaby, 210, 540, 385, 176);

      //

      if (hungerBar.need > 150) {
        image(this.babyHappy, 368, 575, 55, 36);
      } else {
        image(this.babySad, 368, 573, 60, 39);
        image(this.hungry, 370, 400, 120, 130);
        fill(140, 98, 57);
        ellipse(400, 870, 15, 15);
        noFill();
      }

      if (thirstBar.need < 140) {
        image(this.thirsty, 160, 450, 140, 120);
        fill(41, 171, 226);
        ellipse(250, 870, 15, 15);
        noFill();
      }

      if (attentionBar.need < 70) {
        image(this.bored, 470, 430, 140, 120);
        fill(50);
        ellipse(550, 870, 15, 15);
        noFill();
      }
    }
  }

  child() {
    //CHILD

    if (developmentCounter > 15 && developmentCounter <= 25) {
      image(this.child, 30, 390, 506, 322);

      if (hungerBar.need > 150) {
        image(this.childHappy, 337, 447, 123, 86);
      } else {
        image(this.childSad, 337, 447, 123, 86);
        image(this.hungry, 370, 200, 120, 130);

        fill(140, 98, 57);
        ellipse(400, 870, 15, 15);
        noFill();
      }

      if (thirstBar.need < 140) {
        image(this.thirsty, 160, 250, 140, 120);

        fill(41, 171, 226);
        ellipse(250, 870, 15, 15);
        noFill();
      }

      if (attentionBar.need < 70) {
        image(this.bored, 470, 230, 140, 120);

        fill(50);
        ellipse(550, 870, 15, 15);
        noFill();
      }
    }
  }

  youth() {
    //YOUTH

    if (developmentCounter > 25) {
      image(this.iyouth, 235, 200, 352, 518);

      if (hungerBar.need > 150) {
        image(this.youthHappy, 340, 240, 112, 141);
      } else if (hungerBar.need > 70 && hungerBar.need < 150) {
        image(this.youthSad, 340, 240, 112, 136);
        image(this.hungry, 340, 50, 120, 130);

        fill(140, 98, 57);
        ellipse(400, 870, 15, 15);
        noFill();
      } else if (hungerBar.need < 70) {
        image(this.youthAngry, 340, 245, 112, 156);
        fill(140, 98, 57);
        ellipse(400, 870, 15, 15);
        noFill();
      }

      if (thirstBar.need < 140) {
        image(this.thirsty, 160, 90, 140, 120);

        fill(41, 171, 226);
        ellipse(250, 870, 15, 15);
        noFill();
      }

      if (attentionBar.need < 70) {
        image(this.bored, 500, 160, 140, 120);

        fill(50);
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
