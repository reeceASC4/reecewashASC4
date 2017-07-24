
var bg;
var y = 0;
playerX = 310
playerY = 350
var ball;
var Balls = [];
var enemyArray;
// moves between 3 and -3
var directionCounter;
var isLeft;
var originalX;
var originalY;
var maxSquareWidth;
var maxSquareHeight;
var littleSpace;
var EnemyWidth;
var EnemyHeight;
var Enemy;
var Enemies;
var Size;
var heightSize;


function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  Size = 600;
  heightSize = 400;
  bg = loadImage("space.jpg");
  player1 = loadImage("spaceship.png")
  createCanvas(600, 400);
    ball = new Ball(width/2, height);
    ball.show();
    frameRate(60);
    var RectWidth = 360;
    var RectHeight = 225;
    originalX = 70;
    originalY = 50;
    maxSquareWidth = RectWidth / 10;
    maxSquareHeight = RectHeight / 5;
    littleSpace = maxSquareWidth / 18;
    EnemyWidth = maxSquareWidth - (2 * littleSpace);
    EnemyHeight = maxSquareHeight - (2 * littleSpace);
    Enemies = [];
    directionCounter = 1;
    isLeft = false;
    // Creates all of the enemies in browser and array
    // changed
    for (var i = 0; i < 3; i++) {
        Enemies[i] = [];
        for (var j = 0; j < 10; j++) {
            Enemies[i][j] = new EnemyClass(originalX + maxSquareWidth * (j) + littleSpace, originalY + maxSquareHeight * i + littleSpace, EnemyWidth, EnemyHeight, Size);
            Enemies[i][j].appear();
        }
    }
}
function RecreateEnemiesRight() {

   if(Enemies[Enemies.length -1][Enemies[0].length - 1].x + Enemies[Enemies.length -1][Enemies[0].length - 1].width +  1> Size) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 10; j++) {
                Enemies[i][j].MoveDown();
                Enemies[i][j].appear();
                
           }
        }
        isLeft = true;
    } else {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 10; j++) {
                Enemies[i][j].MoveRight();
                Enemies[i][j].appear();
            }
        }
    }
}
function RecreateEnemiesLeft() {
    
   if (Enemies[0][0].x -1 < 0) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 10; j++) {
                Enemies[i][j].MoveDown();
                Enemies[i][j].appear();
            }
        }
        isLeft = false;
    } else {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 10; j++) {
                Enemies[i][j].MoveLeft();
                Enemies[i][j].appear();
            }
        }
    }
}
function Ball(x,y){
    this.x = x;
    this.y = y;

   this.show = function(){
        fill(0, 200, 100, 50);
        ellipse(this.x + 37 , this.y, 10, 10);
    }

   this.move = function(dir){
        this.y = this.y + dir
    }
}

function draw() {
    
    
  background(bg);
    
  stroke(226, 204, 0);
  
  y++;
  if (y > height) {
    y = 0;
  }

  
  for (var i = 0; i <Balls.length; i++){
        Balls[i].move(-5);
        Balls[i].show();
    }

  rect(CENTER)
 fill("blue")
    image(player1, playerX, 320, player1.width/8, player1.height/8 );

  if (keyIsDown(LEFT_ARROW)){
      playerX = playerX - 10 
  }

   if (keyIsDown(RIGHT_ARROW)){
      playerX = playerX + 10  
  }

  if(0 + 25 >= playerX){
      playerX = playerX + 10
  }
  if(playerX >= 600 - 25){
      playerX = playerX - 10
  }
  if (isLeft == false) {
        RecreateEnemiesRight();
        //  delayTime(1);
    } else {
        RecreateEnemiesLeft();
        //    delayTime(1);

   }  

}


   

  
function keyTyped(){
if(key == " "){
    Balls.push(new Ball(playerX  , playerY));
    console.log("hello")
}
}
  