const canvas = document.querySelector("canvas");
console.log(canvas);

const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "royalblue";

// context.fillStyle = "#ff8";
// context.fillRect(1000, 0, 100, 200);

// context.beginPath();
// context.lineWidth = "40";
// context.strokeStyle = "#ff8";
// context.arc(1000, 500, 100, 0, Math.PI * 2, false);
// context.closePath();
// context.stroke();

// context.beginPath();
// context.arc(800, 200, 100, 0, Math.PI * 2, false);
// context.closePath();
// context.stroke();

let counter = 0;

class Circle {
  constructor(x, y, rad, color, text, speed) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.color = color;
    this.text = text;
    this.dx = speed;
    this.dy = speed;
  }

  draw(context) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.fillStyle = "#ff8";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "50px Arial";
    context.fillText(this.text, this.x, this.y);
    context.lineWidth = 10;
    context.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    context.stroke();
  }

  update(context) {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.rad > canvas.width || this.x - this.rad < 0) {
      this.dx *= -1;
      counter++;
    }
    if (this.y + this.rad > canvas.height || this.y - this.rad < 0) {
      this.dy *= -1;
      counter++;
    }

    this.text = counter;
    this.draw(context);
  }
}

let myCircle = new Circle(1000, 500, 50, "#ff8", counter, 2);
myCircle.draw(context);

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);

  myCircle.update(context);
}
animate();

// const creatCircles = (circle) => {
//   circle.draw(context);
// };

// const allCircles = [];
// let circleCounter = 1;

// for (let number = 0; number < 5; number++) {
//   const randomX = Math.floor(Math.random() * window.innerWidth);
//   const randomY = Math.floor(Math.random() * window.innerHeight);
//   const myCircle = new Circle(randomX, randomY, 50, "#ff8", circleCounter);
//   allCircles.push(myCircle);
//   creatCircles(allCircles[number]);
//   circleCounter++;
// }
