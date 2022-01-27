var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const screenWidth = 1000;
const screenHeight = 500;

class Character {
  constructor(x,y,width,height,color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
}

var rectangle1 = new Character(250,50,50,50,"rgb(255,99,71)");
var rectangle2 = new Character(500,200,50,50,"rgb(255,69,0)");
var rectangle3 = new Character(750,400,50,50,"rgb(255,0,0)");

var rectangles = [rectangle1,rectangle2,rectangle3];

var draw = function() {
  ctx.clearRect(0,0, screenWidth, screenHeight);
  rectangles.forEach(function(rectangle) {
    ctx.fillStyle = rectangle.color;
    ctx.fillRect(rectangle.x, rectangle.y,
    rectangle.width, rectangle.height)
  })

}

var step = function() {
    draw();
    window.requestAnimationFrame(step);
}

step();
