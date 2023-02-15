var navioImg,navio,mar,marImg


function preload(){
navioImg = loadAnimation  ("ship-1.png" , "ship-2.png" ,"ship-3.png" ,"ship-4.png");

marImg = loadImage ("sea.png")

}

function setup(){
  createCanvas(1400,1000);
  
mar = createSprite(500,500,600,20)
mar.addImage(marImg);
mar.velocityX = -2;


if (mar.x < 0){
 mar,x =mar.width/2;
}

navio = createSprite(700,1060,20,50);
navio.addAnimation("navio" , navioImg);


}

function draw() {
  background("white");
    drawSprites();

 
}



































