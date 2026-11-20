// Query the obtain data button and the empty paragraph
let obtainData = document.querySelector(".botonObtenerDato");
let emptyParagraph = document.querySelector(".parrafoVacio");

// Listen for the click event to click the obtain data button
obtainData.addEventListener("click", (event) => {

    // Create a asynchronous function to obtain a data
    async function getData() {

        // Wait the request to obtain data to the API is execute
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        
        // Create a variable to storage the data of the API in a JavaScript object
        const data = await response.json();
        
        // Add the data received from the API to the paragraph
        emptyParagraph.textContent = `${data.name}`;
    }
    
    // Call the asynchronous function to display the received data in the paragraph
    getData();
});