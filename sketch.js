const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var man_image;
var ground;
var ground_options;
var maxDrops = 100;
var drops = [];
var thunder1, thunder2, thunder3, thunder4;
var umbrella;
var thunder, thunderCreatedFrame = 0;

function preload(){
  man_image = loadAnimation("Walking Frame/walking_8.png","Walking Frame/walking_7.png","Walking Frame/walking_6.png","Walking Frame/walking_5.png","Walking Frame/walking_4.png","Walking Frame/walking_3.png","Walking Frame/walking_2.png","Walking Frame/walking_1.png");
  thunder1 = loadImage("thunderbolt/1.png");
  thunder2 = loadImage("thunderbolt/2.png");
  thunder3 = loadImage("thunderbolt/3.png");
  thunder4 = loadImage("thunderbolt/4.png")
}

function setup(){
  var canvas = createCanvas(400,500);

  engine = Engine.create();
  world  = engine.world;

  man = createSprite(80,380);
  man.addAnimation("man",man_image);
  man.scale = 0.3;

  ground = createSprite(200,490,400,20);

  umbrella = new Umbrella();

  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400),3,10));
     }
   }
}

function draw(){

  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount %80 === 0){
    thunderCreatedFrame = frameCount;
   thunder = createSprite(random(10,370),random(10,30),10,10);

   switch(rand){
     case 1 : thunder.addImage(thunder1);
     thunder.scale = 0.5;
     break;
     case 2 : thunder.addImage(thunder2);
     thunder.scale = 0.5;
     break;
     case 3 : thunder.addImage(thunder3);
     thunder.scale = 0.5;
     break;
     case 4 : thunder.addImage(thunder4);
     thunder.scale = 0.5;
     break;
     default : break;
   }
  }
  
  if(thunderCreatedFrame + 20 === frameCount && thunder){
    thunder.destroy();
 }
  
  for(var i=0; i<maxDrops;i++){

    drops[i].display();
    drops[i].update();
  }
 
  drawSprites();
}