//TASK
// create a rand() function
// takes a number
// Returns a random number between 0 and that number 

//PSEUDOCODE 
// remove decimal part 
// return the remaining integer 

function rand(num) {
    //Returns a random integer between 0 and sum 
    var x = num * Math.random()
    var result = Math.floor(x)
    return result 
}

