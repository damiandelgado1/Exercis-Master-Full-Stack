// Query the "body" element
let myContainer = document.querySelector("body");

// Delete the last element
const lastElement = myContainer.lastElement;

if (lastElement) {
    lastElement.remove();
}