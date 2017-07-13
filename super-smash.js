var mashArray = ["Final Destination", "Battlefield", "Yoshi's Dreamland", "Duck Hunt"]
var firstQuestion = [1, 2]
var secondQuestion = ["Captain Falcon", "Sonic"]

function rand(num) {
    //Returns a random integer between 0 and sum 
    var x = num * Math.random()
    var result = Math.floor(x)
    return result
}

var prompt = require('prompt-sync')();

function smashQuestion() {
    var placeAnswer = prompt("where will you fight?")
    mashArray.push(placeAnswer)
    var answer = prompt("How will you strike?")
    firstQuestion.push(answer)
    var secondAnswer = prompt("Who will you choose to fight")
    secondQuestion.push(secondAnswer)
}
smashQuestion()

function answers() {
    console.log("You fought " + secondQuestion[rand(secondQuestion.length)] + " in the " + mashArray[rand(mashArray.length)] + " and hit them " + firstQuestion[rand(firstQuestion.length)] + " times.")
}

answers()