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
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];;

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

const circleArray = []
function init() {
    for (var i = 0; i < 1; i++) {
        let radius = Math.random() * 10 + 1;  // Get a random 0-3 then add 1
        //var x = 40 + Math.random() * (maxCW - radius * 1) + radius;
        let x = 40 + radius + Math.random() * (maxCW - radius);
        var y = Math.random() * (maxCH - radius * 1) + radius;
        var dx = Math.random() - 0.5 * 6; // Velocity which is the amount of pixels per movement
        var dy = Math.random() - 0.5 * 6;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, maxCW, maxCH); // Refresh page
    sqPosition();
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
        sqPosition();
    }
}
init();
animate();



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

    //Left
    c.beginPath();
    c.moveTo(272, 0);
    c.lineTo(272, maxCH);
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
