// Query the empty paragraph
let emptyParagraph = document.querySelector(".parrafoVacio");

// Get the number of times the user visited pages
let numberTimesVisitedPage = history.length;

// Define variable for storage value of the number of times the user visited pages
let data = [
    `Cantidad de veces que el Usuario visito la Pagina: ${numberTimesVisitedPage}`
]

// Display the number of times the user visited pages in the empty paragraph
emptyParagraph.textContent = `${data}`;