let playerPaddle;
let aiPaddle;

function setup() {
    createCanvas(624, 351);
    playerPaddle = new Paddle(26);
    aiPaddle = new Paddle(width - 46);
  }
  
  function draw() {
    background(58, 0, 99);
    playerPaddle.display();
    aiPaddle.display();
  }