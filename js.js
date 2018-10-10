let Cwidth;
let Cheight = 300;
let fromtop = 0;
let tuchCount = 0;
let goOn;
let wallcolor = 0;
let colors = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255]
]

function setup() {
    Cwidth = windowWidth / 2 - 40;
    createCanvas(windowWidth, windowHeight);
    background(255, 204, 0);
}

function draw() {
    objects()
    mainAnimation();

    logic()
}

function mousePressed() {
    goOn = true;
    tuchCount++
    if (tuchCount > 2) {
        tuchCount = 0;
    }
}

function mainAnimation() {
    fromtop += 3;
    if (fromtop >= windowHeight) {
        fromtop = 0;
        wallcolor = Math.floor( random(0, 2))
        console.log(wallcolor);
    }
}

function objects() {
    background(255, 204, 0);
    fill(colors[wallcolor])
    rect(0, fromtop, Cwidth, Cheight);
    rect(300, fromtop, Cwidth, Cheight);

    fill(colors[tuchCount])
    rect(170, 500, 100, 100);
}


function logic() {

    if (fromtop >= (windowHeight - 300) && tuchCount != wallcolor) {
        console.log("wavage");
    }
}