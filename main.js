let hunger = 200;
let thirst = 200;
let attention = 200;
let developmentCounter = 0;
let mood = "neutral";
let gameState = "startScreen";

//class imports
import Rectangle from "./Rectangle.js";
import Button from "./Button.js";
import Parameter from "./Parameter.js";
import DevelopmentStages from "./DevelopmentStages.js";

//parameters

let thirstBar = new Parameter(530, 40, 200, 25, 41, 171, 226, 200);
let hungerBar = new Parameter(530, 80, 200, 25, 140, 98, 57, 200);
let attentionBar = new Parameter(530, 120, 200, 25, 100, 100, 100, 200);
let warmBar = new Parameter(300, 400, 200, 25, 255, 0, 0, 0);

//buttons
let feedButton = new Button(350, 800, 100, 50, "feed", 150, 150, 150);
let attentionButton = new Button(500, 800, 100, 50, "attention", 150, 150, 150);
let waterButton = new Button(200, 800, 100, 50, "water", 150, 150, 150);
let startButton = new Button(300, 600, 200, 70, "start game", 150, 150, 150);
let warmButton = new Button(350, 800, 100, 50, "warm", 150, 150, 150);

//drawings PNGs
let development = new DevelopmentStages();

//functions

function mouseClicked() {
  if (feedButton.hitTest() && hungerBar.need <= 150) {
    mood = "happy";
    developmentCounter = developmentCounter + 1;
    hungerBar.need = hungerBar.need + 50;
  }

  if (waterButton.hitTest() && thirstBar.need <= 140) {
    mood = "sad";
    developmentCounter = developmentCounter + 1;
    thirstBar.need = thirstBar.need + 60;
  }

  if (attentionButton.hitTest() && attentionBar.need <= 70) {
    mood = "normal";
    developmentCounter = developmentCounter + 1;
    attentionBar.need = attentionBar.need + 130;
  }

  if (startButton.hitTest()) {
    gameState = "game";
    console.log("works");
  }

  if (warmButton.hitTest() && developmentCounter <= 6) {
    developmentCounter = developmentCounter + 1;
    warmBar.need = warmBar.need + random(20, 40);
  }
}

function draw() {
  //startSCreen
  if (gameState === "startScreen") {
    rect(0, 0, 800, 900, 50);
    startButton.display();
  }

  //gameScreen
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
    }

    development.display();
    if (developmentCounter <= 6) {
      warmButton.display();
    }
    if (developmentCounter > 6) {
      feedButton.display();
      attentionButton.display();
      waterButton.display();
    }
  }

  //logs----------

  //console.log(developmentCounter);
  //console.log(hunger);
  //console.log(hungerBar.need);
  //console.log(thirstBar.need);
  //console.log(attentionBar.need);
}

//PNGs
//_______________________________________________________
//YOUTH
youth = loadImage("./CC_T_YouthBody.png");
youthAngry = loadImage("./CC_T_YouthBody-AngryEYES.png");
youthHappy = loadImage("CC_T_YouthBody-HappyEYES.png");
youthSad = loadImage("CC_T_YouthBody-SadEYES.png");
//CHILD
child = loadImage("CC_T_ChildBody.png");
childSad = loadImage("CC_T_ChildBody-SADEyes.png");
childHappy = loadImage("CC_T_ChildBody-HappyEYES.png");
//BABY
baby = loadImage("CC_T_ BabyBody.png");
babyHappy = loadImage("CC_T_BabyBody-EyesHAPPY.png");
babySad = loadImage("CC_T_BabyBody-EyesSAD.png");
//EGG
egg = loadImage("CC_T_Egg.png");
eggCrack = loadImage("CC_T_Egg-Crack.png ");
eggCracked = loadImage("CC_T_Egg-Cracked.png");
//EMOTIONS
hungry = loadImage("hungry.png");
thirsty = loadImage("thirst.png");
bored = loadImage("bored.png");

image(hungry, 100, 100, 120, 130);
image(thirsty, 300, 100, 140, 120);
image(bored, 450, 100, 140, 120);
