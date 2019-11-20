console.log("Webpack is working!");

// const MovingObject = require("./moving_object.js");
// const Asteroid = require("./asteroid");

// window.MovingObject = MovingObject;
// window.Asteroid = Asteroid;

// const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('game-canvas'),
        ctx = canvas.getContext('2d');

  // const ast = new Asteroid({pos: [30,30]});
  // const game = new Game();
  const gameView = new GameView(ctx);

  gameView.start();

  // function step() {
  //   // ast.move();
  //   // ast.draw(ctx);
  //   game.moveObjects();
  //   game.draw(ctx);
  //   requestAnimationFrame(step);
  // }

  // step();

});