var marina_01, marina_02, marina_03, marina_04, marina_05, azul_20;
var amp;
var song, analyzer;

function preload() {
  // load images and sound

  song = loadSound('ooh-la.mp3');

  marina_01 = loadImage("marina_01.jpg");
  marina_02 = loadImage("marina_02.jpg");
  marina_03 = loadImage("marina_03.jpg");
  marina_04 = loadImage("marina_04.jpg");
  marina_05 = loadImage("marina_05.jpg");
  azul_20 = loadImage("azul_20.png");
}

function setup() {
  song.play();
  createCanvas(720, 380);

  //song = loadSound("ooh-la.mp3", loaded);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
}

function draw() {
  background(10, 10, 10);

  var rms = analyzer.getLevel();

  image(azul_20, 1-rms*20, 0);
  image(marina_01, 1+rms*20, 0);
  image(marina_02, 1-rms*30, 76);
  image(marina_03, 1+rms*20, 152);
  image(marina_04, 1-rms*40, 228);
  image(marina_05, 1+rms*15, 304);
}
