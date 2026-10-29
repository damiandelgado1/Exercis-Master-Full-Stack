// Query the "p" elements
let paragraphs = document.querySelectorAll("p");

// Create a new element "p" with the text "hola yo soy el uno y medio"
const newParagraph = document.createElement("p");

// Select the second element "p"
const secondParagraph = document.querySelector("p")[1];

// Insert the new element "p" in the middle
paragraphs.insertBefore(newParagraph, secondParagraph);