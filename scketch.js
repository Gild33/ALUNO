let cor;
let circulox; // horizontal
let circuloy; // vertical

function setup() {
  createCanvas(400, 400); // width x height

  background("pink");

  cor = "color(random(0,255),random(0,255),random(0,255))"
  circulox = [0, 0, 0];

  circuloy = [random(height), random(height), random(height)];
}
// circulox= 0,0,0
// circuloy= 300,150,50

function draw() {
  fill(cor);

  //console.log(circulox.lenght);
  for (let contador in circulox) {
    //console.log(contador);
    circle(circulox[contador], circuloy[contador], 50);
    circulox[contador] += random(0, 3);
    circuloy[contador] += random(-3, 3);
    if (circulox[contador] >= width) {
      circulox[contador] = 0;
      circuloy[contador] = random(height);
    }
  }
  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}