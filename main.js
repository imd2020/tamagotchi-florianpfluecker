background(255);
let hunger = 200;
let thirst = 200;
let attention = 200;
let counter = 0;

//class imports
import Button from "./Button.js";
import Parameter from "./Parameter.js";
import DevelopmentStages from "./DevelopmentStages.js";

//parameters
let Hunger = new Parameter(500, 10, 200, 25, 180, 100, 0);
let Thirst = new Parameter(500, 40, 200, 25, 0, 180, 0);
let Attention = new Parameter(500, 70, 200, 25, 0, 105, 105);

//buttons
let FeedButton = new Button(350, 800, 100, 50, "feed", 150, 150, 150);
let AttentionButton = new Button(500, 800, 100, 50, "attention", 150, 150, 150);
let WaterButton = new Button(200, 800, 100, 50, "water", 150, 150, 150);

function draw() {
  Hunger.display();
  Thirst.display();
  Attention.display();
  FeedButton.display();
  AttentionButton.display();
  WaterButton.display();
  image(youth, 300, 100, 352, 518);
  image(youthHappy, 405, 140, 112, 141);
}

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
