// Query the execute button and the 2 empty paragraphs
let executeButton = document.querySelector(".botonEjecutar");
let firstEmptyParagraph = document.querySelector(".emptyParagraph1");
let secondEmptyParagraph = document.querySelector(".emptyParagraph2");

// Listen for the click event on the execute button
executeButton.addEventListener("click", (event) => {

    // Create the first promise to display a random operation
    const firstPromise = new Promise((resolve, reject) => {

        // Define a variable to display a random operation with the result "exito" and "error"
        const randomlyOperation = Math.random() < 0.5 ? "exito" : "error";

        // If the result of the random operation is "exito"
        if (randomlyOperation === "exito") {

            // Add the result "exito" to the first paragraph
            firstEmptyParagraph.textContent = "exito";
            
            // Indicate that the promise operation was successfully executed
            resolve("La operacion de la promesa se ejecuto con exito");

        // If the result of the random operation is "error"
        } else {
            
            // Add the result "error" to the first paragraph
            firstEmptyParagraph.textContent = "error";

            // Indicate that the pormise operation had an execution error
            reject("La operacion de la promesa tuvo un error en la ejecucion");
        }
    });

    // Process the first promise to display the operation result
    firstPromise
        // If the promise is fulfilled, display that the promise was fulfilled successfully
        .then(operationSucceeded => console.log("La promesa se cumplio con exito: ", operationSucceeded))
        // If the promise is rejected, display that the promise had an error
        .catch(operationFailed => console.log("La promesa tuvo un error: ", operationFailed));

    // Create the second promise to display an operation
    const secondPromise = new Promise((resolve) => {

        // Add the result "Operacion terminada" to the second paragraph
        secondEmptyParagraph.textContent = "Operacion terminada";

        // Execute the promise
        resolve();
    });

    // Process the promise to display of the operation result
    secondPromise
        // Display that the promise operation has finished, whether it was successful or failed
        .finally(() => console.log("La operacion de la promesa termino"));
});