ArrayList <Esferas>esf;
void setup() {
  fullScreen();
  background(0);
  esf = new ArrayList<Esferas>();
  for (int i = 0; i < 100; i++) {
    esf.add(new Esferas());
  }
}
int y = 0;
void draw() {
  //fill(0,60);
  //noStroke();
  //rect(0,0,width,height);
  background(0);
  for (int i = 0; i < esf.size(); i++) {
    Esferas circulo = esf.get(i);
    noStroke();
    circulo.animacion();
    strokeWeight(4);
    stroke(77, 43, 222);
    for (Esferas lineas : esf) {
      if (lineas != circulo) {
        if (cir(circulo.pos, lineas.pos, circulo.radio)) {
          line(circulo.pos.x, circulo.pos.y, lineas.pos.x, lineas.pos.y);
        }
      }
    }
  }
}

boolean cir(PVector posCir, PVector posLin, int radio) {
  int x = int(posLin.x-posCir.x);
  int y = int(posLin.y-posCir.y);
  float contact = sqrt((x*x)+(y*y));
  radio = (radio/2)+100;
  if (radio > contact) {
    return true;
  } else {
    return false;
  }
}
void mousePressed() {
  esf.add(new Esferas(mouseX, mouseY));
}
