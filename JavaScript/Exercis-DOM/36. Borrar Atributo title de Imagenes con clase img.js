// Query the "img" element
let images = document.querySelectorAll("img");

// Verify if has the class "img"
if (images.classList.contains("img")) {
    
    // If has the class, remove the attribute "title"
    images.toggleAttribute("title");

    console.log(images);
} else {

    // If does not has the class, do nothing
    console.log(images);
}