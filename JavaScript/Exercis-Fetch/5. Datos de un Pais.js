// Query the display country button and the empty box
let displayCountry = document.querySelector(".botonMostrarPais");
let emptyBox = document.querySelector(".cajaVacia");

// Listen for the click event to click the display country button
displayCountry.addEventListener("click", (event) => {
    
    // Create a asynchronous function to obtain the the country name, capital, population and flag
    async function getCountry() {
        
        // Wait the request to obtain the country name, capital, population and flag to the API execute
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,flags");

        // Create a variable to storage country information of the API in a JavaScript object
        const country = await response.json();
        
        // Add the the country name, capital, population and flag in the empty box
        emptyBox.textContent = `${country[0].name}`;
    }
    
    // Call the asynchronous function to display the country name, capital, population and flag
    getCountry();
});