// Query the title
let title = document.querySelector("h1");

// Define the message what does it say "Seras redirigido en 5 segundos"
let msg = "Seras redirigido en 5 segundos";
title.textContent = msg;

// Define the counter
let counter = 5;

// Initialize the interval time
let intervalAccountBack = window.setInterval(() => {
    // Decrease the counter of the countdown every second
    counter--;

    // Display the remaining time on the countdown timer, decreasing every second
    title.textContent = `Segundos restantes ${counter}`;

    // When the countdown reaches zero, the browser takes the user to another page
    if (counter === 0) {
        clearInterval(intervalAccountBack);
        window.location.href = "https://www.google.com";
    }
}, 1000);