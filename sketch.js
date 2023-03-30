//importação de módulos e renomeação 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, towerImg;

var canvas, angle, tower, ground, cannon;

//var para criação de bola de canhão, prof
var cannonball;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImg = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  //conversão de ângulo
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);

  //Objeto Bola de canhão, prof
  cannonball = new CannonBall(cannon.x, cannon.y);

}

function draw() {
  background(189);

  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  //linha embaixo da imagem
  rect(ground.position.x, ground.position.y, width * 2, 1);


  push();
  imageMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();

  //exibir bola de canhão, prof
  cannonball.display();


}

//Criar função com o nome: keyReleased, para atirar bala, aluno

