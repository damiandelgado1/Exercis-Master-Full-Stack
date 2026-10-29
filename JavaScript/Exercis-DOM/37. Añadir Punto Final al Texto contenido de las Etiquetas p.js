// Query the "p" tags
let paragraphs = document.querySelectorAll("p");

// Append a period to the content of the "p" tags
paragraphs.forEach(paragraph => {
    paragraph.textContent = paragraph.textContent.trim() + ".";
});