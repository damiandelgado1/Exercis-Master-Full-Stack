// Query the empty list
let emptyList = document.querySelector(".listaVacia");

// Define the function to load page
const loadPage = performance.getEntriesByType("navigation")[0].type;

// If the load page use the "reload" method
if (loadPage === "reload") {
    
    // Create a asynchronous function to get a user's list
    async function getUserList() {
        
        // Wait that the user's list of the API to execute
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        // Create a variable to storage the user's list of the API with a JavaScript object
        const userList = await response.json();
        
        // Loop through the user's obtained from the API
        userList.forEach(user => {
            
            // Create a new list element to display the user with their name
            const userElement = document.createElement("li");
            
            // Add the user get to the list element
            userElement.textContent = `${user.name}`;
            
            // Add the new list element with the user and their name to the empty list
            emptyList.appendChild(userElement);
        });
    }

    // Call to the asynchronous function to display the user's list in the empty list
    getUserList();
}