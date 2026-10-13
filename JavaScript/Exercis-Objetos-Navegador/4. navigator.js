// Query Button HTML
let button = document.getElementsByTagName("button");

// Listen the Click Event
document.addEventListener('click', (event) => {

    // Obtain language of navegator, information platform of navegator and verify if has internet connection
    const button = window.navigator;

    // Display information in navegator
    console.log(`Idioma del Navegador: ${navigator.language}`);
    console.log(`Informacion de la Plataforma del Navegador: ${navigator.platform}`);
    console.log(`Tiene conexion a Internet: ${navigator.onLine}`);
});