window.developmentCounter = 0;
let gameState = "startScreen";

//PNGs
let images = {
  iyouth: loadImage("./images/CC_T_YouthBody.png"),
  youthAngry: loadImage("./images/CC_T_YouthBody-AngryEYES.png"),
  youthHappy: loadImage("./images/CC_T_YouthBody-HappyEYES.png"),
  youthSad: loadImage("./images/CC_T_YouthBody-SadEYES.png"),
  youthBloody: loadImage("./images/CC_T_YouthBody-Bloody.png"),
  //CHILD
  ichild: loadImage("./images/CC_T_ChildBody.png"),
  childSad: loadImage("./images/CC_T_ChildBody-SADEyes.png"),
  childHappy: loadImage("./images/CC_T_ChildBody-HappyEYES.png"),
  //BABY
  ibaby: loadImage("./images/CC_T_ BabyBody.png"),
  babyHappy: loadImage("./images/CC_T_BabyBody-EyesHAPPY.png"),
  babySad: loadImage("./images/CC_T_BabyBody-EyesSAD.png"),
  //EGG
  iegg: loadImage("./images/CC_T_Egg.png"),
  eggCrack: loadImage("./images/CC_T_Egg-Crack.png "),
  eggCracked: loadImage("./images/CC_T_Egg-Cracked.png"),
  //EMOTIONS
  hungry: loadImage("./images/hungry.png"),
  thirsty: loadImage("./images/thirst.png"),
  bored: loadImage("./images/bored.png"),

  //LOGOS
  logo: loadImage("./images/logo.png"),
  candle: loadImage("./images/candle.png"),
  foot: loadImage("./images/foot.png"),
  slogan: loadImage("./images/Slogan.png"),
};

//class imports
import Rectangle from "./classes/Rectangle.js";
import Button from "./classes//Button.js";
import Parameter from "./classes//Parameter.js";
import DevelopmentStages from "./classes//DevelopmentStages.js";

//parameters

// unsauberes Prgrammieren wurde abgesprochen (window.)
window.thirstBar = new Parameter(530, 40, 200, 25, 41, 171, 226, 120);
window.hungerBar = new Parameter(530, 80, 200, 25, 140, 98, 57, 170);
window.attentionBar = new Parameter(530, 120, 200, 25, 50, 50, 50, 200);
let warmBar = new Parameter(300, 400, 200, 25, 255, 0, 0, 0);

//buttons
let feedButton = new Button(350, 850, 100, 50, "feed", 150, 150, 150);
let attentionButton = new Button(500, 850, 100, 50, "attention", 150, 150, 150);
let waterButton = new Button(200, 850, 100, 50, "water", 150, 150, 150);
let startButton = new Button(290, 650, 220, 60, "start game", 150, 150, 150);
let nextButton = new Button(310, 840, 180, 60, "next", 150, 150, 150);
let warmButton = new Button(350, 800, 100, 50, "warm", 150, 150, 150);
let restartButton = new Button(310, 770, 180, 60, "restart", 150, 150, 150);

//drawings PNGs
let development = new DevelopmentStages(images);

function mouseClicked() {
  if (feedButton.hitTest() && hungerBar.need <= 150) {
    developmentCounter = developmentCounter + 1;
    hungerBar.need = hungerBar.need + 50;
  }

  if (waterButton.hitTest() && thirstBar.need <= 140) {
    developmentCounter = developmentCounter + 1;
    thirstBar.need = thirstBar.need + 60;
  }

  if (attentionButton.hitTest() && attentionBar.need <= 70) {
    developmentCounter = developmentCounter + 1;
    attentionBar.need = attentionBar.need + 130;
  }

  if (startButton.hitTest() && gameState === "startScreen") {
    gameState = "introScreen";
    console.log("works");
  }

  if (nextButton.hitTest() && gameState === "introScreen") {
    gameState = "game";
    console.log("works");
  }

  if (warmButton.hitTest() && developmentCounter <= 6 && gameState === "game") {
    developmentCounter = developmentCounter + 1;
    warmBar.need = warmBar.need + 30;
  }

  if (restartButton.hitTest() && gameState === "endScreenYouth") {
    developmentCounter = 0;
    hungerBar.need = 120;
    thirstBar.need = 170;
    attentionBar.need = 200;
    gameState = "startScreen";
  }

  if (restartButton.hitTest() && gameState === "endScreen") {
    developmentCounter = 0;
    hungerBar.need = 200;
    thirstBar.need = 200;
    attentionBar.need = 200;
    warmBar.need = 0;
    gameState = "startScreen";
  }
}

//functions
function startScreen() {
  fill(183, 170, 138);
  if (gameState === "startScreen") {
    rect(0, 0, 800, 900, 50);
    image(images.foot, 100, 650, 100, 100);
    image(images.foot, 140, 800, 100, 100);
    image(images.foot, 300, 570, 100, 100);
    image(images.foot, 280, 365, 100, 100);

    image(images.foot, 500, 350, 100, 100);
    image(images.foot, 450, 140, 100, 100);
    image(images.foot, 650, 120, 100, 100);
    startButton.display();
    image(images.slogan, 55, 270, 700, 450);
    //animation1();
  }
}

// function animation1(){
//   gsap.to(images.slogan, duration: 4,x: 25, ease: "bounce",
//   onComplete(): => {
//     animation2();
//   })
// }

// function animation2(){
//   gsap.to(images.slogan, duration: 4,x: 75, ease: "bounce",
//   onComplete(): => {
//     animation1();
//   })
// }

function introScreen() {
  if (gameState === "introScreen") {
    rect(0, 0, 800, 900, 50);
    fill(255);
    textSize(25);
    text("please take care of the Dinosaur", 400, 400);
    text("he will ask for water, food or attention...", 400, 435);
    text("dont forget to feed him!", 400, 470);
    nextButton.display();
    gsap.to(nextButton, { duration: 1, x: 310, y: 650, ease: "easeOut" });
  }
}

function endScreenYouth() {
  if (gameState === "endScreenYouth") {
    fill(105);
    rect(0, 0, 800, 900, 50);
    fill(0);
    textSize(45);
    text("YOU LOST!", 400, 140);
    textSize(25);
    text("the dinosaur ate you instead", 400, 180);
    image(images.youthBloody, 235, 200, 352, 518);
    restartButton.display();
  }
}

function endScreen() {
  if (gameState === "endScreen") {
    fill(105);
    rect(0, 0, 800, 900, 50);
    fill(0);
    textSize(45);
    text("YOU LOST!", 400, 340);
    textSize(25);
    text("the dinosaur died...", 400, 380);
    fill(0);
    ellipse(400, 700, 300, 60);
    image(images.candle, 352, 515, 100, 200);
    restartButton.display();
  }
}

function draw() {
  startScreen();
  introScreen();
  //game ! function !
  if (gameState === "game") {
    rect(0, 0, 800, 900, 50);
    fill(130);
    ellipse(400, 700, 300, 60);
    //parameter calc
    if (developmentCounter <= 6) {
      warmBar.display();
    }

    if (developmentCounter > 6) {
      hungerBar.display();
      hungerBar.need = hungerBar.need - 0.05;
      thirstBar.display();
      thirstBar.need = thirstBar.need - 0.08;
      attentionBar.display();
      attentionBar.need = attentionBar.need - 0.1;
      fill(80);
      text("hunger", 475, 100);
      text("thirst", 467, 60);
      text("attention", 481, 140);
    }

    development.display();
    if (developmentCounter <= 6) {
      warmButton.display();
      gsap.to(warmButton, { duration: 1, x: 350, y: 750, ease: "easeOut" });
    }

    if (developmentCounter > 6) {
      feedButton.display();
      gsap.to(feedButton, { duration: 1, x: 350, y: 770, ease: "easeOut" });

      attentionButton.display();
      gsap.to(attentionButton, {
        duration: 1,
        x: 500,
        y: 770,
        ease: "easeOut",
      });

      waterButton.display();
      gsap.to(waterButton, { duration: 1, x: 200, y: 770, ease: "easeOut" });
    }

    if (
      hungerBar.need <= 10 ||
      thirstBar.need <= 10 ||
      (attentionBar.need <= 10 && developmentCounter > 25)
    ) {
      gameState = "endScreenYouth";
    }

    if (
      hungerBar.need <= 10 ||
      thirstBar.need <= 10 ||
      (attentionBar.need <= 10 && developmentCounter <= 25)
    ) {
      gameState = "endScreen";
    }

    endScreenYouth();
    endScreen();
  }
  //console.log(gameState);
  //console.log(developmentCounter);
  //console.log(hunger);
  //console.log(hungerBar.need);
  //.log(thirstBar.need);
  //console.log(attentionBar.need);
}

window.mouseClicked = mouseClicked;
window.draw = draw;
