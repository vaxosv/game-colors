let Cwidth;
let Cheight = 200;
let fromtop = -230;
let tuchCount = 0;
let goOn = false; // chartvis mdgomareoba
let wallcolor = 0;
let score = 0;
let highScore = 0;
let speed = 2;
let userW;
let userH;
let runsame = true;
let CformL;
let bubbles = []

let colors = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255]
];

function setup() {
    coin = loadSound('./assets/picked-coin-echo-2.wav');
    gower = loadSound('./assets/8-bit-game-over.wav');
    userW = (window.innerWidth / 100) * 30 + 40;
    userH = (window.innerWidth / 100) * 30;
    Cwidth = window.innerWidth / 2 - ((window.innerWidth / 100) * 15) - 20;
    CformL = window.innerWidth - Cwidth;
    createCanvas(window.innerWidth, window.innerHeight + 10);
    background(255, 204, 0);
}

function draw() {
    game();

}

function mainAnimation() {
    fromtop += speed;
    if (fromtop >= window.innerHeight) {
        fromtop = -230;
        runsame = true;
        speed += 0.2;
        wallcolor = Math.floor(random(0, 3));
    }
}

function objects() {
    noStroke();
    background(255, 204, 0);
    bgboobles()
    fill(colors[wallcolor]);
    rect(0, fromtop, Cwidth, userH * 2);
    rect(CformL, fromtop, Cwidth, userH * 2);

    // stroke('rgba(34, 34, 34, 0.3)');
    // strokeWeight(2);
    fill(colors[tuchCount]);
    rect((window.innerWidth / 2) - (userW / 2), (window.innerHeight - userH) + 10, userW, userH);
    Score();
}


function logic() {
    if (fromtop + userH * 2 - 10 >= (window.innerHeight - userH) && tuchCount != wallcolor) {
        textSize(30);
        fill(0);
        text("Game Over", window.innerWidth / 2 - 80, 100);
        gower.play();
        speed = 2;
        goOn = false;
    } else if (fromtop + userH * 2 - 10 >= (window.innerHeight - userH) && tuchCount == wallcolor) {
        if (runsame) {
            getsScore();
        }
    } else if (fromtop >= (window.innerHeight - userH) && tuchCount === wallcolor) {
        textSize(30);
        fill(0);
        goon = true;
    }
}

function game() {
    if (goOn) {
        objects();
        mainAnimation();
        logic();

    } else {
        background(255, 204, 0);
        ScoreSave();
        fromtop = -230;
        score = 0;
        textSize(30);
        bubbles.splice(0, 22)
        fill(0);
        text("Game ower", window.innerWidth / 2 - 80, 100);
        text("Touch To play", window.innerWidth / 2 - 90, 200);
        text("high score: " + highScore, window.innerWidth / 2 - 80, 300);
        runsame = true;

    }

}

function getsScore() {
    coin.play();
    score++;
    runsame = false;
}

function Score() {
    textSize(40);
    fill(240);
    noStroke();
    text(score, 30, 60);
}

function ScoreSave() {
    let localStorage = window.localStorage.getItem('localScore');
    if (localStorage && localStorage > highScore) {
        highScore = localStorage;
    } else {
        try {
            window.localStorage.setItem('localScore', highScore);
        } catch (error) {
            console.log(error);
        }
    }

    if (score > highScore) {
        highScore = score;
        window.localStorage.setItem('localScore', highScore);
    }


}

let shapes = [
    Bubble,

]

function bgboobles() {
    if (bubbles.length < 20) {
        var b = new Bubble(random(0, displayWidth),
            random(0, displayHeight),
            random(0, 2));
        bubbles.push(b);
        var c = new Coub(random(0, displayWidth),
            random(0, displayHeight),
            random(0, 2));
        bubbles.push(c);
    };
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].update();
        bubbles[i].display();
    }
}

function Bubble(x, y, t) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.direction = random(-0.1, 0.1);
    this.diameter = random(4, 20);

    this.display = function () {
        noStroke();
        fill(255, 255, 255, 130);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
    this.update = function () {
        this.x = this.x + this.direction;
        this.y = this.y + this.direction;
    };

};

function Coub(x, y, t) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.direction = random(-0.1, 0.1);
    this.diameter = random(4, 20);

    this.display = function () {
        noStroke();
        fill(255, 255, 255, 130);
        rect(this.x, this.y, this.diameter, this.diameter);
    };
    this.update = function () {
        this.x = this.x + this.direction;
        this.y = this.y + this.direction;
    };

};

var rate = 100;
var lastClick = Date.now() - rate;
var button = document.querySelector('html');
button.addEventListener('touchstart', () => {
    if (Date.now() - lastClick >= rate) {
        goOn = true;
        tuchCount++;
        if (tuchCount > 2) {
            tuchCount = 0;
        }
        lastClick = Date.now();
    }
});


// class Wall {
//     constructor() {

//     }

//     draw() {
//         fill(colors[wallcolor]);
//         rect(0, fromtop, Cwidth, Cheight);
//     }
// }