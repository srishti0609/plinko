const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

var engine, world;
var ground;
var div;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
    ground=new Ground(230,780,500,10);
    div1 = new Division(70,590,10,370);
    div2= new Division(150,590,10,370);
    div3= new Division(0,590,10,370);
    div4= new Division(230,590,10,370);
    div5= new Division(320,590,10,370);
    div6= new Division(400,590,10,370);
    div7= new Division(480,590,10,370);

    for(var j=40;j<=innerWidth;j=j+50)
    {
      plinkos.push(new Plinko(j,75));
    }
    for(var j=15;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,175))
    }
    
}



function draw() {
  background(0,0,0);  
  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
 for(var k=0;k<particles.length;k++){
   particles[k].display();
 }
  
}