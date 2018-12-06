window.onload = function () {
    let canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');
    const maxCW = 300;
    const maxCH = 150;
    window.addEventListener('keydown', moveIt, true);

    let colorArray = [
        '#F0F7EE',
        '#C4D7F2',
        '#AFDEDC',
        '#91A8A4',
        '#000000'
    ];
    let controller;

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
    //=====================================================================================

    const circleArray = [];
    function initCircle() {
        for (let i = 0; i < 2; i++) {
            let radius = Math.random() * 10 + 1;  // Get a random 0-3 then add 1
            //var x = 40 + Math.random() * (maxCW - radius * 1) + radius;
            let x = Math.round(Math.random() * 220) + radius + 40; // between two numbers 40 - 272 
            let y = Math.round(Math.random() * maxCH - 30 - radius) + 20;
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
    //=====================================================================================//===================================================
    let xx = 10;
    let yy = 60;
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, maxCW, maxCH); // Refresh page
        linePosition();

        for (let i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }
        sq();
        //Detecting between two circles
        if (getDistance(circleArray[0].x, circleArray[0].y, circleArray[1].x, circleArray[1].y) < circleArray[0].radius + circleArray[1].radius - 2) {

            circleArray[0].color = "red";
            // alert("circles touched");
        }
        else {
            circleArray[0].color = "blue";
        }

        //console.log("Two Squares touching"); //square1 x square1 y square2 x, square2 x
    }
    initCircle();
    animate();
    //=====================================================================================//===================================================
    //Pitch Layout
    function linePosition() {

        //Start Lines
        //Start Square Position (Random)

        //End Square Position Doesn't need to move
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

    function sq() {
        let width = 10;
        let height = 10;
        c.fillStyle = 'rgba(255, 0, 0, 0.5)';
        c.fillRect(xx, yy, width, height);

        if (xx >= 270) {
            xx = maxCW - width;
            c.clearRect();
            c.fillRect(xx, yy, width, height);
        }
        if (xx <= 0) {
            xx = 0;
            clearRect();
            c.fillRect(xx, yy, width, height);
        }
        if (yy <= 0) {
            yy = 0;
            clearRect();
            c.fillRect(xx, yy, width, height);
        }
        if (yy >= 150) {
            yy = height;
            clearRect();
            c.fillRect(xx, yy, width, height);
        }
        if (xx <= 0 && yy <= 0) {
            c.clearRect();
            c.fillRect(xx, yy, width, height);
        }

    }
    //     if (xx + width > maxCW) {
    //         c.fillStyle = 'rgb(0,255,0)';
    //     }
    //     //Do some function stop it from breaking game
    // }
    // if (yy + height > maxCH) {
    //     //Do some function to stop it from going off screen
    // }

    function moveIt(e) {
        addEventListener("keydown", function (e) {
            let keyPressed = e.keyCode || e.which;
            //left
            if (keyPressed == 37) {
                c.clearRect(0, 0, maxCW, maxCH);
                xx = xx - 0.5;
                c.fillRect(xx, yy, 20, 20);
                this.console.log("I am left");

            }
            //up
            else if (keyPressed == 38) {
                c.clearRect(0, 0, maxCW, maxCH);
                yy = yy - 0.5;
                c.fillRect(xx, yy, 20, 20);
                this.console.log("I am up");

            }
            //right
            else if (keyPressed == 39) {
                c.clearRect(0, 0, maxCW, maxCH);
                xx = xx + 0.5;
                c.fillRect(xx, yy, 20, 20);
                this.console.log("I am right");

            }
            //down
            else if (keyPressed == 40) {
                c.clearRect(0, 0, maxCW, maxCH);
                yy = yy + 0.5;
                c.fillRect(xx, yy, 20, 20);
                this.console.log("i am down!");

            }
            //https://www.youtube.com/watch?v=8ZPlNOzLrdw
            // Extra Combitions of the keys pressed
            //up + down, left + right, up+left, up+right, down+left, down+right

        });
    }

}