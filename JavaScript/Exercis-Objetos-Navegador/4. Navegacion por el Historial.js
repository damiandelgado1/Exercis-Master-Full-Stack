// Query the "button" element for browsing back and the "button" element for browsing forward
let backButton = document.querySelector(".avanzarAtras");
let forwardButton = document.querySelector(".avanzarAdelante");

// Listen for the click event on the button for browsing back
backButton.addEventListener("click", (event) => {

    // The browser browses to the previous page visited by the user
    history.back();
});

// Listen for the click event on the button for browsing forward
forwardButton.addEventListener("click", (event) => {

    // The browser browses to the next page visited by the user
    history.forward();
});