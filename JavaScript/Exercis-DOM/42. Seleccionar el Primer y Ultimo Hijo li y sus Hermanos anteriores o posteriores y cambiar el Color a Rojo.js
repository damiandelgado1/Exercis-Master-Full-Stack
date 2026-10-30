// Query the first and last "li" child element and their previous and next siblings within unordered lists
let firstLi = document.querySelector("ul li:first-child");
let lastLi = document.querySelector("ul li:last-child");

const firstLiPreviousSibling = firstLi.previousElementSibling;
const firstLiNextSibling = firstLi.nextElementSibling;
const lastLiPreviousSibling = lastLi.previousElementSibling;
const lastLiNextSibling = lastLi.nextElementSibling;

// Change the color of the first and last "li" child element, as well as their previous and next siblings, to red
if (firstLi) {

    firstLi.style.color = "red";

} if (lastLi) {

    lastLi.style.color = "red";

} if (firstLiPreviousSibling) {

    firstLiPreviousSibling.style.color = "red";

} if (firstLiNextSibling) {

    firstLiNextSibling.style.color = "red";

} if (lastLiPreviousSibling) {

    lastLiPreviousSibling.style.color = "red";

} if (lastLiNextSibling) {
    
    lastLiNextSibling.style.color = "red";

} else {
    console.log(firstLi);
    console.log(lastLi);
    console.log(firstLiPreviousSibling);
    console.log(firstLiNextSibling);
    console.log(lastLiPreviousSibling);
    console.log(lastLiNextSibling);
}