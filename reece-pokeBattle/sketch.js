

var bg;
var y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage("bg.png");
  createCanvas(1000, 1000);

}
var enemyHP = 100
var x = 100
function draw() {
  
  background(bg);

  stroke(226, 204, 0);
  line(0, y, width, y);

  y++;
  if (y > height) {
    y = 0;
  }
  rectMODE(CENTER)
  fill("blue")
  rect(237, 850, 100, 100)

   rectMODE(CENTER)
  fill("red")
  rect(730, 537, 100, 100)


  fill("white")
    textSize(90)
    text("HP: " + x, 600, 850)

 textSize(90)
    text("HP: " + enemyHP, 250, 537)

    rectMODE(CENTER)
    fill("white")
    rect()

 
}










// function AssignDamage(attackingPokemon, moveIndex, defendingPokemon) {
//     var formulaPartOne = 0.75*1.5*1.25*1*random(0.85, 1.01)*1*superEffectiveRatio(attackingPokemon, defendingPokemon)*1*1;
//     if (attackingPokemon.move[moveIndex].isSpecial == false) {
//     return  ((((2*attackingPokemon.Level)/5 + 2)*attackingPokemon.move[moveIndex].attack*attackingPokemon.attack/defendingPokemon.defense)/50 + 2)*formulaPartOne;
//     } else {
//         return ((((2*attackingPokemon.Level)/5 + 2)*attackingPokemon.move[moveIndex].attack*attackingPokemon.specialattack/defendingPokemon.specialdefense)/50 + 2)*formulaPartOne;
//     }
// }

// function NoFaints(pkmnOne, pkmnTwo) {
//     if (pkmnOne.HP <= 0 || pkmnTwo.HP <= 0) {
//         return false;
//     } else {
//         return true;
//     }
// }