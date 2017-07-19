function setup() {
    createCanvas(801, 801)
    background(25)
    enemy()
}
var x = 0
var y = 0
function draw() {
    for (a = 0; a < 8; a++) {
        for (i = 0; i < 8; i++) {
            rect(x, y, 100, 100)
            x = 100 + x
        }
        y = 100 + y
        x = 0

    }

}
var xpos = 800
var ypos = 800
function enemy() {
    xpos = Math.round(random(xpos) / 100) * 100;
    ypos = Math.round(random(ypos) / 100) * 100;
}

function mouseClicked() {
    if (mouseX >= xpos && mouseX <= (xpos + 100) && mouseY >= ypos && mouseY <= (ypos + 100)) {
        console.log("red", xpos, ypos)
        fill("Red")
        rect(xpos, ypos, 100, 100)
    } else {
        console.log("blue", xpos, ypos)
        fill("blue")
        rect(Math.round(mouseX / 100) * 100, Math.round(mouseY / 100) * 100, 100, 100)
    }
}