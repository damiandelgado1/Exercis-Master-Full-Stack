// Query the green box element and red box element
let redBox = document.querySelector(".cajaRoja");
let greenBox = document.querySelector(".cajaVerde");

// Define the width of the green box and red box
redBox.style.width = "10px";
redBox.style.height = "40px";
greenBox.style.width = "10px";
greenBox.style.height = "40px";

// Define option for disabled presses key was a box win
let redBoxWinner = false;
let greenBoxWinner = false;

// Listen for the key event
document.addEventListener("keydown", (event) => {

    // Get the key presses by the user
    const key = event.key;

    // Convert the value of the width of the green box and red box in numeric value
    let widthRedBox = parseInt(redBox.style.width);
    let widthGreenBox = parseInt(greenBox.style.width);

    // If the press key of the letter "A"
    if (key === "A") {

        // The green box increases your width 5px
        widthGreenBox += 5;

        greenBox.style.width = `${widthGreenBox}px`;

        // If the green box has 500px of width
        if (parseInt(greenBox.style.width) >= 500) {

            // Desactivate the clicks of the key of the letter "A"
            greenBoxWinner = true;
        
            // Indicate the green box win
            console.log("GANA VERDE");
        }
    }

    // If the press key of the letter "Ñ"
    if (key === "Ñ") {

        // The red box increases your width 5px
        widthRedBox += 5;

        redBox.style.width = `${widthRedBox}px`;
        
        // If the red box has 500px of width
        if (parseInt(redBox.style.width) >= 500) {

            // Desactivate the clicks of the key of the letter "Ñ"
            redBoxWinner = true;

            // Indicate the red box win
            console.log("GANA ROJO");
        }
    }
});