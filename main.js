background(255);
let hunger = 200;
let thirst = 200;
let attention = 200;
let developmentCounter = 0;
let mood = "neutral";
let state = "neutral";

//class imports
import Button from "./Button.js";
import Parameter from "./Parameter.js";
import DevelopmentStages from "./DevelopmentStages.js";

//parameters
let hunger = new Parameter(500, 10, 200, 25, 180, 100, 0);
let thirst = new Parameter(500, 40, 200, 25, 0, 180, 0);
let attention = new Parameter(500, 70, 200, 25, 0, 105, 105);

//buttons
let feedButton = new Button(350, 800, 100, 50, "Feed", 150, 150, 150);
let attentionButton = new Button(500, 800, 100, 50, "Attention", 150, 150, 150);
let waterButton = new Button(200, 800, 100, 50, "Water", 150, 150, 150);
let development = new DevelopmentStages();

function mouseClicked() {
  if (FeedButton.hitTest()) {
    mood = "happy";
    developmentCounter = developmentCounter + 1;
    //hunger variable auffüllen
  }
  if (AttentionButton.hitTest()) {
    mood = "normal";
    developmentCounter = developmentCounter + 1;
    //attention variable auffüllen
  }
  if (WaterButton.hitTest()) {
    mood = "sad";
    developmentCounter = developmentCounter + 1;
    //thirst variable auffüllen
  }
}

function draw() {
  hunger.display();
  thirst.display();
  attention.display();
  feedButton.display();
  attentionButton.display();
  waterButton.display();
  development.display();

  //logs----------
  console.log(state);
  console.log(developmentCounter);
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
