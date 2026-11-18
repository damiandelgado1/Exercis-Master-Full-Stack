// Query the button to open window and the button to close window
let openWindow = document.querySelector(".abrirVentana");
let closeWindow = document.querySelector(".cerrarVentana");

// Define the reference variable to open new window
let newWindow;

// Listen for the clic event to open a new window
openWindow.addEventListener("click", () => {

    // Open the new window with web page, with a width of 400px and a height of 300px
    newWindow = window.open("nueva ventana.html", "_blank", "width=400, height=300");

    // Display the new window open
    console.log("Nueva ventana abierta: ", newWindow);
});

// Listen for the clic event to close open window
closeWindow.addEventListener("click", () => {
    
    // Close the new window open
    newWindow.close();
    
    // Display the window close
    console.log("Ventana cerrada: ", newWindow);
});