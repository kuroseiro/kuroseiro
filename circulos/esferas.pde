class Esferas {
  PVector pos = new PVector();
  PVector vel;
  PVector gra;
  color pain;
  int radio = 25;
  Esferas() {
    ellipseMode(CENTER);
    pain = color(77, 43, 222);
    pos.x = random(25, width-25);
    pos.y = random(25, height-25);
    vel = new PVector(2, 0);
    gra = new PVector(0,random(0.1,0.3));
    vel.x *= 1 < random(2)? -1: 1;
    vel.y *= 1 < random(2)? -1: 1;
  }
  Esferas(float x, float y) {
    pos.x = x;
    pos.y = y;
    pain = color(77, 43, 222);
    vel = new PVector(2, 0);
    vel.x *= 1 < random(2)? -1: 1;
    vel.y *= 1 < random(2)? -1: 1;
    gra = new PVector(0,0.25);
  }
  void animacion() {
    fill(pain);
    ellipse(pos.x, pos.y, radio, radio);
    vel.add(gra);
    pos.add(vel);
    if (pos.x > width-(radio/2)) {
      vel.x = -vel.x;
      pos.x = width-(radio/2);
    }
    if (pos.x < (radio/2)) {
      vel.x = -vel.x;
      pos.x = (radio/2);
    }
    if (pos.y > height-(radio/2)) {
      vel.y = -vel.y;
      pos.y = height-(radio/2);
    }
    if (pos.y < (radio/2)) {
      vel.y = -vel.y;
      pos.y = (radio/2);
    }
  }
}