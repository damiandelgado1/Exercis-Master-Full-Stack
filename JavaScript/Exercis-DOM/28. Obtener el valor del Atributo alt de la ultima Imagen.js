// Query the "img" elements
let images = document.querySelectorAll("img");

// Select the last "img" element
const lastImage = images[images.length - 1];

// Obtain the value of the alt attribute
lastImage.getAttribute("alt");

console.log(lastImage);