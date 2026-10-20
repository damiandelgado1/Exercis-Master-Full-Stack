// Query second "p" element
let paragraphs = document.querySelectorAll("p")[1];

// Add "a" element with content "here" and that it points to "https://google.com"
const anchorElement = document.createElement("a");

anchorElement.textContent = "aqui";

anchorElement.setAttribute("href", "https://google.com");

paragraphs.appendChild(anchorElement);