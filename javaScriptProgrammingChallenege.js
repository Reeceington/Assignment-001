"use strict";

var imgElement;
var intervalSpeed = 7.5;
var speedX = 5;
var speedY = 5; 
var xPosition = 10;   
var yPosition = 10; 
var clientHeight =0;
var clientWidth =0;

function Start(){
	imgElement = document.getElementById("img");
    console.log("height ", window.visualViewport.height); 
    console.log("width ", window.visualViewport.width);

}
function Update(){
	console.log("This function is executed every " + intervalSpeed + " milliseconds");
	imgElement.style.left = imgElement.offsetLeft + speedX + "px";
    imgElement.style.top = imgElement.offsetTop + speedY + "px";
}

setInterval( () => {
    if (xPosition + imgElement.clientWidth >= window.innerWidth || xPosition <= 0){
        speedX = -speedX 
    }
    if (yPosition + imgElement.clientHeight >= window.innerHeight || yPosition <= 0){
        speedY = -speedY
    }
xPosition += speedX;
yPosition += speedY;
Update()
})

