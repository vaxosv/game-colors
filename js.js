let Cwidth;
let Cheight = 200;
let fromtop = 0;
let tuchCount = 0;
let goOn = true;
let wallcolor = 0;
let score = 0;
let highScore = 0;
let speed = 2;
let userW;
let userH;
let colors = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255]
];

function setup() {
    coin = loadSound('./assets/picked-coin-echo-2.wav');
    gower = loadSound('./assets/8-bit-game-over.wav');
    userW = (window.innerWidth / 100) * 20;
    userH = (window.innerWidth / 100) * 20;
    Cwidth = window.innerWidth;
    createCanvas(window.innerWidth, window.innerHeight + 10);
    background(255, 204, 0);
}

function draw() {
    game();
}

function mainAnimation() {
    fromtop += speed;
    if (fromtop >= window.innerHeight) {
        coin.play();
        fromtop = 0;
        score++;
        speed += 0.2;
        wallcolor = Math.floor(random(0, 3));
        // console.log(wallcolor);
    }
}

function objects() {

    noStroke();
    background(255, 204, 0);
    fill(colors[wallcolor]);
    rect(0, fromtop, Cwidth, userH * 2);

    stroke('rgba(34, 34, 34, 0.3)');
    strokeWeight(2);
    fill(colors[tuchCount]);
    rect((window.innerWidth / 2) - (userH / 2), (window.innerHeight - userH) + 10 , userW, userH);
    Score();
}


function logic() {
    if (fromtop + userH * 2  - 10 >= (window.innerHeight - userH) && tuchCount != wallcolor) {
        textSize(30);
        fill(0);
        text("Game Over", window.innerWidth / 2 - 80, 100);
        gower.play();
        score = 0;
        speed = 2;
        goOn = false;
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
        fromtop = 0;
        textSize(30);
        fill(0);
        text("Touch To play", window.innerWidth / 2 - 100, 100);
        // ScoreSave()
    }

}


function Score() {
    textSize(20);
    fill(240);
    noStroke();
    text(score, 20, 30);
}

function ScoreSave() {
    if (score > highScore) {
        highScore = score;
    }
    highScore = toString(highScore)
    localStorage.setItem('highScore', highScore);
    var localscore = localStorage.getItem('highScore');
    console.log(localscore);
}







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