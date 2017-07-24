function rand(num) {
    //Returns a random integer between 0 and sum 
    var x = num * Math.random()
    var result = Math.floor(x)
    return result 
}

function setup(){
      createCanvas(3000, 3000);
}




function mouseDragged() {
    noStroke()
    var x = random(300);
    var y = random(300)
    var z = random(255)
    var a = random(255)
    var b = random(255)
    var d = random(255)
    fill(z, a, b,d)
  ellipse(mouseX, mouseY, x, y);

  // prevent default

}

