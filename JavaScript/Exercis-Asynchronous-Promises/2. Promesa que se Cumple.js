// Query the load button and the empty paragraph
let loadButton = document.querySelector(".botonCargar");
let emptyParagraph = document.querySelector(".parrafoVacio");

// Listen for the click event on the load button
loadButton.addEventListener("click", (event) => {
    
    // Create a promises to load the message
    const promise = new Promise((resolve, reject) => {

        // Add the message "Cargando..." to the paragrah
        emptyParagraph.textContent = "Cargando...";
    
        // After 3 seconds
        const loadMessage = window.setTimeout(() => {

            // Change the paragraph message to "Datos cargados correctamente"
            emptyParagraph.textContent = "Datos cargados correctamente";

            // If the paragraph message is shown after 3 seconds
            if (loadMessage) {

                // Indicate that the promise was completed
                resolve("La promesa se completo");
            
            // If the message is not shown after 3 seconds
            } else {

                // Indicate that the promise was not completed
                reject("La promesa no se completo");
            }
        }, 3000);
    });

    // Process the promise to load the message
    promise
        // If the promise is fulfilled, display that the promises was fulfilled
        .then(valor => console.log("La promesa se completo: ", valor))
        // If the promise is rejected, display that the promises has an error
        .catch(error => console.log("La promesa no se completo: ", error));
});