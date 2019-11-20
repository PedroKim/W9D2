const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");
const Bullet = require("./bullet");

Util.inherits(Ship, MovingObject);
Ship.COLOR = "green";
Ship.RADIUS = 15;
Ship.BULLET_SPEED = 10;

function Ship(options) {
  MovingObject.call(this, {
    // pos, vel, radius, color
    pos: options.pos,
    game: options.game,
    vel: [0, 0],
    radius: Ship.RADIUS,
    color: Ship.COLOR
  });
}

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
}

Ship.prototype.power = function(impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
}

// pos: options.pos,
//   game: options.game,
//     vel: [0, 0],
//       radius: Bullet.RADIUS,
//         color: Bullet.COLOR
Ship.prototype.fireBullet = function() {
  let pos = this.pos.slice(0);

  if (this.vel[0] !== 0 || this.vel[1] !== 0) {
    let bullet = new Bullet({
      pos: pos,
      game: this.game,
      vel: [Math.sign(this.vel[0]) * Ship.BULLET_SPEED, Math.sign(this.vel[1]) * Ship.BULLET_SPEED]
    });
    this.game.add(bullet);
  }
}

module.exports = Ship;