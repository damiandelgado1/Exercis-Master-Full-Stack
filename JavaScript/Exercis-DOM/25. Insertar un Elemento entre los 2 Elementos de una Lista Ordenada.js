// Query the "li" element of the orderer list
let listElement = document.querySelectorAll("ol");

for (let list of listElement) {
    
    // Select the second element in the orderer list
    const secondElement = list.children[1];
    
    // Create a new "li" element
    const newListElement = document.createElement("li");
    
    newListElement.textContent = "Elemento insertado";
    
    // Insert the new element before the second element
    list.insertBefore(newListElement, secondElement);
}