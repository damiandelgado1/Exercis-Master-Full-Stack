// Query the "ul" element, "input" element to write text, "button" element to add a element and "button" element to remove a element
let unorderedList = document.getElementById("unorderedList");
let container = document.getElementById("container");
let elementInput = document.getElementById("elementInput");
let addButton = document.getElementById("addButton");
let saveButton = document.getElementById("saveButton");
let removeButtons = document.querySelectorAll(".removeButton");

// Listen for the click event to add a element
addButton.addEventListener("click", () => {

    // Display "input" element to write text
    container.style.display = "block";
});

// Listen for the click event to save element
saveButton.addEventListener("click", () => {

    console.log(saveButton);

    // Get the input value of the element
    const element = elementInput.value;

    // Check that the input value is not empty
    if (element.trim() == "") {
        return;
    }

    // Create the new element
    const newElement = document.createElement("li");

    // Add the value input in the new element
    newElement.textContent = element;

    // Add the button in the new element
    newElement.innerHTML += `<button class="removeButton"> ✕ </button>`;

    // Add the new element to the unordered list
    unorderedList.appendChild(newElement);

    // Clear the input field
    elementInput.value = "";

    // Hide the input field
    container.style.display = "none";
});

// Iterate through the buttons to remove the items from the unordered list
removeButtons.forEach(button => {
    
    // Listen for the click event to remove a element
    button.addEventListener("click", (event) => {
    
        // Remove the element of the unordered list
        event.target.parentElement.remove();
    });
});