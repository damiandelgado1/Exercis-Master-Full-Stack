// Query the empty paragraph
let emptyParagraph = document.querySelector(".parrafoVacio");

// Get the user's screen resolution, the color depth and the size browse window
let userScreenWidth = screen.width;
let userScreenHeight = screen.height;
let colorDepth = screen.colorDepth;
let widthBrowseWindow = window.innerWidth;
let heightBrowseWindow = window.innerHeight;

// If the size browse window is lower than the resolution of the user's screen
if (widthBrowseWindow < userScreenWidth && heightBrowseWindow < userScreenHeight) {

    // Display the browse window is lower than the resolution of the user's screen
    const browseWindowIsMinor = "La ventana del navegador es menor a la pantalla del usuario";

    // Display the information in the empty paragraph
    let data = [
        `Resolucion de la Pantalla del Usuario: ${userScreenWidth}x${userScreenHeight}`,
        `Profundidad de Color: ${colorDepth}`,
        `Tamaño de la Ventana del Navegador: ${widthBrowseWindow}x${heightBrowseWindow}`,
        `¿La Ventana del Navegador es menor a la Pantalla del Usuario?: ${browseWindowIsMinor}`
    ];
    
    emptyParagraph.textContent = `${data}`;
    
// If the size browse window not is lower than the resolution of the user's screen
} else {

    // Display the browse window not is lower than the resolution of the user's screen
    const browseWindowIsMinor = "La ventana del navegador no es menor a la pantalla del usuario";

    // Display the information in the empty paragraph
    let data = [
        `Resolucion de la Pantalla del Usuario: ${userScreenWidth}x${userScreenHeight}`,
        `Profundidad de Color: ${colorDepth}`,
        `Tamaño de la Ventana del Navegador: ${widthBrowseWindow}x${heightBrowseWindow}`,
        `¿La Ventana del Navegador es menor a la Pantalla del Usuario?: ${browseWindowIsMinor}`
    ];

    emptyParagraph.textContent = `${data}`;
}