var roadImg, road;
var ratImg, rat, ratsGroup;
var cat, catImg;

function preload(){
    roadImg = loadImage("road.png");
    ratImg = loadImage("Rato.png");
    catImg = loadImage("Gato.png");
}

function setup() {
 createCanvas(600,600);
 road = createSprite(300,300);
 road.addImage("road",roadImg);
 road.velocityY = 1;

 ratsGroup = new Group();

 cat = createSprite(200,200,50,50);
 cat.scale = 0.3;
 cat.addImage("cat", catImg);
}

function draw() {
 background(0);
 if(road.y > 400){
    road.y = 300
 }

 if(keyDown("left_arrow")){
    cat.x = cat.x - 3;
 }

 if(keyDown("right_arrow")){
    cat.x = cat.x + 3;
 }

 if(keyDown("space")){
    cat.velocityY = -5;
 }

 cat.velocityY = cat.velocityY + 0.8

 if(ratsGroup.isTouching(cat)){
    cat.velocityY = 0; 
 }

 if(invisibleBlockGroup.isTouching(cat)) cat.y > 600; {
    cat.destroy();
    gameState = "end"
 }

    spawnRats();
    drawSprites();
 }


function spawnRats() {
    if(frameCount % 240 === 0) {
        var rat = createSprite(200, -50);
        rat.addImage(radImg);

        rat.x = Math.round(random(120,400));
        rat.velocityY = 1;

        cat.depth = rat.depth;
        cat.depth +=1;

        rat.lifetime = 800; 
        invisibleBlock.lifetime = 800; 

        ratsGroup.add(rat);
    }
}