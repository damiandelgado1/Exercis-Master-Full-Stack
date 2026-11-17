// Query the hidden message element, the text field to enter the user name and the button to sent name of the user name
let hiddenMessage = document.querySelector(".mensajeOculto");
let enterName = document.querySelector(".ingresarNombre");
let saveName = document.querySelector(".guardarNombre");

// Listen for the clic event to send the user name
saveName.addEventListener("click", (event) => {
    
    // Get the value entered in the text field
    const name = enterName.value;

    // If the text field does not have a value
    if (name === "") {

        // Create a paragraph
        let paragraph = document.createElement("p");

        // Add content to the paragraph indicating that the user must enter a name to display the welcome message
        paragraph.textContent = "Debe ingresar el nombre para mostrar el mensaje de bienvenida";
        
    // If the text field has a value
    } else {

        // Define the cookie to save the entered name for 7 days
        document.cookie = `nombre=${name}; expires=Mon, 23 Nov 2026 23 20:07:45 GMT; path=/; SameSite=Lax`;
        
        // Remove the hidden attribute from the message element
        hiddenMessage.removeAttribute("hidden");

        // Add the entered user name to the welcome message
        hiddenMessage.textContent += name;
    }
});