// Query the "p" element
let paragraph = document.querySelector("p");

// Loop through the attributes of the "p" element
for (let attr of paragraph.attributes) {

    // Display the values of the attributes of the "p" element
    console.log(attr.name, "=", attr.value);
}