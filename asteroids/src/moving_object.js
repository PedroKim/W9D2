const Util = require("./utils");

function MovingObject(options) {
  this.pos = options.pos;
  this.game = options.game;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  // ctx.fillStyle = "black";
  // ctx.fillRect(0, 0, 1000, 600);

  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.strokeStyle = this.color;
  // ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
}

MovingObject.prototype.move = function() {
  // this.pos[0] += this.vel[0];
  // this.pos[1] += this.vel[1];
  this.game.wrap.call(this);
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
  let distance = Util.calcDistance(this.pos, otherObject.pos);
  let radiusSum = (this.radius + otherObject.radius);
  return (distance < radiusSum);
}

MovingObject.prototype.collideWith = function(otherObject) {
  // this.game.remove(otherObject);
  // this.game.remove(this);

}
MovingObject.prototype.isWrappable = true;

module.exports = MovingObject;