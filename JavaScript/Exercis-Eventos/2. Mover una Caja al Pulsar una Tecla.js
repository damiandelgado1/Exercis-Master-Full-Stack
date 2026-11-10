// Query the box element
let box = document.getElementById("caja");

// Define the initial position on the X and Y axes
box.style.left = "10px";
box.style.top = "10px";

// Listen for the key event
document.addEventListener("keydown", (event) => {

    // Get the position on the X and Y axes
    let ejeX = parseInt(box.style.left);
    let ejeY = parseInt(box.style.top);
    
    const key = event.key;

    switch (key) {

        // If the user presses the Up Arrow key
        case "ArrowUp":

            // The box moves 10px upward
            ejeY -= 10;
            break;
        
        // If the user presses the Down Arrow key
        case "ArrowDown":

            // The box moves 10 downward
            ejeY += 10;
            break;
    
        // If the user presses the Right Arrow key
        case "ArrowRight":
        
            // The box moves 10px to the right
            ejeX += 10;
            break;
    
        // If the user presses the Left Arrow key
        case "ArrowLeft":

            // The box moves 10px to the left
            ejeX -= 10;
            break;

        default:
            return;
    }

    box.style.left = ejeX + "px";
    box.style.top = ejeY + "px";
});