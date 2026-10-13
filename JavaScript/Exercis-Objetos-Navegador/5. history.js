// Query Button
let button = document.getElementsByTagName("button");

// Listen the "click" event
document.addEventListener('click', (event) => {

    // Obtain enter amount history availability by the properly corresponding
    const enterAmount = history.length;

    // Display the results in navegator
    console.log(`La cantidad de Entradas es: ${enterAmount}`);
});