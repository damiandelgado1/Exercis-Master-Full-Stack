// Query the start button and the empty paragraph
let startButton = document.querySelector(".botonIniciar");
let emptyParagraph = document.querySelector(".parrafoVacio");

// Listen for the click event on the start button
startButton.addEventListener("click", (event) => {
    
    // Create a promise to display simplified wait
    const simplifiedWait = new Promise((resolve) => {

        // Add the text "Paso 1" to the paragraph
        emptyParagraph.textContent = "Paso 1";
    
        // Wait 1 second
        const secondStep = window.setTimeout(() => {

            // Add the text "Paso 2" to the paragraph
            emptyParagraph.textContent = "Paso 2";

            // Wait 1 second
            const thirdStep = window.setTimeout(() => {
    
                // Add the text "Paso 3" to the paragraph
                emptyParagraph.textContent = "Paso 3";
                
                // Indicate that the simplified wait has completed
                resolve("La espera simplificada de la promesa se completo");
            }, 1000);
        }, 1000);
    });
    
    // Process the promise to display the simplified wait
    simplifiedWait
        // If the promise is fulfilled, display that the promise was fulfilled
        .then(waitCompleted => console.log("La espera simplificada se ejecuto: ", waitCompleted))
        // If the promise is not fulfilled, display that the promise was not fulfilled
        .catch(waitFailed => console.log("La espera simplificada no se ejecuto: ", waitFailed));
});