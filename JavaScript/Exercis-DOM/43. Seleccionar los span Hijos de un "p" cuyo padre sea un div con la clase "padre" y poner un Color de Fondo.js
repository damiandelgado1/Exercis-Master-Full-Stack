// Query all "span" elements inside a "p" element whose parent is a "div" with the class "parent"
let span = document.querySelectorAll("div.padre > p > span");

// Query the "div" element with the class "padre"
let parentDiv = document.querySelector("div.padre");

// Update the "div" styles by changing its background color to blue
parentDiv.style.backgroundColor = "blue";