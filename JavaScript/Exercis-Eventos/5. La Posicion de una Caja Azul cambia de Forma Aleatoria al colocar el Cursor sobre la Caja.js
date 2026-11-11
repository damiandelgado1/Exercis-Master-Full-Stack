// Query the box element
let blueBox = document.querySelector(".cajaAzul");

// Define the width, height and position of the box
blueBox.style.width = "100px";
blueBox.style.height = "100px";
blueBox.style.left = "10px";
blueBox.style.top = "10px";

// Listen for the mouse event
blueBox.addEventListener("mouseenter", (event) => {

    // Whenever the mouse hovers over te box
    let positionLeft = Math.random() * 500;
    let positionTop = Math.random() * 500;

    // Change the box position randomly
    blueBox.style.left = `${positionLeft}px`;
    blueBox.style.top = `${positionTop}px`;
});