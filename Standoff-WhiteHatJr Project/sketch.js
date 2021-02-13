var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var player1a,player2a,player3a,player4a,player5a;

var player1b,player2b,player3b,player4b,player5b;

var player1apng,player2apng,player3apng,player4apng,player5apng,player1bpng,player2bpng,player3bpng,player4bpng,player5bpng;




function preload(){
  player1apng.loadImage('../images/Player1.png');
  player2apng.loadImage('../images/Player2.png');
  player3apng.loadImage('../images/Player3.png');
  player4apng.loadImage('../images/Player4.png');
  player5apng.loadImage('../images/Player5.png');
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  
  game = new Game();
  
  game.getState();
  game.load();
  game.play();
}


function draw(){
  if(playerCount === 10){
    game.update(1);
  }
if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 3){
    game.end();
  }

if(player1a||player2a||player3a||player4a||player5a){
    gameState===1;
  }
if(player1b||player2b||player3b||player4b||player5b){

    gameState===2;
  }

  if(gameState===1||gameState===2){
    load();
  }
  if(gameState===1){
    aControls();
    aDestroy();
   }

   if(gameState===2){
    bControls();
    bDestroy();
   }
}



