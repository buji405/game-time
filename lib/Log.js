const MovingObstacle = require('./MovingObstacle.js');

class Log extends MovingObstacle {
  constructor (x, y, width, height, pace, image) {
    super (x, y, width, height, pace, image);
    this.image = image;
  }
}

module.exports = Log;
