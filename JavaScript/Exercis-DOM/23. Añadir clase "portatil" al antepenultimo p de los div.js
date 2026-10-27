// Query the antepenultimate "p" of the "div"
let penultimateParagraph = document.querySelectorAll("div > p:nth-last-of-type(3)");

// Verify if has the class "portatil"
if (penultimateParagraph.classList.contains("portatil")) {
    
    // If has the class, delete
    penultimateParagraph.classList.remove("portatil");
    console.log(penultimateParagraph);
} else {

    // If not has the class, add
    penultimateParagraph.classList.add("portatil");
    console.log(penultimateParagraph);
}