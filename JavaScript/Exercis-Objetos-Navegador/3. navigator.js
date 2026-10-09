// Query Button element
let button = document.getElementsByTagName("button");

// Listen the Clic event in Navegator
document.addEventListener('click', (event) => {
    
    // Obtain Navegator Name, Language Name and Verify if Navegator has Internet Connection
    const button = window.navigator;

    // Display the result in Navegator
    console.log(`Nombre del Navegador: ${navigator.userAgent}`);
    console.log(`Idioma: ${navigator.language}`);
    console.log(`Conexion a Internet: ${navigator.onLine}`);
});