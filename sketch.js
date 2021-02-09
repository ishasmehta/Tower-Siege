const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var polygon, polygon_img;

function preload(){
    polygon_img = loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    stand = new Ground(590,370,300,20);
    //level1
    block1 = new Box(500,340,30,40);
    block2 = new Box(530,340,30,40);
    block3 = new Box(560,340,30,40);
    block4 = new Box(590,340,30,40);
    block5 = new Box(620,340,30,40);
    block6 = new Box(650,340,30,40);
    block7 = new Box(680,340,30,40);
    //level2
    block8 = new Box(530,300,30,40);
    block9 = new Box(560,300,30,40);
    block10 = new Box(590,300,30,40);
    block11 = new Box(620,300,30,40);
    block12 = new Box(650,300,30,40);    
    //level3
    block13 = new Box(560,260,30,40);
    block14 = new Box(590,260,30,40);
    block15 = new Box(620,260,30,40);
    //level4
    block16 = new Box(590,220,30,40);

    var polygon_options = {
        density:1.5,
        restitution:0.5
    }
    polygon = Bodies.circle(50,200,20, polygon_options);
    World.add(world,polygon);

    slingShot = new SlingShot(polygon,{x:100,y:200});

}
function draw(){
    background(0);
    Engine.update(engine);

    stand.display();
    block1.display("pink");
    block2.display("pink");
    block3.display("pink");
    block4.display("pink");
    block5.display("pink");
    block6.display("pink");
    block7.display("pink");

    block8.display("yellow");
    block9.display("yellow");
    block10.display("yellow");
    block11.display("yellow");
    block12.display("yellow");

    block13.display("lightblue");
    block14.display("lightblue");
    block15.display("lightblue");

    block16.display("lightgreen");

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
