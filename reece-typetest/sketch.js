// function setup(){
//     createCanvas(500, 500)
//     background(50)
    

//     var x = 0
//    fill("white") 
//    textAlign(CENTER)
//     text("Type the string below", width/2, 100, 100, 100)

//    s = "Hello";
//     fill("white");
//     text(s, width/2, 150, 70, 80); // Text wraps within text box

//     fill("white");
//     textAlign(CENTER)
//     text("Points: " + x, width/2, 250, 100)


//     var x = ""
//   function keyTyped(){
//       var x = key + x
//       if(x === "H"){
//           x = x + 1
//       }
      
      



// textSize(32);
// text("word", 10, 30);
// fill(0, 102, 153);
// text("word", 10, 60);
// fill(0, 102, 153, 51);
// text("word", 10, 90);'word' displayed 3 times going from black, blue to translucent blueeditreset
 


var sentence = "Hello World"
var x = 0
function setup() {
    createCanvas(400,400)
    background(50)


    fill("white")
    textSize(16)
    text("please type in the sentence below.", 50, 50)
    text(sentence, 50, 100)

    fill("white");
    textAlign(CENTER)
    text("Points: " + x, width/2, 250, 100)
}

function keyTyped(){
    typed = typed + key
    if(typed == sentence){
        alert("You win")
    }

}