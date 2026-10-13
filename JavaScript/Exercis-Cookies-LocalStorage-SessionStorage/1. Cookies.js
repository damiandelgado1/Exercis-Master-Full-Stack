// Query the HTML Element: Text Input, Button to Save and Button to Request
let textInput = document.getElementsByTagName("input");
let saveButton = document.getElementsByClassName("save");
let requestButton = document.getElementsByClassName("request");

// Listen the "click" event
document.addEventListener('click', (event) => {

    // To the save, obtain the name enter by the user and save name in a Cookie
    if (event.target == saveButton) {
        
        const obtainName = textInput.value.trim();

        if (obtainName !== "") {
            document.cookie = `nombre=${encodeURIComponent(obtainName)}; path=/`;

            console.log(`El nombre ingresado es ${obtainName}`);
        }
    
    } else {

        // To the request, read the cookie storage
        const requestName = document.cookie.split("; ").find(cookie => cookie.startsWith("nombre="));

        // Display the name if exist, if not exist, display the message say not find none name
        if (requestName) {
            const name = decodeURIComponent(requestName.substring("nombre=".length));

            console.log(`El usuario ${name} si existe en la Cookie`);
        } else {
            console.log(`El usuario no existe en la Cookie`);
        }
    }
});