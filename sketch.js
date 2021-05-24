var database;
var backgroundImage;
var gameState = 0;
var playerCount, canvas;
var game, form, player;
var allPlayers;
var cars;
var car1, car2, car3, car4;

function setup() {
  database = firebase.database();
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("white");
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    game.play();
  }
}