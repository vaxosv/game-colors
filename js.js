let Cwidth;
let Cheight = 300;
let fromtop = 0;

function setup() {
    Cwidth = windowWidth / 2 - 40;
    createCanvas(windowWidth, windowHeight);
    background(255, 204, 0);
}
function draw() {
    background(255, 204, 0);
    fill(255)
    rect(0, fromtop, Cwidth, Cheight);
    rect(300, fromtop, Cwidth, Cheight);

    let wall = new Wall(100, 100)
    fill(200)
    rect(170, 500, 100, 100);

    fromtop = fromtop +1
    
    if(fromtop == windowHeight){
        fromtop = 0;
    }
}


class Wall {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}