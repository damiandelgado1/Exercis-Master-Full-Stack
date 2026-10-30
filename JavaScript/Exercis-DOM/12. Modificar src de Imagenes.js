// Query the "img" element
let images = document.getElementsByTagName("img");

// Check if the attribute "src" has the courage "cambiame"
for (let i of images) {

    // If the "src" attribute is set to "cambiame", update its value to "cambiado"
    if (i.getAttribute("src") === "cambiame") {
        i.setAttribute("src", "cambiado");

        console.log(i);
    }
}