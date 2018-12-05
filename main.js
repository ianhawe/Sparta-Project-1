let canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const maxCW = 300;
const maxCH = 150;
// const mouse = {
//     x: undefined,
//     y: undefined
// }
//x y width height
//Class File
//Colour Theme
let colorArray = [
    '#F0F7EE',
    '#C4D7F2',
    '#AFDEDC',
    '#91A8A4',
    '#000000'
];

//Circle Class
//=====================================================================================
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        //c.strokeStyle = "red";
        c.fillStyle = this.color;
        c.fill();

    } // close draw function
    this.update = function () {
        if (this.x + this.radius > maxCW - 28 || this.x - this.radius < 40) {
            this.dx = -this.dx;

        }
        //Collision fun Y
        if (this.y + this.radius > maxCH || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    } // Close update function
} // Close Class

const circleArray = [];
function initCircle() {
    for (let i = 0; i < 2; i++) {
        let radius = Math.random() * 10 + 1;  // Get a random 0-3 then add 1
        //var x = 40 + Math.random() * (maxCW - radius * 1) + radius;
        let x = Math.round(Math.random() * 220) + radius + 40; // between two numbers 40 - 272 
        let y = Math.round(Math.random() * maxCH - 30) + 20;
        let dx = Math.random() - 0.5 * 6; // Velocity which is the amount of pixels per movement
        let dy = Math.random() - 0.5 * 6;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}
function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, maxCW, maxCH); // Refresh page
    linePosition();
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

    //Detecting between two circles
    if (getDistance(circleArray[0].x, circleArray[0].y, circleArray[1].x, circleArray[1].y) < circleArray[0].radius + circleArray[1].radius - 2) {
        circleArray[0].color = 'red';
        // alert("circles touched");
    }
}

//=====================================================================================
//Animate Circle Properties
//=====================================================================================
//Random Position Setting of Circles
//Random Colour Theme Setting
//=====================================================================================


//Square Class
//=====================================================================================
function Square(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function () {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
    }
}

//=====================================================================================

//Other Square Propperties
//=====================================================================================


//Pitch layout
function linePosition() {

    //Start Lines
    //===================================================================================================
    //===================================================================================================

    //Start Square Position (Random)
    this.startSq
    c.fillStyle = 'rgba(255, 0, 0, 0.5)';
    c.fillRect(10, 60, 20, 20);

    c.fillStyle = 'rgba(0, 0, 255, 0.5)';
    c.fillRect(275, 60, 20, 20);

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

    //Start Line
    c.beginPath();
    c.moveTo(40, 149);
    c.lineTo(40, 0);
    c.strokeStyle = "#00ff00"
    c.stroke();

    //Left
    c.beginPath();
    c.moveTo(272, 0);
    c.lineTo(272, maxCH);
    c.strokeStyle = "orange"
    c.stroke();

}
//===================================================================================================
//===================================================================================================


//Random Controls //down = 40, left = 37, right = 39, up = 38;
window.addEventListener("keydown", function (e) {
    let keyPressed = e.keyCode || e.which;

    //left
    if (keyPressed == 37) {
        console.log("i pressed the left key");

    }
    //up
    else if (keyPressed == 38) {
        console.log("i pressed the up key");
    }
    //right
    else if (keyPressed == 39) {
        console.log("I pressed right key");
    }
    //down
    else if (keyPressed == 40) {
        console.log("I pressed down key");
    }

    // Extra Combitions of the keys pressed
    //up + down, left + right, up+left, up+right, down+left, down+right

});

window.addEventListener("keyup", function (e) {
    let keyReleased = e.keyCode || e.which;
    //left
    if (keyReleased == 37) {
        console.log("i released the left key");

    }
    //up
    else if (keyReleased == 38) {
        console.log("i released the up key");
    }
    //right
    else if (keyReleased == 39) {
        console.log("I released right key");
    }
    //down
    else if (keyReleased == 40) {
        console.log("I released down key");
    }

});




//=====================================================================================


//Function to define Square variables
//=====================================================================================
//=====================================================================================

//Optional Area

//Sound toggling Function

//Level Selection

// Colour theme change

//Run circles and balls


initCircle();
animate();