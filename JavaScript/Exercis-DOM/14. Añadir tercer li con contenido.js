// Query the "li" elements within a "ul"
let listElement = document.querySelectorAll("ul li");

// Add third "li" with content "tercer elemento"
const thirdElement = listElement.appendChild("li");

thirdElement.textContent("tercer elemento");