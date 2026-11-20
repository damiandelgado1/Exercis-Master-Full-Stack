// Query the joke button and the empty paragraph
let jokeButton = document.querySelector(".botonChiste");
let emptyParagraph = document.querySelector(".parrafoVacio");

// Listen for the click event on the joke button
jokeButton.addEventListener("click", (event) => {
    
    // Create a asynchronous function to get a joke
    async function getJoke() {
        
        // Wait the data request at the public API to get a joke
        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        console.log(response.status);

        // Convert the joke response in a JavaScript object
        const joke = await response.json();

        // Add the joke to the paragraph
        emptyParagraph.textContent = joke.message;
    }
        
    // Call the asynchronous function to displaying the joke
    getJoke();
});