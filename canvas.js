let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    position = 0,
    size = 0
    width = canvas.width = document.documentElement.clientWidth,
    height = canvas.height = document.documentElement.clientHeight;

// canvas.width = document.documentElement.clientWidth;
// canvas.height = document.documentElement.clientHeight;

function circle (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    fillCircle ? ctx.fill() : ctx.stroke();
}

// Animation cute bee
let x = width / 2,
    y = height / 2,
    drowBee = function (x, y) {
        ctx.lineWidht = 2;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'gold';
        
        circle(x, y , 8, true);
        circle(x, y , 8, false);
        circle(x - 5, y - 11, 5, false);
        circle(x + 5, y - 11, 5, false);
        circle(x - 2, y - 1, 2, false);
        circle(x + 2, y - 1, 2, false);
    },
    update = function (coordinate) {
        let offset = Math.random() * 2 - 1;
        coordinate += offset;

        if (coordinate > width || coordinate > height) {
            (width < height) 
                ? coordinate = width 
                : coordinate = height;
        }

        if (coordinate < 0) {
            coordinate = 0;
        }

        return coordinate;
    };

// Animation jumping ball
class Ball {
    constructor() { 
        this.x = width / 2;
        this.y = height / 2;
        this.xSpeed = Math.random() * 10 - 5;
        this.ySpeed = -(Math.random() * 10 - 5);
        this.ballSize = 9;
        this.colorsArr = ['red', 'green', 'blue', 'gold', 'yellowgreen', 'purple', 'pink', 'darkgreen', 'yellow'];
        this.color = this.pickRandomColor(this.colorsArr);
    }

    drow () {
        circle(this.x, this.y, 9, true);
    }

    move () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    checkCollision () {
        if (this.x < this.ballSize || this.x > width - this.ballSize) {
            this.xSpeed = -this.xSpeed;
        }

        if (this.y < this.ballSize || this.y > height - this.ballSize) {
            this.ySpeed = -this.ySpeed;
        }
    }

    pickRandomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

// empty array for balls
let balls = []; 

// add balls to array
for (let i = 0; i < 7; i++) {
    balls[i] = new Ball();
}

// drow bee and balls
setInterval(() => {
    ctx.clearRect(0, 0, width, height);

    // Drow bee
    drowBee(x, y);
    x = update(x);
    y = update(y);

    // Drow balls
    for (let i = 0; i < balls.length; i++) {
        ctx.fillStyle = balls[i].color;
        balls[i].drow();
        balls[i].move();
        balls[i].checkCollision();
    }

    ctx.strokeRect(0, 0, width, height);
}, 25);