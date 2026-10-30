// Query the "article" tags with class "oferta" childs of the "section" with class "products"
let articles = document.querySelectorAll("section.products > article.oferta");

for (let article of articles) {
    
    // Set value of the data-iva attribute to "cero"
    article.setAttribute("data-iva", "cero");
    
    console.log(article);
}