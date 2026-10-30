// Query all "p" element inside a div
let paragraphs = document.querySelectorAll("div p");

// Check if the "p" has class "hero"
paragraphs.forEach(paragraph => {
    if (paragraph.classList.contains('hero')) {

        // If they have it, it gets removed
        paragraph.classList.remove('hero');

        console.log(paragraph);
    }
});