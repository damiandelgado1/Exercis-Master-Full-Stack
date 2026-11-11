// Query the "p" element and "button" element to clear content of the paragraph
let paragraph = document.querySelector("p");
let clearButton = document.getElementById("clearButton");

// Listen for the key event
document.addEventListener("keydown", (event) => {

    // Get the key presses by the user
    const key = event.key;

    // If the user presses the letter key
    if (/^[a-zA-ZñÑ]$/.test(key)) {
        
        // Add the letter in the content of the paragraph
        paragraph.textContent += key;
        
    // If does not user presses the letter key
    } else {

        // Indicate the key presses is not valid
        console.log("La tecla presionada no es valida");
    }
});

// Listen for the click event
clearButton.addEventListener("click", () => {

    // Clear the content of the paragraph
    paragraph.textContent = "";
});