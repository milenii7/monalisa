function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("pink");
  fill("#9E9E9E");
  circle(200,200,300);
  fill("#EEE3E3");
  circle(150,150,80);
  circle(250,150,80);
  line(118,261,268,260);
  fill("rgb(182,182,202)");
  triangle(193,196,217,220,169,221);

  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 10); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); //nova pupila direita
  if (mouseIsPressed) {
  
     }
}