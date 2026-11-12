// Query the "ul" element, "input" element for enter text to the new element, "button" element for add a element, "button" element for remove a element
let ul = document.querySelector("ul");
let elementInput = document.querySelector(".elementInput");
let addButton = document.querySelector(".addButton");

// Listen for the click event for add a element
addButton.addEventListener("click", (event) => {

    // Create a new element
    const newElement = document.createElement("li");
    
    // Get the value of the input
    let textElement = elementInput.value;
    
    // Verify that the value of the input is not empty
    if (textElement === "") {
        return;
    }

    // Add the value of the input to the text of the new element
    newElement.textContent = textElement;

    // Add a button to the new element
    newElement.innerHTML += `<button class="removeButton"> ✕ </button>`;

    // Add the new element to the unordered list
    ul.appendChild(newElement);

    // Clear the value input
    elementInput.value = "";
});

// Listen for the click event for remove a element
ul.addEventListener("click", (event) => {

    // Verify if a the element has the class "removeButton"
    if (event.target.classList.contains("removeButton")) {
        
        // Remove the element of the unordered list
        event.target.parentElement.remove();

    };
});