
function setup() {
  createCanvas(1280,605);
}




function draw() 
{
  
  if(keyIsDown(DOWN_ARROW)){
    background("yellow");
  }
  if(keyIsDown(UP_ARROW)){
    background("blue");
  }
  if(keyIsDown(RIGHT_ARROW)){
    background("red");
  }
  if(keyIsDown(LEFT_ARROW)){
    background("green");
  }


}





