// Query all "p" elements with class "preparado"
let paragraphs = document.getElementsByClassName("preparado");

for (let paragraph of paragraphs) {
    
    if (paragraph.classList.contains("preparado")) {
        
        // Include the class "porelasterisco" in the all "p"
        paragraph.classList.add("porelasterisco");
        
        console.log(paragraph);
    }
}