// Query the "p" elements
let paragraphs = document.querySelectorAll("p");

// Select the last "p" element
const lastParagraph = paragraphs[paragraphs.length - 1];

// Add "class" attribute with value "blue"
lastParagraph.setAttribute("class", "blue");

console.log(lastParagraph);