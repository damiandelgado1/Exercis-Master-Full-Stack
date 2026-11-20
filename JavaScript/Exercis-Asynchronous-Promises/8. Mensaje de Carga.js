// Query the load user's button, the empty paragraph and the empty list
let loadButton = document.querySelector(".botonCarga");
let emptyParagraph = document.querySelector(".parrafoVacio");
let emptyList = document.querySelector(".listaVacia");

// Listen for the clic event to load user's
loadButton.addEventListener("click", (event) => {
    
    // Create a asynchronous function to obtain the user's list
    async function getUserList() {
        
        // Wait the resquest the user's list of the API to execute
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        // Create a variable to storage the user's list obtain of the API with a JavaScript object
        const userList = await response.json();

        // Add the text "Cargando..." to the paragraph
        emptyParagraph.textContent = "Cargando...";
        
        // Wait 3 seconds
        const loadMessage = window.setTimeout(() => {            
            
            // Remove the text "Cargando..." of the paragraph
            emptyParagraph.textContent = "";

            // Loop through the user's of the user's list obtained from the API
            userList.forEach(user => {
                
                // Create a new list element to display the user with their name
                const userElement = document.createElement("li");
                
                // Add the user obtained to the list element
                userElement.textContent = `${user.name}`;
                
                // Add the new list element with the user and their name to the empty list
                emptyList.appendChild(userElement);
            });
        }, 3000);
    }

    // Call to the asynchronous function to display the user's list to the empty list
    getUserList();
});