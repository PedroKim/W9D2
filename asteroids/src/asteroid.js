const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");
const Ship = require("./ship");
const Bullet = require("./bullet");

Util.inherits(Asteroid, MovingObject);
Asteroid.COLOR = "gray";
Asteroid.RADIUS = 25;

function Asteroid(options) {
  MovingObject.call(this, {
    // pos, vel, radius, color
    pos: options.pos,
    game: options.game,
    vel: Util.randomVec(5),
    radius: Asteroid.RADIUS,
    color: Asteroid.COLOR
  });
}

Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  } else if (otherObject instanceof Bullet) {
    this.game.remove(this);
  }
}


module.exports = Asteroid;