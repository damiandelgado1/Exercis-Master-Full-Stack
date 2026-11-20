// Query the empty box
let emptyBox = document.querySelector(".cajaVacia");

// Define the load page function
const loadPage = performance.getEntriesByType("navigation")[0].type;

// If the load page use the "reload" method
if (loadPage == "reload") {
    
    // Create a asynchronous function to obtain the name, the email and the city of the user
    async function userCard() {
        
        // Wait the request to obtain the name, the email and the city of the user to the API is execute
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        // Create a variable to storage the name, the email and the city of the API in a JavaScript object
        const user = await response.json();
        
        // Add the name, the email and the city of the user to the empty box
        emptyBox.textContent = `${user[0].name} ${user[0].email} ${user[0].city}`;
    }

    // Call the asynchronous function to display the name, the email and the city of the user in the empty box
    userCard();
}