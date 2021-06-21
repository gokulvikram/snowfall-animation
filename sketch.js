const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var backGroundImage

function preload(){

backGroundImage = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(900,900);
  engine = Engine.create();
  world = engine.world;
  
  snow1 = new Snow(200,60)
  snow2 = new Snow(300,70)
  snow3 = new Snow(400,80)
  snow4 = new Snow(500,90)
  snow5 = new Snow(600,500)
  snow6 = new Snow(700,600)
  snow7 = new Snow(800,700)
  snow8 = new Snow(900,10)
  snow9 = new Snow(100,150)
  snow10 = new Snow(250,250)
  snow11 = new Snow(350,350)
  snow12 = new Snow(450,450)
  snow13 = new Snow(650,550)
  snow14 = new Snow(750,650)
  snow15 = new Snow(850,750)
  snow16 = new Snow(950,850)
  snow17 = new Snow(150,50)
}

function draw() {
  background(backGroundImage); 
  Engine.update(engine);

  
  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()
  snow6.display()
  snow7.display()
  snow8.display()
  snow9.display()
  snow10.display()
  

}