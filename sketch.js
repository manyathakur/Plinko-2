const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var go = [];
var stop = [];
var score = 0;
var particle;
var turn = 0;
var play = 0;
var end = 2;
var gameState = play; 

function setup() {
  createCanvas(600,800);
  
  engine = Engine.create();
  world = engine.world;

  plat = new ground();
  wall1 = new divide(0,550,5,800);
  wall2 = new divide(100,550,5,100);
  wall3 = new divide(200,550,5,100);
  wall4 = new divide(150,600,100,5);
  wall5 = new divide(300,550,5,400);
  wall6 = new divide(400,550,5,400);
  wall7 = new divide(500,550,5,400);
  wall8 = new divide(600,550,5,800);
  wall9 = new divide(580,550,40,5);
  
  for(var i = 50;i < 550;i = i+40){
    stop.push(new plink(i,100));
  }
  for(var k = 70;k < 530;k = k+40){
    stop.push(new plink(k,150));
  }
  for(var  j = 80;j < 520;j = j+40){
    stop.push(new plink(j,200));
  }
  for(var l = 20;l < 580;l = l+40){
    stop.push(new plink(l,300));
  }

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background("black");  

  plat.display();

  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();
  wall5.show();
  wall6.show();
  wall7.show();
  wall8.show();
  wall9.show();

  for(var t = 0;t < stop.length;t++){
    stop[t].sell();
  }
 
  if(frameCount % 30 === 0){
    go.push(particle = new fall(random(60,540),0));

    if(particle.body.position.x > 0 && particle.body.position.x < 300 && particle.body.position.y > 450){
      score = score + 150;
      particle = null;
    }
    if(particle.body.position.x > 300 && particle.body.position.x < 400 && particle.body.position.y > 450){
      score = score + 100;
      particle = null
    }
     if(particle.body.position.x > 400 && particle.body.position.x < 500 && particle.body.position.y > 450){
      score = score + 300;
      particle =  null;
    }
  }
  
  for(var f = 0;f < go.length;f++){
    go[f].make();
  }
  
  text(" score " +score,500,20);
  text("150",140,630);
  text("150",140,550);
  text("100",340,550);
  text("200",440,550);
  text("300",540,600);

  

    
  console.log(go);

  if(turn >= 10){
    gameState = end;
  }
  if(gameState === end){
    textSize(100);
    text("GAME OVER",250,400);
  }
}