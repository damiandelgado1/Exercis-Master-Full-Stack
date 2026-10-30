// Query the "div" elements
let divs = document.querySelectorAll("div");

// Loop through the divs
for (let div of divs) {
    
    // Verify that it has the class attribute
    if (div.classList.contains("container")) {
        
        // If it has the class attribute, add the value "container"
        div.classList.add("container");

        console.log(div);
    } else {

        // If it does not has class attribute, do nothing
        console.log(div);
    }
}