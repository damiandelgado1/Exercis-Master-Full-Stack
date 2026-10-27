// Query the "li" element of the orderer list
let listElement = document.querySelectorAll("li");

// Create a new "li" element
const newListElement = createElement("li");

newListElement.textContent = "Elemento insertado";

// Select the second element in the orderer list
const secondElement = listElement.children[1];

// Insert the new element before the second element
listElement.insertBefore(newListElement, secondElement);