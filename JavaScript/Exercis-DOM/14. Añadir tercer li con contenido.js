// Query the "li" elements within a "ul"
let listElement = document.querySelectorAll("ul");

// Add third "li" with content "tercer elemento"
for (let list of listElement) {

    // Create third "li" element
    const thirdElement = document.createElement("li");
    
    // Append content in third "li" element
    thirdElement.textContent = "tercer elemento";
    
    list.appendChild(thirdElement);
}