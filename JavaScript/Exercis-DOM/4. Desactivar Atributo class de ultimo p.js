// Query "p" element with "class" attribute
let paragraphs = document.querySelectorAll("p[class]");

// Desactivate "class" attribute of the last "p"
const lastParagraph = paragraphs[paragraphs.length - 1];

lastParagraph.toggleAttribute("class");

console.log(lastParagraph);