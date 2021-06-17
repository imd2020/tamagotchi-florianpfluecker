let hunger = 200;
let thirst = 200;
let attention = 200;
let developmentCounter = 0;
let mood = "neutral";
let gameState = "startScreen";

//class imports
import Button from "./Button.js";
import Parameter from "./Parameter.js";
import DevelopmentStages from "./DevelopmentStages.js";

//parameters

let thirstBar = new Parameter(500, 10, 200, 25, 0, 180, 0, 200);
let hungerBar = new Parameter(500, 40, 200, 25, 180, 100, 0, 200);
let attentionBar = new Parameter(500, 70, 200, 25, 0, 105, 105, 200);
let warmBar = new Parameter(300, 400, 200, 25, 255, 0, 0, 0);

//buttons
let feedButton = new Button(350, 800, 100, 50, "Feed", 150, 150, 150);
let attentionButton = new Button(500, 800, 100, 50, "Attention", 150, 150, 150);
let waterButton = new Button(200, 800, 100, 50, "Water", 150, 150, 150);
let startButton = new Button(300, 600, 200, 70, "start game", 150, 150, 150);
let warmButton = new Button(350, 800, 100, 50, "Warm", 150, 150, 150);

//drawings PNGs
let development = new DevelopmentStages();

//functions

function mouseClicked() {
  if (feedButton.hitTest() && hungerBar.need <= 150) {
    mood = "happy";
    developmentCounter = developmentCounter + 1;
    hungerBar.need = hungerBar.need + 50;
  }

  if (waterButton.hitTest() && thirstBar.need <= 120) {
    mood = "sad";
    developmentCounter = developmentCounter + 1;
    thirstBar.need = thirstBar.need + 80;
  }

  if (attentionButton.hitTest() && attentionBar.need <= 100) {
    mood = "normal";
    developmentCounter = developmentCounter + 1;
    attentionBar.need = attentionBar.need + 100;
  }

  if (startButton.hitTest()) {
    gameState = "game";
    console.log("works");
  }

  if (warmButton.hitTest() && developmentCounter <= 6) {
    developmentCounter = developmentCounter + 1;
    warmBar.need = warmBar.need + 32;
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
  //console.log(gameState);
  //console.log(developmentCounter);
  //console.log(hunger);
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
