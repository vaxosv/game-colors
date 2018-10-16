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

// function preload() {
//     myFont = loadFont("./assets/zorque.regular.ttf");
//     // console.log("davamtavre");

// }
let ctx;
let canvas;
let a = 0;

(function setup() {
    // coin = loadSound('./assets/glass-tap.wav');
    // gower = loadSound('./assets/8-bit-game-over.wav');
    // img = loadImage('./assets/logo.png');
    canvas = document.getElementById('canvas');
    userW = (window.innerWidth / 100) * 30 + 40;
    userH = (window.innerWidth / 100) * 30;
    Cwidth = window.innerWidth / 2 - ((window.innerWidth / 100) * 15) - 20;
    CformL = window.innerWidth - Cwidth;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');



    // background('#04BBD3');
    // background(r, g, b);
    // angleMode(DEGREES);
    // textFont(myFont);
    // smooth();

})()

function draw() {
    clean();
    animation()
    requestAnimationFrame(draw)
}
requestAnimationFrame(draw)


function clean() {
    ctx.fillStyle = '#321446';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function animation() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText("Hello World", 100, 100);
}