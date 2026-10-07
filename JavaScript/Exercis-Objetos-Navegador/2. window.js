// Query the element with class "screen"
let window = document.getElementsByClassName(".screen");

// List Clic event
document.addEventListener('click', (event) => {

    // Assign a width and height
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Display the data in the Page
    console.log(`${width} ${height}`); 

    // Evaluate the width and height
    
    // If the height is minor 800px
    if (width < 800) {

        // Display "window is minor"
        console.log(`La ventana es menor`);
    
    // If not the height is equal or major
    } else {

        // Display "window is major"
        console.log(`La ventana es mayor`);
    }        
});