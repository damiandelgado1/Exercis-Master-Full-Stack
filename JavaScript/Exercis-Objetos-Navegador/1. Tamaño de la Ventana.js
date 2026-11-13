// Query the empty paragraph
let paragraph = document.querySelector("p");

// Define a the function to get the values width and height visible of the browser area
function updateSize() {

    // Get the values width and height actualls of the visible area of the browser
    let paragraphWidth = window.innerWidth;
    let paragraphHeight = window.innerHeight;
    
    // Display the width and height values in the paragraph
    paragraph.textContent = `Ancho: ${paragraphWidth}px, Alto: ${paragraphHeight}px`;
}

// Display values upon loading
updateSize();

// Define event to resize the page
window.addEventListener("resize", updateSize);