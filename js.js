let myFont;
let img;
let Cwidth;
let Cheight = 200;
let fromtop = -230;
let tuchCount = 0;
let goOn = true; // chartvis mdgomareoba
let wallcolor = 0;
let score = 0;
let cscore = 0;
let highScore = 0;
let speed = 2;
let userW;
let userH;
let runsame = true;
let CformL;
// let logo_off = 0;
// let fadeOut = 255 + 255;
let r = 50,
    g = 20,
    b = 70;
let bubbles = []
let colors = [
    [231, 76, 60],
    [41, 128, 185],
    [39, 174, 96]
];

function preload() {
    myFont = loadFont("./assets/zorque.regular.ttf");
    // console.log("davamtavre");
    
}

function setup() {
    coin = loadSound('./assets/glass-tap.wav');
    gower = loadSound('./assets/8-bit-game-over.wav');
    img = loadImage('./assets/logo.png');
    userW = (window.innerWidth / 100) * 30 + 40;
    userH = (window.innerWidth / 100) * 30;
    Cwidth = window.innerWidth / 2 - ((window.innerWidth / 100) * 15) - 20;
    CformL = window.innerWidth - Cwidth;
    createCanvas(window.innerWidth, window.innerHeight);
    // background('#04BBD3');
    background(r, g, b);
    angleMode(DEGREES);
    textFont(myFont);
    smooth();
}

function draw() {
    // logo()
    // if (logo_off >= 100) {
    game();
    // }
    // logo_off += 1;
    // fadeOut -= 1;
    // console.log(logo_off);

}

// function logo() {
//     background(r, g, b);
//     tint(255, logo_off);
//     image(img, window.innerWidth / 2 - 30, window.innerHeight / 2 - 35, 70, 50)
//     textAlign(CENTER);
//     textSize(20);
//     if (logo_off <= 255) {
//         fill(255, logo_off);
//         console.log("naklebia");
//     }
//     if (logo_off > 255) {
//         console.log("metia");   
//         console.log(fadeOut);
//         fill(255, fadeOut);
//     }

//     text("Light Stream", window.innerWidth / 2, window.innerHeight / 2 + 50)
//     textAlign(RIGHT);
//     textSize(12);
//     text("games", window.innerWidth / 2 - 28, window.innerHeight / 2 + 70)
// }

function mainAnimation() {
    fromtop += speed;
    if (fromtop >= window.innerHeight) {
        fromtop = -230;
        runsame = true;
        speed += 0.5;
        wallcolor = Math.floor(random(0, 3));
    }
}

function objects() {
    noStroke();
    backgorundm();
    bgboobles();
    noStroke();
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
        gower.play();
        speed = 2;
        goOn = false;
    } else if (fromtop + userH * 2 - 10 >= (window.innerHeight - userH -speed) && tuchCount == wallcolor) {
        if (runsame) {
            console.log("window height: " + (window.innerHeight - userH),"fromtop: " + (fromtop + userH * 2 - 11));
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
        cscore = score;
    } else {
        background(r, g, b);
        ScoreSave();
        fromtop = -230;
        score = 0;
        textSize(30);
        bubbles.splice(0, 22)
        fill(0);
        fill(255)
        textAlign(CENTER);
        fill(0, 200, 240);
        text("Current score  " + cscore, window.innerWidth / 2, 100);
        fill(230, 230, 0);
        text("high score: " + highScore, window.innerWidth / 2, 200);
        fill(0, 230, 0);
        text("Touch To play", window.innerWidth / 2, 300);
        runsame = true;

    }

}

function getsScore() {
    coin.play();
    score++;
    runsame = false;
}

function Score() {
    smooth(255);
    textSize(70);
    fill(230);
    noStroke();
    textAlign(LEFT);
    text(score, 30, 80);
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

let add = +1;
let add2 = 100;
let add3 = 1;


function backgorundm() {
    background(r, g, b);
    // b++;
    // b++
    // r += add3;
    // if(r >= 200){
    //    add3 = -1
    // }
    // if(r <= 70){
    //     add3 = +1
    // }

    g += add;
    if (g >= 150) {
        add = -0.05
    }
    if (g <= 40) {
        add = +0.05
    }

    b += add2;
    if (b >= 150) {
        add2 = -0.05
    }
    if (b <= 40) {
        add2 = +0.05
    }

}

function bgboobles() {
    if (bubbles.length < 20) {
        var b = new Triangular(random(0, displayWidth),
            random(0, displayHeight),
            random(0, 2));
        bubbles.push(b);
        var c = new Coub(random(0, displayWidth),
            random(0, displayHeight),
            random(0, 2));
        bubbles.push(c);
        var e = new Ex(random(0, displayWidth),
            random(0, displayHeight),
            random(0, 2));
        bubbles.push(e);
    };
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].update();
        bubbles[i].display();
    }
}

function Triangular(x, y, t) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.angle = 0;
    this.r = 0;
    this.dx = random(-0.1, 0.1);
    this.dy = random(-0.1, 0.1);
    this.size = random(2, 10);

    this.display = function () {
        push();
        translate(this.x, this.y);
        rotate(this.r);
        noFill();
        strokeWeight(4);
        stroke('rgba(255,255,255,0.50)');
        triangle(
            -this.size,
            +this.size,
            0,
            -this.size,
            +this.size,
            +this.size
        );
        pop();
        this.r++;
    };
    this.update = function () {
        if (this.x > window.innerWidth || this.x < 0 ){
            this.dx = -this.dx;
        }
        if (this.y > window.innerWidth || this.y < 0) {
            this.dy = -this.dy;
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

    };

};

function Coub(x, y, t) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.r = 0;
    this.dx = random(-0.1, 0.1);
    this.dy = random(-0.1, 0.1);
    this.diameter = random(4, 20);

    this.display = function () {
        push();
        noStroke();
        translate(this.x, this.y);
        rotate(this.r);
        fill('rgba(255,255,255,0.30)')
        rectMode(CENTER);
        rect(0, 0, this.diameter, this.diameter);
        pop();

        this.r++;
    };
    this.update = function () {
       if (this.x > window.innerWidth || this.x < 0) {
           this.dx = -this.dx;
       }
       if (this.y > window.innerWidth || this.y < 0) {
           this.dy = -this.dy;
       }
       this.x = this.x + this.dx;
       this.y = this.y + this.dy;
    };

};

function Ex(x, y, t) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.r = 0;
    this.dx = random(-0.1, 0.1);
    this.dy = random(-0.1, 0.1);
    this.diameter = random(4, 20);

    this.display = function () {
        push();
        translate(this.x, this.y);
        rotate(this.r);
        noFill()
        strokeWeight(4);
        stroke('rgba(255,255,255,0.50)');
        rectMode(CENTER);
        rect(0, 0, this.diameter, this.diameter);
        pop();

        this.r++;
    };
    this.update = function () {
        if (this.x > window.innerWidth || this.x < 0) {
            this.dx = -this.dx;
        }
        if (this.y > window.innerWidth || this.y < 0) {
            this.dy = -this.dy;
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
    };

};

// let faerwerksarr = [];

// function faerwerks() {
//     console.log("weeee");
//     if (faerwerksarr.length < 20) {
//         let b = new Splesh(200,
//             200,
//             5);
//         faerwerksarr.push(b);
//     };
//     for (let i = 0; i < faerwerksarr.length; i++) {
//         faerwerksarr[i].update();
//         faerwerksarr[i].display();
//     }
// }

// function Splesh(x, y, s) {
//     this.x = x;
//     this.y = y;
//     this.s = s;
//     this.direction = random(-0.1, 0.1);
//     this.diameter = random(4, 20);
//     this.display = function () {
//         noFill()
//         strokeWeight(4);
//         stroke('rgba(255,255,255,0.70)');
//         ellipse(this.x, this.y, this.diameter, this.diameter);
//     }

//     this.update = function () {
//         this.x = this.x + this.direction + 10;
//         this.y = this.y + this.direction + 10;
//     }
// }

var rate = 100;
var lastClick = Date.now() - rate;
var button = document.querySelector('html');
button.addEventListener('touchstart', () => {
    if (Date.now() - lastClick >= rate) {
        goOn = true;
        tuchCount++;
        // faerwerks();
        if (tuchCount > 2) {
            tuchCount = 0;
        }
        lastClick = Date.now();
    }
});