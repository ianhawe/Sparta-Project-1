let canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const maxCW = 300;
const maxCH = 150;
//x y width height


//Class File
//Mouse events
//Circle Class
//=====================================================================================
//if radius = circle Size. maxCH/maxCW - (radius-4)
//=====================================================================================

// Function to define Circle variables
// =====================================================================================
// x y radius, angle start, angle end  width height 0 300, 0  150
// for (let i = 0; i < 10; i++) {
//     let radius = Math.random() * 10;
//     //BLOCKER - Can't get circles to spawn between two points//specifically certain locations
//     let x = 40 + radius + Math.random() * (maxCW - radius);
//     //let xx = -40 + radius + Math.random() * (maxCW - radius);
//     let y = Math.random() * (maxCH - radius);
//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }




let radius = Math.random() * 10;
let y = Math.random() * (maxCH - radius);
let x = 40 + radius + Math.random() * (maxCW - radius);
let dx = 2;
let dy = 4;

function cAnimation() {
    requestAnimationFrame(cAnimation);
    c.clearRect(0, 0, maxCW, maxCH);
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false); // Create Circle
    c.strokeStyle = 'blue'; //Colour circle border
    c.stroke(); // Display
    sqPosition(); // 

    x++;
    x += dx; // Move from left to right
    y += dy;// This is different to the video, in the video it displays this after the if statements
    if (x + radius > maxCW || x - radius < 40) {
        dx = -dx;
    }
    if (y + radius > maxCH || y - radius < 0) {
        dy = -dy;
    }

}
cAnimation();



//=====================================================================================

//Animate Circle Properties
//=====================================================================================
//Random Position Setting of Circles
//Random Colour Theme Setting
//=====================================================================================


//Square Class
//=====================================================================================
//=====================================================================================

//Other Square Propperties
//=====================================================================================

//This is to know the height width of the Rectangle we're in

//border of game
//Verticle left, right


function sqPosition() {
    c.beginPath();
    c.moveTo(0, maxCH);
    c.lineTo(0, 0);
    c.strokeStyle = "yellow"
    c.stroke();

    c.beginPath();
    c.moveTo(maxCW, 0);
    c.lineTo(maxCW, maxCH);
    c.strokeStyle = "yellow"
    c.stroke();

    //horizontal up, down
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(maxCW, 0);
    c.strokeStyle = "yellow"
    c.stroke();

    c.beginPath();
    c.moveTo(0, maxCH);
    c.lineTo(maxCW, maxCH);
    c.strokeStyle = "yellow"
    c.stroke();

    //Start Square Position (Random)
    c.fillStyle = 'rgba(255, 0, 0, 0.5)';
    c.fillRect(10, 60, 20, 20);

    //Start Line
    c.beginPath();
    c.moveTo(40, 149);
    c.lineTo(40, 0);
    c.strokeStyle = "#00ff00"
    c.stroke();

    //End Square Position (Random)
    c.fillStyle = 'rgba(0, 0, 255, 0.5)';
    c.fillRect(275, 60, 20, 20);

    //End Position Box
    //top
    c.beginPath();
    c.moveTo(271, 55);
    c.lineTo(299, 55);
    c.strokeStyle = "orange"
    c.stroke();

    //Right
    c.beginPath();
    c.moveTo(298, 85);
    c.lineTo(298, 55);
    c.strokeStyle = "orange"
    c.stroke();

    //Bottom
    c.beginPath();
    c.moveTo(271, 85);
    c.lineTo(299, 85);
    c.strokeStyle = "orange"
    c.stroke();

    //Left
    c.beginPath();
    c.moveTo(272, 85);
    c.lineTo(272, 55);
    c.strokeStyle = "orange"
    c.stroke();

}
//Player Control Area

//=====================================================================================


//Function to define Square variables
//=====================================================================================
//=====================================================================================

//Optional Area

//Sound toggling Function

//Level Selection

// Colour theme change

//Run circles and balls
