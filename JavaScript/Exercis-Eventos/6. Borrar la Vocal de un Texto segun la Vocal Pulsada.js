// Query the "p" element and "button" element
let paragraph = document.querySelector("p");
let buttons = document.querySelectorAll("button");

// Iterate through the vowel buttons
buttons.forEach(button => {
    
    // Listen for the click event
    button.addEventListener("click", (event) => {
    
        // If the user clicks the "a" button
        if (event.currentTarget.textContent.trim() == "A") {
            
            // Remove the all ocurrences of the vowel "a" from the paragraph text
            paragraph.textContent = paragraph.textContent.replace(/A/gi, "");
    
        // If the user clicks the "e" button
        } else if (event.currentTarget.textContent.trim() == "E") {
            
            // Remove the all ocurrences of the vowel "e" from the paragraph text
            paragraph.textContent = paragraph.textContent.replace(/E/gi, "");
    
        // If the user clicks the "i" button
        } else if (event.currentTarget.textContent.trim() == "I") {
    
            // Remove the all ocurrences of the vowel "i" from the paragraph text
            paragraph.textContent = paragraph.textContent.replace(/I/gi, "");
    
        // If the user clicks the "o" button
        } else if (event.currentTarget.textContent.trim() == "O") {
    
            // Remove the all ocurrences of the vowel "o" from the paragraph text
            paragraph.textContent = paragraph.textContent.replace(/O/gi, "");
    
        // If the user clicks the "u" button
        } else if (event.currentTarget.textContent.trim() == "U") {
    
            // Remove the all ocurrences of the vowel "u" from the paragraph text
            paragraph.textContent = paragraph.textContent.replace(/U/gi, "");
    
        // If the paragraph text contains no vowels
        } else {
    
            // Indicate that the paragraph text has no vowels
            console.log("No hay vocales en el texto del parrafo");
        }
    });
});