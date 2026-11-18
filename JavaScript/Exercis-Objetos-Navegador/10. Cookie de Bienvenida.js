// Query the text with hidden message of the page, the text field to enter the user name and button to save entered name by user
let welcomeMessage = document.querySelector(".mensajeBienvenida");
let enterName = document.querySelector(".ingresarNombre");
let saveName = document.querySelector(".guardarNombre");

// Create a object to save the visibility style
const visibilityMessage = {
    visibility: "visible"
}

// Read the visibility style of the object locally outside the event handler
const visibility = JSON.parse(localStorage.getItem("visibility"));

// Read the cookie and extract the name
let welcomeCookie = document.cookie.split("; ").reduce((acc, curr) => {
    const [key, value] = curr.split("=");
    acc[key] = value;

    return acc;
}, {});

const name = welcomeCookie.nombre || "";

// If the visibility style of the object exist
if (visibility && name) {

    // Apply the visibility style and the name of the user to the welcome message
    welcomeMessage.style.visibility = visibility.visibility;
    welcomeMessage.textContent += `${name}`;
}

// Listen for the clic event
saveName.addEventListener("click", (event) => {
    
    // Get the value of the text field
    const username = enterName.value;

    // If the value of the text field is empty
    if (username === "") {
        
        // Create a paragraph
        const infoMessage = document.createElement("p");
        
        // Add a message to the paragraph indicate what must enter a name to display message
        infoMessage.textContent = "Debe ingresar un Nombre para mostrar el Mensaje de Bienvenida";

        // Display the info message in the page
        document.body.appendChild(infoMessage);
    
    // If the value of the text field has a name entered by the user
    } else {

        // Create a cookie to storage the name entered by the user during 7 days
        document.cookie = `nombre=${username}; expires=Tue, 24 Nov 2026 11:20:40 GMT; path=/; SameSite=Lax`;
        
        // Save the visibility style of the welcome message locally
        localStorage.setItem("visibility", JSON.stringify(visibilityMessage));

        // Change the visibility of the welcome message
        welcomeMessage.style.visibility = visibility.visibility;

        // Add the name entered by the user to the welcome message
        welcomeMessage.textContent += `${username}`;

        // Clear the value of the text field
        enterName.value = "";
    }
});