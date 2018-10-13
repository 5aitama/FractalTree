
var h = 0.75
var angle = 6
var startHeight = 100
var startWidth = 5
var limit = 6
var maxGrayscale = 180

function setup() {
    
    noLoop();
}

function PLine(startx, starty, endx, endy) {
    line(startx, -starty, endx, -endy)
}

function draw() {
    createCanvas(windowWidth, windowHeight)
    if(keyIsDown(LEFT_ARROW)) {
        h -= 0.001;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        h += 0.001;
    }

    if(keyIsDown(UP_ARROW)) {
        angle += 0.01;
    }

    if (keyIsDown(DOWN_ARROW)) {
        angle -= 0.01;
    }

    background('#F4F4F4')
    translate((windowWidth / 2) + 190, windowHeight)
    
    Tree(startHeight, 0)
}

function Tree(height) {
    let nHeight = height / startHeight
    let gray = (nHeight * 255)
    let color = maxGrayscale - gray
    stroke(color - 100, color, color - 100)
    strokeWeight(startWidth * nHeight)
    line(0, 0, 0, -height)
    translate(0, -height)
    if(height > limit) {
        push()
        rotate(PI / angle)
        Tree(height * h)
        pop()
        rotate(PI / -angle)
        Tree(height * h)
    }
}

function keyIsDown() {
    if (keyCode === LEFT_ARROW) {
      h += 0.001;
    } else if (keyCode === RIGHT_ARROW) {
      h -= 0.001;
    } else if (keyCode === 81) {
        angle -= 0.1
    } else if (keyCode === 69) {
        angle += 0.1
    }
    redraw();
  }