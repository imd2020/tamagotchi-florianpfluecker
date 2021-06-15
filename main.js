let hunger = 200;
let thirst = 200;
let attention = 200;
let developmentCounter = 0;
let mood = "neutral";
let gameState = "startScreen";

//functions

//class imports
import Button from "./Button.js";
import Parameter from "./Parameter.js";
import DevelopmentStages from "./DevelopmentStages.js";

//parameters
let hungerBar = new Parameter(500, 10, 200, 25, 180, 100, 0);
let thirstBar = new Parameter(500, 40, 200, 25, 0, 180, 0);
let attentionBar = new Parameter(500, 70, 200, 25, 0, 105, 105);

//buttons
let feedButton = new Button(350, 800, 100, 50, "Feed", 150, 150, 150);
let attentionButton = new Button(500, 800, 100, 50, "Attention", 150, 150, 150);
let waterButton = new Button(200, 800, 100, 50, "Water", 150, 150, 150);
let startButton = new Button(300, 600, 200, 70, "start game", 150, 150, 150);
let warmButton = new Button(350, 800, 100, 50, "Warm", 150, 150, 150);

//drawings 7 PNGs
let development = new DevelopmentStages();

function mouseClicked() {
  if (feedButton.hitTest() && hunger <= 150) {
    mood = "happy";
    developmentCounter = developmentCounter + 1;
    hunger = hunger + 50;
    //hunger variable auffüllen
  }

  if (attentionButton.hitTest()) {
    mood = "normal";
    developmentCounter = developmentCounter + 1;
    //attention variable auffüllen
  }

  if (waterButton.hitTest()) {
    mood = "sad";
    developmentCounter = developmentCounter + 1;
    //thirst variable auffüllen
  }

  if (startButton.hitTest()) {
    gameState = "game";
    console.log("works");
  }

  if (warmButton.hitTest() && developmentCounter <= 6) {
    developmentCounter = developmentCounter + 1;
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

    hungerBar.display();
    thirstBar.display();
    attentionBar.display();
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
  console.log(developmentCounter);
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
