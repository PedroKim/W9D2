const Game = require('./game');

GameView.IMPULSE = 0.5;

function GameView(ctx) {
  this.ctx = ctx;
  this.game = new Game();
  this.ship = this.game.ship;
}

GameView.prototype.start = function() {
  this.bindKeyHandlers();
  const step = function() {
    // this.game.moveObjects();
    this.game.draw(this.ctx);
    // this.game.checkCollisions();
    this.game.step();
  }

  setInterval(step.bind(this), 20);
}

GameView.prototype.bindKeyHandlers = function() {
  let ship = this.ship;

  key('right', this.game.ship.power.bind(this.game.ship, [GameView.IMPULSE, 0]));
  key('left', this.game.ship.power.bind(this.game.ship, [-GameView.IMPULSE, 0]));
  key('up', this.game.ship.power.bind(this.game.ship, [0, -GameView.IMPULSE]));
  key('down', this.game.ship.power.bind(this.game.ship, [0, GameView.IMPULSE]));
  key('space', this.game.ship.fireBullet.bind(this.game.ship));
}

module.exports = GameView;