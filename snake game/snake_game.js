const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 32; //that's one box or one pixel
//images
const ground_image = new Image();
ground_image.src = "Snake-JavaScript-master/img/ground.png";

const food_image = new Image();
food_image.src = "Snake-JavaScript-master/img/food.png";
//audio

const dead = new Audio();
const eat = new Audio();
const up = new Audio();
const left = new Audio();
const right = new Audio();
const down = new Audio();

dead.src = "Snake-JavaScript-master/audio/dead.mp3";
eat.src = "Snake-JavaScript-master/audio/eat.mp3";
up.src = "Snake-JavaScript-master/audio/up.mp3";
left.src = "Snake-JavaScript-master/audio/left.mp3";
right.src = "Snake-JavaScript-master/audio/right.mp3";
down.src = "Snake-JavaScript-master/audio/down.mp3";

//snake:an array of boxes

let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

//food

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box,
};

//score
let score = 0;
// control the snake
let d;
function set_d(value){
  if(value=="LEFT"&& d != "RIGHT"){d=value;left.play();}
  else if(value=="RIGHT"&& d != "LEFT") {d=value; right.play();}
  else if(value=="UP"&& d != "DOWN") {d=value;up.play();}
  else if(value=="DOWN"&& d != "UP") {d=value;down.play();}
}
document.addEventListener("keydown", direction);
function direction(event) {
  if (event.keyCode == 37 && d != "RIGHT") {
    d = "LEFT";
    left.play();
  } else if (event.keyCode == 38 && d != "DOWN") {
    d = "UP";
    up.play();
  } else if (event.keyCode == 39 && d != "LEFT") {
    d = "RIGHT";
    right.play();
  } else if (event.keyCode == 40 && d != "UP") {
    d = "DOWN";
    down.play();
  }
}
//collision function
function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x == array[i].x && head.y == array[i].y) {
      return true;
    }
  }
}
//draw everything to canvas

function draw() {
  ctx.drawImage(ground_image, 0, 0);
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? "blue" : "green";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);

    ctx.strokeStyle = "white";
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.drawImage(food_image, food.x, food.y);
  //old head position
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  //direction

  if (d == "LEFT") snakeX -= box;
  if (d == "UP") snakeY -= box;
  if (d == "RIGHT") snakeX += box;
  if (d == "DOWN") snakeY += box;
  //IF THE SNAKE EATS FOOD

  if (snakeX == food.x && snakeY == food.y) {
    eat.play();
    score++;

    food = {
      x: Math.floor(Math.random() * 17 + 1) * box,
      y: Math.floor(Math.random() * 15 + 3) * box,
    };
  } else {
    //remove tail
    snake.pop();
  }

  //add new head
  let newHead = {
    x: snakeX,
    y: snakeY
  }
  //game over
  if (
    snakeX < box ||
    snakeX > 17 * box ||
    snakeY < 3 * box ||
    snakeY > 17 * box ||
    collision(newHead, snake)
  ) {
    clearInterval(game);
    dead.play();
    if (window.confirm("Game Over!! New Game?")) {
      window.location.reload();
    }
  }
  snake.unshift(newHead);
  ctx.fillStyle = "white";
  ctx.font = "45px sans-serif";
  ctx.fillText(score, 2 * box, 1.6 * box);
}

//call draw every 100ms
let speed=10;
speed = window.prompt("Enter snake speed from 1 to 10:");
let game = setInterval(draw, 1000 / speed);
