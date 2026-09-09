const URL_TODOS = 'https://jsonplaceholder.typicode.com/todos';

let form = document.getElementById("createTodo");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let todoName = document.getElementById('todoName').value;
    let todoCompleted = document.getElementById('todoCompleted').checked;
    let saveTodo = document.getElementById('saveTodo');

    saveTodo.disabled = true;
    saveTodo.textContent = "Enviando";

    fetch(URL_TODOS, {
        method: "POST",
        headers: {
            "Content Type": "application/json",
        },
        body: JSON.stringify({
            userId: 1,
            title: todoName,
            completed: todoCompleted
        }),
    })
    .then((response) => response.json())
    .then((json) => {
        fetch(`${URL_POSTS}/201`)
            console.log(todo);

            todoName.value = "";
            todoCompleted.checked = false;
            saveTodo.disabled = false;
            saveTodo.textContent = "Enviando";
    })
    .catch((error) => console.log(error));
});

const getUsers = async() => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => console.log(users));
    
    let userTodo = document.getElementById('userTodo');
    
    users.map(user => {
        let newOption = document.createElement('option');
        newOption.value = user.id;
        newOption.textContent = user.name;
        userTodo.appendChild(newOption);
    });
};