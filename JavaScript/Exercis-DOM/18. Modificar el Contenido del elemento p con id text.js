// Query the "p" element with id "text"
let paragraphWithId = document.querySelector("p#text");

// Update the content to include a link to Google
paragraphWithId.innerHTML = `<a href="https://www.google.com> Google </a>"`

console.log(paragraphWithId);