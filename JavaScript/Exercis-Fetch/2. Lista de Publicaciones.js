// Query the empty list
let emptyList = document.querySelector(".listaVacia");

// Define the load page function
const loadPage = performance.getEntriesByType("navigation")[0].type;

// If the load page use the "reload" method
if (loadPage == "reload") {
    
    // Create a asynchronous function to display the first 10 post
    async function getFirstTenPosts() {
        
        // Wait the request to obtain the first 10 posts to the API is execute
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        
        // Create a variable to storage the first 10 posts with their title of the API in a JavaScript object
        const firstTenPosts = await response.json();

        // Loop through the first 10 posts obtained from the API with their title
        firstTenPosts.forEach(post => {

            // Create a list element to display the first 10 posts with their title
            const postElement = document.createElement("li");

            // Add the post with their title to the list element
            postElement.textContent = `${post.title}`;
            
            // Add the list element with the post and their title to the empty list
            emptyList.appendChild(postElement);
        });
    }

    // Call the asynchronous function to display the first 10 posts in the empty list
    getFirstTenPosts();
}