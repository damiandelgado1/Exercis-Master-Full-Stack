// Query the empty box element
let emptyBox = document.querySelector(".cajaVacia");

// Get the browser language, the user's operating system, and whether the browser has cookies are enabled
let browserLanguage = navigator.language;
let userOperatingSystem = navigator.platform;
let browserCookies = navigator.cookieEnabled;

// Display the information in the empty box
let data = [
    `Idioma del Navegador: ${browserLanguage}`,
    `Sistema Operativo del Usuario: ${userOperatingSystem}`,
    `Cookies Habilitadas: ${browserCookies}`
];

emptyBox.textContent = `${data}`;