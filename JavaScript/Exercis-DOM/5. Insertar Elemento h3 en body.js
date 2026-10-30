// Query "body" element
let body = document.querySelector("body");

// Create "h3" element
const miTitulo = document.createElement("h3");

// Insert "h3" element in body
miTitulo.textContent = "Encabezado h3";

body.appendChild(miTitulo);