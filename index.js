const app = "I don't do much."

function Shape(sides, x, y) {
  this.sides = sides;
  this.x = x;
  this.y = y;
}

function Rectangle(x, y, width, height) {
  Shape.call(this, "4", x, y) 
  this.width = width;
  this.height = height;
}
