var moving, fixed

function setup() {
  createCanvas(800,400);
 fixed= createSprite(400, 200, 60, 40);     //30
 moving=createSprite(500,200,40,60);        //20

 fixed.shapeColor="green"
 moving.shapeColor="green"

 fixed.debug=true
 moving.debug=true
}

function draw() {
  background(0);  

  console.log(moving.x-fixed.x)

  moving.x=mouseX
  moving.y=mouseY


  if(moving.x-fixed.x<moving.width/2+fixed.width/2 && fixed.x-moving.x<fixed.width/2+moving.width/2){
    fixed.shapeColor="red"
    moving.shapeColor="red"
  }

  else{
    fixed.shapeColor="green"
 moving.shapeColor="green"
  }

  drawSprites();
}