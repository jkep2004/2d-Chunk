var chunk;
var tileSize;

function setup () {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);

    chunk = new Chunk (0, 0, 0);
    noLoop();
}

function draw () {
    clear();
    chunk.draw();
}