/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nUtil.inherits(Asteroid, MovingObject);\nAsteroid.COLOR = \"gray\";\nAsteroid.RADIUS = 25;\n\nfunction Asteroid(options) {\n  MovingObject.call(this, {\n    // pos, vel, radius, color\n    pos: options.pos,\n    game: options.game,\n    vel: Util.randomVec(5),\n    radius: Asteroid.RADIUS,\n    color: Asteroid.COLOR\n  });\n}\n\nAsteroid.prototype.collideWith = function (otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  } else if (otherObject instanceof Bullet) {\n    this.game.remove(this);\n  }\n}\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nUtil.inherits(Bullet, MovingObject);\nBullet.COLOR = \"green\";\nBullet.RADIUS = 5;\n\nfunction Bullet(options) {\n  MovingObject.call(this, {\n    pos: options.pos,\n    vel: options.vel,\n    game: options.game,\n    radius: Bullet.RADIUS,\n    color: Bullet.COLOR\n  });\n}\n\nBullet.prototype.isWrappable = false;\n\n\n// Bullet.prototype.collideWith = function (otherObject) {\n//   // debugger;\n//   console.log(Ship);\n//   console.log(Asteroid);\n//   if (otherObject instanceof Ship) {\n//     this.game.remove(otherObject);\n//   } else if (otherObject instanceof Asteroid) {\n//     this.game.remove(this);\n//   }\n// }\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\n\nfunction Game () {\n  this.bullets = [];\n  this.asteroids = [];\n  this.addAsteroids();\n  this.ship = new Ship({ pos: this.randomPosition(), game: this });\n}\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 4;\n\nGame.prototype.addAsteroids = function () {\n  for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    let pos = this.randomPosition();\n    this.add(new Asteroid({pos: pos, game: this}));\n  }\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n  this.allObjects().forEach(mo => {\n    mo.draw(ctx);\n  });\n}\n\nGame.prototype.moveObjects = function() {\n  \n  this.allObjects().forEach(mo => {\n    mo.move();\n  });\n}\n\nGame.prototype.wrap = function() {\n  // this == MovingObject instance\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n\n  if (this.pos[0] >= Game.DIM_X + this.radius) {\n    if (this.isWrappable) {\n      this.pos[0] = -this.radius;\n    } else {\n      this.game.remove(this);\n    }\n  } else if (this.pos[0] <= -this.radius) {\n    if (this.isWrappable) {\n      this.pos[0] = Game.DIM_X + this.radius;\n    } else {\n      this.game.remove(this);\n    }\n  }\n\n  if (this.pos[1] >= Game.DIM_Y + this.radius) {\n    if (this.isWrappable) {\n      this.pos[1] = -this.radius;\n    } else {\n      this.game.remove(this);\n    }\n  } else if (this.pos[1] <= -this.radius) {\n    if (this.isWrappable) {\n      this.pos[1] = Game.DIM_Y + this.radius;\n    } else {\n      this.game.remove(this);\n    }\n  }\n}\n\nGame.prototype.checkCollisions = function() {\n  const allObjects = this.allObjects();\n  let moCount = allObjects.length;\n  for(let i = 0; i < moCount; i++) {\n    for(let j = 0; j < moCount; j++) {\n      if (i < j) {\n        let current = allObjects[i];\n        let other = allObjects[j];\n\n        if (current.isCollidedWith(other)) {\n          // alert(\"COLLISION\");\n          current.collideWith(other);\n        }\n      }\n    }\n  }\n}\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n}\n\nGame.prototype.randomPosition = function () {\n  let posX = Game.DIM_X * Math.random();\n  let posY = Game.DIM_Y * Math.random();\n\n  return [posX, posY];\n}\n\nGame.prototype.allObjects = function () {\n  const allObjects = [].concat(this.asteroids).concat(this.bullets);\n  allObjects.push(this.ship);\n  return allObjects;\n}\n\nGame.prototype.add = function(mo) {\n  if (mo instanceof Asteroid) {\n    this.asteroids.push(mo);\n  } else if (mo instanceof Bullet) { // mo instanceof Bullet\n    this.bullets.push(mo);\n  }\n}\n\nGame.prototype.remove = function (mo) {\n  let deleteIdx = 0;\n  let movingObjects;\n\n  if (mo instanceof Asteroid) {\n    movingObjects = this.asteroids;\n  } else if (mo instanceof Bullet){ // mo instanceof Bullet\n    movingsObjects = this.bullets;\n  }\n\n  if (movingObjects) {\n    movingObjects.forEach((movingObj, idx) => {\n      if (movingObj === mo) {\n        deleteIdx = idx;\n        return;\n      }\n    });\n\n    movingObjects.splice(deleteIdx, 1);\n  }\n}\n\n\nGame.prototype.isOutOfBounds = function(pos) {\n  \n}\n\n\nmodule.exports = Game;\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nGameView.IMPULSE = 0.5;\n\nfunction GameView(ctx) {\n  this.ctx = ctx;\n  this.game = new Game();\n  this.ship = this.game.ship;\n}\n\nGameView.prototype.start = function() {\n  this.bindKeyHandlers();\n  const step = function() {\n    // this.game.moveObjects();\n    this.game.draw(this.ctx);\n    // this.game.checkCollisions();\n    this.game.step();\n  }\n\n  setInterval(step.bind(this), 20);\n}\n\nGameView.prototype.bindKeyHandlers = function() {\n  let ship = this.ship;\n\n  key('right', this.game.ship.power.bind(this.game.ship, [GameView.IMPULSE, 0]));\n  key('left', this.game.ship.power.bind(this.game.ship, [-GameView.IMPULSE, 0]));\n  key('up', this.game.ship.power.bind(this.game.ship, [0, -GameView.IMPULSE]));\n  key('down', this.game.ship.power.bind(this.game.ship, [0, GameView.IMPULSE]));\n  key('space', this.game.ship.fireBullet.bind(this.game.ship));\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\");\n\n// const MovingObject = require(\"./moving_object.js\");\n// const Asteroid = require(\"./asteroid\");\n\n// window.MovingObject = MovingObject;\n// window.Asteroid = Asteroid;\n\n// const Game = require(\"./game\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  const canvas = document.getElementById('game-canvas'),\n        ctx = canvas.getContext('2d');\n\n  // const ast = new Asteroid({pos: [30,30]});\n  // const game = new Game();\n  const gameView = new GameView(ctx);\n\n  gameView.start();\n\n  // function step() {\n  //   // ast.move();\n  //   // ast.draw(ctx);\n  //   game.moveObjects();\n  //   game.draw(ctx);\n  //   requestAnimationFrame(step);\n  // }\n\n  // step();\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.game = options.game;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  // ctx.fillStyle = \"black\";\n  // ctx.fillRect(0, 0, 1000, 600);\n\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  ctx.strokeStyle = this.color;\n  // ctx.lineWidth = 1;\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n  // this.pos[0] += this.vel[0];\n  // this.pos[1] += this.vel[1];\n  this.game.wrap.call(this);\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n  let distance = Util.calcDistance(this.pos, otherObject.pos);\n  let radiusSum = (this.radius + otherObject.radius);\n  return (distance < radiusSum);\n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n  // this.game.remove(otherObject);\n  // this.game.remove(this);\n\n}\nMovingObject.prototype.isWrappable = true;\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nUtil.inherits(Ship, MovingObject);\nShip.COLOR = \"green\";\nShip.RADIUS = 15;\nShip.BULLET_SPEED = 10;\n\nfunction Ship(options) {\n  MovingObject.call(this, {\n    // pos, vel, radius, color\n    pos: options.pos,\n    game: options.game,\n    vel: [0, 0],\n    radius: Ship.RADIUS,\n    color: Ship.COLOR\n  });\n}\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n}\n\nShip.prototype.power = function(impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n}\n\n// pos: options.pos,\n//   game: options.game,\n//     vel: [0, 0],\n//       radius: Bullet.RADIUS,\n//         color: Bullet.COLOR\nShip.prototype.fireBullet = function() {\n  let pos = this.pos.slice(0);\n\n  if (this.vel[0] !== 0 || this.vel[1] !== 0) {\n    let bullet = new Bullet({\n      pos: pos,\n      game: this.game,\n      vel: [Math.sign(this.vel[0]) * Ship.BULLET_SPEED, Math.sign(this.vel[1]) * Ship.BULLET_SPEED]\n    });\n    this.game.add(bullet);\n  }\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() { }\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n  calcDistance(pos1, pos2) {\n    let xDiffSquared = (pos1[0] - pos2[0]) ** 2;\n    let yDiffSquared = (pos1[1] - pos2[1]) ** 2;\n    return Math.sqrt(xDiffSquared + yDiffSquared)\n  }\n\n};\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });