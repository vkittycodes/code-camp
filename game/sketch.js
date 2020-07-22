let playerPaddle;
let aiPaddle;
let ball;

function setup() {
    createCanvas(624, 351);
    playerPaddle = new Paddle(26);
    aiPaddle = new Paddle(width - 46);
    ball = new Ball();
  }
  
  function draw() {
    background(58, 0, 99);
    playerPaddle.display();
    aiPaddle.display();
    ball.display();
    ball.move();

    if (playerPaddle.isUp == true)
      playerPaddle.up();
    else if (playerPaddle.isDown == true)
      playerPaddle.down();
  }

  function keyPressed()
  {
    if (keyCode == UP_ARROW)
      playerPaddle.isUp = true;
    else if (keyCode == DOWN_ARROW)
      playerPaddle.isDown = true;
  }

  function keyReleased()
  {
    if (keyCode == UP_ARROW)
      playerPaddle.isUp = false;
    else if (keyCode == DOWN_ARROW)
      playerPaddle.isDown = false;
  }