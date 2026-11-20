// Query the new image button and the empty image
let newImage = document.querySelector(".botonNuevaImagen");
let emptyImage = document.querySelector(".imagenVacia");

// Listen for the click event to click the new image button
newImage.addEventListener("click", (event) => {
    
    // Create a asynchronous function to obtain a random image
    async function getRandomImage() {
        
        // Wait the request to obtain a random image to the API is execute
        const randomImage = await fetch("https://picsum.photos/300");

        // Add the random image to the url empty image
        emptyImage.src = randomImage.url;
    }
    
    // Call the asynchronous function to display the random image in the empty image
    getRandomImage();
});