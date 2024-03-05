import { Ball } from "./Ball.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

let balls = [];

while (balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(random(0 + size, width - size), random(0 + size, height - size), random(-7, 7), random(-7, 7), randomRGB(), size);
  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect(balls);
  }

  requestAnimationFrame(loop);
}

loop();
