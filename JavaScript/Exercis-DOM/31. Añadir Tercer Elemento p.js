// Query the "p" elements
let paragraphs = document.getElementById("parrafos");

// Create a third element "p" with the text "soy el tres"
const thirdParagraph = document.createElement("p");

thirdParagraph.textContent = "soy el tres";

// Add the third element "p" in the "p" elements
paragraphs.appendChild(thirdParagraph);