var ash,joey,young;
var position1,position2,position3;
var position4;
var map,sound1,sound2;
var sound3,sound4,map1;

function preload(){
  createCanvas(displayWidth - 20, displayHeight-30);
 position1 = loadImage("images/game.png"); 
 position2 = loadImage("images/game1.png");
 position3 = loadImage("images/game2.png");
 position4 = loadImage("images/game3.png");
 joey = loadImage("images/Joey (1).png");
 young = loadImage("images/joey.png");
 map = loadImage("images/pallettown.png");
// sound1 = loadSound("music.Pokemon Fire Red and Leaf Green - Pallet Town.mp3");
// sound2 = loadSound("music/Pokemon Fire Red and Leaf Green - Route 1.mp3");
// sound3 = loadSound("music/11 Battle!(Trainer Battle).mp3");
// sound4 = loadSound("music/19 Victory!(Wild Pokémon).mp3");
}

function setup(){
   ash = createSprite(202,201);
   ash.addImage(position1);
   ash.scale = 0.15;
   
  }
function draw(){
  background(map)
 //image(map,0,0);
 //image(map,0,0,0,0);

  drawSprites()
}