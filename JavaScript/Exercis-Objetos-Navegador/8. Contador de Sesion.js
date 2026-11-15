// Query the empty paragraph
let emptyParagraph = document.querySelector(".parrafoVacio");

// Initialize the counter from the current session
let counter = Number(sessionStorage.getItem("reload")) || 0;

// Detect if the page was caused by a reload
const reloadPage = performance.getEntriesByType("navigation")[0].type;

// If the page reload in the current session was performed using the "reload" method
if (reloadPage === "reload") {

    // Increase the counter value with by the new page reload
    counter++;

    // Save the counter value with the number times the user page reload in the current session
    sessionStorage.setItem("reload", counter);

    // Display the counter with the number of the times the user reloaded page in the current session in the empty paragraph
    emptyParagraph.textContent = `Numero de veces que se recargo la pagina con el metodo "reload": ${counter}`;

// If the page reload in the current session was not performed using the "reload" method
} else {

    // Display the counter with the number of times the user reloaded the page in the current session in the empty paragraph without using the "reload" method
    emptyParagraph.textContent = `Numero de veces que se recargo la pagina sin el metodo "reload": ${counter}`;
}