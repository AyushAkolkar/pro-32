const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;

var score=0;

var dt="day.jpg";
var nt="night.jpg";
var backgroundImg;

function preload(){
  polygonImg=loadImage("polygon.png");
  backgroundImg = loadImage("day.jpg");
}
function setup() {
  var canvas = createCanvas(1200,700);
  engine = Engine.create();
  
  world = engine.world;
  //first line
  box1=new Box(460,480,20,20); 
  box4=new Box(490,480,20,20);
  box11=new Box(520,480,20,20);
  box12=new Box(550,480,20,20);
  box13=new Box(580,480,20,20);
  box14=new Box(610,480,20,20);
  box15=new Box(640,480,20,20);
  //second line
  box16=new Box(490,440,20,20);
  box17=new Box(520,440,20,20);
  box18=new Box(550,440,20,20);
  box19=new Box(580,440,20,20);
  box21=new Box(610,440,20,20);
  //third line
  box20=new Box(520,400,20,20);
  box22=new Box(550,400,20,20);
  box23=new Box(580,400,20,20);
  //fourth line
   box24=new Box(550,360,20,20);
  //first line on second stage
  box25=new Box(720,275,40,30);
  box26=new Box(750,275,40,30);
  box27=new Box(780,275,40,30);
  box28=new Box(810,275,40,30);
  box29=new Box(840,275,40,30);
  box30=new Box(870,275,40,30);
  //second line
  box31=new Box(750,238,40,30);
  box32=new Box(780,238,20,20);
  box33=new Box(810,238,20,20);
  box34=new Box(840,238,20,20);
  //third line
  box35=new Box(780,200,40,30);
  box36=new Box(810,200,40,30);
  //fourth line
  box37=new Box(795,160,20,20);
  //Grounds
  ground1=new Ground(600,690,1200,20);
  ground2=new Ground(550,505,250,20);
  ground3=new Ground(800,305,250,20);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,500,20,options);
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:200,y:400});
}
function draw() {
  background("black"); 
 
  
  fill("white")
  textSize(35)
  fill("white")
  textSize(35)
  textStroke(4);
  text("Score:"+score.width-100,400);
  text("Press space to get 2nd chance,also use mouse to play",300,100);
  text("Drag hexagonal shape to launch ",150,300);
  
  Engine.update(engine);

  //text("score",100,400);
  console.log(score);
  fill(135,206,234);
  box1.display();
  box1.score();
  box4.display();
  box4.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box15.display();
  box15.score();
  box14.display();
  box14.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  fill("blue");
  box24.display();
  box24.score();
  box37.display();
  box37.score();
  fill("pink");
  box25.display();
  box25.score();
  box26.display();
  box26.score();
  box27.display();
  box27.score();
  box28.display();
  box28.score();
  box29.display();
  box29.score();
  box30.display();
  bo30.score();
  box31.display();
  box31.score();
  box32.display();
  box32.score();
  box33.display();
  box33.score();
  box34.display();
  box34.score();
  box35.display();
  box35.score();
  box36.display();
  box36.score();
  chain1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}
function keyPressed(){
  if(keyCode === 32){
      chain1.attach(this.polygon);
  }
  
}
function getTime(){
var api=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
var json=await api.json()
var dateTime=json.datetime
var time=dateTime.slice(11,13);
if(time>06&&time<14){
dt="day.jpg"
}
else{
nt="night.jpg"
}
backgroundImg=loadImage(bg)
console.log(json)

}