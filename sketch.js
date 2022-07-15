
var canvas;
var backgroundImage;
var bgImg;
var form;
var gameState;
var playerCount;
var car,car2,car3,car4;
var database;
var car1Img,car2Img,car3Img,car4Img;
var track;
var player;
var playerCount;
var allPlayers;
var cars =[];
var sel;
var background2;


function preload(){


  backgroundImage = loadImage("./assets/background.png");
background2 = loadImage("./assets/background3.png");


  track = loadImage("./assets/track.jpg");

  car1Img = loadImage("./assets/porsche.png");

  car2Img = loadImage("./assets/bmw.png");
}



function setup() {
   createCanvas(windowWidth, windowHeight);
  database = firebase.database();
game = new Game();
  game.getState();
  game.start();

 





}





function draw() {
  background(backgroundImage);  
 
  if (playerCount === 2) {
    game.update(1)

}

if (gameState === 1) {
  
  game.play();




}


}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

