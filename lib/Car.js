function Car(x, y, width, height, pace) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.pace = pace;
}

Car.prototype.draw = function(context) {
  context.fillStyle = "rgba(0, 0, 255, 1)";
  context.fillRect(
    this.x,
    this.y,
    this.width,
    this.height);
}

Car.prototype.movRight = function(pace) {
  this.x += this.pace;
  if (this.x > 900) {
    this.x = 0;
  }
}







module.exports = Car;