// Query the element list
let list = document.getElementById("lista");

// Create a new link element
const linkElement = document.createElement("a");
linkElement.textContent = "Enlace";

// Obtain the first element of the list
const firstElement = list.firstElementChild("li");

// Remove the first element of the list
firstElement.textContent = "";

// Insert the new link element in the list
list.insertBefore(linkElement, firstElement);