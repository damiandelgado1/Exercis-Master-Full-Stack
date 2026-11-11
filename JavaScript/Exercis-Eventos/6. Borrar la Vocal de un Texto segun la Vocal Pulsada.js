// Query the "p" element and "button" element
let paragraph = document.querySelector("p");
let buttons = document.querySelectorAll("button");

// Iterate through the vowel buttons
buttons.forEach(button => {
    
    // Listen for the click event
    button.addEventListener("click", (event) => {
    
        // If the user clicks the "a" button
        if (event.currentTarget.textContent.trim() == "a") {
            
            // Remove the all ocurrences of the vowel "a" from the paragraph text
            paragraph.textContent = paragraph.textContent.replace(/a/gi, "");
    
        // If the user clicks the "e" button
        } else if (event.currentTarget.textContent.trim() == "e") {
            
            // Remove the all ocurrences of the vowel "e" from the paragraph text
            paragraph.textContent = paragraph.textContent.replace(/e/gi, "");
    
        // If the user clicks the "i" button
        } else if (event.currentTarget.textContent.trim() == "i") {
    
            // Remove the all ocurrences of the vowel "i" from the paragraph text
            paragraph.textContent = paragraph.textContent.replace(/i/gi, "");
    
        // If the user clicks the "o" button
        } else if (event.currentTarget.textContent.trim() == "o") {
    
            // Remove the all ocurrences of the vowel "o" from the paragraph text
            paragraph.textContent = paragraph.textContent.replace(/o/gi, "");
    
        // If the user clicks the "u" button
        } else if (event.currentTarget.textContent.trim() == "u") {
    
            // Remove the all ocurrences of the vowel "u" from the paragraph text
            paragraph.textContent = paragraph.textContent.replace(/u/gi, "");
    
        // If the paragraph text contains no vowels
        } else {
    
            // Indicate that the paragraph text has no vowels
            console.log("No hay vocales en el texto del parrafo");
        }
    });
});