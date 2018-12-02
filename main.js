let canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
//x y width height


//Class File

//Mouse events

//Circle Class
//=====================================================================================

//=====================================================================================

//Function to define Circle variables
//=====================================================================================
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

//Start Square Position (Random)
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(10, 60, 20, 20);
//Start Line

c.beginPath();
c.moveTo(40, 200);
c.lineTo(40, 0);
c.strokeStyle = "#00ff00"
c.stroke();

//End Square Position (Random)
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(275, 60, 20, 20);

//End Position Line
// c.beginPath();
// c.moveTo(270, 200);
// c.lineTo(270, 0);
// c.strokeStyle = "#00ff00"
// c.stroke();

//Box Around End

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




// c.beginPath();
// c.moveTo();
// c.lineTo();
// c.strokeStyle = "orange";
// c.stroke();

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
