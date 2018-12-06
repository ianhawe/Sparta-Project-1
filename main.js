
window.onload = function () {
    let canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');
    const maxCW = 300;
    const maxCH = 150;
    window.addEventListener('keydown', moveIt, true);

    let colorArray = [
        '#3BB273',
        '#7768AE',
        '#E1BC29',
        '#4D9DE0',
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
            // c.strokeStyle = "black";
            // c.stroke();
            c.fillStyle = this.color;
            c.fill();
            //Parse to getDistance
            getDistance(this.x, this.y, xx, yy, this.radius);
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
        for (let i = 0; i < Math.random() * 20 + 1; i++) {
            let radius = Math.random() * 10 + 1;  // Get a random 0-3 then add 1
            //var x = 40 + Math.random() * (maxCW - radius * 1) + radius;
            let x = 260; // between two numbers 40 - 272 
            let y = 130
            let dx = Math.random() - 0.5 * 2; // Velocity which is the amount of pixels per movement
            let dy = Math.random() - 0.5 * 2;
            circleArray.push(new Circle(x, y, dx, dy, radius));
        }
    }

    function getDistance(x1, y1, x2, y2, radius) {
        let xDistance = x2 - x1;
        let yDistance = y2 - y1;
        if (Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2)) < 10 + radius) {
            location.reload()

        }
        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }
    //=====================================================================================//===================================================
    let xx = 10;
    let yy = 60;
    let wwidth = 10;
    let hheight = 10;
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, maxCW, maxCH); // Refresh page
        linePosition();
        sq(xx, yy, 10, 10);

        for (let i = 0; i < circleArray.length; i++) {

            // if (getDistance(circleArray[i].x, circleArray[i].y, xx, yy) < circleArray[i].radius + sq.height) {
            //     // circleAr
            //     //     alert("Square has touched ball!!!@!£!@£");
            //     //     console.log("why this no touch???!?@!?@?");
            //     // }
            //     // if (getDistance(circleArray[i].x, circleArray[i].y, circleArray[i + 1].x, circleArray[i + 1].y) < circleArray[i].radius + circleArray[i + 1].radius - 2) {
            //     //     circleArray[i].color = "red";
            //     // circleArray[i].dx = (-circleArray[i]) * 1.1;
            //     console.log("hello")
            //     // ball.dx = (-ball.dx - 10) * 1.1;
            //     // player1.dx = -player1.dx + 2
            //     // alert("circles touched");
            // }
            // else {
            //     circleArray[i].color = "blue";
            // }
            circleArray[i].update();
        }
    }
    initCircle();
    animate();
    //=====================================================================================//===================================================
    //Pitch Layout
    function linePosition() {

        //Start Lines
        //Start Square Position (Random)

        //End Square Position Doesn't need to move
        c.fillStyle = '#E1BC29';
        c.fillRect(275, 120, 20, 20);
        //c.strokeStyle = "black";
        c.stroke();

        c.beginPath();
        c.moveTo(0, maxCH);
        c.lineTo(0, 0);
        c.strokeStyle = "black"
        c.stroke();

        c.beginPath();
        c.moveTo(maxCW, 0);
        c.lineTo(maxCW, maxCH);
        c.strokeStyle = "black"
        c.stroke();

        //horizontal up, down
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(maxCW, 0);
        c.strokeStyle = "black"
        c.stroke();

        c.beginPath();
        c.moveTo(0, maxCH);
        c.lineTo(maxCW, maxCH);
        c.strokeStyle = "black"
        c.stroke();

        //Start Line
        c.beginPath();
        c.moveTo(40, 149);
        c.lineTo(40, 0);
        c.strokeStyle = "#E1BC29"
        c.stroke();

        //right
        c.beginPath();
        c.moveTo(272, 0);
        c.lineTo(272, maxCH);
        //c.strokeStyle = "red"
        c.stroke();
    }


    // let xx = 10;
    // let yy = 60;
    // let wwidth = 10;
    // let hheight = 10;
    function sq(xx, yy, width, height) {
        this.width = wwidth;
        this.height = hheight;
        this.xx = xx;
        this.yy = yy;
        c.fillStyle = '#E1BC29';
        c.fillRect(xx, yy, width, height);
        c.stroke();
        if (xx > 290) {
            xx = maxCW - width - 10;
            c.clearRect();
            c.fillRect(xx, yy, width, height);

        }
        if (xx <= 0) {
            xx = 0;
            clearRect();
            c.fillRect(xx, yy, width, height);
        }
        if (yy <= 0) {
            yy = maxCH - height; // height-9 = block side
            clearRect();
            c.fillRect(xx, yy, width, height);
        }
        if (yy >= 150) {
            yy = height - 9; // 150 -9
            clearRect();
            c.fillRect(xx, yy, width, height);
        }

        if (xx >= 280 && yy >= 120) {
            // clearRect(0, 0, maxCW, maxCH);
            // window.cancelAnimationFrame();

            console.log("point reached");
            //   c.clearRect(0, 0, canvas.width, canvas.height);
            //   c.cancelAnimationFrame(animate);

            location.reload();
            // cancelAnimationFrame(animate);
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
                xx = xx - 0.2;
                c.fillRect(xx, yy, 20, 20);
                this.console.log("I am left");
            }
            //up
            else if (keyPressed == 38) {
                c.clearRect(0, 0, maxCW, maxCH);
                yy = yy - 0.2;
                c.fillRect(xx, yy, 20, 20);
                this.console.log("I am up");
            }
            //right
            else if (keyPressed == 39) {
                c.clearRect(0, 0, maxCW, maxCH);
                xx = xx + 0.2;
                c.fillRect(xx, yy, 20, 20);
                this.console.log("I am right");
            }
            //down
            else if (keyPressed == 40) {
                c.clearRect(0, 0, maxCW, maxCH);
                yy = yy + 0.2;
                c.fillRect(xx, yy, 20, 20);
                this.console.log("i am down!");
            }
        });
    }

}


 //Detecting between two circles
        // if (getDistance(circleArray[0].x, circleArray[0].y, circleArray[1].x, circleArray[1].y) < circleArray[0].radius + circleArray[1].radius - 2) {
        //     circleArray[0].color = "red";
        //     // alert("circles touched");
        // }
        // else {
        //     circleArray[0].color = "blue";
        // }

        //console.log("Two Squares touching"); //square1 x square1 y square2 x, square2 x

        //  if (getDistance(circleArray[i].x, circleArray[i].y, sq.width, sq.height) < circleArray[i].radius + sq.height * 2) {
        //         // circleAr
        //         alert("Square has touched ball");
        //         console.log("why this no touch???");
        //     }
