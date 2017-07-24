function setup() {
    createCanvas(750, 500)
    

}
var speed = 10
var speed2 = 10
var x = 30
var y = 40
function draw() {

    background(50)

    ellipse(x, y, 100)
    x = x + speed
    y = y + speed2

    if (x < 0) {
        speed = speed * -1
    }
    if (x > 750 - 50) {
        speed = speed * -1
    }
    if (y < 0 ) {
        speed2 = speed2 * -1
    }

    if (y > 500 - 50 ) {
        speed2 = speed2 * -1
    }

}