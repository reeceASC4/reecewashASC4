function rand(num) {
    //Returns a random integer between 0 and sum 
    var x = num * Math.random()
    var result = Math.floor(x)
    return result 
}



// function randLetter() {
  
//     var randomLetter = 26 * Math.random()
//     var result = Math.Floor(randomLetter)
//     if(result = 1) {
//         return "a";
//     } 
//       else if (result == 2){
//           return "b"

//     }
//     else if (result == 3){
//           return "c"

//     }else if (result == 4){
//           return "d"

//     }else if (result == 5){
//           return "e"

//     }else if (result == 6){
//           return "f"

//     }else if (result == 7){
//           return "g"

//     }else if (result == 8){
//           return "h"

//     }else if (result == 9){
//           return "I"

//     }else if (result == 10){
//           return "j"

//     }else if (result == 11){
//           return "k"

//     }else if (result == 12){
//           return "m"

//     }else if (result == 13){
//           return "n"

//     }else if (result == 14){
//           return "l"

//     }else if (result == 15){
//           return "o"

//     }else if (result == 16){
//           return "b"

//     }else if (result == 17){
//           return "p"

//     }else if (result == 18){
//           return "q"

//     }else if (result == 19){
//           return "r"

//     }else if (result == 20){
//           return "s"

//     }else if (result == 21){
//           return "t"

//     }else if (result == 22){
//           return "u"

//     }else if (result == 23){
//           return "v"

//     }else if (result == 24){
//           return "w"

//     }else if (result == 25){
//           return "x"

//     }else if (result == 26){
//           return "y"

//     }
// }


function randLetter() {
    var alphabet = "abcdefghijkmnolpqrszuvwxyz"
    return alphabet[rand(alphabet.length)]
}

function randWord() {
    var word = "";
    for (var i = 0; i < 5; i++){
        
        word = word + randLetter(); 
    }
    return word; 
}

function randSentence() {
    var sentence = " ";


for (var i = 0; i< 5; i++) 
    sentence = sentence + randWord() + "";
}
return sentence; 