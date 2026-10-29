// Query the elements of the list
let list = document.getElementById("lista");

// Create a new element
const newElement = document.createElement("li");

newElement.textContent = "Nuevo Elemento";

// Insert the new element in the list
list.insertBefore(newElement, list.firstChild);