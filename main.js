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
    //Currently Player one (Square) definition
    let xx = 10;
    let yy = 60;
    let wwidth = 10;
    let hheight = 10;
    //Circle defined here:
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
            c.fillStyle = this.color;
            c.fill();
            //Parse values through to Pythagorean therom
            getDistance(this.x, this.y, xx, yy, this.radius);
        }
        this.update = function () {
            //Collisions
            if (this.x + this.radius > maxCW - 28 || this.x - this.radius < 40) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > maxCH || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    //Adjust Amount/speed/size/starting-position of circles
    const circleArray = [];
    function initCircle() {
        for (let i = 0; i < 10; i++) {
            let radius = Math.random() * 10 + 1;
            let x = 260;
            let y = 130
            let dx = Math.random() - 0.5 * 2;
            let dy = Math.random() - 0.5 * 2;
            circleArray.push(new Circle(x, y, dx, dy, radius));
        }
    }
    //Pythagorean theorem
    function getDistance(x1, y1, x2, y2, radius) {
        let xDistance = x2 - x1;
        let yDistance = y2 - y1;
        if (Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2)) < 10 + radius) {
            location.reload()
        }
        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, maxCW, maxCH); // Refresh page
        linePosition();
        sq(xx, yy, 10, 10);
        for (let i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }
    }
    //Pitch Layout
    function linePosition() {
        //End goal rectangle
        c.fillStyle = '#E1BC29';
        c.fillRect(275, 120, 20, 20);
        c.stroke();
        //left border
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
        c.stroke();
    }
    //Player + Player Collisions with Environment
    function sq(xx, yy, width, height) {
        this.width = wwidth;
        this.height = hheight;
        this.xx = xx;
        this.yy = yy;
        c.fillStyle = '#E1BC29';
        c.fillRect(xx, yy, width, height);
        c.stroke();
        if (xx > 300) {
            xx = 290 - 10;
            c.fillRect(xx, yy, width, height);
        }
        if (xx < 12) {
            xx = 12;
            c.fillRect(xx, yy, width, height);
        }
        if (yy < 12) {
            yy = height - 9;
            c.fillRect(xx, yy, width, height);
        }
        if (yy > maxCH - 10) {
            yy = maxCH - 15;
            c.fillRect(xx, yy, width, height);
        }
        if (xx > 270 && yy > 120) {
            location.reload();
        }
    }
    //Event Listener for arrow keys
    function moveIt(e) {
        addEventListener("keydown", function (e) {
            let keyPressed = e.keyCode || e.which;
            //left
            if (keyPressed == 37) {
                c.clearRect(0, 0, maxCW, maxCH);
                xx = xx - 0.2;
                c.fillRect(xx, yy, 20, 20);
            }
            //up
            else if (keyPressed == 38) {
                c.clearRect(0, 0, maxCW, maxCH);
                yy = yy - 0.2;
                c.fillRect(xx, yy, 20, 20);
            }
            //right
            else if (keyPressed == 39) {
                c.clearRect(0, 0, maxCW, maxCH);
                xx = xx + 0.2;
                c.fillRect(xx, yy, 20, 20);
            }
            //down
            else if (keyPressed == 40) {
                c.clearRect(0, 0, maxCW, maxCH);
                yy = yy + 0.2;
                c.fillRect(xx, yy, 20, 20);
            }
            return (xx, yy)
        });
    }
    initCircle();
    animate();
}

