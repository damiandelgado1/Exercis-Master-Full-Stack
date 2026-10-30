// Query the first and last "li" child element and their previous and next siblings within unordered lists
let firstLi = document.querySelector("ul > li:first-child");
let lastLi = document.querySelector("ul > li:last-child");

const firstLiPreviousSibling = firstLi.previousElementSibling;
const firstLiNextSibling = firstLi.nextElementSibling;
const lastLiPreviousSibling = lastLi.previousElementSibling;
const lastLiNextSibling = lastLi.nextElementSibling;

// Change the color of the first and last "li" child element, as well as their previous and next siblings, to red
firstLi.style.color = "red";
lastLi.style.color = "red";
firstLiPreviousSibling.style.color = "red";
firstLiNextSibling.style.color = "red";
lastLiPreviousSibling.style.color = "red";
lastLiNextSibling.style.color = "red";