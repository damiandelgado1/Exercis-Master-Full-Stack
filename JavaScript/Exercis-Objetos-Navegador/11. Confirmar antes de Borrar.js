// Query the element list, the button to remove list, the button to confirm if the user want remove list and the button to cancel if the user not want remove list
let body = document.querySelector("body");
let list = document.querySelector(".lista");
let removeList = document.querySelector(".eliminarLista");
let confirmRemove = document.querySelector(".siEliminar");
let cancelRemove = document.querySelector(".noEliminar");

// Listen for the clic event to query the remove list
removeList.addEventListener("click", (event) => {

    // Create a paragraph
    const answerRemove = document.createElement("p");

    // Add a text in the paragraph to answer if the user want remove list
    answerRemove.textContent = "¿Quieres eliminar los elementos de la lista?";

    // Add the paragraph to the page before the button to query remove list
    body.insertBefore(answerRemove, removeList);

    // Change the visibility style of the button to remove list from visible to hidden
    removeList.style.visibility = "hidden";

    // Change the visibility style of the button to confirm remove the list from hidden to visible
    confirmRemove.style.visibility = "visible";

    // Change the visibility style of the button to cancel remove the list from hidden to visible
    cancelRemove.style.visibility = "visible";
});

// Listen for the clic event to confirm the remove list
confirmRemove.addEventListener("click", (event) => {

    // The list remove
    const removeList = list.remove("ul");

    // Save the list remove locally
    localStorage.setItem("list", removeList);

    // Create a paragraph
    const listRemove = document.createElement("p");

    // Add a text in the paragraph indicates that the list remove
    listRemove.textContent = "La lista se elimino";

    // Add the paragraph to the page before the button to query remove list
    body.insertBefore(listRemove, removeList);

    // Change the visibility style of the button to confirm remove the list from visible to hidden
    confirmRemove.style.visibility = "hidden";

    // Change the visibility style of the button to cancel remove the list from visible to hidden
    cancelRemove.style.visibility = "hidden";
});

// Listen for the clic event to cancel the remove list
cancelRemove.addEventListener("click", (event) => {

    // Create a paragraph
    const listNotRemove = document.createElement("p");

    // Add a text in the paragraph indicates that the remove list to cancel
    listNotRemove.textContent = "La eliminacion de la lista fue cancelada";

    // Add the paragraph to the page before the button to query remove list
    body.insertBefore(listNotRemove, removeList);

    // Change the visibility style of the button to confirm remove the list from visible to hidden
    confirmRemove.style.visibility = "hidden";

    // Change the visibility style of the button to cancel remove the list from visible to hidden
    cancelRemove.style.visibility = "hidden";
});