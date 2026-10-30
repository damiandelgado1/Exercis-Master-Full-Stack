// Query the first element
let firstElement = document.querySelector("p");

// Verify if has the class "class"
if (firstElement.classList.contains("class")) {

    // If has the class, remove
    firstElement.classList.remove("class");

    console.log(firstElement);
} else {

    // If does not has the class, do nothing
    console.log(firstElement);
}