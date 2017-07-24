function setup(){
    createCanvas(300, 300);
    background(225)

    //stroke () sets the coor of the stoke(the outline).
    stroke("black")
    strokeWeight(6)


    arc(width/2, height/2, 200, 200, 0, PI, CHORD);
    fill("red")
    arc(width/2, height/2, 200, 200, PI, 0, CHORD);
    
    fill("white")
    ellipse(width / 2, height / 2, 50, 50)

    fill("black")
    ellipse(width / 2, height / 2, 25, 25)
}