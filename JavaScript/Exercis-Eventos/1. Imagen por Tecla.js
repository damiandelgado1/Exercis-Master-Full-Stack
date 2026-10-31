let imgUrls = [
    "https://picsum.photos/200/300?r=1",
    "https://picsum.photos/200/300?r=2",
    "https://picsum.photos/200/300?r=3",
    "https://picsum.photos/200/300?r=4",
    "https://picsum.photos/200/300?r=5",
    "https://picsum.photos/200/300?r=6",
    "https://picsum.photos/200/300?r=7",
    "https://picsum.photos/200/300?r=8",
    "https://picsum.photos/200/300?r=9",
    "https://picsum.photos/200/300?r=10"
];

// Query the "img" elements
let imgContainer = document.querySelector(".img");

// Listen the key event
document.addEventListener("keydown", (event) => {

    const indice = Number(event.key) - 1;
    
    // Depending on the key pressed, the image assigned to that key is displayed
    if (imgUrls[indice]) {

        // The image assigned to that key is loaded
        imgContainer.src = imgUrls[indice];
    }
});