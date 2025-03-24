const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: 'make dinner',
    dueDate: '2025-03-05'
}, {   
    name: 'wash dishes',
    dueDate: '2025-03-05'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach(function(todoObject, index) {
        const {name} = todoObject;
        const {dueDate} = todoObject;

        const html = `
            <div>${name}</div> 
            <div>${dueDate}</div> 
            <button class="delete-todo-button" onclick="
                todoList.splice(${index}, 1);
                renderTodoList();
            ">Delete</button>
            `;

        todoListHTML += html;

    })

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
    }

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value

    todoList.push({
        // name: name,
        // dueDate: dueDate
        name, 
        dueDate
    });


    inputElement.value = ''; //when we add it 
                            //resets the input

    renderTodoList();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
