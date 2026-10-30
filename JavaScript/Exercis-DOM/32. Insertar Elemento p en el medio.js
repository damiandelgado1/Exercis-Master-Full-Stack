// Query the "p" elements
let paragraphs = document.getElementById("parrafos");

// Select the second element "p"
const secondParagraph = paragraphs.children[1];

// Create a new element "p" with the text "hola yo soy el uno y medio"
const newParagraph = document.createElement("p");

newParagraph.textContent = "hola yo soy el uno y medio";

// Insert the new element "p" in the middle
paragraphs.insertBefore(newParagraph, secondParagraph);