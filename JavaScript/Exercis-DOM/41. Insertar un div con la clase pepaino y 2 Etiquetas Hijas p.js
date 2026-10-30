// Query the "body" element
let body = document.querySelector("body");

// Create a "div" element with class "pepaino"
const div = document.createElement("div");

div.classList.add("pepaino");

// Append a border with red color to the "div" element
div.style.border = "2px solid red";

// Create 2 tags child "p"
const firstParagraph = document.createElement("p");
const secondParagraph = document.createElement("p");

// Insert the 2 "p" tags in the "div"
div.appendChild(firstParagraph);
div.appendChild(secondParagraph);

// Append the class of the "div" at the first "p"
div.classList.forEach(clase => {
    firstParagraph.classList.add(clase);
});

body.appendChild(div);

// Append the border color of the "div" as class at the second "p"
const divStyles = window.getComputedStyle(div);
const borderColor = divStyles.borderColor;

const colorClass = borderColor.replace(/[(), ]/g, "-");

secondParagraph.classList.add(colorClass);

console.log(body);