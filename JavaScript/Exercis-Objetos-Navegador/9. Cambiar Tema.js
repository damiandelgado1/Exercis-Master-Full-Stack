// Query the page element of the page and the theme toggle button
let body = document.querySelector("body");
let changeTheme = document.querySelector(".cambiarTema");

// Define the default theme variable
let theme = localStorage.getItem("tema") || "claro";

// Apply the class at the body element of the page
body.className = theme;

// Listen for the clic event
changeTheme.addEventListener("click", (event) => {

    // If the selected theme the is light
    if (theme === "claro") {

        // Change the class value of the theme from light to dark
        theme = "oscuro";

        // Save the selected theme locally
        localStorage.setItem("tema", theme);

        // Apply the saved theme to the page background
        body.className = theme;
    
    // If the selected theme is dark
    } else {

        // Change the class value of the theme from dark to light
        theme = "claro";

        // Save the selected theme locally
        localStorage.setItem("tema", theme);

        // Apply the saved theme to the page background
        body.className = theme;
    }
});