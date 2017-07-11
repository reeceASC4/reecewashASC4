var playerChoice = "Rock";

var compChoices = ["Rock","Paper", "Scissors"]

var compChoice = compChoices[Math.floor(Math.random()*3)]
//Tie
if(compChoice == playerChoice ){
    console.log("It's a tie")
}
// computer wins with paper
else if(compChoice == "Paper" && playerChoice == "Rock" ) {
    console.log("You Lose")
}
//computer wins with scissor 
else if (compChoice == "Scissors" && playerChoice == "Paper"){
    console.log("You Lose")
}

//Computer wins with rock 

else if (compChoice == "Rock" && playerChoice =="Scissors"){
    console.log("You lose")
}
// player wins with paper
else if(compChoice == "Rock" && playerChoice == "Paper" ) {
    console.log("You Lose")
}
//player wins with scissor 
else if (compChoice == "Paper" && playerChoice == "Scissors"){
    console.log("You Lose")
}

//Player wins with rock 

else if (compChoice == "Scissor" && playerChoice =="Rock"){
    console.log("You Win")
}