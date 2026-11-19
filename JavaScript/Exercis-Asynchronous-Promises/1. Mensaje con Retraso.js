// Query the greeting button and the empty paragraph
let greetingButton = document.querySelector(".botonSaludar");
let emptyText = document.querySelector(".parrafoVacio");

// Listen for the click event on the greeting button
greetingButton.addEventListener("click", (event) => {

    // Create a asynchronous function to greeting
    async function greeting() {

        // Create a promise to greeting
        const greetingPromise = new Promise((resolve) => {
        
            // Wait 2 seconds
            const delayedMessage = window.setTimeout(() => {
                
                // Add the message "Hola" to the empty paragraph
                emptyText.textContent = "Hola";
                
                // Indicate that the promise was executed successfully
                resolve("Promesa ejecutada");
            }, 2000);
        });
    
        // Process the promise to greeting
        greetingPromise
    
            // If the promise is fulfilled, display that the promise was fulfilled
            .then((saludo) => console.log("La Promesa para Saludar se ejecuto", saludo));
    }

    greeting();
});