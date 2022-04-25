var catX1 = 0;

const catWidth = 75;
const catHeight = catWidth;

const fishWidth = 50;
const fishHeight = fishWidth;

var catSpeed = 5;

var fishX = Math.random() * 475;
var fishY = 0;
var fishSpeed = 4;

var pufferfishX = Math.random() * 475;
var pufferfishY = 0;
var pufferfishSpeed = 2;

var isGameOver = false
var isGameWon = false
var score = 0
var health = 9

let mySound;
let img;
function preload() {
    catImg = loadImage('assets/pixel-cat-update.png'); 
    fishImg = loadImage('assets/pixel-fish.png');
    puffImg = loadImage('assets/pixel-pufferfish.png');
    mySound = loadSound('assets/kodomoi-sunny.mp3');
}

function setup() {
    // put setup code here
    createCanvas(500, 500);
    mySound.play();
}

function draw() { 
    // Add blue background color for water
    background(66, 135, 245);
    
    
    if (!isGameOver) {
        // Check for arrow key left/right and move cat
        if (keyIsPressed) {
            if (keyCode == RIGHT_ARROW) {
                if (catX1 < 470){
                    catX1 += catSpeed; 
                }
            }  else if (keyCode == LEFT_ARROW) {
                   if (catX1 > -15){
                       catX1 -= catSpeed;
                   } 
            }
        }
        
        // Draw the fish
        image(fishImg, fishX, fishY, fishWidth, fishHeight);
        image(puffImg, pufferfishX, pufferfishY, fishWidth, fishHeight);
        
        // Move the fish toward bottom of screen
        fishY += fishSpeed;
        pufferfishY += pufferfishSpeed; 
        
        // Draw cat here
        image(catImg, catX1, 385, catWidth, catHeight);

        // If fish is at catch height, check if cat is close enough to fish
        if (fishY === 380) {
            const fishCaught = (catX1 + catWidth >= fishX) && (catX1 <= fishX + fishWidth);
            console.log('caught', fishCaught);
            if (fishCaught) {
                console.log('caught it');

                // Add 5 points to score
                score += 5;

                // Reset position of fish
                fishY = 0;
                fishX = Math.random() * 475;
             } else {
                console.log('missed it');
            }

        } else if (fishY === 540) { 
            // If fish is missed, reset position of fish
            fishY = 0;
            fishX = Math.random() * 475;
            health -= 1;
        }

        // Draw score here 
        textSize(32);
        fill('black');
        text(score, 10, 30);
        fill('white');
        
                // Draw score here 
        textSize(32);
        fill('black');
        text(health, 450, 30);
        fill('white');
    } else {
        if (score >= 150) {
            textSize(64);
            fill('black');
            text('You Win!', 100, 100);
            fill('white');
        } else {
            textSize(64);
            fill('black');
            text('You Lose!', 100, 100);
            fill('white');
       
        }
    }
    
    // Draw log across botom of screen
    fill(74, 33, 1);
    rect(0, 445, 500, 55);
    
    // If pufferfish is at catch height, check if cat is far away enough from fish
    if (pufferfishY === 380) {
        //const pufferfishCaught = (catX1 >= pufferfishX - 10) && (catX1 <= pufferfishX + 10);
        const pufferfishCaught = (catX1 + catWidth >= pufferfishX) && (catX1 <= pufferfishX + fishWidth);
        console.log('caught', pufferfishCaught);
        if (pufferfishCaught){
            console.log('caught it');
            
            // Deduct 5 points from score
            score -= 5;
            health -= 5;
            
            //Reset position of pufferfish
            pufferfishY = 0;
            pufferfishX = Math.random() * 475; 
            } else {
                console.log('missed it');
            }
        
    } else if (pufferfishY === 540) { // If fish is missed reset fish
        // Reset position of pufferfish
        pufferfishY = 0;
        pufferfishX = Math.random() * 475;

    }
    
    if (health <= 0 || score >= 150) {
        isGameOver = true;
    }
    
}


