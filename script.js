const canvas = document.querySelector("canvas");
console.log(canvas);

const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "#000";

context.fillStyle = "#ff8";
context.fillRect(1000, 0, 100, 200);

context.beginPath();
context.lineWidth = "40";
context.strokeStyle = "#ff8";
context.arc(1000, 500, 100, 0, Math.PI * 2, false);
context.closePath();
context.stroke();

context.beginPath();
context.arc(800, 200, 100, 0, Math.PI * 2, false);
context.closePath();
context.stroke();

class Circle {
  constructor(x, y, rad, color) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.color = color;
  }

  draw(context) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = 10;
    context.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    context.stroke();
  }
}

const creatCircles = (circle) => {
  circle.draw(context);
};

const allCircles = [];

for (let number = 0; number < 40; number++) {
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  const myCircle = new Circle(randomX, randomY, 50, "#ff8");
  allCircles.push(myCircle);
  creatCircles(allCircles[number]);
}
