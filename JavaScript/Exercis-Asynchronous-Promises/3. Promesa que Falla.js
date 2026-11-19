// Query the try your luck button and the empty paragraph
let tryYourLuckyButton = document.querySelector(".probarSuerte");
let emptyParagraph = document.querySelector(".parrafoVacio");

// Listen for the click event on the try your luck button
tryYourLuckyButton.addEventListener("click", (event) => {

    // Create a promise to try your luck
    const promise = new Promise((resolve, reject) => {

        // Wait 1 second
        const messageState = window.setTimeout(() => {

            // Define a variable that randomly shows "si" 50% of the time and "no" 50% of the time
            const randomlyState = Math.random() < 0.5 ? "si" : "no";

            // If the random value of the variables is "si"
            if (randomlyState === "si") {

                // Add the message "Operacion existosa" to the paragraph
                emptyParagraph.textContent = "Operacion exitosa";
            
                // Indicate that the promise was executed successfully
                resolve("La promesa se ejecuto exitosamente");
            
            // If the random value of the variable is "no"
            } else {

                // Add the message "Ha ocurrido un error" to the paragraph and display it on the page
                emptyParagraph.textContent = "Ha ocurrido un error";

                // Indicate that the promise was not executed successfully
                reject("La promesa no se ejecuto exitosamente");
            }
        }, 1000);
    });
            
    // Process the promise to load the message
    promise
        // If the promise is fulfilled, display that the promise was fulfilled
        .then(message => console.log("La promesa se cumplio: ", message))
        // If the promise is not fulfilled, display that the promise was not fulfilled
        .catch(message => console.log("La promesa no se cumplio: ", message));
});