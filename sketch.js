var canvas;
var music;
var blue,orange,purple,green,ball
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    
    canvas = createCanvas(800,600);
    edges=createEdgeSprites()
    //create 4 different surfaces
blue=createSprite(100,580,180,20)
blue.shapeColor="blue"

orange=createSprite(300,580,180,20)
orange.shapeColor="orange"

purple=createSprite(500,580,180,20)
purple.shapeColor="purple"

green=createSprite(700,580,180,20)
green.shapeColor="green"


    //create box sprite and give velocity
    ball=createSprite(random(20,750),0,20,20)
    ball.shapeColor="white"
    ball.velocityX=5
    ball.velocityY=5
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
ball.bounceOff(edges)
if(ball.isTouching(blue)){
    ball.bounceOff(blue)
    ball.shapeColor="blue"
}
if(ball.isTouching(orange)){
    ball.bounceOff(orange)
    ball.shapeColor="orange"
}
if(ball.isTouching(purple)){
    ball.bounceOff(purple)
    ball.shapeColor="purple"
}
if(ball.isTouching(green)){
    ball.bounceOff(green)
    ball.shapeColor="green"
}
drawSprites()
    //add condition to check if box touching surface and make it box
}
