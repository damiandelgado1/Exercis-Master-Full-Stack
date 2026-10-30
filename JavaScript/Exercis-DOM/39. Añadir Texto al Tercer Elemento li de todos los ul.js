// Query the third "li" element of the all "ul"
let lists = document.querySelectorAll("ul");

for (let list of lists) {
    
    // Obtain the third "li" element
    const thirdListElement = list.children[2];
    
    // Append the text "Modificado" to the third "li" element
    thirdListElement.textContent = "Modificado";
    
    console.log(thirdListElement);
}