// Query the "article" tags with class "oferta" childs of the "section" with class "products"
let articles = document.querySelectorAll("section.products > article.oferta");

// Set value of the data-iva attribute to "cero"
articles.setAttribute("data-iva", "cero");

console.log(articles);