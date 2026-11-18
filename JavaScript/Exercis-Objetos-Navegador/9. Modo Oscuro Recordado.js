// Query the body element page and the button to change theme of the page
let body = document.querySelector("body");
let changeTheme = document.querySelector(".cambiarTema");

// Define the default theme of the page
let defaultTheme = localStorage.getItem("theme") || "claro";

// Assign the class to body element
body.className = defaultTheme;

// Listen for the clic event
changeTheme.addEventListener("click", (event) => {
    
    // If the selected theme is light
    if (defaultTheme === "claro") {
        
        // Change the class of the body element to dark
        defaultTheme = "oscuro";

        // Save the selected theme locally
        localStorage.setItem("theme", defaultTheme);
        
        // Apply the selected theme in the background page
        body.className = defaultTheme;

    // If the selected theme is dark
    } else {

        // Change the class of the body element to light
        defaultTheme = "claro";

        // Save the selected theme locally
        localStorage.setItem("theme", defaultTheme);
        
        // Apply the selected theme in the background page
        body.className = defaultTheme;
    }
});