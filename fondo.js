function setup() {
  var pro = createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  pro.parent('fondo');
  pro.position(0,0);
	pro.style('z-index',-1);
  for (var i = 0; i < 60; i++) {
    esf[i] = new Esferas();
  }
}
var esf = [];
function draw() {
  background(255,60);
  stroke(color(132, 31, 255));
  strokeWeight(4);
  for (var i = 0; i < esf.length; i++) {
    var circulo = esf[i];
    circulo.anime();
    for (var lineas of esf) {
      if (lineas != circulo) {
        if (colicion(circulo.pos, lineas.pos, circulo.radio)) {
          line(circulo.pos[0], circulo.pos[1], lineas.pos[0], lineas.pos[1]);
        }
      }
    }
  }
}
function colicion(posCir, posLin, radio) {
  var x = floor(posLin[0] - posCir[0]);
  var y = floor(posLin[1] - posCir[1]);
  var contacto = sqrt((x*x)+(y*y));
  radio = (radio/2) + 100;
  if (radio > contacto) {
    return true;
  }else {
    return false;
  }
}
class Esferas {
  constructor() {
    this.pos = [(random(25, width-25)),(random(25, height-25))];
    this.vel = [(1 < random(2)? -1: 1),(1 < random(2)? -1: 1)];
    this.grab = [0,(random(0.1, 0.3))];
    this.paint = color(132, 31, 255);
    this.radio = 25;
  }
  anime(){
    fill(this.paint);
    ellipse(this.pos[0], this.pos[1], this.radio, this.radio);
    this.vel[0] += this.grab[0];
    this.vel[1] += this.grab[1];
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.pos[0] > width-(this.radio/2)) {
      this.vel[0] *= -1;
      this.pos[0] = width-(this.radio/2);
    }
    if (this.pos[0] < (this.radio/2)) {
      this.vel[0] *= -1;
      this.pos[0] = (this.radio/2);
    }
    if (this.pos[1] > height-(this.radio/2)) {
      this.vel[1] *= -1;
      this.pos[1] = height-(this.radio/2);
    }
    if (this.pos[1] < (this.radio/2)) {
      this.vel[1] *= -1;
      this.pos[1] = (this.radio/2);
    }
  }
}
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  let numeroEsferas;
  if (width > height) {
    numeroEsferas = floor((width)/50);
  } else {
    numeroEsferas = floor(height/50);
  }
  console.log(numeroEsferas);
  esf = [];
  for (var i = 0; i < numeroEsferas; i++) {
    esf[i] = new Esferas();
  }
}
