// Create a array with images
let arrayImage = [
    "https://picsum.photos/300/300?r=0",
    "https://picsum.photos/300/300?r=1",
    "https://picsum.photos/300/300?r=2",
    "https://picsum.photos/300/300?r=3",
    "https://picsum.photos/300/300?r=4",
    "https://picsum.photos/300/300?r=5",
    "https://picsum.photos/300/300?r=6",
    "https://picsum.photos/300/300?r=7",
    "https://picsum.photos/300/300?r=8",
    "https://picsum.photos/300/300?r=9"
];

// Query the container element with images
let imageContainer = document.querySelector(".imageContainer");
let image = document.querySelector(".image");

// Listen for the key event
document.addEventListener("keydown", (event) => {

    // Get the numeric key presses by user
    const key = event.key;

    // According to the number key presses by user
    if (key >= 0 && key <= 9 && Number.isInteger(Number(key))) {

        // Display the image associated with the pressed numeric key
        image.src = arrayImage[Number(key)];
    }
});