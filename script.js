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
