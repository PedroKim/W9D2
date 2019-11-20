const Asteroid = require("./asteroid");
const Ship = require("./ship");
const Bullet = require("./bullet");


function Game () {
  this.bullets = [];
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship({ pos: this.randomPosition(), game: this });
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 4;

Game.prototype.addAsteroids = function () {
  for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    let pos = this.randomPosition();
    this.add(new Asteroid({pos: pos, game: this}));
  }
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

  this.allObjects().forEach(mo => {
    mo.draw(ctx);
  });
}

Game.prototype.moveObjects = function() {
  
  this.allObjects().forEach(mo => {
    mo.move();
  });
}

Game.prototype.wrap = function() {
  // this == MovingObject instance
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];

  if (this.pos[0] >= Game.DIM_X + this.radius) {
    if (this.isWrappable) {
      this.pos[0] = -this.radius;
    } else {
      this.game.remove(this);
    }
  } else if (this.pos[0] <= -this.radius) {
    if (this.isWrappable) {
      this.pos[0] = Game.DIM_X + this.radius;
    } else {
      this.game.remove(this);
    }
  }

  if (this.pos[1] >= Game.DIM_Y + this.radius) {
    if (this.isWrappable) {
      this.pos[1] = -this.radius;
    } else {
      this.game.remove(this);
    }
  } else if (this.pos[1] <= -this.radius) {
    if (this.isWrappable) {
      this.pos[1] = Game.DIM_Y + this.radius;
    } else {
      this.game.remove(this);
    }
  }
}

Game.prototype.checkCollisions = function() {
  const allObjects = this.allObjects();
  let moCount = allObjects.length;
  for(let i = 0; i < moCount; i++) {
    for(let j = 0; j < moCount; j++) {
      if (i < j) {
        let current = allObjects[i];
        let other = allObjects[j];

        if (current.isCollidedWith(other)) {
          // alert("COLLISION");
          current.collideWith(other);
        }
      }
    }
  }
}

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
}

Game.prototype.randomPosition = function () {
  let posX = Game.DIM_X * Math.random();
  let posY = Game.DIM_Y * Math.random();

  return [posX, posY];
}

Game.prototype.allObjects = function () {
  const allObjects = [].concat(this.asteroids).concat(this.bullets);
  allObjects.push(this.ship);
  return allObjects;
}

Game.prototype.add = function(mo) {
  if (mo instanceof Asteroid) {
    this.asteroids.push(mo);
  } else if (mo instanceof Bullet) { // mo instanceof Bullet
    this.bullets.push(mo);
  }
}

Game.prototype.remove = function (mo) {
  let deleteIdx = 0;
  let movingObjects;

  if (mo instanceof Asteroid) {
    movingObjects = this.asteroids;
  } else if (mo instanceof Bullet){ // mo instanceof Bullet
    movingsObjects = this.bullets;
  }

  if (movingObjects) {
    movingObjects.forEach((movingObj, idx) => {
      if (movingObj === mo) {
        deleteIdx = idx;
        return;
      }
    });

    movingObjects.splice(deleteIdx, 1);
  }
}


Game.prototype.isOutOfBounds = function(pos) {
  
}


module.exports = Game;

