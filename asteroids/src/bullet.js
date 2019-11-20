const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid");
const Ship = require("./ship");

Util.inherits(Bullet, MovingObject);
Bullet.COLOR = "green";
Bullet.RADIUS = 5;

function Bullet(options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: options.vel,
    game: options.game,
    radius: Bullet.RADIUS,
    color: Bullet.COLOR
  });
}

Bullet.prototype.isWrappable = false;


// Bullet.prototype.collideWith = function (otherObject) {
//   // debugger;
//   console.log(Ship);
//   console.log(Asteroid);
//   if (otherObject instanceof Ship) {
//     this.game.remove(otherObject);
//   } else if (otherObject instanceof Asteroid) {
//     this.game.remove(this);
//   }
// }

module.exports = Bullet;