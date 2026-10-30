// Query the "img" element
let images = document.querySelectorAll("img");

for (let img of images) {
    
    // Verify if has the class "img"
    if (img.classList.contains("img")) {
        
        // If has the class, remove the attribute "title"
        img.toggleAttribute("title");
    
        console.log(img);
    } else {
    
        // If does not has the class, do nothing
        console.log(img);
    }
}