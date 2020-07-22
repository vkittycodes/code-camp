class Ball
{
    constructor()
    {
        this.r = 10;
        this.reset();

        
    }
    
    display()
    {
        fill(255);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    move(playerPaddle)
    {
        if (this.y < this.r || this.y > (height - this.r))
        {
            this.ySpeed = - this.ySpeed;
        }

        if (this.x < this.r || this.x > (width - this.r))
            this.reset();

        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;

        if (this.x < (playerPaddle.x - this.r) & this.y > playerPaddle.y & this.y < (playerPaddle.y + playerPaddle.height))
            this.xSpeed = - this.xSpeed;
    }

    reset()
    {
        this.x = width/2;
        this.y = height/2;
        this.xSpeed = random(3, 4);
        this.ySpeed = random(-3, 3);
    }
}