//Variables
let xBall = 300;
let yBall = 200;
let dBall = 22;
let radius = dBall / 2 ;
let xTable = 5;
let yTable = 150
let speedyenemie;
let hit = false
let ab = 0

//sounds
let st;
let clashsword;
let rapaz;

function preload(){
  st = loadSound("OST.mp3");
  clashsword = loadSound("clashsword.mp3");
  rapaz = loadSound("rapaz.mp3");
  st.setVolume(0.01)
  clashsword.setVolume(0.02)
  rapaz.setVolume(0.05)  
}


//Oponent variables
let xTablenemie = 585
let yTablenemie = 150

//speed of the ball
let speedXBall = 6;
let speedYBall = 6;

//tablemed
let tablewidht = 7;
let tableheight = 80;

//points
let mypoints = 0
let enemiepoints = 0


//Background
function setup() {
  createCanvas(600, 400);
  st.loop();
  
}
//showcase
function draw() {
  background(0);
  showball();
  movimentball();
  physx(); 
  table(xTable, yTable);
  momentationtable();
  tablenemie(xTablenemie,yTablenemie);
  movenemietable();
  colisionlibrarie(xTable, yTable);
  colisionlibrarie(xTablenemie, yTablenemie);
  showpoints();
  points();
  
  
}
//Balldefinition
function showball(){
  circle (xBall, yBall, dBall);
}

//Moviment
function movimentball() {  
  xBall += speedXBall;
  yBall += speedYBall;
}

//Physx
function physx(){  
  if (xBall + radius > width || xBall - radius < 0) {
    speedXBall *= -1;
     }
  if (yBall + radius > height || yBall- radius < 0){
    speedYBall *= -1;
  }
}

//Table
function table(x, y){
  rect(x, y, tablewidht, tableheight);
}

function tablenemie(){
  rect(xTablenemie, yTablenemie, tablewidht, tableheight);
}

// movimentation
function momentationtable(){
  if (keyIsDown(UP_ARROW)){
    yTable -= 10
}
  if (keyIsDown(DOWN_ARROW)){
    yTable += 10}
}

// EnemieMoviment
function movenemietable(){
  speedyenemie = yBall - yTablenemie - tablewidht /2 - ab;
  yTablenemie += speedyenemie;
} 
function colisionlibrarie(x , y){
  hit =
  collideRectCircle(x, y, tablewidht,tableheight, xBall, yBall, radius);
  if (hit){
    speedXBall *= -1;
    clashsword.play();
  }
  if(xBall<22 && xBall>16){
      ab = parseInt((Math.random() * (110 - 80 + 85).toFixed(0)));} 
}
function showpoints(){
  stroke(255)
  textSize(18);
  textAlign(CENTER);
  fill(color (255,0,0));
  rect(150, 10,40,20);
  fill(255);
  text(mypoints, 170, 26);
  fill(color (255,0,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(enemiepoints,470, 26);
}

function points(){
  if (xBall> 590){
    mypoints+=1;
    rapaz.play();
  }
  if (xBall < 12){
    enemiepoints+=1;
    rapaz.play();
  }  
}


 



