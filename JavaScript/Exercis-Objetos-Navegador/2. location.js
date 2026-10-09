// Query Button element
let button = document.getElementsByTagName("button");

// Listen the Clic event in Navegator
document.addEventListener('click', (event) => {

    // Obtain URL completed, Protocol use, Domain / Host and Page Route
    const button = window.location;

    // Display information in a List
    console.log(`URL Completa: ${location.href}`);
    console.log(`Protocolo utilizado: ${location.protocol}`);
    console.log(`Dominio / Host: ${location.host}`);
    console.log(`Ruta de la Pagina: ${location.pathname}`);
});