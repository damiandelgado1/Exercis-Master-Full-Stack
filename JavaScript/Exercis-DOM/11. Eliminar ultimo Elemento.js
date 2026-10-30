// Query the "body" element
let myContainer = document.querySelector("body");

// Delete the last element
const lastElement = myContainer.lastElementChild;

if (lastElement) {
    lastElement.remove();

    console.log(lastElement);
}