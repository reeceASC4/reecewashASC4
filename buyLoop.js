 
var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 


//pseudocode
//assign the player's money to 1000/
//create an array to store the items that the player bought
//until the player runs out of money: ask them what they want to buy

var money = 1000;

var items = [];

// while the player has money
while(money > 99) {
    console.log("You have $" + money + " left. A tent is $100. Used Yeezys are $500.")
    var answer = prompt('Which item do you want to buy?')
    if(answer == "tent"){
        money = money - 100
        items.push('tent')
        console.log("You bought a tent!")
        }else if (answer == "Yeezys"){
                money = money - 500
                items.push("Used Yeezys")
                console.log("You bought Used Yeezys!")

    
        } else {
            console.log("I didnt understand try again.")
        }
    
}
